import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Registro } from "../models/registro.model";
import { UnidadModel } from "../models/unidad.model";


@Injectable()
export class RegisterService{

    public mail : string;
    public tabla : string;
    public unidad : string;
    public x: string;
    private contactsRef;
    private y;

    constructor(private db:AngularFireDatabase ){

    }
    recibirunidad(value: string){
        this.unidad=value;
        console.log(value);
        return this.y.push(value);
        
    }

    recibirmail(value: string){
        this.mail=value;
        var split= this.mail.split('@',2);
        this.tabla= split[0];
        var union= this.tabla.concat(' de '+ this.unidad);
        this.y=this.db.list<UnidadModel>('Unidades de trabajo')
        this.contactsRef=this.db.list<Registro>('Usuarios/'+this.tabla +'/HorasIngresadas')
        var splitunion=union.split(' de ');
        this.x=splitunion[1];
       // console.log(this.x);
    }
    getunit(){
        return this.y;
    }
      
    addContact(value: Registro){
    
        return this.contactsRef.push(value); 
    }

    updateContact(value: Registro){

        return this.contactsRef.update(value.key,value);
    }

    removeContact(value: Registro){
        
        return this.contactsRef.remove(value.key);
    }

    getContacts(){
        
        return this.contactsRef;
    }
}