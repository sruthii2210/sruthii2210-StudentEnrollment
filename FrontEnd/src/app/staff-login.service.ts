import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StaffLoginService {

  constructor(private http:HttpClient) { }

  saveDetails(staffId:any,StaffLoginDetails:object):Observable<any>
  {
    return this.http.post('http://localhost:8081/staffLogin'+'/addstaff/'+`${staffId}`+'/addLoginCredentials',StaffLoginDetails);
  }

  getStaff(loginId:any):Observable<any>{
    return this.http.get('http://localhost:8081/staffLogin'+'/addLoginCredentials/'+`${loginId}`);
  }

  updateStaff(loginId:any,password:any,StaffLoginDetails:object):Observable<any>
  {
    return this.http.put('http://localhost:8081/staffLogin'+'/addLoginCredentials/'+`${loginId}`+'/'+`${password}`,StaffLoginDetails);
  }
}
