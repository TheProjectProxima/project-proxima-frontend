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

// add token to the backend as well???????
// call token config once JWT and hashinga are added 
const requests = {
  delete: (url) =>
    axios
      .delete(`${API_URI}${url}`)
      .then((response) => response.data)
      .catch(handleErrors),
  get: (url ) =>
    axios
      .get(`${API_URI}${url}`)
      .then((response) => response.data)
      .catch(handleErrors),
  put: (url , body) =>
    axios
      .put(`${API_URI}${url}`, body)
      .then((response) => response.data)
      .catch(handleErrors),
  post: (url , body) =>
    axios
      .post(`${API_URI}${url}`, body)
      .then((response) => response.data)
      .catch(handleErrors),
};

export default requests;
