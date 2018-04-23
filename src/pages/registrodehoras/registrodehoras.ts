import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import {NuevoRegistroPage, VerRegistroPage} from '../pages'
import { RegisterService } from '../../services/register.service';
import { Registro } from '../../models/registro.model';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the LibretaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrodehoras',
  templateUrl: 'registrodehoras.html',
})
export class RegistroDeHorasPage {

  contacts$: Observable<Registro[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService: RegisterService, private alertCtrl: AlertController) {
  }

  ionViewWillEnter(){

   //this.contacts=this.ContactService.getContacts();

   this.contacts$ = this.ContactService
     .getContacts()  //Retorna la DB
     .snapshotChanges() //retorna los cambios en la DB (key and value)
     .map(
       /*
       Estas líneas retornan un array de  objetos con el id del registro y su contenido
       {
         "key":"value",
         contact.name,
         contact.organization,
         ...
       }
       */
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       }); 
    
  }

  onLoadNewPage() {
    // Reset the content nav to have just this page
    this.navCtrl.push(NuevoRegistroPage);
  }

  onItemTapped($event, contact){
    this.navCtrl.push(VerRegistroPage, contact);
   

  }

}
