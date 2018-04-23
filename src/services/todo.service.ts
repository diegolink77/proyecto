import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Tarea } from "../models/todo.model";

@Injectable()
export class TodoService{

    private tareasRef=this.db.list<Tarea>('Horas Extra');

    constructor(private db:AngularFireDatabase){

    }

    addTarea(value: Tarea){
    
        return this.tareasRef.push(value);
    }

    updateTarea(value: Tarea){

        return this.tareasRef.update(value.key,value);
    }

    removeTarea(value: Tarea){
        
        return this.tareasRef.remove(value.key);
    }

    getTarea(){
        
        return this.tareasRef;
    }
}