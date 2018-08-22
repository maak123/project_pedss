import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { TeamCard } from './teamcard';


@Injectable()
export class TeamCardService {
  selectedTeamCard : TeamCard;
  teamCards: TeamCard[];
  selectedTeamCards : TeamCard[];
  readonly baseURL = 'http://localhost:3000/teamCard';

  constructor(private http: HttpClient) { }

  postTeamCard(teamCard : TeamCard) {
    return this.http.post(this.baseURL, teamCard);
  }

  getTeamCardList() {
    return this.http.get(this.baseURL);
  }

  getTeamCardListBySubEvent(subEventId : string) {
    return this.http.get(this.baseURL+`/subEventId/${subEventId}`);
  }

  getTeamCardByUserIndex(userIndex : string ){
    console.log(userIndex);
    return this.http.get(this.baseURL+`/userIndex/${userIndex}`);
  }
  
  getTeamCard(_id:string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putTeamCard(teamCard: TeamCard) {
    return this.http.put(this.baseURL + `/${teamCard._id}`, teamCard);
  }

  deleteTeamCard(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}




