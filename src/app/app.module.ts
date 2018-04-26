import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { InfoPage } from '../pages/info/info';
import { RegistroDeHorasPage, HorasExtraPage,NuevoRegistroPage, VerRegistroPage, NuevoHorasExtraPage, VerHorasExtraPage } from '../pages/pages';
import{RegisterService} from '../services/register.service';
import{TodoService} from '../services/todo.service';
import {FIREBASE_CONFIG} from '../app/firebase.credentials';
import {NativeStorage} from '@ionic-native/native-storage';
import {Storage} from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';

  
@NgModule({
  declarations: [
    MyApp,
    InfoPage,
    RegistroDeHorasPage,
    HorasExtraPage,
    NuevoRegistroPage,
    VerRegistroPage,
    LoginPage,
    NuevoHorasExtraPage, 
    VerHorasExtraPage,
    RegistroPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
  //  AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoPage,
    RegistroDeHorasPage,
    HorasExtraPage,
    NuevoRegistroPage,
    VerRegistroPage,
    LoginPage,
    NuevoHorasExtraPage, 
    VerHorasExtraPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegisterService,
    TodoService,
    NativeStorage,
    AuthProvider,
  ]
})
export class AppModule {}
