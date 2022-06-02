import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import swal from 'sweetalert';



import { DemandeMissionService } from '../_services/demande-mission.service';
import {MissionModel} from "../models/mission.model";
import {MissionModule} from "../app/models/mission/mission.module";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-mission',
  templateUrl: './edit-mission.component.html',
  styleUrls: ['./edit-mission.component.css']
})
export class EditMissionComponent implements OnInit {
  nom!:String ;

  passport!: String;
  dateDeDebut!: Date ;
  description!: String;
  dateDeFin!: Date;
  pays!: String ;
  ville!: String ;
  etat!: String;

  basicForm!:FormGroup;

  idmission! :number;
  mission: MissionModel = new MissionModel();
  
  constructor(private router: Router, private formbuilder:FormBuilder,
    private  route: ActivatedRoute,private DemandeMissionService: DemandeMissionService ,)
    {
      
    }


  ngOnInit(): void {
    this.basicForm = this.formbuilder.group({
      nom: [null,Validators.required],
      passport: [null ,Validators.required],
      dateDeDebut: [null,Validators.required],
      description: [null,Validators.required],
      dateDeFin: [null, Validators.required],
      pays: [null, Validators.required],
      ville: [null, Validators.required],
      etat: [null, Validators.required],
    })

    this.idmission = this.route.snapshot.params['idmission'];
    this.DemandeMissionService.findById(this.idmission).subscribe(data => {

      this.basicForm.controls.nom.setValue(data?.nom);
      this.basicForm.controls.passport.setValue(data?.passport);
      this.basicForm.controls.dateDeDebut.setValue(data?.dateDeDebut);
      this.basicForm.controls.description.setValue(data?.description);
      this.basicForm.controls.dateDeFin.setValue(data?.dateDeFin);
      this.basicForm.controls.pays.setValue(data?.pays);
      this.basicForm.controls.ville.setValue(data?.ville);
      this.basicForm.controls.etat.setValue(data?.etat);

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


    this.DemandeMissionService.update(this.idmission,this.mission).subscribe(
      data=>{
    swal({
    title: 'Succès',
    text: 'Demande de mission mise à jour',
    icon: "success",
      })
    });
    this.router.navigateByUrl("listeM");

  
}
 }
