import {Cache} from 'react-native-cache';
import {action, makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthService} from '../services/index.service';
import {ResponseUser} from '../lib/types/request';

import {User} from '../lib/types/model';

const cache = new Cache({
  namespace: 'proximaApp',
  policy: {
    maxEntries: 50000, // if unspecified, it can have unlimited entries
    stdTTL: 0, // the standard ttl as number in seconds, default: 0 (unlimited)
  },
  backend: AsyncStorage,
});

class Store {
  isLoading = true;
  isUpdating = false;
  error?: string = undefined;
  user?: User = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  async loadFromStorage() {
    const value = await cache.get('USER');

    if (value) {
      this.user = JSON.parse(value);
    }

    this.isLoading = false;
  }

  async $updateStorage(user?: User) {
    if (user) {
      await cache.set('USER', JSON.stringify(user));
    } else {
      await cache.clearAll();
    }
  }

  setUser(user?: User) {
    this.user = user;
    this.error = undefined;
    this.$updateStorage(user);
  }

  loadUser() {
    this.isLoading = true;
    this.error = undefined;

    UserService.get()
      .then(
        action(({user}: ResponseUser) => {
          this.setUser(user);
        })
      )
      .finally(
        action(() => {
          this.isLoading = false;
        })
      );
  }

  updateUser(newUser: User) {
    this.isUpdating = true;
    this.error = undefined;

    return UserService.put(newUser)
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

export default new Store();