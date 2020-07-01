import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';//importación del servicio movieservice siguiendo la ruta de carpetas y archivos

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {


  pelisMostrar: object;

  constructor(public MovieService:MovieService) { }

  ngOnInit() {
    this.MovieService.getMovies()
    .subscribe(
      res => this.pelisMostrar = res,
      error => console.error(error),
      () => console.log(this.pelisMostrar)
    )
  }
  
  buscaTitulo(event){//en esta funcion guardamos lo que tecleamos por el input referenciado con el titulo y la url de la pelicula para compararlos
    if(event.target.value.length >= 3){//le decimos que se active cuando hayamos tecleado tres o mas teclas
      this.MovieService.buscaPeliculasTitulo(event.target.value).subscribe(res=>this.MovieService.setFilms(res))
      
    }
  }

  buscaId(event){//en esta funcion guardamos lo que tecleamos por el input referenciado con el titulo y la url de la pelicula para compararlos
    if(event.target.value){//le decimos que se active cuando hayamos tecleado tres o mas teclas
      this.MovieService.buscaPeliculasId(event.target.value).subscribe(res=>console.log(res))
      
    }
  }

}