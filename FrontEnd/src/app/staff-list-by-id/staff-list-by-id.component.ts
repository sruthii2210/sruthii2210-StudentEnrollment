import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StaffAssign } from '../staff-assign';
import { DepartmentService } from '../department.service';
import { StaffAssignService } from '../staff-assign.service';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-staff-list-by-id',
  templateUrl: './staff-list-by-id.component.html',
  styleUrls: ['./staff-list-by-id.component.css']
})
export class StaffListByIdComponent implements OnInit {

  staffs:Observable<StaffAssign[]>|any
  deptId:Number[]|any
  constructor(private deptService:DepartmentService,private staffAssign:StaffAssignService) { }

  StaffList=new FormGroup(
    {
      deptId:new FormControl('')
    }
  )
  // getDeptId()
  // {
  //     this.deptService.getDept().subscribe(
  //       data=>{
  //         this.deptId=data
  //         console.log(data)
  //       }
  //     )
  // }

  onSubmit()
  {
      this.staffAssign.getAssignedStaffList(this.StaffList.get('deptId')?.value).subscribe(
        res=>{
          this.staffs=res
          console.log(res)
        }
      )
  }
  ngOnInit(): void {
  }
}
