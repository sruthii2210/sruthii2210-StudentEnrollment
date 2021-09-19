import { Component, OnInit } from '@angular/core';
import { HodLogin } from '../hod-login';
import { FormGroup,FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HodLoginService } from '../hod-login.service';
@Component({
  selector: 'app-hod-login',
  templateUrl: './hod-login.component.html',
  styleUrls: ['./hod-login.component.css']
})
export class HodLoginComponent implements OnInit {
  staff:HodLogin=new HodLogin()
  public formData = new FormGroup({
    loginId: new FormControl(''),
    password: new FormControl('')
  });

  public logindata:HodLogin | any
  constructor(private hodLoginService:HodLoginService,private router: Router) { }

  ngOnInit(): void {
  }
  login(formData:any)
  {
    console.log(this.formData.get('loginId')?.value)
    console.log(this.formData.get('password')?.value)
    this.hodLoginService.getHodLoginDetails(this.formData.get('loginId')?.value).subscribe(data=>
      {
        this.logindata=data
        console.log(this.logindata)
        if(this.formData.get('loginId')?.value==this.logindata.userId&&this.formData.get('password')?.value==this.logindata.password)
        {
          localStorage.setItem("user",this.logindata.userId)
          console.log(localStorage.getItem('user'))
          window.alert("Logged in successfully!")
          this.router.navigate(['hodModule'])
        }
         if(this.logindata.userId!=this.formData.get('loginId')?.value&&this.logindata.password!=this.formData.get('password')?.value)
          {
            window.alert("Enter valid user or password")
          }
          if(this.logindata.password!=this.formData.get('password')?.value)
          {
            window.alert("Enter valid password")
          }
      })
     
  }
  onClickMe() {
    this.router.navigate(['HodforgotPass'])
  }

}
