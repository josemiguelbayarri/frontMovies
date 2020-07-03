import { BrowserModule } from '@angular/platform-browser';//importación por defecto de angular
import { NgModule } from '@angular/core';//importación por defecto de angular
import { HttpClientModule } from '@angular/common/http';//importación por defecto de angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { WelcomeComponent } from './welcome/welcome.component'; */
 import { HeaderComponent } from './components/header/header.component'; 
import { FilmsListComponent } from './components/films-list/films-list.component';
import { InfoMoviesComponent } from './components/info-movies/info-movies.component';
import { IndexComponent } from './components/index/index.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';//importación del componente filmsListComponent co su ruta correspondiente
import { FormsModule } from '@angular/forms';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,//declaramos filmsListComponent para que se activa en la linea de import
    HeaderComponent,
    InfoMoviesComponent,
    IndexComponent,
    BusquedaComponent,
    LoginComponent,
    SignupComponent, 
    MovieModalComponent
  ],
  imports: [
    BrowserModule,//las declaraciones por defecto de los imports de angular
    AppRoutingModule,//las declaraciones por defecto de los imports de angular
    HttpClientModule,//las declaraciones por defecto de los imports de angular
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
