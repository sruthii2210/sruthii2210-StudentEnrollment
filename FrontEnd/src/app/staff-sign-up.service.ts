import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StaffSignUpService {
  private baseUrl = 'http://localhost:8081/staffs';
  private hodPersonalDetails:any; 
  constructor(private http:HttpClient) { }
  getStaffDetailsList():Observable<object>
  { 
    return this.http.get('http://localhost:8081/staffs/addStaffAssign/getAllStaffs');
  }
  getStaffById(newId:any):Observable<any>
  {
    return this.http.get('http://localhost:8081/staffs/addStaffAssign/'+`${newId}`+'/getStaff');
  }
 saveDetails(hodSignupDetails:object,id:any):Observable<any>{
    console.log("add method");
    return this.http.post(`${this.baseUrl}`+'/addStaffAssign/'+`${id}`+'/addstaff',hodSignupDetails);
  }
  
  deleteHodDetails(id:any):Observable<any>
  {
    console.log("delete method")
    return this.http.delete(`${this.baseUrl}`+'/DeleteStaff/'+`${id}`)
  }
 
 
  updateHodDetails(id:any,hodSignupDetails:object):Observable<any>{
    return this.http.put(`${this.baseUrl}`+'/addStaffAssign/updateStaff/'+`${id}`,hodSignupDetails)
  }
}
