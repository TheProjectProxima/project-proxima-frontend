import { AuthStore } from "./auth.store";
import { FriendStore } from "./friend.store";
import { ImageStore } from "./image.store";
import { LinkStore } from "./link.store";
import { UserStore } from "./user.store";

export class RootStore {
    authStore: AuthStore
    userStore: UserStore
    friendStore: FriendStore
    linkStore: LinkStore
    imageStore: ImageStore

    constructor() {
        this.authStore = new AuthStore(this)
        this.userStore = new UserStore(this)
        this.friendStore = new FriendStore(this)
        this.linkStore = new LinkStore(this)
        this.imageStore = new ImageStore(this)
    }
    
}


