export type User = {
    userId: String,
    email?: string,
    token?: string,
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
