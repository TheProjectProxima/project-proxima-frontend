import { User } from "./model";

export type LoginUser = {
    userName: string;
    password: string;
  };
  
  export type SignUpUser = {
    userName: string,
    firstName: string,
    lastName: string, 
    email: string,
    password: string,
    phoneNumber: string, 
  };
  
  export type ResponseUser = {
    user: User;
  };