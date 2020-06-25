import { Component, OnInit } from '@angular/core';//importación por defecto de angular
import { MovieService } from '../../service/movie.service';//importación del servicio movieservice siguiendo la ruta de carpetas y archivos

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {


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
