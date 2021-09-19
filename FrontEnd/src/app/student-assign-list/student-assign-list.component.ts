import { Component, OnInit } from '@angular/core';
import { StudentAssignService } from '../student-assign.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentModel } from '../student-model';
@Component({
  selector: 'app-student-assign-list',
  templateUrl: './student-assign-list.component.html',
  styleUrls: ['./student-assign-list.component.css']
})
export class StudentAssignListComponent implements OnInit {

  constructor(private studentAssignService:StudentAssignService,private router:Router) { }
  
  studentsArray: any[] = [];  
  public studentsAssign: Observable<StudentModel[]> | any;  
  public student : StudentModel=new StudentModel();  
  ngOnInit(): void {
    this.studentAssignService.getAssignedStudentList(this.DepartmentId).subscribe(data =>{  
      this.studentsAssign =data;  })  
    
  }
 
  DepartmentId=localStorage.getItem('username')
  studentlist:any;  
  updateDetails(departmentId:any,rollNo:number,)
  {
      console.log(this.DepartmentId,rollNo)
      this.router.navigate(['updateAssignList',this.DepartmentId,rollNo]);
  }
  
  /*deleteHodDetails(hodId:number)
  {
    this.studentAssignService.deleteHodDetails(hodId).subscribe(data=>{
      console.log(data);
      this.hodService.getHodDetailsList().subscribe(data=>{
        this.hodPersonalDetailsList=data
        window.alert("HOD Details deleted successfully!")
      });
    });
  }*/

}
