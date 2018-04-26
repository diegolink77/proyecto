import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RegisterService } from '../../services/register.service';
import { TodoService } from '../../services/todo.service';
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})

export class InfoPage {
  
  public userName : string = null;
  constructor(public navCtrl: NavController, 
              public auth : AuthProvider,
              private registerService: RegisterService,
              private todoService: TodoService) {

  }
  ionViewWillEnter(){
    this.auth.Session.subscribe(session=>{
      if(session){
          this.userName = session.email;
          this.registerService.recibirmail(this.userName);
          this.todoService.recibirmail(this.userName);
      }
        
    }
  );}

  cerrarSesion(){
    
      this.auth.logout();
  }

}
