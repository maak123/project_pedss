import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {IMyDrpOptions} from 'mydaterangepicker';

import { SubEventService } from '../shared/subevent.service';
import { EventService } from '../shared/event.service';
import { Event } from '../shared/event';
import { SubEvent } from '../shared/subevent';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subevent',
  templateUrl: './subevent.component.html',
  styleUrls: ['./subevent.component.css'],
  providers: [EventService,SubEventService]
})
export class SubeventComponent implements OnInit {

  @Input() showMe: boolean=true;
  @Input() showSubEventFormAndList: boolean=false;
  
  eventList: Event[];
  subEventList: SubEvent[];
  selectedEventInSubEvent : Event = new Event();
  sports = ["Elle","Cricket","Vollyball","Carrom"];
 

   myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'dd.mm.yyyy',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '34px',
        width: '260px',
        inline: false,
        alignSelectorRight: false,
        indicateInvalidDateRange: true
    };

    
    private model: any = {beginDate: {year: 2018, month: 10, day: 9},
                             endDate: {year: 2018, month: 10, day: 19}};

  constructor(private subEventService: SubEventService,private eventService: EventService,private tostr:ToastrService) { }

  ngOnInit() {
    this.resetForm(); 
    this.refreshEventList();
    this.refreshSubEventList();

  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.subEventService.selectedSubEvent = {
      _id : null,
	  subEventName : "",
	  subEventDesc : "",
	  eventId : null,
	  dateRange : null,
	  teamCardList : null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == null) {
      form.value.eventId= this.selectedEventInSubEvent._id;
      this.subEventService.postSubEvent(form.value).subscribe((res) => {
       
        this.resetForm(form);
        this.refreshSubEventList();
        this.tostr.success('Submitted Succcessfully', 'Sub Event Register');
        
      });
    }
    else {
      
      this.subEventService.putSubEvent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSubEventList();
        this.tostr.success('Updated Succcessfully', 'Sub Event Register');
      });
    }
    
  }

  addSubEvent(event : Event){
    this.resetForm();
    if (this.selectedEventInSubEvent._id != event._id || this.selectedEventInSubEvent._id==null){
      this.showSubEventFormAndList=true;
      
    }
    else{
      this.showSubEventFormAndList=!this.showSubEventFormAndList;
      
    }

    this.selectedEventInSubEvent=event;

  }

  refreshSubEventList() {
    this.subEventService.getSubEventList().subscribe((res) => {
      this.subEventService.subEvents = res as SubEvent[];
    });
  }
  

  refreshEventList() {
    this.eventService.getEventList().subscribe((res) => {
      this.eventService.events = res as Event[];
    });
  }

  onEdit(subEvent: SubEvent) {
    this.subEventService.selectedSubEvent = subEvent;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.subEventService.deleteSubEvent(_id).subscribe((res) => {
        this.refreshSubEventList();
        this.tostr.warning("Deleted Successfully", "Sub Event register");
      });
    }
  }
 


}
