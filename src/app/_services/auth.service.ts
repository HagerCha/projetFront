import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8086/api/auth/';
const TOKEN_KEY = 'auth-token';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(TOKEN_KEY)}`
    })
  }
  constructor(private http: HttpClient) { }


  getall(): Observable<any> {

    return this.http.get(AUTH_API + 'AllUser', this.httpOption);
  }

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
      passport:passport,
      role:role,
      

    }, httpOptions);
  }
  delete(idUser: any) {
    return this.http.delete(`${AUTH_API + 'DeleteUser'}/${idUser}`,httpOptions);
  }

  update(idUser:any , modifierUser:any): Observable<any> {
    return this.http.put(`${AUTH_API + 'modifierUser'}/${idUser}`, {
      nom: modifierUser.nom,
      passport: modifierUser.passport,
      prenom: modifierUser.prenom,
      email : modifierUser.email,
      
    }, this.httpOption);
  }
  
  findById(idUser: any): Observable<any> {
    return this.http.get(`${AUTH_API  + 'UserByIdUser'}/${idUser}`, httpOptions);
  }

}
