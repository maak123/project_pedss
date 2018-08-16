import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { EventService } from '../shared/event.service';
import { Event } from '../shared/event';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css'],
  providers:[EventService]
})
export class EventlistComponent implements OnInit {

  eventList : Event[];

  constructor(private eventService : EventService,private tostr : ToastrService) { }

  ngOnInit() {
    this.refreshEventList();
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

