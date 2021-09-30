import { PersonajesComponent } from './personajes/personajes.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AgregarComponent } from './agregar/agregar.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { dbzService } from './services/dbz.service';




@NgModule({
  declarations: [
    PersonajesComponent,
    MainPageComponent,
    AgregarComponent
  ],


  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  
    
    
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MainPageComponent
  ],
  providers:[
    dbzService
  ]
})
export class DbzModule {

 }
