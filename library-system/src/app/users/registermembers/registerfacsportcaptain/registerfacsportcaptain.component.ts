import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { FacSportCaptainService } from '../shared/fac-sport-captain.service';
import { FacSportCaptain } from '../shared/fac-sport-captain';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registerfacsportcaptain',
  templateUrl: './registerfacsportcaptain.component.html',
  styleUrls: ['./registerfacsportcaptain.component.css'],
  providers: [FacSportCaptainService]
})
export class RegisterfacsportcaptainComponent implements OnInit {

  sports = ["Elle","Cricket","Vollyball","Carrom"];

  constructor(private facSportCaptainService: FacSportCaptainService,private tostr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    
  }

  onSubmit(form : NgForm){
    if (form.value._id == null) {
      this.facSportCaptainService.postFacSportCaptain(form.value).subscribe((res) => {
        
        this.tostr.success('Submitted Succcessfully', 'faculty sport captain Register');
      });
    }
  	

  }

  resetForm(form? : NgForm){
  	if (form != null)  	
  	  form.reset();
  	this.facSportCaptainService.selectedFacSportCaptain = {
  		_id : null,
  		sport : '',
  		faculty : null,
  		userId : null
  	}
  }


}
