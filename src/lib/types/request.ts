import { Friend, GroupLink } from "../../types/types";
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

  export type UpdateUser = {
    password?: string, 
    email?: string, 
  }

  export type ResponseUser = {
    user: User;
  };

  export type ResponseGroupLink = {
    groupLink: GroupLink;
  };

  export type ResponseFriend = {
    friend: Friend;
  }
  export type ResponseLink = {
    link: GroupLink
  }
