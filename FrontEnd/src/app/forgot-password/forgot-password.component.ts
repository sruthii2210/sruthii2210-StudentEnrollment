import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StaffLogin } from '../staff-login';
import { FormGroup,FormControl } from '@angular/forms';
import { StaffLoginService } from '../staff-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public logindata:Observable<StaffLogin[]> | any
  StaffForgotPassForm=new FormGroup({
    userId:new FormControl(''),
    loginId:new FormControl(''),
    password:new FormControl(''),
    cpassword:new FormControl(''),
    id:new FormControl('')
  });

  StaffLoginDetails:StaffLogin=new StaffLogin()
  constructor(private staffLogin:StaffLoginService,private router:Router) { }
  saveStaffForgotPassLogin()
  {
    this.StaffLoginDetails=new StaffLogin();
    this.StaffLoginDetails.loginId=this.StaffForgotPassForm.get('loginId')?.value;
    console.log( this.StaffLoginDetails.loginId)
    
    this.StaffLoginDetails.password=this.StaffForgotPassForm.get('password')?.value;
    console.log( this.StaffLoginDetails.password)
    this.StaffLoginDetails.cpassword=this.StaffForgotPassForm.get('cpassword')?.value;
    console.log( this.StaffLoginDetails.cpassword)
    this.StaffLoginDetails.id=this.StaffLoginDetails.loginId
    console.log( this.StaffLoginDetails.id)

    if(this.StaffLoginDetails.password == this.StaffLoginDetails.cpassword)
    {
     
      this.staffLogin.updateStaff(this.StaffLoginDetails.loginId,this.StaffLoginDetails.password,this.StaffLoginDetails)
      .subscribe(res=>
        {
            console.log(res)
           
        })
        window.alert("Changed your password successfully!!")
        this.router.navigate(['staffLogin'])
    }
    else
    {
      window.alert("Enter same password and confirmPassword")
    }
  
}


  ngOnInit(): void {
  }

}
