import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }


  

}
