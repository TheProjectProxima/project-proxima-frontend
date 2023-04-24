import requests from '../api/requests';
import { LoginUser, ResponseUser, SignUpUser } from '../lib/types/request';

export default {
  login: (user: LoginUser): Promise<ResponseUser> =>
    requests.post('/auth/login', {user}),
  signup: (user: SignUpUser): Promise<ResponseUser> =>
    requests.post('/auth/signup', {user}),
};