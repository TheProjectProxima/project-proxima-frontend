import requests from '../api/requests';
import { GroupLink } from '../lib/types/model';
import { LoginUser, ResponseGroupLink, ResponseUser, SignUpUser } from '../lib/types/request';

export default {
    getUser: (uuid: string): Promise<GroupLink> =>
    requests.get(`/group-link/${uuid}`),
  getAllGroupLinksUser: (): Promise<GroupLink[]> =>
    requests.get('/users/group-links/'),
  updateGroupLink: (uuid: string, updatedGroupLink: GroupLink): Promise<GroupLink> =>
    requests.put(`/group-link/${uuid}`, { groupLink: updatedGroupLink }),
  deleteGroupLinkUser: (uuid: string): Promise<void> =>
    requests.delete(`/uusers/group-links/${uuid}`),
  createGroupLink: (newGroupLink: GroupLink) : Promise<ResponseGroupLink> => 
    requests.post("/group-link/", {newGroupLink})
};
