import { Injectable } from '@angular/core';//importación por defecto de angular
import { HttpClient } from '@angular/common/http';//importación por defecto de angular
import { Observable } from 'rxjs';//importación por defecto de angular

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  backUrl='http://localhost:3000/movies/';//la usamos para conectar con nuestro backend a traves de esta url

  films: object[];//creamos un objeto de array vacio que las coge todas
  filmChoosen: object[];//creamos un objeto de array vacio que son las que elegimos
  //title: string;

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<any>{
    return this.httpClient.get(this.backUrl + 'allmovies')//en la siguiente direccion nos traemos todas las pelis
  }

  locateFilm(filmChoose:any):object{//funcion para localizar las peliculas que elegimos
    
    this.filmChoosen = filmChoose;
    console.log(this.filmChoosen);
    
    //ademas de ello, voy a guardar en localStorage la pelicula esscogida.
    
    localStorage.setItem("peliEscogida", JSON.stringify(this.filmChoosen));
    localStorage.setItem("bootcamp")
    
    return;
 }

 //esta funcion es la hija de buscaTitulo que se encuentra en header/header.components.ts
  buscaPeliculasTitulo(titulo:string):Observable<any>{//guardamos dentro de esta funcion la url/title mas el titulo de la pelicula
    return this.httpClient.get(this.backUrl + 'title/' + titulo);
  }

  buscaPeliculasId(id:number):Observable<any>{//guardamos dentro de esta funcion la url/title mas el titulo de la pelicula
    return this.httpClient.get(this.backUrl + 'id/' + id);
  }
  

setFilms(films:object[]):void{
    
    this.films=films;
    console.log(this.films)

 }
 
getFilms():object[]{
    
    return this.films

 }
}


