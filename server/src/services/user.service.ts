import { UserInput, UserOutput,UserModel } from "../types/User.interface";
import {User} from "../models/User";
export const createNewUser = async (body: UserInput) => {
    const { name } = body;
    if (!name)
      return {
        status: false,
        message: "the user data is not defined",
        code: 409
      } as UserOutput;
    const newUser:UserModel = await User.create({
      name
    });
    return {
      status: true,
      message: "user was created successfully",
      code: 201,
      user: newUser,
    } as UserOutput;
  };

  export const getUserById = async (id: string) => {

    if (!id)
      return {
        status: false,
        message: "id is required",
        code: 409
      } as UserOutput;
    const user = await User.findByPk(id);
    if(!user){
      return {
        status: false,
        message: "Not found user data",
        code: 404
      } as UserOutput;
    }
    return {
      status: true,
      message: "user was finded successfully",
      code: 200,
      user
    } as UserOutput;
  };