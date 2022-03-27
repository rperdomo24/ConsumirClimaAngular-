import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  myUrlServices = 'http://localhost:51483/';
  myApiUrl = 'api/productos1/';


httpOptions = {
  headers :  new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

  constructor(private http: HttpClient) { }




  getListadoProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.myUrlServices + this.myApiUrl);

  }

  borrarProducto(id: number): Observable<Producto>{
    return this.http.delete<Producto>(this.myUrlServices + this.myApiUrl + id);
  }

  guardarProducto(producto : Producto): Observable<Producto>{
    return this.http.post<Producto>(this.myUrlServices + this.myApiUrl, producto, this.httpOptions);


  }

  cargarProductoid(id : number): Observable<Producto>{
    return this.http.get<Producto>(this.myUrlServices + this.myApiUrl + id);

  }
  actualizarProducto(id:number, producto : Producto): Observable<Producto>{
    return this.http.put<Producto>(this.myUrlServices + this.myApiUrl + id, producto, this.httpOptions);

  }


}
