import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AmalClubMember } from './amal-club-member';

 
@Injectable()
export class AmalClubMemberService {
  selectedAmalClubMember : AmalClubMember;
  amalClubMembers: AmalClubMember[];
  readonly baseURL = 'http://localhost:3000/amalClubMember';

  constructor(private http: HttpClient) { }

  postAmalClubMember(amalClubMember : AmalClubMember) {
    return this.http.post(this.baseURL, amalClubMember);
  }

  getAmalClubMemberList() {
    return this.http.get(this.baseURL);
  }
  
  getAmalClubMember(_id:string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  getAmalClubMemberFromUserId(_id:string) {
    return this.http.get(this.baseURL + `/user/${_id}`);
  }

  putAmalClubMember(amalClubMember: AmalClubMember) {
    return this.http.put(this.baseURL + `/${amalClubMember._id}`, amalClubMember);
  }

  deleteAmalClubMember(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}





