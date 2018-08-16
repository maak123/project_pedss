import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-registermembers',
  templateUrl: './registermembers.component.html',
  styleUrls: ['./registermembers.component.css'],
  providers :[ UserService]
})
export class RegistermembersComponent implements OnInit {
  
  private showFacSportCaptain: boolean=false;
  private showAmalClubMember: boolean=false;
  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.refreshUserList();

  }

  refreshUserList() {
    this.userService.getUserList().subscribe((res) => {
      this.userService.users = res as User[];
    });
  }

  onSearch(form : NgForm){
    console.log(form.value.search);
    this.userService.searchUser("lakshan").subscribe((res) => {
      this.userService.users = res as User[];
    });
  }

  onSelect(user : User){
    this.userService.selectedUser = user;
  }

}
