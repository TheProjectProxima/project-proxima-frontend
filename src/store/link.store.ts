import {action, computed, makeAutoObservable, observable} from 'mobx';
import { RootStore } from './index.store';
import linkService from '../services/link.service';
import { GroupLink } from '../lib/types/model';


export class LinkStore {
  rootStore: RootStore
  groupLinksMap: Map<string, GroupLink> = new Map()
  isLoadingLink: boolean
  linkError : string | undefined

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.isLoadingLink = false
    this.linkError = undefined
    makeAutoObservable(this)
  }

  @computed get allLinksInMap() {
    return [...this.groupLinksMap.values()];
  }

  fetchUserLinks() {
    this.isLoadingLink = true;
    this.linkError = undefined;
    return linkService.getUserLinks(this.rootStore.userStore.user.userId)
      .then(action(
        (links: GroupLink[]) => {
          links.forEach((link: GroupLink) => {
            this.groupLinksMap.set(link.groupId, link)
          })
        }
      ))
      .catch(action((err: any) => {
        this.linkError = err.response && err.response.body && err.response.body.errors;
        throw err;
      }))
      .finally(action(() => { this.isLoadingLink = false; }));
  }

  loadLink(linkId: string) {
    return this.groupLinksMap.get(linkId)
  }

  updateLink(linkId: string, newLink : GroupLink) {
    this.isLoadingLink = true
    this.linkError = undefined
    return linkService.updateGroupLink(linkId, newLink).then (
      action( () => {
        this.groupLinksMap.set(linkId, newLink)
      }
      )
    )
    .catch(action((err: any) => {
      this.linkError = err.response && err.response.body && err.response.body.errors;
      throw err;
    }))
    .finally(action(() => { this.isLoadingLink = false; }));
  }


  deleteLink(linkId: string) {
    this.isLoadingLink = true
    this.linkError = undefined
    return linkService.deleteGroupLink(linkId).then (
      action( () => {
        this.groupLinksMap.delete(linkId)
      }
      )
    )
    .catch(action((err: any) => {
      this.linkError = err.response && err.response.body && err.response.body.errors;
      throw err;
    }))
    .finally(action(() => { this.isLoadingLink = false; }));
  }

  createLink(newLink: GroupLink) {
    this.isLoadingLink = true
    this.linkError = undefined
    return linkService.createGroupLink(newLink).then (
      action( () => {
        this.groupLinksMap.set(newLink.groupId, newLink)
      }
      )
    )
    .catch(action((err: any) => {
      this.linkError = err.response && err.response.body && err.response.body.errors;
      throw err;
    }))
    .finally(action(() => { this.isLoadingLink = false; }));
  }

}

