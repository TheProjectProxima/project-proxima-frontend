import requests from '../api/requests';
import { User } from '../lib/types/model';
import { LoginUser, ResponseUser, SignUpUser } from '../lib/types/request';

export default {
    getUser: (uuid: string): Promise<User> =>
    requests.get(`/users/${uuid}`),
  getAllUsers: (): Promise<User[]> =>
    requests.get('/users'),
  updateUser: (uuid: string, updatedUser: User): Promise<ResponseUser> =>
    requests.put(`/users/${uuid}`, { user: updatedUser }),
  deleteUser: (uuid: string): Promise<void> =>
    requests.delete(`/users/${uuid}`)
};