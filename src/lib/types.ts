export type User = {
    userId: String,
    email?: string,
    token?: string,
    userName?: string,
    profileImage?: string,
    friendsWith?: Friend[],
    groups?: Group[],

  }