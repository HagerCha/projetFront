import {Validators} from "@angular/forms";

export class MissionModel {
  idMission?: number;

  nom?: String;

  passport?: String;
  dateDeDebut?: Date;
  description?: String;
  dateDeFin?: Date;

  pays?: String;
  ville?: String;
  etat?: String;
}
