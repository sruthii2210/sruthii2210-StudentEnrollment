import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { StudentSignUp } from '../student-sign-up';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student-details',
  templateUrl: './add-student-details.component.html',
  styleUrls: ['./add-student-details.component.css']
})
export class AddStudentDetailsComponent implements OnInit {
  StudentSignUpForm=new FormGroup({
    personalId:new FormControl(''),
    rollNo:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    dateOfBirth:new FormControl(''),
    gender:new FormControl(''),
    email:new FormControl(''),
    contactNo:new FormControl(''),
    address:new FormControl('')
  });
  
  studentSignUpDetails:StudentSignUp=new StudentSignUp()
  constructor(private studentService:StudentService,private router:Router) { }
  saveStudentPersonal()
  {
    this.studentSignUpDetails=new StudentSignUp();
    this.studentSignUpDetails.personalId=this.StudentSignUpForm.get('personalId')?.value;
    localStorage.setItem("personalId",this.StudentSignUpForm.get('personalId')?.value)
    this.studentSignUpDetails.rollNo=this.StudentSignUpForm.get('rollNo')?.value;
    console.log(this.studentSignUpDetails.rollNo)
    localStorage.setItem("rollNo",this.StudentSignUpForm.get('rollNo')?.value)
    this.studentSignUpDetails.firstName=this.StudentSignUpForm.get('firstName')?.value;
    this.studentSignUpDetails.lastName=this.StudentSignUpForm.get('lastName')?.value;
    this.studentSignUpDetails.dateOfBirth=this.StudentSignUpForm.get('dateOfBirth')?.value;
    this.studentSignUpDetails.gender=this.StudentSignUpForm.get('gender')?.value;
    this.studentSignUpDetails.email=this.StudentSignUpForm.get('email')?.value;
    this.studentSignUpDetails.contactNo=this.StudentSignUpForm.get('contactNo')?.value;
    this.studentSignUpDetails.address=this.StudentSignUpForm.get('address')?.value;
    this.studentService.saveDetails(this.studentSignUpDetails,this.studentSignUpDetails.rollNo)
    .subscribe(data=>window.alert(data),error=>console.log(error));//.response{window.alert("Added Successfully!")});
    window.alert("Student Details added successfully!");
  
   this.router.navigate(['studentLoginCredentials'])
  }
  ngOnInit(): void {
  }

}
