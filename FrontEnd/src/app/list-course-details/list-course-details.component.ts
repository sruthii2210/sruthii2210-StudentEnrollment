import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../course';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-list-course-details',
  templateUrl: './list-course-details.component.html',
  styleUrls: ['./list-course-details.component.css']
})
export class ListCourseDetailsComponent implements OnInit {


  constructor(public courseService:CourseService,private router:Router) { }
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  public courseDetailsList : Observable<Course[]> | any;
  public courseDetails:Course=new Course();
  public hodDetailsList:any;

  SemesterSearchForm=new FormGroup({
    semester:new FormControl('')
  })
  ngOnInit(): void {
    
  }
  onSubmit()
  {
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };  
    this.courseService.getCourseDetailsBySem(this.SemesterSearchForm.get('semester')?.value).subscribe(data=>{
      this.courseDetailsList=data
    })
  }
  updateCourse(courseCode:string)
  {
    this.router.navigate(['updateCourseDetails/',courseCode])
  }
  deleteCourse(courseCode:string)
  {
    this.courseService.deleteCourseDetails(courseCode).subscribe(data=>{
      console.log(data);
      this.courseService.getCourseDetailsBySem(this.SemesterSearchForm.get('semester')?.value).subscribe(data=>{
        this.courseDetailsList=data
        window.alert("Course Details Deleted Successfully!")
      })
    })
  }
}