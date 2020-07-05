import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/models/movie.model';


@Component({
  selector: 'app-popularity',
  templateUrl: './popularity.component.html',
  styleUrls: ['./popularity.component.scss']
})
export class PopularityComponent implements OnInit {
  showModal: boolean;
  currentMovie: Movie;
  pelisMostrar:object;
  constructor(public MovieService:MovieService) { }
  ngOnInit(){
    this.MovieService.mostPopular()
    .subscribe(
      res => this.pelisMostrar = res,
      error => console.log(error),
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
