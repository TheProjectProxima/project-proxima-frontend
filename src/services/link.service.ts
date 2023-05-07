import requests from '../api/requests';
import { GroupLink } from '../lib/types/model';
import { LoginUser, ResponseGroupLink, ResponseUser, SignUpUser } from '../lib/types/request';

export default {
    getUser: (uuid: string): Promise<GroupLink> =>
    requests.get(`/group-link/${uuid}`),

  updateGroupLink: (uuid: string, updatedGroupLink: GroupLink): Promise<GroupLink> =>
    requests.put(`/group-link/${uuid}`, { groupLink: updatedGroupLink }),
  leaveGroupLinkUser: (uuid: string): Promise<void> =>
    requests.delete(`/uusers/group-links/${uuid}`),
  createGroupLink: (newGroupLink: GroupLink) : Promise<ResponseGroupLink> => 
    requests.post("/group-link/", {newGroupLink})
};


// need aability to completely delet a group link -- showul only the owner do this 
// does this mean we need an owner for a group link 