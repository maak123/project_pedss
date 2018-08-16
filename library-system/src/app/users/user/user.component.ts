import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

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

  onEdit(user : User) {
    this.userService.selectedUser = user;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.userService.deleteUser(_id).subscribe((res) => {
        this.refreshUserList();
        this.resetForm(form);
        this.tostr.warning("Deleted Successfully", "User register");
      });
    }
  }

}
