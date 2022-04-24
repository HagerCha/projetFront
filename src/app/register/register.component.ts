import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    nom: null,
    email: null,
    password: null,
    passport:null,
    prenom:null,
    role:null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    const { nom, email, password ,passport,prenom,role} = this.form;
    console.log('data',this.form)

   this.authService.register(nom, email,password,passport,prenom,role).subscribe(

      data => {
        console.log('melek',data.roles[0].name);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
