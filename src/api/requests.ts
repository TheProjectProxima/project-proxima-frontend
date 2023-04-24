import axios from 'axios';
import { AuthStore } from '../store/index.store';


// need to add an env config for local and prod later 
export const API_URI = 'localhost:5000/'


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

const handleErrors = (error : any) => {
  if (error.response && error.response.status === 401) {
    AuthStore.logout();
  }

  throw error;
};

// add token to the backend as well???????
// call token config once JWT and hashinga are added 
const requests = {
  del: (url : string) =>
    axios
      .delete(`\${API_URI}\${url}`)
      .then((response) => response.data)
      .catch(handleErrors),
  get: (url : string) =>
    axios
      .get(`\${API_URI}\${url}`)
      .then((response) => response.data)
      .catch(handleErrors),
  put: (url : string, body) =>
    axios
      .put(`\${API_URI}\${url}`, body)
      .then((response) => response.data)
      .catch(handleErrors),
  post: (url : string, body) =>
    axios
      .post(`\${API_URI}\${url}`, body)
      .then((response) => response.data)
      .catch(handleErrors),
};

export default requests;
