import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class dbzService{
    
    private _personaje: Personaje[]= [

        {
          nombre: 'goku',
          poder: 17000
        },
        {
          nombre: 'vegeta',
          poder: 15000
    
        },
    ]
    get personaje():Personaje[]{
      return [...this._personaje];
    }
    constructor(){
      
    }
    agregarPersonaje(personaje:Personaje){
      this._personaje.push(personaje)
    }
}