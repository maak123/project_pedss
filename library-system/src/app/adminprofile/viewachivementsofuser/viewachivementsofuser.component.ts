import { Component, OnInit } from '@angular/core';
import { User } from '../../users/shared/user';
import { UserService } from '../../users/shared/user.service';


@Component({
  selector: 'app-viewachivementsofuser',
  templateUrl: './viewachivementsofuser.component.html',
  styleUrls: ['./viewachivementsofuser.component.css'],
  providers : [UserService]
})
export class ViewachivementsofuserComponent implements OnInit {

  isUserSelected : boolean = false;

  constructor( private userService : UserService) { }

  ngOnInit() {
    this.userService.getUserList().subscribe((res) => {
        
      this.userService.users=res as User[];
    });

  }

  refreshUserList() {
    this.userService.getUserList().subscribe((res) => {
      this.userService.users = res as User[];
    });
  }

  onSubmit(word : string){
    console.log(word);
    this.userService.searchUser(word).subscribe((res) => {
      this.userService.users = res as User[];
    });
  }

  onSelect(user : User){
    this.userService.selectedUser = user;
  }


}
