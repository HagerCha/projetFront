import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { DemandeMissionComponent } from './demande-mission/demande-mission.component';
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { EditMissionComponent } from './edit-mission/edit-mission.component';
import { ViewDemandeComponent } from './view-demande/view-demande.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ajout', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'miss', component: DemandeMissionComponent},
  { path: 'profiles', component: BoardAdminComponent },
  { path: 'listeM', component: ListeDemandeComponent },
  { path: 'editM/:idmission', component: EditMissionComponent},
  { path: 'view/:idmission', component: ViewDemandeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
