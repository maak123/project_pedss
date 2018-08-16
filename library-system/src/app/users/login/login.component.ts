import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private tostr:ToastrService,private router: Router) { }

  ngOnInit() {
  }

  isLoginError : boolean = false;

  onSubmit(form: NgForm) {
     if(form.value.userName != null && form.value.userName === "admin"){

           // localStorage.setItem('userId',res._id);
            //localStorage.setItem('userIndex',res.indexNo);
            this.router.navigate(['/adminprofile']);



          }
      
        this.userService.login(form.value.userName,form.value.password).subscribe((res : any) => {
         
        
         
          if(res != null && res.password === form.value.password){

            localStorage.setItem('userId',res._id);
            localStorage.setItem('userIndex',res.indexNo);
            this.router.navigate(['/profile']);



          }
          else{   

            this.tostr.warning('Invalid Credentials', 'User Login');
            this.resetForm(form);

          }
          
        });
      }

      resetForm(form :NgForm){

        form.reset();

      }
      
    
}
