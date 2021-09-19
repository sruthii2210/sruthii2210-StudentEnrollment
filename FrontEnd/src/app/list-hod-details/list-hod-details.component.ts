import { Component, Input, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { Observable } from 'rxjs';
import { HodSignUp } from '../hod-sign-up';
import { HodService } from '../hod.service';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-hod-details',
  templateUrl: './list-hod-details.component.html',
  styleUrls: ['./list-hod-details.component.css']
})
export class ListHodDetailsComponent implements OnInit {
  constructor(public hodService:HodService,private router:Router) { }
  studentsArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  public hodPersonalDetailsList : Observable<HodSignUp[]> | any;
  public hodPersonalDetails:HodSignUp=new HodSignUp();
  public hodDetailsList:any;
  isUpdated=false
  
  UpdateHODDetailsForm=new FormGroup({
    id:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    dateOfBirth:new FormControl(''),
    gender:new FormControl(''),
    qualification:new FormControl(''),
    email:new FormControl(''),
    contactNo:new FormControl(''),
    address:new FormControl(''),
    deptId:new FormControl('')
  })
  ngOnInit(): void {
    this.isUpdated=false
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };  
    this.hodService.getHodDetailsList().subscribe(data=>{
      this.hodPersonalDetailsList=data
    })
  }
  updateDetails(hodId:number)
  {
      this.router.navigate(['/updateHodDetails',hodId]);
  }
  
  deleteHodDetails(hodId:number)
  {
    this.hodService.deleteHodDetails(hodId).subscribe(data=>{
      console.log(data);
      this.hodService.getHodDetailsList().subscribe(data=>{
        this.hodPersonalDetailsList=data
        window.alert("HOD Details deleted successfully!")
      });
    });
  }
}
