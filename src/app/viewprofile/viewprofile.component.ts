import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  currentUser: any;
  currentUsers: any;
  id : any;
  constructor(private authService: AuthService, private token: TokenStorageService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.authService.findById(this.id).subscribe(data => {
      console.log('databyid', data)
      this.currentUser=data;


      /*this.basicForm.controls.nom.setValue(data?.nom);
      this.basicForm.controls.passport.setValue(data?.passport);
      this.basicForm.controls.dateDeDebut.setValue(data?.dateDeDebut);
      this.basicForm.controls.description.setValue(data?.description);
      this.basicForm.controls.dateDeFin.setValue(data?.dateDeFin);

      this.basicForm.controls.pays.setValue(data?.pays);
      this.basicForm.controls.ville.setValue(data?.ville);
      this.basicForm.controls.etat.setValue(data?.etat);*/

    })

}
}
