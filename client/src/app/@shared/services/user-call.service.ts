import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@/environments/environment';
import { Observable, throwError } from 'rxjs';
import {RoomUserResponse} from '@/app/@shared/models/call/RoomUser.model';
import {catchError,map} from "rxjs/operators";
import { RoomUser } from '@/app/@shared/models/call/RoomUser.model';
@Injectable({
  providedIn: 'root'
})
export class UserCallService {

  constructor(private http:HttpClient) {
   }
  saveUserOnCall(data:RoomUser){
    return this.http.post<RoomUserResponse>(`${environment.API_URL}/user_call`,data).pipe(
      map((roomUser:RoomUserResponse)=>{
        return roomUser;
      }),
      catchError((err)=>this.handlerError(err))
    );
  }
  deleteUserOnCall(id:string){
    return this.http.delete<RoomUserResponse>(`${environment.API_URL}/user_call/${id}`).pipe(
      map((roomUser:RoomUserResponse)=>{
        return roomUser;
      }),
      catchError((err)=>this.handlerError(err))
    );
  }
  getAllMembersCall(id:string){
    return this.http.get<RoomUserResponse>(`${environment.API_URL}/user_call/${id}`).pipe(
      map((roomUser:RoomUserResponse)=>{
        return roomUser;
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
