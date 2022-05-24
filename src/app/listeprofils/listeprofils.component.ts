import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-listeprofils',
  templateUrl: './listeprofils.component.html',
  styleUrls: ['./listeprofils.component.css']
})
export class ListeprofilsComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService,private authService: AuthService) { }
  ngOnInit(): void {
  }
  getall() {
    this.authService.getall().subscribe(
      data => {


        console.log('data',data)
        //if(this.missions.id)
      });
  }

}
