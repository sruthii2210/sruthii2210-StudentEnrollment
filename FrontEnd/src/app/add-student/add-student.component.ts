import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { StudentModel } from '../student-model';
import { StudentAssignService } from '../student-assign.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  StudentAssignForm=new FormGroup({
    name:new FormControl(''),
    rollNo:new FormControl(''),
    joiningDate:new FormControl(''),
    departmentId:new FormControl(''),
  });
  student:StudentModel=new StudentModel;
  constructor(private studentAssignService:StudentAssignService)
   { }

  ngOnInit(): void {
  }

  saveStudentAssignDetails(){
    this.student =new StudentModel();
    this.student.name= this.StudentAssignForm.get('name')?.value;
    console.log(this.student.name)
    this.student.rollNo=this.StudentAssignForm.get('rollNo')?.value;
    console.log(this.student.rollNo)
    this.student.joiningDate=this.StudentAssignForm.get('joiningDate')?.value;
    console.log(this.student.joiningDate)
    this.student.departmentId=this.StudentAssignForm.get('departmentId')?.value;
    console.log(this.student.departmentId)
    localStorage.setItem("username",this.StudentAssignForm.get('departmentId')?.value)
    this.studentAssignService.addStudentAssign(this.student,this.student.departmentId)
    .subscribe(data=>console.log(data),error=>console.log(error));
    window.alert("Student Details assigned successfully!");
  }
  
}
