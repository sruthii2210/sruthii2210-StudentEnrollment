import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class HodService {
  private baseUrl = 'http://localhost:8081/hod';
  private hodPersonalDetails:any; 
  constructor(private http:HttpClient) { }
  getHodDetailsList():Observable<any>
  { 
    return this.http.get('http://localhost:8081/hod/getHodDetails');
  }
  saveDetails(hodSignupDetails:object,deptId:any):Observable<any>{
    console.log("add method");
    return this.http.post(`${this.baseUrl}`+'/department/'+`${deptId}`+'/hodInsertion',hodSignupDetails,{responseType:'text'});
  }
  deleteHodDetails(hodId:any):Observable<any>
  {
    console.log("delete method")
    return this.http.delete(`${this.baseUrl}`+'/hodDeletion/'+`${hodId}`,{responseType:'text'})
  }
  getHodDetailsById(hodId:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/getParticularHodDetails/'+`${hodId}`)
  }
  updateHodDetails(hodId:any,hodDetails:any):Observable<any>{
    return this.http.put(`${this.baseUrl}`+'/hodUpdation/'+`${hodId}`,hodDetails)
  }
  
}
