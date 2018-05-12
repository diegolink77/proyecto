import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {VerRegistroPage} from '../pages'
import { RegisterService } from '../../services/register.service';
import { TodoService } from '../../services/todo.service';
import { Registro } from '../../models/registro.model';
import { RegistroPage } from '../registro/registro';
import { ValueEventRegistration } from '@firebase/database/dist/esm/src/core/view/EventRegistration';
import { UnidadModel } from '../../models/unidad.model';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})

export class InfoPage {
  
  public userName : string = null;
  public userUnidad : string = null;
  z: UnidadModel;
  units$: Observable<UnidadModel[]>;
  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public auth : AuthProvider,
              private registerService: RegisterService,
              private todoService: TodoService,            
              ) {
                   

  }
  
  ionViewWillEnter(){  
    
    this.auth.Session.subscribe(session=>{
      if(session){
          this.userName = session.email;
          this.registerService.recibirmail(this.userName);
          this.todoService.recibirmail(this.userName);  
          this.userUnidad=this.registerService.unidad; 
                }    
        }
      );
     //this.units$=this.registerService.getunit()
  }
  
  cerrarSesion(){
    
      this.auth.logout();
  }
}
