import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dataip } from '../models/ipdata';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http: HttpClient) { }

  getIPAddress() : Observable<dataip>
  {
    return this.http.get<dataip>("http://api.ipify.org/?format=json"); 
  }
}
