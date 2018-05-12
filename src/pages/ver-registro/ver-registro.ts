import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Registro } from '../../models/registro.model';
import { RegisterService } from '../../services/register.service';

/**
 * Generated class for the VerContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-registro',
  templateUrl: 'ver-registro.html',
})
export class VerRegistroPage {

  contact: Registro;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactService: RegisterService) {

    this.contact = this.navParams.data;
    //console.log(this.contact.key);
    
  }

  onUpdateContact(value: Registro){

    this.contactService.updateContact(value);
    this.navCtrl.pop();

  }

  onRemoveContact(value: Registro){

    this.contactService.removeContact(value);
    this.navCtrl.pop();

  }

  

}
