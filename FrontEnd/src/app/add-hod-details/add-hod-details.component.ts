import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HodSignUp } from '../hod-sign-up';
import { HodService } from '../hod.service';
@Component({
  selector: 'app-add-hod-details',
  templateUrl: './add-hod-details.component.html',
  styleUrls: ['./add-hod-details.component.css']
})
export class AddHodDetailsComponent implements OnInit {
  HODSignUpForm=new FormGroup({
    id:new FormControl(''),
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
  
  hodSignUpDetails:HodSignUp|any
  constructor(private hodService:HodService,private router:Router) { }
  saveHodPersonal()
  {
    this.hodSignUpDetails=new HodSignUp();
    this.hodSignUpDetails.id=this.HODSignUpForm.get('id')?.value;
    console.log(this.hodSignUpDetails.id)
    this.hodSignUpDetails.firstName=this.HODSignUpForm.get('firstName')?.value;
    this.hodSignUpDetails.lastName=this.HODSignUpForm.get('lastName')?.value;
    this.hodSignUpDetails.dateOfBirth=this.HODSignUpForm.get('dateOfBirth')?.value;
    this.hodSignUpDetails.gender=this.HODSignUpForm.get('gender')?.value;
    this.hodSignUpDetails.qualification=this.HODSignUpForm.get('qualification')?.value;
    this.hodSignUpDetails.email=this.HODSignUpForm.get('email')?.value;
    this.hodSignUpDetails.contactNo=this.HODSignUpForm.get('contactNo')?.value;
    this.hodSignUpDetails.address=this.HODSignUpForm.get('address')?.value;
    this.hodSignUpDetails.deptId=this.HODSignUpForm.get('deptId')?.value;
    localStorage.setItem('deptId',this.HODSignUpForm.get('deptId')?.value)
    this.hodService.saveDetails(this.hodSignUpDetails,this.hodSignUpDetails.deptId)
    .subscribe(data=>window.alert(data),error=>console.log(error));//.response{window.alert("Added Successfully!")});
    window.alert("HOD Details added successfully!");
    this.hodService.getHodDetailsList().subscribe(data=>{
      console.log(data)
    })
    this.router.navigate(['hodLoginCredentials'])

  }
  ngOnInit(): void {
  }

}
