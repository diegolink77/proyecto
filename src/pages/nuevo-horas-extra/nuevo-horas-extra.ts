import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Select } from 'ionic-angular';
import { TodoService } from '../../services/todo.service';
import { Tarea } from '../../models/todo.model';
/**
 * Generated class for the NuevoTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-horas-extra',
  templateUrl: 'nuevo-horas-extra.html',
})
export class NuevoHorasExtraPage {



  constructor(public navCtrl: NavController, private TodoService: TodoService) {
  
  
  }

  ionViewDidLoad() {
    
    
  }
  onAddTarea(value: Tarea){
    

    this.TodoService.addTarea(value).then(ref => {
    //  console.log(ref.key);
    });
    this.navCtrl.pop();
  }

}
