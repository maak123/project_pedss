
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { ToastrService } from 'ngx-toastr';
import { SportService } from './shared/sport.service';
import { Sport } from './shared/sport';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {



  constructor(private sportService : SportService,private tostr:ToastrService) { }

 
  ngOnInit() {
    this.resetForm();
    this.refreshSportList();
    
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.sportService.selectedSport = {
      _id : null,
      name : "",
      playersNo : 1,
      type : "",
      

    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == null) {
      if(form.value.playersNo==1){
        form.value.type="individual";
      }else{
        form.value.type="team";
      }    
       this.sportService.postSport(form.value).subscribe((res) => {
       
        this.resetForm(form);
        this.refreshSportList();
        this.tostr.success('Submitted Succcessfully', 'Sport Register');
        
      });
    }
    else {
      
      this.sportService.putSport(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSportList();
        this.tostr.success('Updated Succcessfully', 'Sport Register');
      });
    }
    
  }

   refreshSportList() {
    this.sportService.getSportList().subscribe((res) => {
      this.sportService.sports = res as Sport[];
    });
  }

   onEdit(sport: Sport) {
    this.sportService.selectedSport = sport;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.sportService.deleteSport(_id).subscribe((res) => {
        this.refreshSportList();
        this.tostr.warning("Deleted Successfully", "Sport register");
      });
    }
  }

 

  
  
}
