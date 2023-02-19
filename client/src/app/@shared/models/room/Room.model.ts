import {Response} from "@/app/@shared/models/Response.model";
export interface RoomForm {
    title:string;
    subject:string;
}
export interface RoomModel {
    id_room?:number;
    title:string;
    subject:string;
    uuid:string;
}
export interface RoomResponse extends Response{
    room:RoomModel | null;
}