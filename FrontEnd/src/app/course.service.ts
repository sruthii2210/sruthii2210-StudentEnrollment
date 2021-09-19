import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl='http://localhost:8081/course';
  constructor(private http:HttpClient) { }
  saveCourseDetails(semester:any,deptId:any,courseDetails:object):Observable<any>
  {
    return this.http.post(`${this.baseUrl}`+'/semester/'+`${semester}`+'/department/'+`${deptId}`+'/courseInsertion',courseDetails,{responseType:'text'});
  }
  getCourseDetailsBySem(semester:any)
  {
    return this.http.get(`${this.baseUrl}`+'/semester/'+`${semester}`+'/getBySemesterId')
  }
  getCourseDetailsByDept(deptId:any)
  {
    return this.http.get(`${this.baseUrl}`+'/semester/'+`${deptId}`+'/getByDeptId')
  }
  getCourseDetails(courseCode:any)
  {
    return this.http.get(`${this.baseUrl}`+'/getCourseDetails/'+`${courseCode}`)
  }
  getCourseDetailsBySemIdAndDeptId(semId:any,deptId:any)
  {
    return this.http.get(`${this.baseUrl}`+'/semester/'+`${semId}`+'/department/'+`${deptId}`+'/getBySemesterIdAndDeptId')
  }
  deleteCourseDetails(courseCode:any)
  {
    return this.http.delete(`${this.baseUrl}`+'/courseDeletion/'+`${courseCode}`)
  }
  updateCourseDetails(courseCode:any,courseDetails:object)
  {
    return this.http.put(`${this.baseUrl}`+'/courseUpdation/'+`${courseCode}`,courseDetails)
  }
}
