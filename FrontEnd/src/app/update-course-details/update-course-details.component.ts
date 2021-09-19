import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-update-course-details',
  templateUrl: './update-course-details.component.html',
  styleUrls: ['./update-course-details.component.css']
})
export class UpdateCourseDetailsComponent implements OnInit {
  courseCode:string | any;
  course:Course | any
  constructor(private courseService:CourseService,private route:ActivatedRoute,private router:Router) {
   }

  ngOnInit(): void {
    this.course=new Course()
    this.courseCode=this.route.snapshot.params['courseCode']
    this.courseService.getCourseDetails(this.courseCode).subscribe(data=>{
      console.log(data)
      this.course=data
      console.log(this.course)
    })
  } 
  updateCourseDetails()
  {
    this.courseService.updateCourseDetails(this.courseCode,this.course).subscribe(data=>{
      console.log(data)
    })
  }
  onSubmit()
  {
    this.updateCourseDetails()
    window.alert("Course Details Updated Successfully!")
    this.router.navigate(['listCourseDetails']);
  }  


}
