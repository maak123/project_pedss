import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { AmalClubMemberService } from '../shared/amal-club-member.service';
import { AmalClubMember } from '../shared/amal-club-member';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registeramalclubmember',
  templateUrl: './registeramalclubmember.component.html',
  styleUrls: ['./registeramalclubmember.component.css'],
  providers:[AmalClubMemberService]
})
export class RegisteramalclubmemberComponent implements OnInit {
  
  sports = ["Elle","Cricket","Vollyball","Carrom"];

  constructor(private amalClubMemberService: AmalClubMemberService,private tostr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    
  }

  onSubmit(form : NgForm){
    if (form.value._id == null) {
      this.amalClubMemberService.postAmalClubMember(form.value).subscribe((res) => {
        
        this.tostr.success('Submitted Succcessfully', 'Amalgamated Club Member Register');
      });
    }
  	

  }

  resetForm(aClubMemberform? : NgForm){
  	if (aClubMemberform != null)  	
  	  aClubMemberform.reset();
  	this.amalClubMemberService.selectedAmalClubMember = {
  		_id : null,
  		sport : '',
  		position : null,
  		userId : null
  	}
  }


  

}
