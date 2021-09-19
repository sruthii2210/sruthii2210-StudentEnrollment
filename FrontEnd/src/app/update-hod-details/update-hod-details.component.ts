import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HodSignUp } from '../hod-sign-up';
import { HodService } from '../hod.service';

@Component({
  selector: 'app-update-hod-details',
  templateUrl: './update-hod-details.component.html',
  styleUrls: ['./update-hod-details.component.css']
})
export class UpdateHodDetailsComponent implements OnInit {
  hodId:number | any;
  hodSignup:HodSignUp  | any
  constructor(private hodService:HodService,private route:ActivatedRoute,private router:Router) {
   }

  ngOnInit(): void {
    this.hodSignup=new HodSignUp()
    this.hodId=localStorage.getItem('user')
    this.hodService.getHodDetailsById(this.hodId).subscribe(data=>{
      console.log(data)
      this.hodSignup=data
    })
  } 
  updateHodDetails()
  {
    this.hodService.updateHodDetails(this.hodId,this.hodSignup).subscribe(data=>{
      console.log(data)
      this.hodService.getHodDetailsById(this.hodId).subscribe(data=>{
        console.log(data)
        this.hodSignup=data
    })
  })
  }
  onSubmit()
  {
    this.updateHodDetails()
    window.alert("HOD Details Updated Successfully!")
    this.router.navigate(['hodViewProfile'])
  }

}
