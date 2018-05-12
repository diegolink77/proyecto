import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Select } from 'ionic-angular';
import { RegisterService } from '../../services/register.service';
import { Registro } from '../../models/registro.model';
/**
 * Generated class for the NuevoContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-registro',
  templateUrl: 'nuevo-registro.html',
})
export class NuevoRegistroPage {

  public unidad: string;



  constructor(public navCtrl: NavController, private registerService: RegisterService) {

    
  }

  ionViewWillEnter(){ 
this.unidad= this.registerService.unidad;
//console.log(this.unidad);
  }
  onAddContact(value: Registro){

    this.registerService.addContact(value).then(ref => {
     // console.log(ref.key);
    });
    this.navCtrl.pop();
    
  }

 

}
