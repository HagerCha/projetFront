import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8086/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password,

    }, httpOptions);
  }

  register(nom: string, email: string, password: string,passport:string,prenom:string,role:any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {

      nom:nom,
      email:email,
      password:password,
      prenom:prenom,
      passport:passport

    }, httpOptions);
  }
}
