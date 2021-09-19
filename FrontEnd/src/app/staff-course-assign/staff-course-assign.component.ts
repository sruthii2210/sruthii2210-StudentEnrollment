import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { StaffCourseAssignService } from '../staff-course-assign.service';
import { StaffAssign } from '../staff-assign';
import { StaffAssignService } from '../staff-assign.service';
import { StaffCourseAssign } from '../staff-course-assign';

@Component({
  selector: 'app-staff-course-assign',
  templateUrl: './staff-course-assign.component.html',
  styleUrls: ['./staff-course-assign.component.css']
})
export class StaffCourseAssignComponent implements OnInit {
  public courseDetails:Observable<Course[]>|any
  public staffAssignDetails:Observable<StaffAssign[]>|any
  constructor(private courseService:CourseService,private staffCourseAssignService:StaffCourseAssignService,private staffAssignService:StaffAssignService) { }
  StaffCourseAssignForm=new FormGroup({
    deptId:new FormControl(''),
    semester:new FormControl(''),
    courseCode:new FormControl(''),
    staffId:new FormControl('')
  })
  ngOnInit(): void {
  }
  getCourseId()
  {
    console.log(this.StaffCourseAssignForm.get('semester')?.value);
    console.log(this.StaffCourseAssignForm.get('deptId')?.value);
      this.courseService.getCourseDetailsBySemIdAndDeptId(this.StaffCourseAssignForm.get('semester')?.value,this.StaffCourseAssignForm.get('deptId')?.value).subscribe(data=>{
        this.courseDetails=data;
      })
  }
  getStaffs()
  {
    console.log(this.StaffCourseAssignForm.get('deptId')?.value);
    this.staffAssignService.getStaffByDept(this.StaffCourseAssignForm.get('deptId')?.value).subscribe(data=>{
      console.log(data)
      this.staffAssignDetails=data;
    })
  }
  staffCourseAssignDetails:StaffCourseAssign=new StaffCourseAssign()
  saveCourseAssignDetails()
  {
    this.staffCourseAssignDetails=new StaffCourseAssign()
    this.staffCourseAssignDetails.staffId=this.StaffCourseAssignForm.get('staffId')?.value
    this.staffCourseAssignDetails.courseCode=this.StaffCourseAssignForm.get('courseCode')?.value

    this.staffCourseAssignService.saveStaffCourseAssignDetails(this.StaffCourseAssignForm.get('staffId')?.value,this.StaffCourseAssignForm.get('courseCode')?.value,this.staffCourseAssignDetails).subscribe(data=>{
      console.log(data)
    })
    window.alert("Staff Assigned Successfully!");
  }
}
