import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';


const API_URL = 'http://localhost:8086/api/NDF/';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class DemandeNDFService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(TOKEN_KEY)}`
    })
  }

  constructor(private http: HttpClient) {
  }
  getall(): Observable<any> {

    return this.http.get(API_URL + 'AllNDF', this.httpOptions);
  }

  add(ndf: any): Observable<any> {
    return this.http.post(API_URL + 'addNDF', {

      nom: ndf.nom,
      idNDF: ndf.idNDF,
      numMission: ndf.numMission,
      nbNuit: ndf.nbNuit,
      montantNuit: ndf.montantNuit,
      transport: ndf.transport,
      montantTransport: ndf.montantTransport,
      dateArrivee: ndf.dateArrivee,
      dateRetour: ndf.dateRetour,
      compagnie: ndf.compagnie,
      montantVoyage: ndf.montantVoyage,
      total: ndf.total,
      etat: ndf.etat,

    }, this.httpOptions);
  }


  findById(idNDF: any): Observable<any> {
    return this.http.get(`${API_URL + 'NDFByIdUser'}/${idNDF}`, this.httpOptions);
  }


  update(idNDF: any, NDFUpdate: any): Observable<any> {
    return this.http.put(`${API_URL + 'modifierNDF'}/${idNDF}`, {
      nom: NDFUpdate.nom,
      idNDF: NDFUpdate.idNDF,
      numMission: NDFUpdate.numMission,
      NbNuit: NDFUpdate.NbNuit,
      montantNuit: NDFUpdate.montantNuit,
      transport: NDFUpdate.transport,
      montantTransport: NDFUpdate.montantTransport,
      DateArrivee: NDFUpdate.DateArrivee,
      DateRetour: NDFUpdate.DateRetour,
      compagnie: NDFUpdate.compagnie,
      montantVoyage: NDFUpdate.montantVoyage,
      total: NDFUpdate.total,
      etat: NDFUpdate.etat,
    }, this.httpOptions);
  }

  delete(idNDF: any) {
    return this.http.delete(`${API_URL + 'DeleteNDF'}/${idNDF}`, this.httpOptions);
  }


}
