
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Result } from './result';


@Injectable()
export class ResultService {
  selectedResult : Result;
  results: Result[];
  readonly baseURL = 'http://localhost:3000/result';

  constructor(private http: HttpClient) { }

  postResult(result : Result) {
    return this.http.post(this.baseURL, result);
  }

  getResultList() {
    return this.http.get(this.baseURL);
  }

  getResultListBySubEvent(subEventId : string) {
    return this.http.get(this.baseURL+`/subEventId/${subEventId}`);
  }

  getResultByTeamCardId(teamCardId : string ){
    return this.http.get(this.baseURL+`/teamCardId/${teamCardId}`);
  }
  
  getResult(_id:string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putResult(result: Result) {
    return this.http.put(this.baseURL + `/${result._id}`, result);
  }

  deleteResult(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
