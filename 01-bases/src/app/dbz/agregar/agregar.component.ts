import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  constructor( private  dbzService: dbzService) { }

  ngOnInit(): void {
  }
  @Input() nuevo: Personaje={
    nombre: '',
    poder:0
  }
  //@Output() nuevoPersonaje:EventEmitter<Personaje>  = new EventEmitter();

  cambiarNombre(event:any){
    console.log(event)
  }
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return
    }
   // this.nuevoPersonaje.emit(this.nuevo)
   this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre:'',
      poder: 0
    }
  }
}
