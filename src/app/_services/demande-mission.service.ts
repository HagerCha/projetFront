import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {MissionModel} from "../models/mission.model";
import { Params } from '@angular/router';
const API_URL = 'http://localhost:8086/api/mission/';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})


export class DemandeMissionService {
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


  findById(idMission:any): Observable<any> {
    return this.http.get(`${API_URL + 'MissionByIdUser'}/${idMission}`,this.httpOptions);
  }


  update(idMission:any , missionUpdate:any): Observable<any> {
    return this.http.put(`${API_URL + 'modifierMission'}/${idMission}`, {
      nom: missionUpdate.nom,
      passport: missionUpdate.passport,
      description: missionUpdate.description,
      dateDeDebut : missionUpdate.dateDeDebut,
      dateDeFin: missionUpdate.dateDeFin,
      pays : missionUpdate.pays,
      ville:missionUpdate.ville,
      etat:missionUpdate.etat
    }, this.httpOptions);
  }

  delete(idMission:any) {
    return this.http.delete(`${API_URL + 'DeleteMission'}/${idMission}`,this.httpOptions);
  }


}
