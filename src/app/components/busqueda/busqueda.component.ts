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

}