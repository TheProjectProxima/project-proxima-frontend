import {action, computed, makeAutoObservable, observable} from 'mobx';
import { GroupLink, Image } from '../types/types';
import { RootStore } from './index.store';


export class LinkStore {
  rootStore: RootStore
  groupLinksMap: Map<string, GroupLink> = new Map()

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  @computed get getAllLinks() {
    return [...this.groupLinksMap.values()];
  }

  


}

