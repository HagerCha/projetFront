import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";


import { DemandeMissionService } from '../_services/demande-mission.service';

@Component({
  selector: 'app-edit-mission',
  templateUrl: './edit-mission.component.html',
  styleUrls: ['./edit-mission.component.css']
})
export class EditMissionComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  iduser: any;
  
  errorMessage = '';
  idmission= '';
  mission: any;
  constructor(private router: Router, private  route: ActivatedRoute,private DemandeMissionService: DemandeMissionService ,
              ) {
                //this.idmission = this.route['params']['value']['id'];
                this.getById();

    
  }
  getById() {
    this.DemandeMissionService.findById(this.idmission).subscribe(data => {
      this.mission = data;
      console.log('dataById',this.mission)
      this.form = data;
      console.log(this.form);
    });

  }

  ngOnInit(): void {
   
  }
  onSubmit(): void {
    this.form.idmission = this.idmission;
    this.DemandeMissionService.update(this.idmission , this.form).subscribe(

      data => {
        console.log('melelkkk',data)

        this.router.navigate(['/listeM']);
      },
      err => {
        this.errorMessage = err.error.message;

      }
    );
  }
}
