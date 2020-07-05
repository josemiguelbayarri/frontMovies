import { Component, OnInit } from '@angular/core';//importamos la variable component y oninit que son default de angular
import { MovieService } from '../../service/movie.service';//importación del servicio movieservice siguiendo la ruta de carpetas y archivos
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-films-list',//es el seleccotr de todo este componente
  templateUrl: './films-list.component.html',//conexion con el html de este componente
  styleUrls: ['./films-list.component.scss']//conexion con el css de este componente
})
export class FilmsListComponent implements OnInit {
  page = 1;
  showModal: boolean;
  currentMovie: Movie;
  pelisMostrar: Movie[];//creamos el objeto pelismostrar con la intencion de meter algo dentro

  constructor(public MovieService:MovieService) { }//hacemos referencia la archivo del service movieservice

  ngOnInit(): void {//cuando se active gracias a oninit apliucamos la logico dentro de los siguientes parentesis
    
      this.getByPage()
    
  }
  showMovieModalDetail(movie: Movie): void {
    this.showModal = true;
    this.currentMovie = movie;
  }  
  closeMovieModalDetail(): void {
    this.showModal = false;
  }
  getMovies(): Movie[] {
    return this.MovieService.getFilms();
  }
  getByPage(): void {
    this.MovieService.getByPage(this.page)
    .subscribe(movies => {
      this.pelisMostrar = movies;
    })
  }
  nextPage() {
    this.page++;
    this.getByPage();
  }
  backPage():void {
      if(this.page > 1){
      this.page--;
      this.getByPage();
      }
    }
}
