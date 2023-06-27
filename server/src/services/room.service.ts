import { RoomInput, RoomOutput,RoomModel } from "../types/Room.interface";
import {Room} from "../models/Room";
import {validateUuid} from "./tokens.service";
export const createNewRoom = async (room: RoomInput) => {
  const { subject, title } = room;
  if (!subject && !title)
    return {
      status: false,
      message: "the user data is not defined",
      code: 409
    } as RoomOutput;
  const newRoom:RoomModel = await Room.create({
    title,
    subject
  });
  return {
    status: true,
    message: "room was created successfully",
    code: 201,
    room: newRoom,
  } as RoomOutput;
};
export const findRoom = async (idRoom: string) => {
  if(!validateUuid(idRoom))
    return {
      status: false,
      message: "invalid room token",
      code:400
    } as RoomOutput;
  const room = await Room.findOne({ where: { uuid: idRoom } });
  if (!room)
    return {
      status: false,
      message: "room not exist",
      code:404
    } as RoomOutput;
  return {
      status: true,
      message: "room was found successfully",
      room: room,
      code: 200
  } as RoomOutput;
};

