import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DemandeMissionComponent } from './demande-mission/demande-mission.component';
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { EditMissionComponent } from './edit-mission/edit-mission.component';
import { ViewDemandeComponent } from './view-demande/view-demande.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    DemandeMissionComponent,
    ListeDemandeComponent,
    EditMissionComponent,
    ViewDemandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
