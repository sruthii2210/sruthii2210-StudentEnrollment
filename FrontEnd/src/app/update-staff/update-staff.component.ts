import { Component, OnInit } from '@angular/core';
import { StaffSignUp } from '../staff-sign-up';
import { StaffSignUpService } from '../staff-sign-up.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {

  loginId=localStorage.getItem("user")
  staffId:number | any;
  staffSignup:StaffSignUp  | any
  constructor(private staffService:StaffSignUpService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.staffSignup=new StaffSignUp()
    this.staffService.getStaffById(this.loginId).subscribe(
      data=>{
        this.staffSignup=data
        console.log(data)
      }
    )
     
  }
  
  onSubmit()
  {
    this.staffService.updateHodDetails(this.loginId,this.staffSignup).subscribe(
      res=>{
        this.staffSignup=res;
        console.log(res)
      }
    )
      window.alert("Staff details updated Successfully!1")
     
  }

}
