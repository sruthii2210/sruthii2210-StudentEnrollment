import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HodLogin } from '../hod-login';
import { FormGroup,FormControl } from '@angular/forms';
import { HodLoginService } from '../hod-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hod-forgot-password',
  templateUrl: './hod-forgot-password.component.html',
  styleUrls: ['./hod-forgot-password.component.css']
})
export class HodForgotPasswordComponent implements OnInit {
  public logindata:Observable<HodLogin[]> | any
  StaffForgotPassForm=new FormGroup({
    userId:new FormControl(''),
    loginId:new FormControl(''),
    password:new FormControl(''),
    cpassword:new FormControl(''),
    id:new FormControl('')
  });

  StaffLoginDetails:HodLogin=new HodLogin()
  constructor(private staffLogin:HodLoginService,private router:Router) { }
  saveStaffForgotPassLogin()
  {
    this.StaffLoginDetails=new HodLogin();
    this.StaffLoginDetails.userId=this.StaffForgotPassForm.get('loginId')?.value;
    console.log( this.StaffLoginDetails.userId)
    
    this.StaffLoginDetails.password=this.StaffForgotPassForm.get('password')?.value;
    console.log( this.StaffLoginDetails.password)
    this.StaffLoginDetails.cpassword=this.StaffForgotPassForm.get('cpassword')?.value;
    console.log( this.StaffLoginDetails.cpassword)
    this.StaffLoginDetails.hodId=this.StaffLoginDetails.loginId
    console.log( this.StaffLoginDetails.hodId)

    if(this.StaffLoginDetails.password == this.StaffLoginDetails.cpassword)
    {
     
      this.staffLogin.updateHodLoginDetails(this.StaffLoginDetails.userId,this.StaffLoginDetails.password,this.StaffLoginDetails)
      .subscribe(res=>
        {
            console.log(res)
           
        })
        window.alert("Changed your password successfully!!")
        this.router.navigate(['hodLogin'])
    }
    else
    {
      window.alert("Enter same password and confirmPassword")
    }
  
}

  ngOnInit(): void {
  }

}
