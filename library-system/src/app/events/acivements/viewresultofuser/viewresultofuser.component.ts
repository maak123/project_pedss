import { Component, OnInit,Input } from '@angular/core';

import { Result} from '../../shared/result';
import { ResultService } from '../../shared/result.service';

@Component({
  selector: 'app-viewresultofuser',
  templateUrl: './viewresultofuser.component.html',
  styleUrls: ['./viewresultofuser.component.css'],
  providers: [ResultService]
})
export class ViewresultofuserComponent implements OnInit {
   
  @Input() teamCardId : string;
  isUserHavePlaces : boolean = false;
  
  constructor(private resultService : ResultService) { }

  ngOnInit() {
     this.resultService.getResultByTeamCardId(this.teamCardId).subscribe((res) => {
      
      this.resultService.results = res as Result[];
      console.log(this.resultService.results);
    });
  }
  
  
  

}
