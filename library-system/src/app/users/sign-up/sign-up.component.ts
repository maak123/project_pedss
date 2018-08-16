import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
   providers: [UserService]
})

export class SignUpComponent implements OnInit {
  faculties : string[]=["UCSC","Science","Arts","Management"];

  constructor(private userService : UserService,private tostr : ToastrService) { }

  ngOnInit() {
  	this.resetForm();
  	this.refreshUserList();
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
  this.refreshUserList();
    
  }


  onSubmit(form: NgForm) {
    if (form.value._id == null) {
      this.userService.postUser(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshUserList();
        this.tostr.success('Submitted Succcessfully', 'User Register');
      });
    }
    else {
      this.userService.putUser(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshUserList();
        this.tostr.success('Updated Succcessfully', 'User Register');
      });
    }
  }

  refreshUserList() {
    this.userService.getUserList().subscribe((res) => {
      this.userService.users = res as User[];
    });
  }

 
   
  

}
