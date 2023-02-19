import { Output } from "./Output.interface";
export interface RoomModel {
    id_room:number;
    title:string;
    subject:string;
    uuid:string;
}
export interface RoomInput {
 title:string;
 subject:string;
}
export interface RoomOutput extends Output{
    room:RoomModel | null
}