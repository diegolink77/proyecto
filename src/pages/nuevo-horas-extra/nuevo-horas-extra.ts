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

 /* proyectos1: Array<any>=[{x: "proyecto 1"}, {x: "proyecto 2"}, {x: "proyecto 3"} ]
  proyectos2: Array<any>=[{x: "proyecto 1"}, {x: "proyecto 2"}, {x: "proyecto 3"} ]
  proyectos3: Array<any>=[{x: "proyecto 1"}, {x: "proyecto 2"}, {x: "proyecto 3"} ]*/

  y: any= 1;

  constructor(public navCtrl: NavController, private TodoService: TodoService) {
  
  
  }

  ionViewDidLoad() {
    console.log(this.y);
  }
  onAddTarea(value: Tarea){
//this.y=value.unidad;


    this.TodoService.addTarea(value).then(ref => {
    //  console.log(ref.key);
    });
    this.navCtrl.pop();
  }

}
