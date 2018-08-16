import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user';


@Injectable()
export class UserService {
  selectedUser : User;
  users: User[];
  readonly baseURL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  postUser(user : User) {
    return this.http.post(this.baseURL, user);
  }

  login(userName:string,password:string){
    
    return this.http.post('http://localhost:3000/user/login',{
      userName:userName,
      password:password
      })
  }

  getUserList() {
    return this.http.get(this.baseURL);
  }

  searchUser( word : string ){
    return this.http.get(this.baseURL + `/find/${word}`);
  }

  getUserListOfTeamCard(userIndexList : string) {
    return this.http.get(this.baseURL + `/team/${userIndexList}`);
  }
  
  getUser(_id:string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putUser(user: User) {
    return this.http.put(this.baseURL + `/${user._id}`, user);
  }

  deleteUser(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}


