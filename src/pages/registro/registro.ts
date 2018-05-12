import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RegisterService } from '../../services/register.service';
import { Registro } from '../../models/registro.model';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  user= { email : '', password : ''};
  unidad= '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public auth : AuthProvider,
    public alertCtrl : AlertController,
    private registerService: RegisterService) {
  }
  
  register(){

    this.registerService.recibirunidad(this.unidad);
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      // El usuario se ha creado correctamente
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }
  
}
