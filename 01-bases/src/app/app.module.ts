import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { FormsModule  } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { PersonajesComponent } from './dbz/personajes/personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    
        
    
   
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    DbzModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
