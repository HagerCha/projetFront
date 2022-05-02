import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService,private authService: AuthService) { }
  getall() {
    this.authService.getall().subscribe(
      data => {


        console.log('data',data)
        //if(this.missions.id)
      });
  }


  ngOnInit(): void {
   /* this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );*/
    this.getall();
  }



}
