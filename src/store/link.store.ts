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

  


}

export default new Store();