import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

import { Router } from '@angular/router';
import{ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showCollaborateurBoard = false;
  showManagerBoard = false;
  showAssistBoard = false;
  showPaieBoard = false;

  username?: string;

  constructor(private router: Router, private tokenStorageService: TokenStorageService) {}
  
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showCollaborateurBoard = this.roles.includes('ROLE_COLLABORATEUR');
      this.showManagerBoard = this.roles.includes('ROLE_MANAGER');
      this.showAssistBoard = this.roles.includes('ROLE_ASSIST');
      this.showPaieBoard = this.roles.includes('ROLE_PAIE');

      this.username = user.username;
    }
  }


  logout(event: MouseEvent){
    event.preventDefault();
    this.tokenStorageService.signOut();
    this.router.navigate(['/home'])
    window.location.reload();
  }
}
