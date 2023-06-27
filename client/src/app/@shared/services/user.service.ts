import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@/environments/environment';
import { Observable, throwError } from 'rxjs';
import {UserResponse} from '@/app/@shared/models/user/User.model';
import {catchError,map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
   }
  saveUser(nameUser:string){
    return this.http.post<UserResponse>(`${environment.API_URL}/user`,{
        name:nameUser
    }).pipe(
      map((user:UserResponse)=>{
        return user;
      }),
      catchError((err)=>this.handlerError(err))
    );
  }
  getUser(id:string){
    return this.http.get<UserResponse>(`${environment.API_URL}/user/${id}`).pipe(
      map((user:UserResponse)=>{
        return user;
      }),
      catchError((err)=>this.handlerError(err))
    );
  }
  private handlerError(err:any): Observable<never> {
    let errorUserMessage = 'An errror occured retrienving data';
    if (err) {
      const errorMessage = `Error: code ${err.message}`
      return throwError(errorMessage);
    }
    window.alert(errorUserMessage);
    return throwError("");
  }
}