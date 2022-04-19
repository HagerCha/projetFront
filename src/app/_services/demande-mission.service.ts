import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {MissionModel} from "../models/mission.model";
const API_URL = 'http://localhost:8086/api/mission/';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})


export class DemandeMissionService {
  //const API_URLl = 'http://localhost:8086/api/mission/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(TOKEN_KEY)}`
    })
  }

  constructor(private http: HttpClient) {
  }
  getall(): Observable<any> {

    return this.http.get(API_URL + 'AllMission',this.httpOptions);
  }
 add(mission:any ): Observable<any> {
    return this.http.post(API_URL + 'addMission', {
      nom: mission.nom,
      passport: mission.passport,
      description: mission.description,
      dateDeDebut : mission.dateDeDebut,
      dateDeFin: mission.dateDeFin,
      pays : mission.pays,
      ville:mission.ville,
      etat:mission.etat
    }, this.httpOptions);
  }
 /* update(id , concour): Observable<any> {
    return this.http.put(`${API_URL + 'update'}/${id}`, {
      name: concour.name,
      datedebut: concour.datedebut,
      datefin: concour.datefin,
      iduser : concour.iduser,
    }, httpOptions);
  }*/










  delete(idMission:any) {
    return this.http.delete(`${API_URL + 'DeleteMission'}/${idMission}`,this.httpOptions);

  }


}
