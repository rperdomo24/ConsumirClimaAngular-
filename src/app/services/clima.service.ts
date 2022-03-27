import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApiClima } from '../models/clima';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  myUrlServices = 'http://api.weatherapi.com/v1/current.json?';
  myApiKey = '83c016cc0232468e876153329222703';
httpOptions = {
  headers :  new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

  constructor(private http: HttpClient) { }

  //http://api.weatherapi.com/v1/current.json?key=83c016cc0232468e876153329222703&q=138.97.142.156
  ObtenerClimaporIp(ip : string): Observable<ResponseApiClima>{
     let query = this.myUrlServices + "key=" + this.myApiKey + "&q=" + ip +"&aqi=no&lang=es";
     console.log("test query :" + query)
    return this.http.get<ResponseApiClima>(query);
  }  
}
