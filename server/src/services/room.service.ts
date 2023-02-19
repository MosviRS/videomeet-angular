import { RoomInput, RoomOutput,RoomModel } from "../types/Room.interface";
import {Room} from "../models/Room";
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
