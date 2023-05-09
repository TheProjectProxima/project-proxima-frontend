import {Cache} from 'react-native-cache';
import {action, makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthService, UserService} from '../services/index.service';
import {ResponseUser} from '../lib/types/request';

import {Friend} from '../types/types';
import { RootStore } from './index.store';

export class FriendStore {
  rootStore: RootStore
  isLoading = true;
  isUpdating = false;
  error?: string = undefined;
  friendsMap: Map<string, Friend> = new Map();

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
  
}

