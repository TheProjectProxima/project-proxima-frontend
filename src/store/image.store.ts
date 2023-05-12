import {action, makeAutoObservable, observable} from 'mobx';

import { UserService} from '../services/index.service';
import {User} from '../lib/types/model';
import { Image } from '../types/types';
import { RootStore } from './index.store';
import imageService from '../services/image.service';

export class ImageStore {
  rootStore: RootStore 
  isLoadingImage: boolean
  imageError : string | undefined
  imageMap: Map<string, Image> = observable.map();

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.isLoadingImage = false
    this.imageError = undefined
    makeAutoObservable(this)
  }

  createImage(newImage: Image) {
    this.isLoadingImage = true
    this.imageError = undefined
    return imageService.createImage(newImage).then (
      action( () => {
        this.imageMap.set(newImage.image_id, newImage)
      }
      )
    )
    .catch(action((err: any) => {
      this.imageError = err.response && err.response.body && err.response.body.errors;
      throw err;
    }))
    .finally(action(() => { this.isLoadingImage = false; }));
  }

  updateImage(imageId: string, newImage : Image) {
    this.isLoadingImage = true
    this.imageError = undefined
    return imageService.updateImage(imageId, newImage).then (
      action( () => {
        this.imageMap.set(imageId, newImage)
      }
      )
    )
    .catch(action((err: any) => {
      this.imageError = err.response && err.response.body && err.response.body.errors;
      throw err;
    }))
    .finally(action(() => { this.isLoadingImage = false; }));
  }


  deleteImage(imageId: string) {
    this.isLoadingImage = true
    this.imageError = undefined
    return imageService.deleteImage(imageId).then (
      action( () => {
        this.imageMap.delete(imageId)
      }
      )
    )
    .catch(action((err: any) => {
      this.imageError = err.response && err.response.body && err.response.body.errors;
      throw err;
    }))
    .finally(action(() => { this.isLoadingImage = false; }));
  }



}

