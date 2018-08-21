
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Sport } from './sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  selectedSport : Sport;
  sports: Sport[];
  readonly baseURL = 'http://localhost:3000/sport';

  constructor(private http: HttpClient) { }

  postSport(sport : Sport) {
    return this.http.post(this.baseURL, sport);
  }

  getSportList() {
    return this.http.get(this.baseURL);
  }
  
  getSport(_id:string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putSport(sport: Sport) {
    return this.http.put(this.baseURL + `/${sport._id}`, sport);
  }

  deleteSport(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}


