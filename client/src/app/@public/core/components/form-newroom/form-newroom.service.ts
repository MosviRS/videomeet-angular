import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@/environments/environment';
import { Observable, throwError } from 'rxjs';
import {RoomResponse} from '@/app/@shared/models/room/Room.model';
import {RoomForm} from '@/app/@shared/models/room/Room.model';
import {catchError,map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class FormNewroomService {

  constructor(private http:HttpClient) {
   }
  sendRoom(roomData:RoomForm):Observable<RoomResponse | void>{
    return this.http.post<RoomResponse>(`${environment.API_URL}/room`,roomData).pipe(
      map((room:RoomResponse)=>{
          return room;
      }),
      catchError((err)=>this.handlerError(err))
    );
  }
  getRoom(idRoom:string):Observable<RoomResponse | void>{
    return this.http.get<RoomResponse>(`${environment.API_URL}/room/${idRoom}`).pipe(
      map((room:RoomResponse)=>{
        return room;
      }),
      catchError((err)=>this.handlerError(err))
    );
  }
  private handlerError(err:any): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
