import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { StaffSignUp } from '../staff-sign-up';
import { StaffSignUpService } from '../staff-sign-up.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-staff-sign-up',
  templateUrl: './staff-sign-up.component.html',
  styleUrls: ['./staff-sign-up.component.css']
})
export class StaffSignUpComponent implements OnInit {
  HODSignUpForm=new FormGroup({
    newId:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    dateOfBirth:new FormControl(''),
    gender:new FormControl(''),
    qualification:new FormControl(''),
    email:new FormControl(''),
    contactNo:new FormControl(''),
    address:new FormControl(''),
    deptId:new FormControl('')
  });
  
  hodSignUpDetails:StaffSignUp=new StaffSignUp()
  constructor(private hodService:StaffSignUpService,private router:Router) { }
  saveHodPersonal()
  {
    this.hodSignUpDetails=new StaffSignUp();
    this.hodSignUpDetails.newId=this.HODSignUpForm.get('newId')?.value;
    console.log(this.hodSignUpDetails.newId)
    this.hodSignUpDetails.firstName=this.HODSignUpForm.get('firstName')?.value;
    this.hodSignUpDetails.lastName=this.HODSignUpForm.get('lastName')?.value;
    this.hodSignUpDetails.dateOfBirth=this.HODSignUpForm.get('dateOfBirth')?.value;
    this.hodSignUpDetails.gender=this.HODSignUpForm.get('gender')?.value;
    this.hodSignUpDetails.qualification=this.HODSignUpForm.get('qualification')?.value;
    this.hodSignUpDetails.email=this.HODSignUpForm.get('email')?.value;
    this.hodSignUpDetails.contactNo=this.HODSignUpForm.get('contactNo')?.value;
    this.hodSignUpDetails.address=this.HODSignUpForm.get('address')?.value;
    
    this.hodService.saveDetails(this.hodSignUpDetails,this.hodSignUpDetails.newId)
    .subscribe(data=>console.log(data),error=>console.log(error));//.response{window.alert("Added Successfully!")});
  //  localStorage.setItem("id",this.HODSignUpForm.get('newId')?.value)
    window.alert("Staff Details added successfully!");
    this.router.navigate(['loginCredits'])

  }
  // get HodId(){  
  //   return this.HODSignUpForm.get('id');  
  // } 
  // get HodFirstName(){  
  //   return this.HODSignUpForm.get('firstName');  
  // }
  // get HodLastname(){  
  //   return this.HODSignUpForm.get('lastName');  
  // } 
  // get HodDateOfBirth(){  
  //   return this.HODSignUpForm.get('dateOfBirth');  
  // }
  // get HodGender(){  
  //   return this.HODSignUpForm.get('gender');  
  // }
  // get HodQualification(){  
  //   return this.HODSignUpForm.get('qualification');  
  // }
  // get HodEmail(){  
  //   return this.HODSignUpForm.get('email');  
  // }
  // get HodContactNo(){  
  //   return this.HODSignUpForm.get('contactNo');  
  // }
  // get HodAddress(){  
  //   return this.HODSignUpForm.get('address');  
  // }
  // get HodDeptId(){  
  //   return this.HODSignUpForm.get('deptId');  
  // }


  ngOnInit(): void {
  }


}
