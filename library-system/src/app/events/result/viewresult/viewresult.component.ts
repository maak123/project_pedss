import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EventService } from '../../shared/event.service';
import { Event } from '../../shared/event';
import { SubEventService } from '../../shared/subevent.service';
import { SubEvent } from '../../shared/subevent';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../users/shared/user';
import { UserService } from '../../../users/shared/user.service';
import { TeamCard } from '../../shared/teamcard';
import { TeamCardService } from '../../shared/teamcard.service';
import { ResultService } from '../../shared/result.service';
import { Result } from '../../shared/result';

@Component({
  selector: 'app-viewresult',
  templateUrl: './viewresult.component.html',
  styleUrls: ['./viewresult.component.css'],
  providers:[EventService,SubEventService,UserService,TeamCardService,ResultService]
})
export class ViewresultComponent implements OnInit {
    
    showSubEventList: boolean = false;
    showEnterResults : boolean = false;
    eventList : Event[];
    subEventList : SubEvent[];
    userIndexList : string[];
    userList : User[];
    selectedEventId : string= null;
    selectedSubEvent : SubEvent;
    selectedTeamCard : TeamCard;
    
    constructor(private eventService : EventService,private tostr : ToastrService,private subEventService : SubEventService,private userService : UserService,private teamCardService : TeamCardService,private resultService : ResultService) { }
  
    ngOnInit() {
  
      this.refreshEventList();
      this.refreshSubEventList();
      //this.resetForm();
      
    }
  
  
    viewSubEvents(event : Event){
  
      if(this.selectedEventId != event._id || this.selectedEventId==null){
        this.showSubEventList= true;
      }
      else{
        this.showSubEventList = !this.showSubEventList;
      }
  
      this.selectedSubEvent = null;
      this.selectedEventId = event._id;
  
    }
  
    viewResults(subevent : SubEvent ){
  
      this.showEnterResults = true;
      this.selectedSubEvent = subevent;
      this.teamCardService.getTeamCardListBySubEvent(subevent._id).subscribe((res) => {
        this.teamCardService.teamCards = res as TeamCard[];
        
      });

      this.resultService.getResultListBySubEvent(subevent._id).subscribe((res) => {
        this.resultService.results = res as Result[];
        
      });
  
    }
     
     refreshEventList() {
      this.eventService.getEventList().subscribe((res) => {
        this.eventService.events = res as Event[];
      });
    }
  
    refreshSubEventList() {
      this.subEventService.getSubEventList().subscribe((res) => {
        this.subEventService.subEvents = res as SubEvent[];
      });
    }
  
  
    resetForm(form?: NgForm) {
      if (form)
        form.reset();
      
      
    }


  
   
}
  
