import { Component, OnInit } from '@angular/core';
import { TimeTableService } from '../time-table.service';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { TimeTable } from '../time-table';
import { FormGroup,FormControl } from '@angular/forms';
import { EnrollmentModel } from '../enrollment-model';
import { EnrollmentService } from '../enrollment.service';
@Component({
  selector: 'app-view-enrollment-details',
  templateUrl: './view-enrollment-details.component.html',
  styleUrls: ['./view-enrollment-details.component.css']
})
export class ViewEnrollmentDetailsComponent implements OnInit {

  constructor(private timeTableService:TimeTableService,private enrollmentService:EnrollmentService) { }
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject(); 
  public timeTableDetailsList : Observable<TimeTable[]> | any;
  public timeTableDetails:TimeTable=new TimeTable();
  public enrollmentDetailsList:Observable<EnrollmentModel[]>|any;
  EnrollmentViewForm=new FormGroup({
    rollNo:new FormControl(''),
    deptId:new FormControl(''),
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
    this.timeTableService.getTimeTableDetails(this.EnrollmentViewForm.get('semester')?.value,this.EnrollmentViewForm.get('deptId')?.value).subscribe(data=>{
      this.timeTableDetailsList=data
      this.getEnrollmentDetails()
    })
  }
  getEnrollmentDetails()
  {
    this.enrollmentService.getEnrollmentDetails(this.EnrollmentViewForm.get('rollNo')?.value,this.EnrollmentViewForm.get('semester')?.value,this.EnrollmentViewForm.get('deptId')?.value).subscribe(data=>{
      console.log(data)
      this.enrollmentDetailsList=data
    })
  }
}
