import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";


import { DemandeMissionService } from '../_services/demande-mission.service';

@Component({
  selector: 'app-edit-mission',
  templateUrl: './edit-mission.component.html',
  styleUrls: ['./edit-mission.component.css']
})
export class EditMissionComponent implements OnInit {
 // @ts-ignore
 basicForm:FormGroup;
 

  idmission= '';
  mission: any;
  constructor(private router: Router, private  route: ActivatedRoute,private DemandeMissionService: DemandeMissionService ,
              ) {
                //this.idmission = this.route['params']['value']['id'];
               // this.getById();

    
  }
 

  ngOnInit(): void {
    this.idmission = this.route.snapshot.params['idmission'];
    this.DemandeMissionService.findById(this.idmission).subscribe(data => {
      this.mission = data;
      console.log("mission à modifier==>", this.mission);
    })
   


  }
  onSubmit(){
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
    console.log(this.mission);
  
    this.DemandeMissionService.update(this.mission,this.idmission).subscribe(
      data=>{
    console.log("mission après modification",data)
  },error=>{
    console.log(error)
  });
  }
  
  
}
