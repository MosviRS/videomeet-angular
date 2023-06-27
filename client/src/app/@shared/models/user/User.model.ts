
import {Response} from "@/app/@shared/models/Response.model";

export interface User {
    id_user?:number;
    name:string;
}
export interface UserResponse extends Response{
    user:User | null;
}