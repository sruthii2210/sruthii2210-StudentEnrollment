import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HodLogin } from '../hod-login';
import { HodLoginService } from '../hod-login.service';
@Component({
  selector: 'app-hod-login-credentials',
  templateUrl: './hod-login-credentials.component.html',
  styleUrls: ['./hod-login-credentials.component.css']
})
export class HodLoginCredentialsComponent implements OnInit {
  StaffLoginForm=new FormGroup({
    loginId:new FormControl(''),
    password:new FormControl(''),
    cpassword:new FormControl(''),
    id:new FormControl('')
  });

  StaffLoginDetails:HodLogin=new HodLogin()
  constructor(private staffLogin:HodLoginService,private router:Router) { }
  saveStaffLogin()
  {
    this.StaffLoginDetails=new HodLogin();
    this.StaffLoginDetails.userId=this.StaffLoginForm.get('loginId')?.value;
    console.log( this.StaffLoginDetails.userId)
    
    this.StaffLoginDetails.password=this.StaffLoginForm.get('password')?.value;
    console.log( this.StaffLoginDetails.password)
    this.StaffLoginDetails.cpassword=this.StaffLoginForm.get('cpassword')?.value;
    console.log( this.StaffLoginDetails.cpassword)
    this.StaffLoginDetails.hodId=this.StaffLoginDetails.userId
    console.log( this.StaffLoginDetails.hodId)
    if(this.StaffLoginForm.get('password')?.value==this.StaffLoginForm.get('cpassword')?.value){
    this.staffLogin.saveHodLoginDetails(this.StaffLoginDetails.userId,this.StaffLoginDetails)
    .subscribe(data=>window.alert(data),error=>console.log(error));
    window.alert("Login credentials added successfully!")
    this.router.navigate(['hodLogin'])
  }
  else
  {
    window.alert("You entered the wrong credentials!")
  }
}
  ngOnInit(): void {
  }

}
