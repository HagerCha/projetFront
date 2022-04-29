import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionNDFModule } from '../models/mission-ndf.module';
import { DemandeNDFService } from '../_services/demande-ndf.service';

@Component({
  selector: 'app-view-ndf',
  templateUrl: './view-ndf.component.html',
  styleUrls: ['./view-ndf.component.css']
})
export class ViewNDFComponent implements OnInit {

  nom!:String ;

  passport!: String;
  dateDeDebut!:Date ;
  description!: String;
  dateDeFin!: Date;
  pays!:String ;
  ville!:String ;
  etat!: String;

  basicForm!:FormGroup;

  idNDF! :number;
  mission: MissionNDFModule = new MissionNDFModule();
  constructor(private router: Router, private formbuilder:FormBuilder  ,private  route: ActivatedRoute,private DemandeNDFService: DemandeNDFService ,
              ) {

 }


  ngOnInit(): void {
    this.basicForm = this.formbuilder.group({
      nom: [null,Validators.required],
      numNDF: [null ,Validators.required],
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

    this.idNDF = this.route.snapshot.params['idNDF'];
    this.DemandeNDFService.findById(this.idNDF).subscribe(data => {

      this.basicForm.controls.nom.setValue(data?.nom);
      this.basicForm.controls.numMission.setValue(data?.numMission);
      this.basicForm.controls.nbNuit.setValue(data?.nbNuit);
      this.basicForm.controls.montantNuit.setValue(data?.montantNuit);
      this.basicForm.controls.montantDP.setValue(data?.montantDP);
      this.basicForm.controls.montantPC.setValue(data?.montantPC);
      this.basicForm.controls.transport.setValue(data?.transport);
      this.basicForm.controls.montantTransport.setValue(data?.montantTransport);
      this.basicForm.controls.dateArrivee.setValue(data?.dateArrivee);
      this.basicForm.controls.dateRetour.setValue(data?.dateRetour);
      this.basicForm.controls.compagnie.setValue(data?.compagnie);
      this.basicForm.controls.montantVoyage.setValue(data?.montantVoyage);

    })

  }

}
