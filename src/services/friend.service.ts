import requests from '../api/requests';
import { Friend } from '../lib/types/model';
import { ResponseFriend } from '../lib/types/request';

export default {
    getFriendByUniqueId: (uuid: string): Promise<Friend> =>
    requests.get(`/friend/${uuid}`),
  updateFriend: (uuid: string, updatedFriend: Friend): Promise<ResponseFriend> =>
    requests.put(`/friend/${uuid}`, { updatedFriend: updatedFriend }),
  deleteFriend: (uuid: string): Promise<void> =>
    requests.delete(`/friend/${uuid}`),
  createFriend: (friend: Friend) : Promise<Friend[]> => 
  requests.post('/friend/', {friend})  ,
  getUserFriends: (uuid: string): Promise<Friend[]> =>
  requests.get(`/friend/user/${uuid}`),
};