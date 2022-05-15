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
      numMission!: number;
      nbNuit!: number ;
      montantNuit!: number;
      transport!:String ;
      montantTransport!: number;
      dateArrivee!: Date;
      dateRetour!:String ;
      compagnie!:String ;
      montantVoyage!: number;
      total!: number;
      etat!: String;

      basicForm!:FormGroup;
    
      idNDF! :number;
  mission: MissionNDFModule = new MissionNDFModule();
  
  constructor(private router: Router, private formbuilder:FormBuilder  ,
    private  route: ActivatedRoute,private DemandeNDFService: DemandeNDFService ,
  ) {

 }


  ngOnInit(): void {
    this.basicForm = this.formbuilder.group({
      nom: [null,Validators.required],
      numMission: [null ,Validators.required],
      nbNuit: [null,Validators.required],
      montantNuit: [null,Validators.required],
      transport: [null, Validators.required],
      montantTransport: [null, Validators.required],
      dateArrivee: [null, Validators.required],
      dateRetour: [null, Validators.required],
      compagnie: [null, Validators.required],
      montantVoyage: [null, Validators.required],
      total: [null,Validators.required],
      etat: [null,Validators.required],
      

    })

    this.idNDF = this.route.snapshot.params['idNDF'];
    this.DemandeNDFService.findById(this.idNDF).subscribe(data => {

      this.basicForm.controls.nom.setValue(data?.nom);
      this.basicForm.controls.numMission.setValue(data?.numMission);
      this.basicForm.controls.nbNuit.setValue(data?.nbNuit);
      this.basicForm.controls.montantNuit.setValue(data?.montantNuit);
      this.basicForm.controls.transport.setValue(data?.transport);
      this.basicForm.controls.montantTransport.setValue(data?.montantTransport);
      this.basicForm.controls.dateArrivee.setValue(data?.dateArrivee);
      this.basicForm.controls.dateRetour.setValue(data?.dateRetour);
      this.basicForm.controls.compagnie.setValue(data?.compagnie);
      this.basicForm.controls.montantVoyage.setValue(data?.montantVoyage);
      this.basicForm.controls.total.setValue(data?.total);
      this.basicForm.controls.etat.setValue(data?.etat);

    })

  }

}
