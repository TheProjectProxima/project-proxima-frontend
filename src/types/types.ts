type GroupLink = {
    groupId: String,
    name: String,
    saved: Boolean
    participants_num: BigInt,
    active: Boolean,
    group_image_ids: String[],
    group_user_ids: String[],
    created_at: Date,
    updated_at: Date,
    ended_at: Date,
    lastLinked: Date,
    users: UserAccount[],
    groupImages: Image[],
    groupProfileId: string, 
}

type UserAccount = {
    user_id: String,
    user_name: String,
    first_name: String,
    last_name: String,
    email: String,
    phone_number: String,
    user_friends_ids: String[],
    password: String,
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date,
    is_active: Boolean,
    userDefaultProfileImage: Image
    groups: GroupLink[]
    user_assigned_images: Image[]
    users_profile_images: ProfileImage[]

}

type Image = {
    image_id: String
    src_link: String
    created_at?: Date
    uploaded_by: String
    group_links: GroupLink
    group_linksId: String,
    image_assigned_users: ImagesOnUsers[]
}

type ProfileImage = {
    profile_image_id: String,
    src_link: String,
    user_account: UserAccount,
    user_accountUser_id: String,
}


type UsersOnGroups = {
    user_id: String,
    group_id: String,
    active: Boolean,
    group_links: GroupLink,
    user_account: UserAccount,

}

type ImagesOnUsers = {
    image: Image,
    imageId: String,
    userAccount: UserAccount,
    userId: String,
}

export {
    UserAccount,
    GroupLink,
    UsersOnGroups,
    ImagesOnUsers,
    Image,
    ProfileImage,
}

