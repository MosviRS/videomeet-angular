import { Output } from "./Output.interface";
export interface UserModel {
    id_user:number;
    name:string;
}
export interface UserInput {
 name:string;
}
export interface UserOutput extends Output{
    user?:UserModel;
}