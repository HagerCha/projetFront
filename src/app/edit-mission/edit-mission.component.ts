import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {DemandeMissionComponent} from "../demande-mission/demande-mission.component";

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
  concour: any;
  errorMessage = '';
  idmission= '';
  mission: any;
  constructor(private router: Router, private  route: ActivatedRoute
              ,private DemandeMissionService: DemandeMissionComponent) {

    //this.idmission = this.route['params']['value']['id'];
  }


  ngOnInit(): void {
  }

}
