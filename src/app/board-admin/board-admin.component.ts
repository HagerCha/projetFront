import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {AuthService} from "../_services/auth.service";
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { Router } from '@angular/router';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  listeProfile:any;

  constructor(private userService: UserService,private authService: AuthService, private router: Router) { }
  getall() {
    this.authService.getall().subscribe(
      data => {
        for (let i = 0; i < data.length; i++){
       // if(data.roles[0].name!="ROLE_ADMIN"){


        console.log('data',data)
        this.listeProfile=data
        }
     // }
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

  view(id:any){
    this.router.navigateByUrl('/viewprofile/'+id)
  }

  edit(id:any){
    this.router.navigateByUrl('/editProfil/'+id)
  }

  delete($id:any) {

    this.authService.delete($id).subscribe(data => {
      console.log('valide')

    });
    swal({
      icon: "success",
      text: 'Utilisateur supprimé',
    }).then(() => {
      window.location.reload();
  })
}




}
