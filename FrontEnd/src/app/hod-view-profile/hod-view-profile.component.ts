import { Component, OnInit } from '@angular/core';
import { HodSignUp } from '../hod-sign-up';
import { HodService } from '../hod.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hod-view-profile',
  templateUrl: './hod-view-profile.component.html',
  styleUrls: ['./hod-view-profile.component.css']
})
export class HodViewProfileComponent implements OnInit {
  public hodParticular:HodSignUp | any
  public student:HodSignUp | any
  constructor(private hodService:HodService,private router:Router,private route:ActivatedRoute) { }
  hodId:any=localStorage.getItem('user')
  ngOnInit(): void {
    console.log(this.hodId)
    this.hodService.getHodDetailsById(this.hodId).subscribe(data =>{  
      this.hodParticular =data;  })
  }
  onSubmit()
  {
    this.router.navigate(['hodModule'])
  }

}
