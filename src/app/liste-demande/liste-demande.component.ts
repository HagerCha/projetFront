import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../_services/token-storage.service";

import {DemandeMissionService} from "../_services/demande-mission.service";


@Component({
  selector: 'app-liste-demande',
  templateUrl: './liste-demande.component.html',
  styleUrls: ['./liste-demande.component.css']
})
export class ListeDemandeComponent implements OnInit {

  constructor(private DemandeMissionService: DemandeMissionService ,private tokenStorage: TokenStorageService) {
    this.getall();
  }
  username: any;
  user: any;
  mission:any
  ngOnInit(): void {
    this.getall();
  }
  getall() {

    this.DemandeMissionService.getall().subscribe(
      data => {
        console.log('melek', data);
        this.mission = data;
      });

  }

}
