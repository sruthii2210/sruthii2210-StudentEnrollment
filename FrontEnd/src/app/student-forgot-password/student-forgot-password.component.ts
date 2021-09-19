import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup,FormControl } from '@angular/forms';
import { StudentLoginService } from '../student-login.service';
import { StudentLogin } from '../student-login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-forgot-password',
  templateUrl: './student-forgot-password.component.html',
  styleUrls: ['./student-forgot-password.component.css']
})
export class StudentForgotPasswordComponent implements OnInit {
  StudentForgotPassForm: any;


  ngOnInit(): void {
  }
  public logindata:Observable<StudentLogin[]> | any
  StaffForgotPassForm=new FormGroup({
    loginId:new FormControl(''),
    userName:new FormControl(''),
    password:new FormControl(''),
    cpassword:new FormControl(''),
    id:new FormControl('')
  });

  StudentLoginDetails:StudentLogin=new StudentLogin()
  constructor(private studentLogin:StudentLoginService,private router:Router) { }

  saveStudentForgotPassLogin()
  {
    this.StudentLoginDetails=new StudentLogin();
    this.StudentLoginDetails.userName=this.StudentForgotPassForm.get('userName')?.value;
    console.log( this.StudentLoginDetails.userName)
    
    this.StudentLoginDetails.password=this.StudentForgotPassForm.get('password')?.value;
    console.log( this.StudentLoginDetails.password)
    this.StudentLoginDetails.cpassword=this.StudentForgotPassForm.get('cpassword')?.value;
    console.log( this.StudentLoginDetails.cpassword)
    this.StudentLoginDetails.rollNo=this.StudentLoginDetails.userName
    console.log( this.StudentLoginDetails.id)

    if(this.StudentLoginDetails.password == this.StudentLoginDetails.cpassword)
    {
     
      this.studentLogin.updateStudent(this.StudentLoginDetails.userName,this.StudentLoginDetails.password,this.StudentLoginDetails)
      .subscribe(res=>
        {
            console.log(res)
           
        })
        window.alert("Changed your password successfully!!")
        this.router.navigate(['studentLogin'])
    }
    else
    {
      window.alert("Enter same password and confirmPassword")
    }
  
}

}
