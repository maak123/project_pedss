import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {IMyDrpOptions} from 'mydaterangepicker';

import { EventService } from '../shared/event.service';
import { Event } from '../shared/event';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers:[EventService]
})
export class EventComponent implements OnInit {
  eventList:Event[];

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

    
    

  constructor(private eventService: EventService,private tostr:ToastrService) { }

  private model: any = {beginDate: {year: 2018, month: 10, day: 9},
                             endDate: {year: 2018, month: 10, day: 19}};



  ngOnInit() {
    this.resetForm();
    this.refreshEventList();
    
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.eventService.selectedEvent = {
      _id : null,
      eventName : "",
      eventDesc : "",
      status : "",
      dateRange :this.model

    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == null) {
      
      this.eventService.postEvent(form.value).subscribe((res) => {
       
        this.resetForm(form);
        this.refreshEventList();
        this.tostr.success('Submitted Succcessfully', 'Event Register');
        
      });
    }
    else {
      
      this.eventService.putEvent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEventList();
        this.tostr.success('Updated Succcessfully', 'Event Register');
      });
    }
    
  }

   refreshEventList() {
    this.eventService.getEventList().subscribe((res) => {
      this.eventService.events = res as Event[];
    });
  }

   onEdit(event: Event) {
    this.eventService.selectedEvent = event;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.eventService.deleteEvent(_id).subscribe((res) => {
        this.refreshEventList();
        this.tostr.warning("Deleted Successfully", "Event register");
      });
    }
  }

 

  
  
}
