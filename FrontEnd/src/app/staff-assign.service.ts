import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffAssignService {
  private baseUrl='http://localhost:8081/staffAssign'
  constructor(private http:HttpClient) { }
  getStaffByDept(deptId:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/departmentInsertion/'+`${deptId}`+'/getAllStaffsAssign')
  }
  getStaffDetailsById(staffId:any)
  {
    return this.http.get(`${this.baseUrl}`+'/getStaffDetails/'+`${staffId}`)
  }
  addStudentAssign(student:object,deptId:any):Observable<object>{
    return this.http.post('http://localhost:8081/staffAssign/departmentInsertion/'+`${deptId}`+'/addStaffAssign', student); 
  }

  

  getAssignedStaffList(deptId:any): Observable<any> {  
    return this.http.get('http://localhost:8081/staffAssign/departmentInsertion/'+`${deptId}`+'/getAllStaffsAssign');  
  }  
}
