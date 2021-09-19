import { Component, OnInit } from '@angular/core';
import { StudentLogin } from '../student-login';
import { FormGroup,FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StudentLoginService } from '../student-login.service';
@Component({
  selector: 'app-student-login-validation',
  templateUrl: './student-login-validation.component.html',
  styleUrls: ['./student-login-validation.component.css']
})
export class StudentLoginValidationComponent implements OnInit {
  student:StudentLogin=new StudentLogin()
  public formData = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });
  public logindata:Observable<StudentLogin[]> | any

  //public logindata?:StaffLogin[]=[] 
  
  constructor(private studentService:StudentLoginService,private router: Router) { }

  ngOnInit(): void {
  }
  login(formData:any)
  {
    console.log("hello")
    this.studentService.getStudent(this.formData.get('userName')?.value).subscribe(data=>
      {
        this.logindata=data
        console.log(this.logindata)
        for(var i = 0; i < this.logindata.length; i++)
      { 
       //console.log(this.logindata[i].loginId);
          console.log(this.logindata[i].userName); 
          
          console.log(this.logindata[i].password);
          if(this.logindata[i].userName==this.formData.get('userName')?.value && this.logindata[i].password==this.formData.get('password')?.value)
          {
            localStorage.setItem("user",this.logindata[i].userName)
            window.alert("Logged in successfully!")
            this.router.navigate(['studentModule'])
          }
         
         if(this.logindata[i].userName!=this.formData.get('userName')?.value&&this.logindata[i].password!=this.formData.get('password')?.value)
          {
            window.alert("Enter valid user or password")
          }

          if(this.logindata[i].password!=this.formData.get('password')?.value)
          {
            window.alert("Enter valid password")
          }
      }
      })
     
  }

 
  onClickMe() {
    this.router.navigate(['studentforgotPass'])
  }

 
}
