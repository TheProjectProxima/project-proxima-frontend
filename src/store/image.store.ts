import {action, makeAutoObservable, observable} from 'mobx';

import { UserService} from '../services/index.service';
import {User} from '../lib/types/model';
import { Image } from '../types/types';
import { RootStore } from './index.store';

export class ImageStore {
  rootStore: RootStore

  error?: string = undefined;
  imageMap: Map<string, Image> = observable.map();

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

}

