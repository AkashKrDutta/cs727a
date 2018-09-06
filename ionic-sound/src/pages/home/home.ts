import { NavController, Platform } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { SoundPage } from '../sound/sound';
import { Component } from '@angular/core';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  cameraPage = CameraPage
  soundPage = SoundPage
  

  constructor(public navCtrl: NavController,
	public platform: Platform) {}
	
}
