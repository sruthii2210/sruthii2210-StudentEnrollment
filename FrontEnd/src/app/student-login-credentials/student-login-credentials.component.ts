import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { StudentLogin } from '../student-login';
import { StudentLoginService } from '../student-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-login-credentials',
  templateUrl: './student-login-credentials.component.html',
  styleUrls: ['./student-login-credentials.component.css']
})
export class StudentLoginCredentialsComponent implements OnInit {
  StudentLoginForm=new FormGroup({
    userName:new FormControl(''),
    password:new FormControl(''),
    cpassword:new FormControl(''),
    rollNo:new FormControl('')
  });
  studentLoginDetails:StudentLogin=new StudentLogin()
  constructor(private studentLogin:StudentLoginService,private router:Router) { }

  saveStudentLogin()
  {
    this.studentLoginDetails=new StudentLogin();
    this.studentLoginDetails.userName=this.StudentLoginForm.get('userName')?.value;
    console.log( this.studentLoginDetails.userName)
    
    this.studentLoginDetails.password=this.StudentLoginForm.get('password')?.value;
    console.log( this.studentLoginDetails.password)
    this.studentLoginDetails.cpassword=this.StudentLoginForm.get('cpassword')?.value;
    console.log( this.studentLoginDetails.cpassword)
    this.studentLoginDetails.rollNo=this.studentLoginDetails.userName
    console.log( this.studentLoginDetails.rollNo)
    if(this.StudentLoginForm.get('password')?.value==this.StudentLoginForm.get('cpassword')?.value){
    this.studentLogin.saveDetails(this.studentLoginDetails.userName,this.studentLoginDetails)
    .subscribe(data=>window.alert(data),error=>console.log(error));
      window.alert("Login Credentials created!");
    this.router.navigate(['studentLoginValid'])
    }
    else
    {
      window.alert("You entered the wrong credentials!")
    }
  }

  ngOnInit(): void {
  }

}
