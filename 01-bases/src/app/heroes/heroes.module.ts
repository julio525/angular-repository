
import { NgModule } from "@angular/core";
import { listenerCount } from "process";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

    @NgModule({
        declarations:[
            HeroeComponent,
            ListadoComponent
        ],
        exports:[
            ListadoComponent
        ],
        imports:[
            
        ]
    })
    export class HeroesModule{

    }