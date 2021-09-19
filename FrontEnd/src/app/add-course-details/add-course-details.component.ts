import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course-details',
  templateUrl: './add-course-details.component.html',
  styleUrls: ['./add-course-details.component.css']
})
export class AddCourseDetailsComponent implements OnInit {
  AddCourseForm=new FormGroup({
    courseCode:new FormControl(''),
    courseName:new FormControl(''),
    semester:new FormControl(''),
    deptId:new FormControl('')
  })
  courseDetails:Course=new Course()
  constructor(private courseService:CourseService) { }
  saveCourseDetails()
  {
    this.courseDetails=new Course();
    this.courseDetails.courseCode=this.AddCourseForm.get('courseCode')?.value;
    this.courseDetails.courseName=this.AddCourseForm.get('courseName')?.value;
    this.courseDetails.semester=this.AddCourseForm.get('semester')?.value;
    this.courseDetails.deptId=this.AddCourseForm.get('deptId')?.value;
    console.log(this.courseDetails.courseCode)
    console.log(this.courseDetails.courseName)
    console.log(this.courseDetails.semester)
    console.log(this.courseDetails.deptId)
    this.courseService.saveCourseDetails(this.courseDetails.semester,this.courseDetails.deptId,this.courseDetails).subscribe(data=>{
      window.alert(data)
    })
  }
  ngOnInit(): void {
  }

}
