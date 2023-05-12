import requests from '../api/requests';
import { GroupLink } from '../lib/types/model';
import { LoginUser, ResponseGroupLink, ResponseUser, SignUpUser } from '../lib/types/request';
import { Friend, Image } from '../types/types';

export default {
    getImage: (uuid: string): Promise<GroupLink> =>
    requests.get(`/image/${uuid}/`),
  updateImage: (uuid: string, updatedImage: Image): Promise<Image> =>
    requests.put(`/image/${uuid}/`, { updatedImage: updatedImage }),
  deleteImage: (uuid: string): Promise<void> =>
    requests.delete(`/image/${uuid}/`),
  createImage: (newImage: Image) : Promise<Image> => 
    requests.post("/image/", {newImage}),
    getImageThumbnail: (uuid: string): Promise<Image> =>
    requests.get(`/image/${uuid}/mini/`),

  };
