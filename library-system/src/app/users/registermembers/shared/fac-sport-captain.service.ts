import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { FacSportCaptain } from './fac-sport-captain';


@Injectable()
export class FacSportCaptainService {
  selectedFacSportCaptain : FacSportCaptain;
  facSportCaptains: FacSportCaptain[];
  readonly baseURL = 'http://localhost:3000/facSportCaptain';

  constructor(private http: HttpClient) { }

  postFacSportCaptain(facSportCaptain : FacSportCaptain) {
    return this.http.post(this.baseURL, facSportCaptain);
  }

  getFacSportCaptainList() {
    return this.http.get(this.baseURL);
  }
  
  getFacSportCaptain(_id:string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  getFacSportCaptainFromUserId(_id:string) {
    return this.http.get(this.baseURL + `/user/${_id}`);
  }

  putFacSportCaptain(facSportCaptain: FacSportCaptain) {
    return this.http.put(this.baseURL + `/${facSportCaptain._id}`, facSportCaptain);
  }

  deleteFacSportCaptain(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}



