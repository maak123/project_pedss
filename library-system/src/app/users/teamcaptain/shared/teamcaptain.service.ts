

 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { TeamCaptain } from './teamcaptain';


@Injectable()
export class TeamCaptainService {

  selectedTeamCaptain : TeamCaptain;
  teamCaptains: TeamCaptain[];
  readonly baseURL = 'http://localhost:3000/teamCaptain';

  constructor(private http: HttpClient) { }

  postTeamCaptain(teamCaptain : TeamCaptain) {
    return this.http.post(this.baseURL, teamCaptain);
  }

  getTeamCaptainList() {
    return this.http.get(this.baseURL);
  }

  getTeamCaptainByIndex(indexNo : string ){
    return this.http.get(this.baseURL+`/indexNo/${indexNo}`);
  }
  
  getTeamCaptain(_id:string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putTeamCaptain(teamCaptain: TeamCaptain) {
    return this.http.put(this.baseURL + `/${teamCaptain._id}`, teamCaptain);
  }

  deleteTeamCaptain(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}


