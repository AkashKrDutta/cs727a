import { NavController, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';


import { Component } from '@angular/core';


@Component({
  selector: 'page-camera',
  providers: [Camera],
  templateUrl: 'camera.html'
})

export class CameraPage {

  imageURL;
  

  constructor(public navCtrl: NavController,
	public platform: Platform,
	private camera:Camera,
	private base64ToGallery: Base64ToGallery) {}

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: true,
	correctOrientation: true
  }

  takePhoto(){
    this.camera.getPicture(this.options).then((imageData) => {
       this.imageURL = 'data:image/jpeg;base64,' + imageData;
       this.base64ToGallery.base64ToGallery(imageData, { prefix: '_img', mediaScanner: true }).then(
	   res => console.log('Saved image to gallery ', res),
	   err => console.log('Error saving image to gallery ', err)
	   );

    }, (err) => {
       console.log(err);
    });
  }
	
}
