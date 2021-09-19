import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { StaffAssign } from '../staff-assign';
import { StaffAssignService } from '../staff-assign.service';
import { StaffCourseAssign } from '../staff-course-assign';
import { StaffCourseAssignService } from '../staff-course-assign.service';
import { Subject } from 'rxjs';
import { Enrollment } from '../enrollment';
import { EnrollmentService } from '../enrollment.service';
@Component({
  selector: 'app-add-enrollment-details',
  templateUrl: './add-enrollment-details.component.html',
  styleUrls: ['./add-enrollment-details.component.css']
})
export class AddEnrollmentDetailsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject(); 
  public courseDetails:Observable<Course[]>|any
  public staffCourseAssignDetails:Observable<Number[]>|any
  public staffAssignDetails:StaffAssign|any
  public courseDetailsList:Course|any
  constructor(private courseService:CourseService,private staffCourseAssignService:StaffCourseAssignService,private staffAssignService:StaffAssignService,private enrollmentService:EnrollmentService) { }
  EnrollmentForm=new FormGroup({
    rollNo:new FormControl(''),
    deptId:new FormControl(''),
    semester:new FormControl(''),
    courseCode:new FormControl(''),
    id:new FormControl('')
  })
  ngOnInit(): void {
  }
  getCourseId()
  {
    console.log(this.EnrollmentForm.get('semester')?.value);
    console.log(this.EnrollmentForm.get('deptId')?.value);
      this.courseService.getCourseDetailsBySemIdAndDeptId(this.EnrollmentForm.get('semester')?.value,this.EnrollmentForm.get('deptId')?.value).subscribe(data=>{
        this.courseDetails=data;
      })
  }
  getStaffs()
  {
    console.log(this.EnrollmentForm.get('courseCode')?.value)
    this.staffCourseAssignService.getStaffByCourseCode(this.EnrollmentForm.get('courseCode')?.value).subscribe(data=>{
      console.log(data)
      this.staffCourseAssignDetails=data
    })
  }
  getCourseDetails()
  {
    this.courseService.getCourseDetails(this.EnrollmentForm.get('courseCode')?.value).subscribe(data=>{
      console.log(data)
      this.courseDetailsList=data
    })
  }
  enrollmentDetails:Enrollment=new Enrollment()
  addEnrollmentDetails()
  {
      this.enrollmentDetails=new Enrollment()
      this.enrollmentDetails.rollNo=this.EnrollmentForm.get('rollNo')?.value;
      this.enrollmentDetails.courseCode=this.EnrollmentForm.get('courseCode')?.value;
      this.enrollmentDetails.id=this.EnrollmentForm.get('id')?.value
      console.log(this.enrollmentDetails)
      this.enrollmentService.saveEnrollmentDetails(this.EnrollmentForm.get('rollNo')?.value,this.EnrollmentForm.get('courseCode')?.value,this.EnrollmentForm.get('id')?.value,this.enrollmentDetails).subscribe(data=>{
        window.alert(data)
      })
  }
  onSubmit()
  {
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };  
    this.getCourseDetails()
    this.staffAssignService.getStaffDetailsById(this.EnrollmentForm.get('id')?.value).subscribe(data=>{
      console.log(data)
      this.staffAssignDetails=data
    })
  }
}
