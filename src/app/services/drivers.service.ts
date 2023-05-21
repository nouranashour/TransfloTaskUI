import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Driver } from 'src/app/model/driver.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  baseApiUrl : string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  GetAllDrivers():Observable<Driver[]>{
    return this.http.get<Driver[]>(this.baseApiUrl + '/list?page=1&size=100');
  }
  AddNewDriver(driver:Driver):Observable<Driver>{
   // driver.id=0;
    return this.http.post<Driver>(this.baseApiUrl + '/Create', driver);
  }

  EditDriver(driver:Driver):Observable<Driver>{
    // driver.id=0;
     return this.http.put<Driver>(this.baseApiUrl +'/Update', driver);
  }
   GetDriverById(id:string):Observable<Driver>{
    return this.http.get<Driver>(this.baseApiUrl+'/GetbyId?id='+id);
  }
  DeleteDriver(id:string):Observable<Driver>{
    return this.http.delete<Driver>(this.baseApiUrl+'/Delete?id='+id);
  }

  InsertBulk(count : string):Observable<Driver[]>{
    return this.http.get<Driver[]>(this.baseApiUrl + '/InsertBulk?count='+count);
  }
  GetAlphapetizeDrivers():Observable<Driver[]>{
    return this.http.get<Driver[]>(this.baseApiUrl + '/AlphapetizeDriversList?page=1&size=100');
  }
  
  

}
