import { Component, OnInit } from '@angular/core';

import { User } from '../users/shared/user';
import { UserService } from '../users/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import {TeamCaptain} from '../users/teamcaptain/shared/teamcaptain';

import { TeamCaptainService } from '../users/teamcaptain/shared/teamcaptain.service';






@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[UserService,TeamCaptainService]
 
})
export class ProfileComponent implements OnInit {

  showTeamCard : boolean = false;  
  tempTeamCaptain : TeamCaptain;

  constructor(private userService : UserService,private tostr : ToastrService,private teamCaptainService : TeamCaptainService) {
  }

  ngOnInit() {
      this.showTeamCard=false;
  	  this.getProfile();
      this.checkUserIsTeamCaptain(localStorage.getItem('userIndex'));
     // console.log(this.tempTeamCaptain);
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

    checkUserIsTeamCaptain( indexNo : string ){
          
          this.teamCaptainService.getTeamCaptainByIndex(indexNo).subscribe((res) => {
            if(res != null ){
              this.tempTeamCaptain = res as TeamCaptain;
            }
          
          
          
          if(res != null  && (!this.tempTeamCaptain.isSubmitted) ){   
            
            this.showTeamCard = true;
            

          }

          });
      }
    
}

