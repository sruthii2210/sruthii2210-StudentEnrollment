import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { TimeTable } from '../time-table';
import { TimeTableService } from '../time-table.service';

@Component({
  selector: 'app-add-timetable-details',
  templateUrl: './add-timetable-details.component.html',
  styleUrls: ['./add-timetable-details.component.css']
})
export class AddTimetableDetailsComponent implements OnInit {
  public courseDetails:Observable<Course[]>|any
  constructor(private courseService:CourseService,private timeTableService:TimeTableService) { }
  AddTimeTableForm=new FormGroup({
    deptId:new FormControl(''),
    semester:new FormControl(''),
    day:new FormControl(''),
    periodOne:new FormControl(''),
    periodTwo:new FormControl(''),
    periodThree:new FormControl(''),
    periodFour:new FormControl(''),
    periodFive:new FormControl(''),
    periodSix:new FormControl(''),
    periodSeven:new FormControl(''),
    periodEight:new FormControl('')
  })

  getCourseId()
  {
    console.log(this.AddTimeTableForm.get('semester')?.value)
    console.log(this.AddTimeTableForm.get('deptId')?.value)
    this.courseService.getCourseDetailsBySemIdAndDeptId(this.AddTimeTableForm.get('semester')?.value,this.AddTimeTableForm.get('deptId')?.value).subscribe(data=>{
      console.log(data)
      this.courseDetails=data
    })
  }
  timeTableDetails:TimeTable=new TimeTable()
  saveTimeTableDetails()
  {
    this.timeTableDetails.day=this.AddTimeTableForm.get("day")?.value;
    this.timeTableDetails.periodOne=this.AddTimeTableForm.get('periodOne')?.value;
    this.timeTableDetails.periodTwo=this.AddTimeTableForm.get('periodTwo')?.value;
    this.timeTableDetails.periodThree=this.AddTimeTableForm.get('periodThree')?.value;
    this.timeTableDetails.periodFour=this.AddTimeTableForm.get('periodFour')?.value;
    this.timeTableDetails.periodFive=this.AddTimeTableForm.get('periodFive')?.value;
    this.timeTableDetails.periodSix=this.AddTimeTableForm.get('periodSix')?.value;
    this.timeTableDetails.periodSeven=this.AddTimeTableForm.get('periodSeven')?.value;
    this.timeTableDetails.periodEight=this.AddTimeTableForm.get('periodEight')?.value;
    this.timeTableDetails.semester=this.AddTimeTableForm.get('semester')?.value;
    this.timeTableDetails.deptId=this.AddTimeTableForm.get('deptId')?.value;

    this.timeTableService.saveTimeTableDetails(this.AddTimeTableForm.get('semester')?.value,this.AddTimeTableForm.get('deptId')?.value,this.timeTableDetails).subscribe(data=>{
       console.log(data)
    })
    window.alert("TimeTable Details Added Successfully!")
  }
    //public day:string[]=['Monday','Tuesday','Wednesday','Thursday','Friday']
    ngOnInit(): void {
      //console.log(this.day)
      
    }
}
