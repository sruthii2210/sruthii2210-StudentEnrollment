import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../student-model';
import { Observable } from 'rxjs';
import { StudentAssignService } from '../student-assign.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-asign-student',
  templateUrl: './update-asign-student.component.html',
  styleUrls: ['./update-asign-student.component.css']
})
export class UpdateAsignStudentComponent implements OnInit {

  rollNo:number | any
  departmentId:number| any
  studentAssign: StudentModel | any 
  public studentAssignList:Observable<StudentModel[]> | any
  constructor(private studentAssignService:StudentAssignService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.studentAssign = new StudentModel()
    this.rollNo=this.route.snapshot.params['rollNo']
    this.studentAssignService.getParticularStudentAssign(this.rollNo).subscribe(data=>{console.log(data)
    this.studentAssign=data
    console.log(this.studentAssignList)
    })
  }

  DepartmentId=localStorage.getItem('username')
  updateStudentAssignDetails()
  {
    this.studentAssignService.updateStudentAssignDetails(this.DepartmentId,this.rollNo,this.studentAssign).subscribe(data=>{
      console.log(data)
    })
    window.alert("Student Assign Details Updated Successfully!");
    this.router.navigate(['studentAssignList'])
  }
  onSubmit()
  {
    this.updateStudentAssignDetails()
  }
}
