import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css']
  })
  export class ListadoComponent implements OnInit {
    heroes:string[]=["iron man", "thor", "capitan america","hulk","black widow"];
    heroeBorrado: string= '';
    borrarHeroe(){
      // este funciona para eliminar todos
      // this.heroes = [];
      //este sirve para borra uno
      //const heroeBorrado = this.heroes.shift(); 
      //console.log("el heroe borrado fue "+ heroeBorrado);
      this.heroeBorrado = this.heroes.shift() || '';
    }
   

  constructor() { }

  ngOnInit(): void {
  }

}
