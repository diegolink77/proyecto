import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Registro } from "../models/registro.model";

@Injectable()
export class RegisterService{

    public mail : string;
    public tabla : string;

    private contactsRef;

    constructor(private db:AngularFireDatabase ){

    }
    
    recibirmail(value: string){
        this.mail=value;
        var split= this.mail.split('@',2);
        this.tabla= split[0];
       //console.log(this.tabla);
       this.contactsRef=this.db.list<Registro>(this.tabla +'/Horas Ingresadas')
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