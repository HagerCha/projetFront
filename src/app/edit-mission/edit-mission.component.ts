import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";


import { DemandeMissionService } from '../_services/demande-mission.service';
import {MissionModel} from "../models/mission.model";
import {MissionModule} from "../app/models/mission/mission.module";
import {FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-mission',
  templateUrl: './edit-mission.component.html',
  styleUrls: ['./edit-mission.component.css']
})
export class EditMissionComponent implements OnInit {
  nom!:String ;

  passport!: String;
  dateDeDebut!:Date ;
  description!: String;
  dateDeFin!: Date;

  pays!:String ;
  ville!:String ;
  etat!: String;



  basicForm!:NgForm;


  idmission! :number;


  mission: MissionModel = new MissionModel();
  constructor(private router: Router, private  route: ActivatedRoute,private DemandeMissionService: DemandeMissionService ,
              ) {



  }


  ngOnInit(): void {
    this.idmission = this.route.snapshot.params['idmission'];
    this.DemandeMissionService.findById(this.idmission).subscribe(data => {
      this.mission = data;
      console.log("mission à modifier==>", this.mission);
    })





  }
 onSubmit(){
  console.log('iopfyff',this.mission);
  this.mission= {



      nom: this.basicForm.controls.nom.value,
      passport: this.basicForm.controls.passport.value,
      dateDeDebut: this.basicForm.controls.dateDeDebut.value,
      dateDeFin: this.basicForm.controls.dateDeFin.value,
      description: this.basicForm.controls.description.value,
      pays: this.basicForm.controls.pays.value,
      ville: this.basicForm.controls.ville.value,
      etat: this.basicForm.controls.etat.value,



    };
    

    this.DemandeMissionService.update(this.mission,this.idmission).subscribe(
      data=>{
    console.log("mission après modification",data)
  },error=>{
    console.log(error)
  });
  }
  

}
