import {action, computed, makeAutoObservable, observable} from 'mobx';
import { GroupLink } from '../types/types';


class Store {
  isLoading = true;
  groupLinksMap: Map<string, GroupLink> = observable.map();
  slug?: string = undefined;
  error?: string = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  @computed get comments() {
    return [...this.commentsMap.values()];
  }

  $clear(slug: string) {
    if (slug === this.slug) return;
    this.slug = slug;

    this.groupLinksMap.clear();
    this.isLoading = true;
    this.error = undefined;
  }

  $updateGroupLinksMap(groupLinks: GroupLink[]) {
    groupLinks.forEach((groupLink) =>
      this.groupLinksMap.set(groupLink.groupId, groupLink)
    );
  }

  loadComments(slug: string) {
    this.$clear(slug);

    CommentsService.get(slug)
      .then(
        action(({comments}: CommentGetResponse) => {
          this.$updateCommentsMap(comments);
        })
      )
      .catch(
        action((err) => {
          console.error(err);
          this.error = ErrorMessages.default;
        })
      )
      .finally(
        action(() => {
          this.isLoading = false;
        })
      );
  }

  createComment(comment: string) {
    if (!this.slug) return;

    return CommentsService.create(this.slug, {body: comment})
      .then(
        action(({comment}) => {
          this.commentsMap.set(comment.id.toString(), comment);
        })
      )
      .catch(
        action((err) => {
          console.error(err);
          throw err;
        })
      );
  }

  deleteComment(id: number) {
    if (!this.slug) return;

    const idString = id.toString();
    const comment = this.commentsMap.get(idString);
    this.commentsMap.delete(idString);

    if (!comment) return;

    return CommentsService.delete(this.slug, id).catch(
      action((err) => {
        this.commentsMap.set(id.toString(), comment);
        console.error(err);
        throw err;
      })
    );
  }
}

export default new Store();