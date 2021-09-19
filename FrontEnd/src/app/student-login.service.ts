import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentLoginService {
  constructor(private http:HttpClient) { }

  saveDetails(rollNo:any,studentLoginDetails:object):Observable<any>
  {
    return this.http.post('http://localhost:8081/studentLogin'+'/studentAssignInsertion/'+`${rollNo}`+'/studentLogininsertion',studentLoginDetails,{responseType:'text'});
  }

  getStudent(userName:any):Observable<any>{
    return this.http.get('http://localhost:8081/studentLogin'+'/getLoginCredentials/'+`${userName}`);
  }

  updateStudent(userName:any,password:any,studentLoginDetails:object):Observable<any>
  {
    return this.http.put('http://localhost:8081/staffLogin'+'/updateStudentLogin/'+`${userName}`+'/'+`${password}`,studentLoginDetails);
  }
}
