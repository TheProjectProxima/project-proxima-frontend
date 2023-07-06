// User tpe needs to match the backedn return response
// WOrk on this 
export type User = {
    // add token later for JWT 
    userId: string,
    email: string,
    userName: string,
    firstName: string, 
    lastName: string,
    password: string,
    phoneNumber: string, 
    is_active: boolean,
    userFriendsIds: User[],
    updatedAt?: Date, 
    createdAt?: Date,
    deletedAt?: Date,
    profileImage?: string,
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

export type UserRedacted = {
    userId: string, 
    userName: string, 
    firstName: string, 
    lastName: string, 
    createdAt: Date,
    updatedAt: Date, 
    isActive: boolean,
}

export type Friend = {
    userId: string,
    friend: UserRedacted,
    friendId: string,
    uniqueId: string,
    requested: Boolean,
    accepted: Boolean,
    requestedAt?: Date,
    lastLinked: Date,
    deletedAt: Date
  }
