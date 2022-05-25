import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() data :any
  currentUser: any;
  currentUsers: any;
  id : any;

  constructor(private authService: AuthService, private token: TokenStorageService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.authService.findById(this.id).subscribe(data => {
      console.log('databyid', data)

      /*this.basicForm.controls.nom.setValue(data?.nom);
      this.basicForm.controls.passport.setValue(data?.passport);
      this.basicForm.controls.dateDeDebut.setValue(data?.dateDeDebut);
      this.basicForm.controls.description.setValue(data?.description);
      this.basicForm.controls.dateDeFin.setValue(data?.dateDeFin);

      this.basicForm.controls.pays.setValue(data?.pays);
      this.basicForm.controls.ville.setValue(data?.ville);
      this.basicForm.controls.etat.setValue(data?.etat);*/

    })

    

console.log('data',this.data)
    this.currentUser = this.token.getUser();
    console.log(this.currentUser)
    this.currentUsers = this.token.saveUser;
    console.log(this.currentUsers)

  }

  
}
