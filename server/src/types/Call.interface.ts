import { Output } from "./Output.interface";
export interface CallModel {
    id_user_room:string;
    fk_room:number;
    fk_user: number;
    created_at?:Date;
    user?:{name:string}
}

export interface CallOutput extends Output{
    call?:CallModel;
    members?:CallModel[];
}