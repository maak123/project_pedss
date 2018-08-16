import { Component, OnInit } from '@angular/core';

import { User } from '../users/shared/user';
import { UserService } from '../users/shared/user.service';
import { ToastrService } from 'ngx-toastr';







@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[UserService]
 
})
export class ProfileComponent implements OnInit {

  
  
 



  constructor(private userService : UserService,private tostr : ToastrService) {
  }

  ngOnInit() {
  	  this.getProfile();
  	  

  	
    }

    getProfile(){
    	this.userService.getUser(localStorage.getItem('userId')).subscribe((res) => {
        this.userService.selectedUser = res as User;
    });
    }

    
    logOut(){
      localStorage.removeItem('userId');
       localStorage.removeItem('userIndex');

    }

    
    
}

