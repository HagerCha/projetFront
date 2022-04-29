import { Component, OnInit } from '@angular/core';
import {DemandeNDFService} from "../_services/demande-ndf.service";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TokenStorageService} from "../_services/token-storage.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import { timer } from 'rxjs';
import swal from 'sweetalert';



@Component({
  selector: 'app-demande-NDF',
  templateUrl: './demande-NDF.component.html',
  styleUrls: ['./demande-NDF.component.css']
})
export class DemandeNDFComponent implements OnInit {
  basicForm!:FormGroup;



  constructor(private DemandeNDFService: DemandeNDFService ,private tokenStorage: TokenStorageService
              , private formbuilder:FormBuilder , private router:Router ) {


  }

  ngOnInit(): void {

   this.basicForm = this.formbuilder.group({
      nom: [null,Validators.required],
      numMission: [null ,Validators.required],
      nbNuit: [null,Validators.required],
      montantNuit: [null,Validators.required],
      montantDP: [null, Validators.required],
      montantPC: [null, Validators.required],
      transport: [null, Validators.required],
      montantTransport: [null, Validators.required],
      dateArrivee: [null, Validators.required],
      dateRetour: [null, Validators.required],
      compagnie: [null, Validators.required],
      montantVoyage: [null, Validators.required],

  })

  }
  get f(){
    return this.basicForm.controls;
  }
  onSubmit(): void {
    let data = {
      nom: this.basicForm.value.nom,
      numMission: this.basicForm.value.numMission,
      nbNuit: this.basicForm.value.nbNuit,
      montantNuit: this.basicForm.value.montantNuit,
      montantDP: this.basicForm.value.montantDP,
      montantPC: this.basicForm.value.montantPC,
      transport: this.basicForm.value.transport,
      montantTransport: this.basicForm.value.montantTransport,
      dateArrivee: this.basicForm.value.dateArrivee,
      dateRetour: this.basicForm.value.dateRetour,
      compagnie: this.basicForm.value.compagnie,
      montantVoyage: this.basicForm.value.montantVoyage,
      

    }
    console.log('nbNuit: this.basicForm.value.NbNuit,', this.basicForm.value.nbNuit,)
    this.DemandeNDFService.add(data).subscribe(
      data => {

        console.log('data', data)
      });
      swal({
        title: 'Succès',
        text: 'Demande de NDF enregistré',
        icon: "success",
      }).then(() => {
        window.location.reload();
    })


  }

}
