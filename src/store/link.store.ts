import {action, computed, makeAutoObservable, observable} from 'mobx';
import { GroupLink, Image } from '../types/types';


class Store {
  groupLinksMap: Map<string, GroupLink> = new Map()

  constructor() {
    makeAutoObservable(this);
  }

  @computed get getAllLinks() {
    return [...this.groupLinksMap.values()];
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

  createLink(link: GroupLink) {
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