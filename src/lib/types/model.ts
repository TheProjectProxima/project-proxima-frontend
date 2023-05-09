export type User = {
    // add token later for JWT 
    userId: string,
    email?: string,
    userName?: string,
    profileImage?: string,
    friendsWith?: User[],
    groups?: GroupLink[],
}

export type GroupLink = {
    groupId: string, 
    name?: string, 
    saved?: boolean,
    participantsNum?: bigint,
    active?: boolean,
    groupImages?: Image[],
    groupUsers?: User[],
}

export type Image = {
    imageId: string, 
    groupLink?: GroupLink,
    uploadedBy?: User, 
    assignedUsers?: User[]
}

export type ProfileImage = {
    profileImageId: string, 
    user? : User
}

export type Friend = {
    user: User,
    userId: string,
    friend: User,
    friendId: string,
    uniqueId: string,
    requested: Boolean,
    accepted: Boolean,
    requested_at?: Date,
    last_linked: Date,
    deleted_at: Date
  }
