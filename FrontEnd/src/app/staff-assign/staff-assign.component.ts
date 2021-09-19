import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { StaffAssign } from '../staff-assign';
import { StaffAssignService } from '../staff-assign.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-staff-assign',
  templateUrl: './staff-assign.component.html',
  styleUrls: ['./staff-assign.component.css']
})
export class StaffAssignComponent implements OnInit {

  StudentAssignForm=new FormGroup({
    name:new FormControl(''),
    id:new FormControl(''),
    joiningDate:new FormControl(''),
    departmentId:new FormControl(''),
  });
  student:StaffAssign=new StaffAssign();
 
  constructor(private studentAssignService:StaffAssignService,private router:Router)
   { }

  ngOnInit(): void {
  }

  saveStudentAssignDetails(){
    this.student =new StaffAssign();
    this.student.name= this.StudentAssignForm.get('name')?.value;
    console.log(this.student.name)
    this.student.id=this.StudentAssignForm.get('id')?.value;
    console.log(this.student.id)
    this.student.joiningDate=this.StudentAssignForm.get('joiningDate')?.value;
    console.log(this.student.joiningDate)
    this.student.deptId=this.StudentAssignForm.get('departmentId')?.value;
    console.log(this.student.deptId)
    //localStorage.setItem("username",this.StudentAssignForm.get('departmentId')?.value)
    this.studentAssignService.addStudentAssign(this.student,this.student.deptId)
    .subscribe(data=>console.log(data),error=>console.log(error));
    window.alert("Staff Details assigned successfully!");
    //this.router.navigate(['main'])
  }
  

}
