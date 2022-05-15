import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as swal from 'sweetalert';
import { MissionNDFModule } from '../models/mission-ndf.module';
import { DemandeNDFService } from '../_services/demande-ndf.service';

@Component({
  selector: 'app-listepaie',
  templateUrl: './listepaie.component.html',
  styleUrls: ['./listepaie.component.css']
})
export class ListepaieComponent implements OnInit {

  constructor(private DemandeNDFService: DemandeNDFService ,private router: Router, ) {
    this.getall();
  }
  NDFs: MissionNDFModule []= [];
  username: any;
  user: any;
  NDF:any ;
  ngOnInit(): void {
    this.getall();
  }

  getall() {
    this.DemandeNDFService.getall().subscribe(
      data => {
                this.NDFs = data;
      });
  }

view(idNDF:any){
  this.router.navigateByUrl('/viewNDF/'+idNDF)
}

delete($idNDF:any) {
    this.DemandeNDFService.delete($idNDF).subscribe(data => {

    });
    /*swal({
      icon: "success",
      text: 'Demande de note de frais supprimée',
    }).then(() => {
      window.location.reload();
  })*/
  window.location.reload();

  }


}
