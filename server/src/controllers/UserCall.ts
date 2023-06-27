

import { Request, Response } from "express";
import { createNewCall,deleteCall,getAllMemberCall} from "../services/call.service";
import { handleHttp } from "../utils/error";
const createUserCall = async ({ body }: Request, res: Response) => {
  try{
  
    const response = await createNewCall(body);
    res.json(response).status(response.code);;
  }catch(error:any){
    handleHttp(res, "ERR_CREATE_CALL");
  }
};

const deleteUserCall = async ({ params }: Request, res: Response) => {
  try{
    const { id } = params;
    const response = await deleteCall(id);
    res.status(response.code).json(response);
  }catch(error:any){
    handleHttp(res, "ERR_DELETE_CALL");
  }
};
const getAllMembersCall = async ({ params }: Request, res: Response) => {
  try{
    const { id } = params;
    const response = await getAllMemberCall(id);
    res.status(response.code).json(response);
  }catch(error:any){
    handleHttp(res, "ERR_GET_MEMBERS");
  }
};
export { createUserCall,deleteUserCall,getAllMembersCall };