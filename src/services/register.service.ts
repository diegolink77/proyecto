import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Registro } from "../models/registro.model";
import { InfoPage } from '../pages/info/info';

@Injectable()
export class RegisterService{

    public mail : string;
    public a : string = '';

    private contactsRef=this.db.list<Registro>(this.a+'Horas Ingresadas');

    constructor(private db:AngularFireDatabase ){

    }
    
    recibirmail(value: string){
        this.mail=value;
        var split= this.mail.split('@',2);
        this.a= split[0];
        console.log(this.a);
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