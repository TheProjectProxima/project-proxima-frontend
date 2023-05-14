import requests from '../api/requests';
import { GroupLink } from '../lib/types/model';
import { LoginUser, ResponseGroupLink, ResponseUser, SignUpUser } from '../lib/types/request';

export default {
    getGroupLink: (uuid: string): Promise<GroupLink> =>
    requests.get(`/group-link/${uuid}`),
  updateGroupLink: (uuid: string, updatedGroupLink: GroupLink): Promise<GroupLink> =>
    requests.put(`/group-link/${uuid}`, { groupLink: updatedGroupLink }),
  deleteGroupLinkUser: (uuid: string): Promise<void> =>
    requests.delete(`/users/group-links/${uuid}`),
   deleteGroupLink: (uuid: string) : Promise<void> => 
   requests.delete(`/group-link/${uuid}`), 
  createGroupLink: (newGroupLink: GroupLink) : Promise<ResponseGroupLink> => 
    requests.post("/group-link/", {newGroupLink}),
    getUserLinks: (uuid: string): Promise<GroupLink[]> =>
    requests.get(`/users/${uuid}/group-links/`),
};


// need aability to completely delet a group link -- showul only the owner do this 
// does this mean we need an owner for a group link 