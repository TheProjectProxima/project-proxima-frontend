import requests from '../api/requests';
import { GroupLink, User } from '../lib/types/model';
import { LoginUser, ResponseUser, SignUpUser, UpdateUser } from '../lib/types/request';
import { Image } from '../types/types';

export default {
    getUser: (uuid: string): Promise<User> =>
    requests.get(`/user/${uuid}`),
  getAllUsers: (): Promise<User[]> =>
    requests.get('/user'),
  updateUser: (uuid: string, updatedUser: UpdateUser): Promise<ResponseUser> =>
    requests.patch(`/user/${uuid}`, updatedUser),
  deleteUser: (uuid: string): Promise<void> =>
    requests.delete(`/user/${uuid}`),
  getUserProfileImages: (uuid: string) : Promise<Image[]> => 
  requests.get(`/user/${uuid}/profile-images`)  
};