import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';



import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CameraPage } from '../pages/camera/camera';
import { SoundPage } from '../pages/sound/sound';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CameraPage,
    SoundPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CameraPage,
    SoundPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Media,
    File,
    Base64ToGallery
  ]
})
export class AppModule {}
