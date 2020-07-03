import { Component, OnInit } from '@angular/core';//importamos la variable component y oninit que son default de angular
import { MovieService } from '../../service/movie.service';//importación del servicio movieservice siguiendo la ruta de carpetas y archivos
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-films-list',//es el seleccotr de todo este componente
  templateUrl: './films-list.component.html',//conexion con el html de este componente
  styleUrls: ['./films-list.component.scss']//conexion con el css de este componente
})
export class FilmsListComponent implements OnInit {

  showModal: boolean;
  currentMovie: Movie;
  pelisMostrar: object;//creamos el objeto pelismostrar con la intencion de meter algo dentro

  constructor(public MovieService:MovieService) { }//hacemos referencia la archivo del service movieservice

  ngOnInit() {//cuando se active gracias a oninit apliucamos la logico dentro de los siguientes parentesis
    this.MovieService.getMovies()//hace referencia a la funcion get movies que esta programada en movieservice
    .subscribe(
      res => this.pelisMostrar = res,//manda como respuesta el objeto pelisMostrar lleno con lo que fluye de getMovies y pasamos pelimostrar al ngfor del html que lo divide en raciones
      error => console.error(error),
      () => console.log(this.pelisMostrar)
    )
  }
  showMovieModalDetail(movie: Movie): void {
    this.showModal = true;
    this.currentMovie = movie;
  }  
  closeMovieModalDetail(): void {
    this.showModal = false;
  }
}
