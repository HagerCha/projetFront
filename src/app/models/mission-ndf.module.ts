import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Validators} from "@angular/forms";




export class MissionNDFModule {

	nom?: String ;
  	idNDF?: String;
	numMission?: number;
  	nbNuit?: number
	montantNuit?: number;
	transport?: String;
	montantTransport?: number;
	dateArrivee?: Date;
	dateRetour?: Date;
	compagnie?: String;
	montantVoyage?: number;
	total!: number;
    etat!: String;

 }
