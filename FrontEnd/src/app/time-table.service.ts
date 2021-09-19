import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  private baseUrl='http://localhost:8081/timeTable'
  constructor(public http:HttpClient) { }
  saveTimeTableDetails(semId:any,deptId:any,timeTableDetails:any):Observable<any>
  {
     return this.http.post(`${this.baseUrl}`+'/semester/'+`${semId}`+'/department/'+`${deptId}`+'/addTimeTableDetails',timeTableDetails)
  }
  getTimeTableDetails(semId:any,deptId:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/semester/'+`${semId}`+'/department/'+`${deptId}`+'/getTimeTableDetails');
  }
}
