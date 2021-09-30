import { Component, Input, OnInit } from '@angular/core';
import { dbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private dbzService: dbzService) {}

  ngOnInit(): void {
  }

  //@Input('personajes') personajes:any[]=[];
  get personajes(){
    return this.dbzService.personaje;
  }
  
}
