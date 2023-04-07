import { Request, Response } from "express";
import { createNewRoom,findRoom } from "../services/room.service";
import { handleHttp } from "../utils/error";
const createRoom = async ({ body }: Request, res: Response) => {
  try{
    const response = await createNewRoom(body);
    res.json(response);
  }catch(error:any){
    handleHttp(res, error);
  }
};

const getRoom = async ({ params }: Request, res: Response) => {
  try {
     const { id } = params;
     const response = await findRoom(id);
     res.json(response);
   } catch (e) {
     handleHttp(res, "ERROR_GET_ITEM");
   } 
 };



export { createRoom,getRoom };