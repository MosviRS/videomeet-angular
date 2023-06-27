
import { RoomResponse } from './../room/Room.model';
import {Response} from "@/app/@shared/models/Response.model";
export interface RoomUser {
    id_room:string;
    id_user: string;
}
export interface CallOutput{
    id_user_room:string;
    fk_room:number;
    fk_user: number;
    created_at: Date;
    user?:{
        name:string
    };
}
export interface RoomUserResponse extends Response{
    call?:CallOutput;
    members?:CallOutput[];
}
export interface UserStream{
    media: MediaStream;
    member: CallOutput;
}