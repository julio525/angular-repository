import { Component } from "@angular/core";
   @Component({
        selector: 'app-heroe',
        templateUrl:'heroe.component.html'
   })
   
   
   export class HeroeComponent {
          nombre: string = 'ironman';
          edad: number = 25;

          get nombreCapitalizado():string{
               return this.nombre.toUpperCase();
          }

          obtenerNombre(): string {
               return ` ${this.nombre} - ${this.edad}`
               //es lo mismo que return this.nombre + '-' + this.edad.toString();
          }

          cambiarNombre(){
                this.nombre = "spiderman";
          }

          cambiarEdad():void{
               this.edad = 15
          }
    }