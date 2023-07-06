import { makeAutoObservable} from 'mobx';

import { RootStore} from './index.store';
import {AuthService} from '../services/index.service';
import { LoginUser, SignUpUser } from '../lib/types/request';

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

  login() {
    const data : LoginUser = {
      userName: this.userName,
      password: this.password,
    }

    AuthService.login(data).then(
      (res) => {
        const {user} = res
        this.rootStore.userStore.setUser(user)
        this.setIsAuthenticated(true)
        this.clear()
      }
    )
    .catch((error) => {
      console.log(error)
      this.errors = error
    })
    .finally(() => {
      this.isLoading = false
    })
  }

  register() {
    const data : SignUpUser = {
      userName: this.userName,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber
    }

    AuthService.signup(data).then(
      (res) => {
        const {user} = res
        this.rootStore.userStore.setUser(user)
        this.setIsAuthenticated(true)
        this.clear()
      }
    )
    .catch((error) => {
      console.log(error)
      this.errors = error
    })
    .finally(() => {
      this.isLoading = false
    })
  }

  logout() {
    this.rootStore.userStore.forgetUser()
    this.clear()
    this.isAuthenticated = false
  }
}
