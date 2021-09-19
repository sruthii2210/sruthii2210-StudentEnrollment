import { Component, OnInit } from '@angular/core';
import { StaffSignUp } from '../staff-sign-up';
import { FormGroup,FormControl } from '@angular/forms';
import { StaffSignUpService } from '../staff-sign-up.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-staff-view-profile',
  templateUrl: './staff-view-profile.component.html',
  styleUrls: ['./staff-view-profile.component.css']
})
export class StaffViewProfileComponent implements OnInit {

  id=localStorage.getItem("user")
  staff:StaffSignUp|any
  public formData = new FormGroup({
    loginId: new FormControl('')
  });

  //public logindata:StaffLogin | any
   constructor(private staffService:StaffSignUpService,private router: Router) { }
  ngOnInit(): void {
  }

  login()
  {
    this.staffService.getStaffById(this.id).subscribe(
      data=>{
        this.staff=data
        console.log(data)
      }
    )
  }

}
