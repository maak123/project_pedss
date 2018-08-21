import { Component, OnInit,Input } from '@angular/core';

import { SubEvent } from '../../shared/subevent';
import { SubEventService } from '../../shared/subevent.service';

@Component({
  selector: 'app-showsubeventbyid',
  templateUrl: './showsubeventbyid.component.html',
  styleUrls: ['./showsubeventbyid.component.css'],
  providers:[SubEventService]
})
export class ShowsubeventbyidComponent implements OnInit {
  
  @Input() subEventId : string;
  constructor(private subEventService : SubEventService) { }

  ngOnInit() {
    this.subEventService.getSubEvent(this.subEventId).subscribe((res) => {
      this.subEventService.selectedSubEvent = res as SubEvent;
    });
  }

}
