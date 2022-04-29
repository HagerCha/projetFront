import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import swal from 'sweetalert';

import Swal from 'sweetalert2';
import { MissionNDFModule } from '../models/mission-ndf.module';
import { DemandeNDFService } from '../_services/demande-ndf.service';

@Component({
  selector: 'app-liste-ndf',
  templateUrl: './liste-ndf.component.html',
  styleUrls: ['./liste-ndf.component.css']
})
export class ListeNDFComponent implements OnInit {

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
        console.log('data',data)
        //if(this.NDFs.id)
      });
  }


edit(idNDF:any){
    this.router.navigateByUrl('/editNDF/'+idNDF)
}
view(idNDF:any){
  this.router.navigateByUrl('/viewNDF/'+idNDF)
}

delete($idNDF:any) {
    this.DemandeNDFService.delete($idNDF).subscribe(data => {

    });
    swal({
      icon: "success",
    }).then(() => {
      window.location.reload();
  })
  }


}
