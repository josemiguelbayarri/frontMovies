import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { WelcomeComponent } from './welcome/welcome.component'; */
/* import { HeaderComponent } from './components/header/header.component'; */
import { FilmsListComponent } from './components/films-list/films-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
