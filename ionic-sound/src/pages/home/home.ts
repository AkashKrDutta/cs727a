import { NavController, Platform } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions, CameraPopoverOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';


import { Component } from '@angular/core';


@Component({
  selector: 'page-home',
  providers: [Camera],
  templateUrl: 'home.html'
})
export class HomePage {

  recording: boolean = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];

  imageURL;
  

  constructor(public navCtrl: NavController,
	private media: Media,
	private file: File,
	public platform: Platform,
	private camera:Camera,
	private base64ToGallery: Base64ToGallery) {}

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
   popover: CameraPopoverOptions = {
    x: 20,
    y: 60,
    width: 200,
    height: 100,
    arrowDir: 1
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
	
  getAudioList() {
	if(localStorage.getItem("audiolist")) {
		this.audioList = JSON.parse(localStorage.getItem("audiolist"));
		console.log(this.audioList);
	}
  }

  ionViewWillEnter() {
    this.getAudioList();
  }


	startRecord() {
	  if (this.platform.is('ios')) {
	    this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
	    this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
	    this.audio = this.media.create(this.filePath);
	  } else if (this.platform.is('android')) {
	    this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
	    this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
	    this.audio = this.media.create(this.filePath);
	  }
	  this.audio.startRecord();
	  this.recording = true;
	}


	stopRecord() {
	  this.audio.stopRecord();
	  let data = { filename: this.fileName };
	  this.audioList.push(data);
	  localStorage.setItem("audiolist", JSON.stringify(this.audioList));
	  this.recording = false;
	  this.getAudioList();
	}


	playAudio(file,idx) {
	  if (this.platform.is('ios')) {
	    this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
	    this.audio = this.media.create(this.filePath);
	  } else if (this.platform.is('android')) {
	    this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
	    this.audio = this.media.create(this.filePath);
	  }
	  this.audio.play();
	  this.audio.setVolume(0.8);
	}
}