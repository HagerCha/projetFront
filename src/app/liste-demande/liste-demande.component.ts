import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../_services/token-storage.service";
import Swal from 'sweetalert2';
import {DemandeMissionService} from "../_services/demande-mission.service";
import {MissionModel} from "../models/mission.model";


@Component({
  selector: 'app-liste-demande',
  templateUrl: './liste-demande.component.html',
  styleUrls: ['./liste-demande.component.css']
})
export class ListeDemandeComponent implements OnInit {

  constructor(private DemandeMissionService: DemandeMissionService ,private tokenStorage: TokenStorageService) {
    this.getall();
  }
  missions: MissionModel []= [];
  username: any;
  user: any;
  mission:any ;
  ngOnInit(): void {
    this.getall();
  }
  getall() {

    this.DemandeMissionService.getall().subscribe(
      data => {
        console.log('melek', data);
        this.missions = data;
      });

  }



 /* deleteMission(id:any){
    this.DemandeMissionService.delete(id).subscribe(res => {
      this.missions=this.missions.filter(item => item.id !== id);

      console.log('Mission deleted successfully!');

    });
    Swal.fire(
      'Supprimé',
      'Mission supprimé avec succès',
      'success'
    );

  }*/
  delete($idMission:any) {
    this.DemandeMissionService.delete($idMission).subscribe(data => {

    });
    Swal.fire(
      'Supprimé',
      'Commande supprimé avec succès',
      'success'
    );
    window.location.reload();

  }
}
