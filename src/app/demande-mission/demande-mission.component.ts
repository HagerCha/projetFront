import { Component, OnInit } from '@angular/core';
import {DemandeMissionService} from "../_services/demande-mission.service";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TokenStorageService} from "../_services/token-storage.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MissionModel} from "../models/mission.model";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import { timer } from 'rxjs';
import swal from 'sweetalert';



@Component({
  selector: 'app-demande-mission',
  templateUrl: './demande-mission.component.html',
  styleUrls: ['./demande-mission.component.css']
})
export class DemandeMissionComponent implements OnInit {
  basicForm!:FormGroup;



  constructor(private DemandeMissionService: DemandeMissionService ,private tokenStorage: TokenStorageService
              , private formbuilder:FormBuilder , private router:Router ) {


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
      etat: ['en attend', Validators.required],

  })

  }
  get f(){
    return this.basicForm.controls;
  }
  onSubmit(): void {
    let data = {
      nom: this.basicForm.value.nom,
      passport: this.basicForm.value.passport,
      dateDeDebut: this.basicForm.value.dateDeDebut,
      dateDeFin: this.basicForm.value.dateDeFin,
      description: this.basicForm.value.description,
      pays: this.basicForm.value.pays,
      ville: this.basicForm.value.ville,
      etat: this.basicForm.value.etat,




    }
    this.DemandeMissionService.add(data).subscribe(
      data => {
        console.log('melekaddd', data);

      });
      swal({
        icon: "success",
      }).then(() => {
        window.location.reload();
    })







  }

}
