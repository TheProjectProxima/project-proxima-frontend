import requests from '../api/requests';
import { GroupLink, User } from '../lib/types/model';
import { LoginUser, ResponseUser, SignUpUser } from '../lib/types/request';
import { Image } from '../types/types';

export default {
    getUser: (uuid: string): Promise<User> =>
    requests.get(`/users/${uuid}`),
  getAllUsers: (): Promise<User[]> =>
    requests.get('/users'),
  updateUser: (uuid: string, updatedUser: User): Promise<ResponseUser> =>
    requests.put(`/users/${uuid}`, updatedUser),
  deleteUser: (uuid: string): Promise<void> =>
    requests.delete(`/users/${uuid}`),
  getUserProfileImages: (uuid: string) : Promise<Image[]> => 
  requests.get(`/users/${uuid}/profile-images`)  
};