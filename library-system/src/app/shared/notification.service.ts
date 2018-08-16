import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Notification } from './notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  selectedNotification: Notification;
  notifications: Notification[];
  readonly baseURL = 'http://localhost:3000/notification';

  constructor(private http: HttpClient) { }

  postNotification(notification: Notification) {
    return this.http.post(this.baseURL, notification);
  }

  getNotificationList() {
    return this.http.get(this.baseURL);
  }
  
  getNotificationsofUser(userId : string) {
    return this.http.get(this.baseURL + `/user/${userId}`);
  }
  putNotification(notification: Notification) {
    return this.http.put(this.baseURL + `/${notification._id}`, notification);
  }

  deleteNotification(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
