import { CallOutput,CallModel } from "../types/Call.interface";
import { UserCallInput } from "../types/UserCall.interface";
import {UserRoom} from "../models/UserRoom";
import {User} from "../models/User";
export const createNewCall = async (body: UserCallInput) => {
    const { id_room,id_user } = body;
    if (!id_room || !id_room)
      return {
        status: false,
        message: "the call data is not defined",
        code: 409
      } as CallOutput;
    const call:CallModel = await UserRoom.create({
        fk_room: id_room,
        fk_user: id_user
    });
    return {
      status: true,
      message: "call was created successfully",
      code: 201,
      call: call,
    } as CallOutput;
  };

  export const deleteCall = async (id: string) => {
    if (!id){
      return {
        status: false,
        message: "id is missing",
        code: 409
      } as CallOutput;
    }
     await UserRoom.destroy({
      where: { id_user_room: id },
    });
    return {
      status: true,
      message: "call was deleted successfully",
      code: 204,
    } as CallOutput;
  };

  export const getAllMemberCall = async (id: string) => {
    if (!id){
      return {
        status: false,
        message: "id is missing",
        code: 409
      } as CallOutput;
    }
    const members = await UserRoom.findAll({
      attributes: ['id_user_room', 'fk_user', 'fk_room','createdAt'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
      where: { fk_room: id }
    })
    return {
      status: true,
      message: "get all members successfully",
      code: 200,
      members
    } as CallOutput;
  };