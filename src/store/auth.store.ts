import {action, makeAutoObservable} from 'mobx';

import { RootStore} from './index.store';
import {AuthService} from '../services/index.service';

import { AuthUser } from '../lib/types/service';

enum RequestType {
  login,
  register,
}

export class AuthStore {
  isLoading = false;
  // add type for errors later 
  errors? =  undefined;
  rootStore: RootStore
  isAuthenticated = false;

  userName = "";
  email = "";
  password = "";
  phoneNumber = "";
  firstName = "";
  lastName = "";

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  clear() {
    this.userName = '';
    this.email = '';
    this.password = '';
    this.phoneNumber = ""
    this.firstName = ""
    this.lastName = ""
    this.errors = undefined;
  }

  getAuthValues(type:  RequestType) : AuthUser {
    if (type == RequestType.login) {
      // For login
      return {
        userName: this.userName,
        password: this.password,
      };
    } else {
      // For sign up
      return {
        userName: this.userName,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        firstName: this.firstName,
        lastName: this.lastName,
      };
    }
  }

  setIsAuthenticated(isAuthenticated : boolean) {
    this.isAuthenticated = isAuthenticated
  }

  setUsername(username: string) {
    this.userName = username;
  }

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(password: string) {
    this.password = password;
  }

  setPhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  $request(type: RequestType) {
    this.isLoading = true;
    this.errors = undefined;

    const api =
      type === RequestType.login ? AuthService.login : AuthService.signup;

    api(this.getAuthValues(type))
      .then(
        action(({user}) => {
          this.rootStore.userStore.setUser(user);
          this.clear();
          this.isAuthenticated = true
        })
      )
      .catch(
        action((err) => {
          if (err?.response?.body?.errors) {
            this.errors = err?.response?.body?.errors;
          }
        })
      )
      .finally(
        action(() => {
          this.isLoading = false;
        })
      );
  }

  login() {
    this.$request(RequestType.login);
  }

  register() {
    this.$request(RequestType.register);
  }

  logout() {
    this.rootStore.userStore.forgetUser();
    this.isAuthenticated = false
    // also clear:
    // groups
    // friends 
    // images
    // profile images
  }
}
