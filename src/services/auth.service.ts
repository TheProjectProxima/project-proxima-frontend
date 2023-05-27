import axios from 'axios';
import requests from '../api/requests';
import { LoginUser, ResponseUser, SignUpUser } from '../lib/types/request';


// const api = axios.create({
//   baseURL: 'http://127.0.0.1:3002',
// });

export default {
  login: (user: LoginUser): Promise<ResponseUser> =>
    requests.post('/auth/login', user),
  signup: (user: SignUpUser): Promise<ResponseUser> =>
    requests.post('/auth/signup', user),
};