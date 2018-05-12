import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RegistroDeHorasPage, HorasExtraPage} from '../pages/pages'
import { InfoPage } from '../pages/info/info';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  public userName : string = null;
  hideLogout: boolean = null;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen, 
              private auth: AuthProvider  ) 
              {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Datos empleado', component: InfoPage},
      { title: 'Lista de trabajos', component: RegistroDeHorasPage },
      { title: 'Lista de horas de apoyo', component: HorasExtraPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.auth.Session.subscribe(session=>{
        if(session){
            this.rootPage = InfoPage;
            this.hideLogout = false;
            this.userName = session.email;
        }
          else{
            this.rootPage = LoginPage;
          }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
