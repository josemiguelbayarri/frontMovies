import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/models/user.model';
import { MovieService } from 'src/app/service/movie.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /* pelisMostrar: object; */
  constructor(private UserService:UserService,private MovieService:MovieService) { }
  ngOnInit(): void {
    console.log('soy el header')
  }
  getUser(): User {
    return this.UserService.getUser();
  }
  logout(): void {
    this.UserService.logout();
    this.UserService.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
  buscaTitulo(event){//en esta funcion guardamos lo que tecleamos por el input referenciado con el titulo y la url de la pelicula para compararlos
    if(event.target.value.length >= 3){//le decimos que se active cuando hayamos tecleado tres o mas teclas
      this.MovieService.buscaPeliculasTitulo(event.target.value).subscribe(res=>this.MovieService.setFilms(res))
      
    }
  }
}