import { Component, OnInit,Input} from '@angular/core';
import { NgForm } from '@angular/forms';


import { TeamCaptain } from '../../users/teamcaptain/shared/teamcaptain';
import { TeamCaptainService } from '../../users/teamcaptain/shared/teamcaptain.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../users/shared/user';
import { UserService } from '../../users/shared/user.service';
import { TeamCard } from '../shared/teamcard';
import { TeamCardService } from '../shared/teamcard.service';


@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css'],
  providers:[UserService,TeamCardService,TeamCaptainService]
})
export class TeamCardComponent implements OnInit {

  
  @Input() selectedTeamCaptain : TeamCaptain;
  userIndexList : string[];
  userList : User[];
  selectedTeamCard : TeamCard;
  faculties : string[]=["UCSC","Science","Arts","Management"];
  tempUserList : User[];
  


  constructor(private tostr : ToastrService,private userService : UserService,private teamCardService : TeamCardService,private teamCaptainService : TeamCaptainService) { }

  ngOnInit() {
   
    this.userService.users=[];
    this.resetForm();
    this.initTeamCard(this.selectedTeamCaptain);
    this.refreshUsers();
  	
  }



  addTeamCard(){


  }

  refreshUsers(){
    this.userService.getUserList().subscribe((res) => {
        this.userService.users=(res as User[]);
      });
  }

  refreshUserList(userIndex : string[]){
    if(userIndex.length != 0){
    userIndex.forEach(element => {
      
      this.userService.getUserByIndex(element).subscribe((res) => {
        console.log(res);
        this.userService.users.push(res as User);
      });
    });}
    
  }

   
  

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.userService.selectedUser={
      _id :null,
      name :"",
      regNo : ""  ,
      indexNo : "",
      password : "",
      nic : "" ,
      telephone : null ,
      email : "" ,
      positions:"",
      sport:"" ,
      faculty:""
  }
 
    
  }

  onSelect(user : User){                            // this is for adding  & searching with the list
     this.userIndexList.push(user.indexNo as string);
     
  }
  

  onSubmit(form: NgForm) {
    if (form.value._id == null) {
      form.value.faculty = this.selectedTeamCaptain.faculty;

      //this.tempUserList.push(form.value)
      
      this.teamCardService.selectedTeamCard.userIndexList.push(form.value.indexNo as string);
      form.value.password = form.value.telephone;
      this.userService.postUser(form.value).subscribe((res) => {
        
        
        this.resetForm(form);
        
        this.tostr.success('Submitted Succcessfully', 'User Register');
      });
    }
    else {
      this.userService.putUser(form.value).subscribe((res) => {
        this.resetForm(form);  
        this.tostr.success('Updated Succcessfully', 'User Register');
      });


    }

    
    //this.refreshUserList(this.teamCardService.selectedTeamCard.userIndexList);
    this.refreshUsers();

  }

  initTeamCard(teamCaptain : TeamCaptain){

       this.teamCardService.selectedTeamCard={
          _id : null,
          faculty :teamCaptain.faculty,
          sport : "",
          subEventId : teamCaptain.subEventId,
          userIndexList : [],
          teamCaptainIndex : teamCaptain.indexNo
        }
        this.teamCardService.selectedTeamCard.userIndexList.push(this.selectedTeamCaptain.indexNo);
        this.refreshUserList(this.teamCardService.selectedTeamCard.userIndexList);
  }

  onSubmitTeamCard(){
    this.teamCardService.postTeamCard(this.teamCardService.selectedTeamCard).subscribe((res) => {
        this.tostr.success('Submitted Succcessfully', 'Team Card');
        //updateTeamCaptain();
      });


  }

  updateTeamCaptain(){
    this.selectedTeamCaptain.isSubmitted = true;
     this.teamCaptainService.putTeamCaptain(this.selectedTeamCaptain).subscribe((res) => {
        // reset objects
        this.tostr.success('Updated Succcessfully', 'Team captain ');
      });

  }

}
