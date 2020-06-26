import { BrowserModule } from '@angular/platform-browser';//importación por defecto de angular
import { NgModule } from '@angular/core';//importación por defecto de angular
import { HttpClientModule } from '@angular/common/http';//importación por defecto de angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { WelcomeComponent } from './welcome/welcome.component'; */
 import { HeaderComponent } from './components/header/header.component'; 
import { FilmsListComponent } from './components/films-list/films-list.component';
import { InfoMoviesComponent } from './components/info-movies/info-movies.component';//importación del componente filmsListComponent co su ruta correspondiente

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    HeaderComponent,
    InfoMoviesComponent//declaramos filmsListComponent para que se activa en la linea de import
  ],
  imports: [
    BrowserModule,//las declaraciones por defecto de los imports de angular
    AppRoutingModule,//las declaraciones por defecto de los imports de angular
    HttpClientModule//las declaraciones por defecto de los imports de angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
