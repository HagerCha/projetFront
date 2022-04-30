import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as swal from 'sweetalert';
import { MissionModel } from '../models/mission.model';
import { DemandeMissionService } from '../_services/demande-mission.service';

@Component({
  selector: 'app-view-demande',
  templateUrl: './view-demande.component.html',
  styleUrls: ['./view-demande.component.css']
})
export class ViewDemandeComponent implements OnInit {

  nom!:String ;
  passport!: String;
  dateDeDebut!:Date ;
  description!: String;
  dateDeFin!: Date;
  pays!:String ;
  ville!:String ;
  etat!: String;

  basicForm!:FormGroup;

  idmission! :number;
  mission: MissionModel = new MissionModel();
  constructor(private router: Router, private formbuilder:FormBuilder  ,private  route: ActivatedRoute,private DemandeMissionService: DemandeMissionService ,
              ) {

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
      etat: ['En attente', Validators.required],
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


   

  
}
