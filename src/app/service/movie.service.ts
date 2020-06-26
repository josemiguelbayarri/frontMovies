import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  

  //En el caso de que conectemos con un back.. el ejemplo a continuación....

  backUrl='http://localhost:3000/movies/';

  films: object[];
  filmChoosen: object[];
  //title: string;

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<any>{
    return this.httpClient.get(this.backUrl + 'allmovies')
  }

  locateFilm(filmChoose:any):object{
    
    this.filmChoosen = filmChoose;
    console.log(this.filmChoosen);
    
    
    return;
 }

buscaPeliculasTitulo(titulo:string):Observable<any>{
  return this.httpClient.get(this.backUrl + 'title/' + titulo);
}
 
  

setFilms(films:object[]):void{
    
    this.films=films;
    console.log(this.films)

 }
 
getFilms():object[]{
    
    return this.films

 }
}


