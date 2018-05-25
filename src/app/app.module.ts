import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SecondMenu } from '../pages/home/second-menu/second-menu';
import { HomeModule } from '../pages/home/home-module';
import { Firebase } from '@ionic-native/firebase';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseConfig = {
  apiKey: "AIzaSyCuR0y6P8DRSNtkAG4BFH_CSB-CiIc5u1M",
    authDomain: "piso-ocio.firebaseapp.com",
    databaseURL: "https://piso-ocio.firebaseio.com",
    projectId: "piso-ocio",
    storageBucket: "piso-ocio.appspot.com",
    messagingSenderId: "654907577803"
}; 

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SecondMenu
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SecondMenu
  ],
  providers: [
    AngularFireDatabaseModule,
    StatusBar,
    SplashScreen,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {
  
}
