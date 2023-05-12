import {action, makeAutoObservable} from 'mobx';
import { Friend } from '../lib/types/model';
import { RootStore } from './index.store';
import friendService from '../services/friend.service';

export class FriendStore {
  rootStore: RootStore
  isLoadingFriend: boolean 
  friendError: string | undefined
  friendsMap: Map<string, Friend> = new Map();

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.isLoadingFriend = false
    this.friendError = undefined
    makeAutoObservable(this);
  }

  fetchUserFriends() {
    this.isLoadingFriend = true;
    this.friendError = undefined;
    return friendService.getUserFriends(this.rootStore.userStore.user.userId)
      .then(action(
        (friends: Friend[]) => {
          friends.forEach((friend: Friend) => {
            this.friendsMap.set(friend.uniqueId, friend)
          })
        }
      ))
      .catch(action((err: any) => {
        this.friendError = err.response && err.response.body && err.response.body.errors;
        throw err;
      }))
      .finally(action(() => { this.isLoadingFriend = false; }));
  }

  loadFriend(friendId: string) {
    return this.friendsMap.get(friendId)
  }

  updateFriend(friendId: string, newFriend : Friend) {
    this.isLoadingFriend = true
    this.friendError = undefined
    return friendService.updateFriend(friendId, newFriend).then (
      action( () => {
        this.friendsMap.set(friendId, newFriend)
      }
      )
    )
    .catch(action((err: any) => {
      this.friendError = err.response && err.response.body && err.response.body.errors;
      throw err;
    }))
    .finally(action(() => { this.isLoadingFriend = false; }));
  }


  deleteFriend(friendId: string) {
    this.isLoadingFriend = true
    this.friendError = undefined
    return friendService.deleteFriend(friendId).then (
      action( () => {
        this.friendsMap.delete(friendId)
      }
      )
    )
    .catch(action((err: any) => {
      this.friendError = err.response && err.response.body && err.response.body.errors;
      throw err;
    }))
    .finally(action(() => { this.isLoadingFriend = false; }));
  }

  createFriend(newFriend: Friend) {
    this.isLoadingFriend = true
    this.friendError = undefined
    return friendService.createFriend(newFriend).then (
      action( () => {
        this.friendsMap.set(newFriend.friendId, newFriend)
      }
      )
    )
    .catch(action((err: any) => {
      this.friendError = err.response && err.response.body && err.response.body.errors;
      throw err;
    }))
    .finally(action(() => { this.isLoadingFriend = false; }));
  }

}
