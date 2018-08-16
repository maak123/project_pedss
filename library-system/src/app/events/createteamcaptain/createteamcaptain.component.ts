import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EventService } from '../shared/event.service';
import { Event } from '../shared/event';
import { SubEventService } from '../shared/subevent.service';
import { SubEvent } from '../shared/subevent';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../users/shared/user';
import { UserService } from '../../users/shared/user.service';
import { TeamCard } from '../shared/teamcard';
import { TeamCardService } from '../shared/teamcard.service';

@Component({
  selector: 'app-createteamcaptain',
  templateUrl: './createteamcaptain.component.html',
  styleUrls: ['./createteamcaptain.component.css'],
  providers:[EventService,SubEventService,UserService,TeamCardService]
})
export class CreateteamcaptainComponent implements OnInit {


  showSubEventList: boolean = false;
  showUserFormAndList : boolean = false;
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

  addTeamCard(subevent : SubEvent ){

    this.showUserFormAndList = !this.showUserFormAndList;
    this.selectedSubEvent = subevent;

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
}
