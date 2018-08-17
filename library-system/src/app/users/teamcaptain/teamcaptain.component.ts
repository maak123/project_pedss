import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { TeamCaptain } from './shared/teamcaptain';
import { TeamCaptainService } from './shared/teamcaptain.service';
import { ToastrService } from 'ngx-toastr';

import { MessageService } from "../../shared/message.service";
import { Message } from "../../shared/message";


@Component({
  selector: 'app-teamcaptain',
  templateUrl: './teamcaptain.component.html',
  styleUrls: ['./teamcaptain.component.css'],
  providers: [UserService, TeamCaptainService,MessageService]
})
export class TeamcaptainComponent implements OnInit {

  @Input() subEventId: string;
  selectedUser: User;
  selectedTeamCaptain: TeamCaptain;
  faculties: string[] = ["UCSC", "Science", "Arts", "Management"];


  constructor(private userService: UserService, private tostr: ToastrService, private teamCaptainService: TeamCaptainService, private messageService: MessageService) { }

  ngOnInit() {
    this.refreshTeamCaptainList();
    this.resetForm();
  }


  onSubmit(form: NgForm) {
    if (form.value._id == null) {

      this.userService.postUser(form.value).subscribe((res) => {


        this.tostr.success('Submitted Succcessfully', 'User Register');

        this.teamCaptainService.selectedTeamCaptain = {
          _id: null,
          userId: "",
          faculty: form.value.faculty,
          indexNo: form.value.indexNo,
          subEventId: this.subEventId,
          teamCardId: ""
        }

        this.messageService.selectedMessage={
          _id: null,
          message:"fuck you",
          telephoneNo:form.value.telephone
        }

        this.messageService.postMessage(this.messageService.selectedMessage).subscribe((res) => {
          this.tostr.success('message send Succcessfully', 'Team Captain Register');
          
        });

        this.teamCaptainService.postTeamCaptain(this.teamCaptainService.selectedTeamCaptain).subscribe((res) => {

          this.tostr.success('Submitted Succcessfully', 'Team Captain Register');
          this.resetForm(form);
        });

      });



    }
    else {
      this.userService.putUser(form.value).subscribe((res) => {
        this.resetForm(form);

        this.tostr.success('Updated Succcessfully', 'User Register');
      });


    }


  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.userService.selectedUser = {
      _id: null,
      name: "",
      regNo: "",
      indexNo: "",
      password: "",
      nic: "",
      telephone: null,
      email: "",
      positions: "",
      sport: "",
      faculty: ""
    }
    this.teamCaptainService.selectedTeamCaptain = {
      _id: null,
      userId: "",
      faculty: "",
      indexNo: "",
      subEventId: "",
      teamCardId: ""
    }

    this.refreshTeamCaptainList();

  }

  refreshTeamCaptainList() {
    this.teamCaptainService.getTeamCaptainList().subscribe((res) => {
      this.teamCaptainService.teamCaptains = res as TeamCaptain[];
    });
  }



}
