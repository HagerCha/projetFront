import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';
import { UserModel } from '../models/user.model';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

    nom!:String ;
    prenom!:String;
    passport!: String;
    email!:String;
    password!:String;
    username!:String;

    basicForm!:FormGroup;
  
    id! :number;
    user: UserModel = new UserModel();
    
    constructor(private router: Router, private formbuilder:FormBuilder,
      private  route: ActivatedRoute,private Authservice: AuthService)
      {
        
      }
  
  
    ngOnInit(): void {
      this.basicForm = this.formbuilder.group({
        nom: [null,Validators.required],
        prenom: [null ,Validators.required],
        passport: [null,Validators.required],
        email: [null, Validators.required],
        password: [null, Validators.required],
        username: [null, Validators.required],

      })
  
      this.id = this.route.snapshot.params['id'];
      this.Authservice.findById(this.id).subscribe(data => {
  
        this.basicForm.controls.nom.setValue(data?.nom);
        this.basicForm.controls.prenom.setValue(data?.prenom);
        this.basicForm.controls.passport.setValue(data?.passport);
        this.basicForm.controls.email.setValue(data?.email);
  
      })
  
    }
   onSubmit(){
    this.user= {
  
        nom: this.basicForm.controls.nom.value,
        prenom: this.basicForm.controls.prenom.value,
        passport: this.basicForm.controls.passport.value,
        email: this.basicForm.controls.email.value,
      };
  
  
      this.Authservice.update(this.id,this.user).subscribe(
        data=>{

        swal({
          title: 'Succès',
          text: 'Modification(s) enregistrée(s)',
          icon: "success",
        }).then(() => {
          window.location.reload();
        })
      });
  
    
  }

}