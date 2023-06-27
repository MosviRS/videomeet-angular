import { Request, Response } from "express";
import { createNewUser,getUserById} from "../services/user.service";
import { handleHttp } from "../utils/error";
const createUser = async ({ body }: Request, res: Response) => {
  try{
    const response = await createNewUser(body);
    res.json(response).status(response.code);
  }catch(error:any){
    handleHttp(res, "ERR_CREATE_USER");
  }
};
const getUser = async ({params}: Request, res: Response) => {
  try{
    const { id } = params;
    const response = await getUserById(id);
    res.json(response).status(response.code);
  }catch(error:any){
    handleHttp(res, "ERR_GET_USER");
  }
};
export { createUser,getUser };