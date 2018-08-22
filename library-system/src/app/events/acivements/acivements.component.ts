import { Component, OnInit,Input } from '@angular/core';

import { TeamCard } from "../shared/teamcard";
import { TeamCardService } from "../shared/teamcard.service";

@Component({
  selector: 'app-acivements',
  templateUrl: './acivements.component.html',
  styleUrls: ['./acivements.component.css'],
  providers:[TeamCardService]
})
export class AcivementsComponent implements OnInit {

  @Input() userIndex : string;
  constructor(private teamCardService : TeamCardService) { }

  ngOnInit() {
   
    this.teamCardService.getTeamCardByUserIndex( this.userIndex ).subscribe((res) => {
      this.teamCardService.teamCards = res as TeamCard[];
      
    });
  }

}
