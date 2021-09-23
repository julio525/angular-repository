import { Component } from '@angular/core';
        
    @Component({
        selector: 'app-contador',
        template:`
        <h1>{{title}}</h1>
        <br>
        
        <h1>La base  es <strong>55</strong></h1>
        
        <button (click)="acumular(-base)"> -{{base}}</button>
        <span>{{numero}}</span>
        
        <button (click)= "acumular(base)">+{{base}}</button>
        
        `
    })


    export class ContadorComponent{
        title:string = 'contador app';
        numero:number = 10;
        base: number= 5;
        
        acumular ( valor: number){
        this.numero += valor;
        }
    }