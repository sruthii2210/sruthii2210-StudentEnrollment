import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HodLoginService {
  private baseUrl='http://localhost:8081/hodLogin'
  constructor(private http:HttpClient) { }
  saveHodLoginDetails(hodId:any,hodLoginDetails:object):Observable<any>
  {
    return this.http.post(`${this.baseUrl}`+'/hodPersonal/'+`${hodId}`+'/addLoginDetails',hodLoginDetails,{responseType:'text'});
  }
  getHodLoginDetails(hodId:any):Observable<any>{
    return this.http.get(`${this.baseUrl}`+'/hodPersonal/'+`${hodId}`+'/getLoginDetails');
  }
  updateHodLoginDetails(hodId:any,password:any,hodLoginDetails:object):Observable<any>
  {
    return this.http.put(`${this.baseUrl}`+'/updateLoginDetails/'+`${hodId}`+'/'+`${password}`,hodLoginDetails)
  }
}
