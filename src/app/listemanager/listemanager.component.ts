import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { MissionModel } from '../models/mission.model';
import { DemandeMissionService } from '../_services/demande-mission.service';

@Component({
  selector: 'app-listemanager',
  templateUrl: './listemanager.component.html',
  styleUrls: ['./listemanager.component.css']
})
export class ListemanagerComponent implements OnInit {
  basicForm!:FormGroup;
  submitted = false;

  constructor(private DemandeMissionService: DemandeMissionService, private formbuilder:FormBuilder, private router: Router, ) {
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

  /*onSubmit(): void {

    this.submitted = true;
    let data = {
      etat: this.basicForm.value.etat,
    }
  
  this.DemandeMissionService.add(data).subscribe(
    data => {

    });
  }*/

view(idmission:any){
  this.router.navigateByUrl('/view/'+idmission)
}

delete($idMission:any) {
    this.DemandeMissionService.delete($idMission).subscribe(data => {

    });
    swal({
      icon: "success",
      text: 'Demande de mission supprimée',
    }).then(() => {
      window.location.reload();
  })
  window.location.reload();

  }


}
