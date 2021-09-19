import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { StudentSignUp } from '../student-sign-up';
import { StaffCourseAssignService } from '../staff-course-assign.service';
import { StudentService } from '../student.service';
import { EnrollmentService } from '../enrollment.service';
import { StudentDetailsModel } from '../student-details-model';
@Component({
  selector: 'app-student-enroll-list',
  templateUrl: './student-enroll-list.component.html',
  styleUrls: ['./student-enroll-list.component.css']
})
export class StudentEnrollListComponent implements OnInit {

  
  StudentDetailsForm=new FormGroup(
    {
      courseCode:new FormControl(''),
      staffId:new FormControl('')
    }
  )
  public enrolledStudentList:Observable<StudentDetailsModel[]>|any;
  public courseDetails:Observable<Number[]>|any 
  constructor(private staffCourseAssignService:StaffCourseAssignService, private enrollmentService:EnrollmentService,
     private stud:StudentService) { }
  loginId=localStorage.getItem("user")
  
  ngOnInit(): void {
      console.log(this.loginId)
  }

getCourse()
{
  
  this.staffCourseAssignService.getCourseCodeByStaffId(this.loginId)
  .subscribe(data=>
    {
      this.courseDetails=data
      console.log(this.courseDetails)
    })
}

onSubmit()
{

  this.enrollmentService.getEnrolledStudentDetails(this.StudentDetailsForm.get('courseCode')?.value,this.loginId).subscribe(
    data=>{
      this.enrolledStudentList=data
    }
      )

    }

}
