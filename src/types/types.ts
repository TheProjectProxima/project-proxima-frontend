type GroupLink = {
    groupId: string,
    name: string,
    saved: boolean
    participants_num: BigInt,
    active: Boolean,
    group_image_ids: string[],
    group_user_ids: string[],
    created_at: Date,
    updated_at: Date,
    ended_at: Date,
    lastLinked: Date,
    users: UserAccount[],
    groupImages: Image[],
    groupProfileId: string, 
}

type UserAccount = {
    user_id: string,
    user_name: string,
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    password: string,
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date,
    is_active: Boolean,
    userDefaultProfileImage?: Image
    groups: GroupLink[]
    user_assigned_images?: Image[]
    users_profile_images?: ProfileImage[]

}

type Image = {
    image_id: string
    src_link: string
    created_at?: Date
    uploaded_by: string
    group_links: GroupLink
    group_linksId: string,
    image_assigned_users: ImagesOnUsers[]
}

type ProfileImage = {
    profile_image_id: string,
    src_link: string,
    user_account: UserAccount,
    user_accountUser_id: string,
}


type UsersOnGroups = {
    user_id: string,
    group_id: string,
    active: Boolean,
    group_links: GroupLink,
    user_account: UserAccount,

}

type ImagesOnUsers = {
    image: Image,
    imageId: string,
    userAccount: UserAccount,
    userId: string,
}

type Friend = {
  user: UserAccount,
  userId: string,
  friend: UserAccount,
  friendId: string,
  uniqueId: string,
  requested: Boolean,
  accepted: Boolean,
  requested_at?: Date,
  last_linked: Date,
  deleted_at: Date
}

export {
    UserAccount,
    GroupLink,
    UsersOnGroups,
    ImagesOnUsers,
    Image,
    ProfileImage,
    Friend
}

