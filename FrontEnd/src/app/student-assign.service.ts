import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentAssignService {
  constructor(private http:HttpClient) { }

  addStudentAssign(student:object,departmentId:any):Observable<object>{
    return this.http.post('http://localhost:8081/studentAssign/departmentInsertion/'+`${departmentId}`+'/studentAssignInsertion', student); 
  }

  getAssignedStudentList(departmentId:any): Observable<any> {  
    return this.http.get('http://localhost:8081/studentAssign/getParticularDeptDetails/'+`${departmentId}`+'/getAllstudentAssign');  
  }  
  getParticularStudentAssign(rollNo:number):Observable<any>{
    return this.http.get('http://localhost:8081/studentAssign/getParticularStudentAssign/'+`${rollNo}`);  
  }
  updateStudentAssignDetails(departmentId:any,rollNo:any,studentAssign:any):Observable<any>{
    return this.http.put('http://localhost:8081/studentAssign/departmentUpdation/'+`${departmentId}`+'/updateStudentAssign/'+`${rollNo}`,studentAssign)
  }
  
}
