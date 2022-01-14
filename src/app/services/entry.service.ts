import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserLogin } from '../models/userLogin';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  url:string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  public login(loginData:IUserLogin):Observable<any>{
    
    return this.http.get<any>(this.url+"/registerPatient");

  }
}
