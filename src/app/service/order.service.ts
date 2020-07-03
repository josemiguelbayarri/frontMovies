/* import { Injectable } from '@angular/core';//importación por defecto de angular
import { HttpClient } from '@angular/common/http';//importación por defecto de angular
import { Observable } from 'rxjs';//importación por defecto de angular
import { environment } from '../../environments/environment';
import { Movie } from '../models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API_URL = environment.API_URL; //la usamos para conectar con nuestro backend a traves de esta url
  orders: object[];//creamos un objeto de array vacio que las coge todas
  orderChoosen: object[];//creamos un objeto de array vacio que son las que elegimos
  //title: string;
  constructor(private httpClient:HttpClient) { }
  traerOrders():Observable<any>{
    return this.httpClient.post(this.API_URL + 'orders')//en la siguiente direccion nos traemos todas las pelis
  }
setOrders(orders: Order[]):void{  //método para cambiar la clase
    this.orders=orders;
    console.log(this.orders)
 }
getOrders(): Order { //método para traer la clase
    return this.orders
}
} */