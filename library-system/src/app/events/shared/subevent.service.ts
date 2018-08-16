import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { SubEvent } from './subEvent';


@Injectable()
export class SubEventService {
  selectedSubEvent : SubEvent;
  subEvents: SubEvent[];
  readonly baseURL = 'http://localhost:3000/subEvent';

  constructor(private http: HttpClient) { }

  postSubEvent(subEvent : SubEvent) {
    return this.http.post(this.baseURL, subEvent);
  }

  getSubEventList() {
    return this.http.get(this.baseURL);
  }
  
  getSubEvent(_id:string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putSubEvent(subEvent: SubEvent) {
    return this.http.put(this.baseURL + `/${subEvent._id}`, subEvent);
  }

  deleteSubEvent(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}


