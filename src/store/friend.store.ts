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

  loadUser() {
    this.isLoading = true;
    this.error = undefined;

    if (this.user) {
        UserService.getUser(this.user.userId)
        .then(
            action(() => {
                this.setUser(this.user);
            })
        )
        // might have to safe guard against errors here 
        .finally(
          action(() => {
            this.isLoading = false;
          })
        );
    }

    
  }

  updateUser(userUuid: string, newUser: User) {
    this.isUpdating = true;
    this.error = undefined;

    return UserService.updateUser(userUuid, newUser)
      .then(
        action(({user}) => {
          this.user = user;
        })
      )
      .catch(
        action((err) => {
          console.error(err);

          if (err?.response?.body) {
            this.error = err?.response?.body;
          }

          throw err;
        })
      )
      .finally(
        action(() => {
          this.isUpdating = false;
        })
      );
  }

  
  forgetUser() {
    this.setUser(undefined);
  }
}

