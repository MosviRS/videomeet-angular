import { Request, Response } from "express";
import { createNewRoom } from "../services/room.service";
import { handleHttp } from "../utils/error";
const create = async ({ body }: Request, res: Response) => {
  try{
    const response = await createNewRoom(body);
    res.json(response);
  }catch(error:any){
    handleHttp(res, error);
  }
};



export { create };