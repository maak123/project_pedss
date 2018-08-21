import { Component, OnInit,Input } from '@angular/core';

import {User} from '../../shared/user';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-showuserbyindex',
  templateUrl: './showuserbyindex.component.html',
  styleUrls: ['./showuserbyindex.component.css'],
  providers:[UserService]
})
export class ShowuserbyindexComponent implements OnInit {
  
  @Input() userIndex : string;
  constructor(private userService : UserService ) { }

  ngOnInit() {
    this.userService.getUserByIndex(this.userIndex).subscribe((res) => {
        this.userService.selectedUser = res as User;
        });
  }

  

}
