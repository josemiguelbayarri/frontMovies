import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private MovieService:MovieService) { }

  ngOnInit(): void {

  }

buscaTitulo(event){//en esta funcion guardamos lo que tecleamos por el input referenciado con el titulo y la url de la pelicula para compararlos
  if(event.target.value.length >= 3){//le decimos que se active cuando hayamos tecleado tres o mas teclas
    this.MovieService.buscaPeliculasTitulo(event.target.value).subscribe(res=>this.MovieService.setFilms(res))
    
  }
}
  
}
