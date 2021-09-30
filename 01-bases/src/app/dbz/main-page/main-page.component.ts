import { Component, OnInit } from '@angular/core';
import { dbzService } from '../services/dbz.service';
import { DbzModule } from '../dbz.module';
interface Personaje {
  nombre:string,
  poder: number
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    constructor() {

    }

    ngOnInit(): void {

    }
  
    personaje: Personaje[]=[]
    
    nuevo:Personaje={
      nombre:"roshie",
      poder:1000
    }
    
}
