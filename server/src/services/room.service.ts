import { RoomInput, RoomOutput,RoomModel } from "../types/Room.interface";
import {Room} from "../models/Room";
import {validateUuid} from "./tokens.service";
export const createNewRoom = async (room: RoomInput) => {
  const { subject, title } = room;
  if (!subject && !title)
    return {
      status: false,
      message: "the user data is not defined",
      room: null,
    } as RoomOutput;
  const newRoom:RoomModel = await Room.create({
    title,
    subject
  });
  return {
    status: true,
    message: "room was created successfully",
    room: newRoom,
  } as RoomOutput;
};
export const findRoom = async (idRoom: string) => {
  if(!validateUuid(idRoom))
    return {
      status: false,
      message: "room not exist",
      room: null,
    } as RoomOutput;
  const room = await Room.findOne({ where: { uuid: idRoom } });
  if (!room)
    return {
      status: false,
      message: "room not exist",
      room: null,
    } as RoomOutput;
  return {
      status: false,
      message: "room was found successfully",
      room: room,
  } as RoomOutput;
};

