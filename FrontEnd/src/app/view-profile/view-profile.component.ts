import { Component, OnInit } from '@angular/core';
import { StudentSignUp } from '../student-sign-up';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  public studentParticular:StudentSignUp | any
  public student:StudentSignUp | any

  constructor(private studentService:StudentService,private router:Router,private route:ActivatedRoute) { }
  rollNumber:any=localStorage.getItem('user')
  
  ngOnInit(): void {
     //this.rollNo=this.route.snapshot.params['rollNo']
     //console.log(this.rollNo)
     console.log(this.rollNumber)
    this.studentService.getStudentDetailsById(this.rollNumber).subscribe(data =>{  
      this.studentParticular =data;  })
  }

}
