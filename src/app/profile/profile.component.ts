import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService, private token: TokenStorageService) { }

  ngOnInit(): void {

    

console.log('data',this.data)
    this.currentUser = this.token.getUser();
    console.log(this.currentUser)
    this.currentUsers = this.token.saveUser;
    console.log(this.currentUsers)

  }

  
}
