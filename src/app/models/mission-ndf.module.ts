import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Validators} from "@angular/forms";




export class MissionNDFModule {

	nom?: String ;
  	idNDF?: String;
	numMission?: String;
  	nbNuit?: number
	montantNuit?: number;
	montantDP?: number;
	montantPC?: number;
  	transport?: String;
	montantTransport?: number;
	dateArrivee?: Date;
	dateRetour?: Date;
	compagnie?: String;
	montantVoyage?: number;
 }
