import { Component, NgModule } from '@angular/core';
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
import { DemandeNDFComponent } from './demande-ndf/demande-ndf.component';
import { ListeNDFComponent } from './liste-ndf/liste-ndf.component';
import { EditNDFComponent } from './edit-ndf/edit-ndf.component';
import { ViewNDFComponent } from './view-ndf/view-ndf.component';
import { ListemanagerComponent } from './listemanager/listemanager.component';
import { ListepaieComponent } from './listepaie/listepaie.component';
import { ListeprofilsComponent } from './listeprofils/listeprofils.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ajout', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'miss', component: DemandeMissionComponent},
  { path: 'listeprofils', component: BoardAdminComponent },
  { path: 'listeM', component: ListeDemandeComponent },
  { path: 'editM/:idmission', component: EditMissionComponent},
  { path: 'view/:idmission', component: ViewDemandeComponent},
  { path: 'NDF', component: DemandeNDFComponent},
  { path: 'listeNDF', component:ListeNDFComponent},
  { path: 'editNDF/:idNDF', component: EditNDFComponent},
  { path: 'viewNDF/:idNDF', component: ViewNDFComponent },
  { path: 'totalMission', component: ListemanagerComponent},
  { path: 'totalNDF', component: ListepaieComponent},
  { path: 'viewprofile/:id', component : ViewprofileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
