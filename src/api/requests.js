import axios from 'axios';

import Constants from "expo-constants";

const { manifest } = Constants;

export const API_URI = `http://${manifest.debuggerHost.split(':').shift()}:3002`;

// need to add an env config for local and prod later 
// export const API_URI = 'https://56d1-2601-197-a7f-cb30-e4-743e-367e-f4cd.ngrok-free.app'


// this is for when we add  JWT to it for authentication for every request 
// const tokenConfig = () => {
//   const token = UserStore.user?.token;

//   if (token) {
//     return {
//       headers: {
//         authorization: `Token \${token}`,
//       },
//     };
//   }

//   return {};
// };

const handleErrors = (error ) => {
  if (error.response && error.response.status === 401) {
    // AuthStore.logout();
  }

  throw error;
};


const api = axios.create({
  baseURL: 'https://your-api-base-url.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// add token to the backend as well???????
// call token config once JWT and hashinga are added 
const requests = {
  delete: (url) =>
    api
      .delete(`${API_URI}${url}`)
      .then((response) => response.data)
      .catch(handleErrors),
  get: (url ) =>
    api
      .get(`${API_URI}${url}`)
      .then((response) => response.data)
      .catch(handleErrors),
  put: (url , body) =>
    api
      .put(`${API_URI}${url}`, body)
      .then((response) => response.data)
      .catch(handleErrors),
  post: (url , body) =>
    api
      .post(`${API_URI}${url}`, body)
      .then((response) => response.data)
      .catch(handleErrors),
};

export default requests;
