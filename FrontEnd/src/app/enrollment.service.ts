import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private baseUrl='http://localhost:8081/enrollment'
  constructor(private httpclient:HttpClient) { }
  saveEnrollmentDetails(rollNo:any,courseCode:any,staffId:any,enrollmentDetails:object):Observable<any>
  {
    return this.httpclient.post(`${this.baseUrl}`+'/student/'+`${rollNo}`+'/course/'+`${courseCode}`+'/staff/'+`${staffId}`+'/addEnrollmentDetails',enrollmentDetails,{responseType:'text'});
  }
  getEnrollmentDetails(rollNo:any,semId:any,deptId:any):Observable<any>
  {
    return this.httpclient.get(`${this.baseUrl}`+'/student/'+`${rollNo}`+'/semester/'+`${semId}`+'/department/'+`${deptId}`+'/getEnrollmentDetails')
  }
  getEnrolledStudentDetails(courseCode:any,staffId:any):Observable<any>
  {
    return this.httpclient.get(`${this.baseUrl}`+'/course/'+`${courseCode}`+'/staff/'+`${staffId}`+'/getStudents')
  }
}
