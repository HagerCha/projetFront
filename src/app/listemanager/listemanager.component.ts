import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as swal from 'sweetalert';
import Swal from 'sweetalert2';
import { MissionModel } from '../models/mission.model';
import { DemandeMissionService } from '../_services/demande-mission.service';

@Component({
  selector: 'app-listemanager',
  templateUrl: './listemanager.component.html',
  styleUrls: ['./listemanager.component.css']
})
export class ListemanagerComponent implements OnInit {

  constructor(private DemandeMissionService: DemandeMissionService ,private router: Router, ) {
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
      
        this.missions = data;
        console.log('data',data)
        //if(this.missions.id)
      });
  }

view(idmission:any){
  this.router.navigateByUrl('/view/'+idmission)
}

delete($idMission:any) {
    this.DemandeMissionService.delete($idMission).subscribe(data => {

    });
    /*swal({
      icon: "success",
      text: 'Demande de mission supprimée',
    }).then(() => {
      window.location.reload();
  })*/
  window.location.reload();

  }


}
