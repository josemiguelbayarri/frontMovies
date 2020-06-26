import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-info-movies',
  templateUrl: './info-movies.component.html',
  styleUrls: ['./info-movies.component.scss']
})
export class InfoMoviesComponent implements OnInit {

  movieShow:any;

  constructor(private MovieService:MovieService) { }

  ngOnInit() {

    this.movieShow = this.MovieService.filmChoosen;

  }

}
