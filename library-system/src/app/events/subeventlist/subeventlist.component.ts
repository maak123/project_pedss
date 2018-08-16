import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SubEventService } from '../shared/subevent.service';
import { SubEvent } from '../shared/subevent';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-subeventlist',
  templateUrl: './subeventlist.component.html',
  styleUrls: ['./subeventlist.component.css']
})
export class SubeventlistComponent implements OnInit {

 @Input() selectedEventId: string = null;
 subEventList : SubEvent[];

  constructor(private subEventService : SubEventService,private tostr : ToastrService) { }

  ngOnInit() {

  
  }

   refreshSubEventList() {
    this.subEventService.getSubEventList().subscribe((res) => {
      this.subEventService.subEvents = res as SubEvent[];
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
