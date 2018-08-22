import { Component, OnInit,Input } from '@angular/core';

import { TeamCard } from "../../shared/teamcard";
import { TeamCardService } from "../../shared/teamcard.service";
@Component({
  selector: 'app-viewteamcardbyid',
  templateUrl: './viewteamcardbyid.component.html',
  styleUrls: ['./viewteamcardbyid.component.css'],
  providers:[TeamCardService]
})
export class ViewteamcardbyidComponent implements OnInit {
  
  @Input() teamcardId : string;
  constructor(private teamCardService : TeamCardService) { }

  ngOnInit() {
    console.log(this.teamcardId);
    this.teamCardService.getTeamCard(this.teamcardId).subscribe((res) => {
      this.teamCardService.selectedTeamCard = res as TeamCard;
    });
  }

  onDelete(_id : string){
     this.teamCardService.deleteTeamCard(_id).subscribe((res) => {
      console.log("deleted");
    });
  }

}
