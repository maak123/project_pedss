import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Event } from './event';


@Injectable()
export class EventService {
  selectedEvent : Event;
  events: Event[];
  readonly baseURL = 'http://localhost:3000/event';

  constructor(private http: HttpClient) { }

  postEvent(event : Event) {
    return this.http.post(this.baseURL, event);
  }

  getEventList() {
    return this.http.get(this.baseURL);
  }
  
  getEvent(_id:string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putEvent(event: Event) {
    return this.http.put(this.baseURL + `/${event._id}`, event);
  }

  deleteEvent(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}


