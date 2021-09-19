import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TimeTableService } from '../time-table.service';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { TimeTable } from '../time-table';
@Component({
  selector: 'app-list-time-table-details',
  templateUrl: './list-time-table-details.component.html',
  styleUrls: ['./list-time-table-details.component.css']
})
export class ListTimeTableDetailsComponent implements OnInit {

  constructor(private timeTableService:TimeTableService) { }
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject(); 
  public timeTableDetailsList : Observable<TimeTable[]> | any;
  public timeTableDetails:TimeTable=new TimeTable();
  TimeTableViewForm=new FormGroup({
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
    this.timeTableService.getTimeTableDetails(this.TimeTableViewForm.get('semester')?.value,this.TimeTableViewForm.get('deptId')?.value).subscribe(data=>{
      this.timeTableDetailsList=data
    })
  }
//save
}
