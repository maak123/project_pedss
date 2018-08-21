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

@Component({
  selector: 'app-viewteamcard',
  templateUrl: './viewteamcard.component.html',
  styleUrls: ['./viewteamcard.component.css'],
  providers:[EventService,SubEventService,UserService,TeamCardService]
})
export class ViewteamcardComponent implements OnInit {

  
  showSubEventList: boolean = false;
  showEnterResults : boolean = false;
  eventList : Event[];
  subEventList : SubEvent[];
  userIndexList : string[];
  userList : User[];
  selectedEventId : string= null;
  selectedSubEvent : SubEvent;
  selectedTeamCard : TeamCard;
  

  constructor(private eventService : EventService,private tostr : ToastrService,private subEventService : SubEventService,private userService : UserService,private teamCardService : TeamCardService) { }

  ngOnInit() {

    this.refreshEventList();
    this.refreshSubEventList();
    this.resetForm();
  	
  }


  viewSubEvents(event : Event){

    if(this.selectedEventId != event._id || this.selectedEventId==null){
      this.showSubEventList= true;
    }
    else{
      this.showSubEventList=!this.showSubEventList;
    }

    this.selectedSubEvent = null;
    this.selectedEventId = event._id;

  }

  enterResults(subevent : SubEvent ){

    this.showEnterResults = true;
    this.selectedSubEvent = subevent;
    this.teamCardService.getTeamCardListBySubEvent(subevent._id).subscribe((res) => {
      this.teamCardService.teamCards = res as TeamCard[];
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
    this.userService.selectedUser={
      _id :null,
      name :"",
      regNo : ""  ,
      indexNo : "",
      password : "",
      nic : "" ,
      telephone : null ,
      email : "" ,
      positions:"",
      sport:"" ,
      faculty:""
  }
    
  }

  

  onSubmit(form: NgForm) {
    if (form.value._id == null) {
      this.userIndexList.push(form.value.indexNo as string);
      this.userService.postUser(form.value).subscribe((res) => {
        this.resetForm(form);
        
        this.tostr.success('Submitted Succcessfully', 'User Register');
      });
    }
    else {
      this.userService.putUser(form.value).subscribe((res) => {
        this.resetForm(form);
        
        this.tostr.success('Updated Succcessfully', 'User Register');
      });


    }
  }

  onDelete(_id : string){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.teamCardService.deleteTeamCard(_id).subscribe((res) => {
        this.teamCardService.getTeamCardList().subscribe((res) => {
          this.teamCardService.teamCards = res as TeamCard[];
        });
        this.tostr.warning("Deleted Successfully", "Team Card register");
      });
    }
  }

  onSelectTeamCard(teamcard : TeamCard){
     this.teamCardService.selectedTeamCards.push(teamcard);
     this.tostr.success(teamcard.faculty+'team Added to result panel', 'sub event results');
  }
}
