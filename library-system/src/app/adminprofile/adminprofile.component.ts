import { Component, OnInit } from '@angular/core';

import {TeamCaptain} from '../users/teamcaptain/shared/teamcaptain';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  private showUsers : boolean = false;
  private showEvents : boolean= false;
  private showRegisterMembers : boolean= false;
  private showTeamCard : boolean = false; 
  private showCreateTeamCaptain : boolean =false;
  private showSubEvent : boolean = false;
  private showViewTeamCard : boolean = false;
  private showSport : boolean = false;
  private showViewResult : boolean= false;
  private showSubmitResults : boolean= false;

  //tempary object
  private tempTeamCaptain : TeamCaptain = {
      _id : "fvjrhebk",
      userId : "rvnjrnj",
      faculty : "fjevejnv",
      indexNo : "vnjfn",
      subEventId : "5b4342e900218f21745d2654",
      teamCardId :  "vnjrnj",
      isSubmitted : false

      };

  constructor() { }

  ngOnInit() {
  }


  

}
