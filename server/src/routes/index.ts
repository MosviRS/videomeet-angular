import { Router } from "express";
import {createRoom, getRoom} from "../controllers/Room";
import {createUserCall,deleteUserCall,getAllMembersCall} from "../controllers/UserCall";
import {createUser,getUser} from "../controllers/User";
const BASE_PATH = "/api/1_0";
const router = Router();
/**
 * Routes User
 */
//Routes room
router.post(`${BASE_PATH}/room`, createRoom);
router.get(`${BASE_PATH}/room/:id`, getRoom);
//Routes user
router.post(`${BASE_PATH}/user`, createUser);
router.get(`${BASE_PATH}/user/:id`, getUser);
router.post(`${BASE_PATH}/user_call`, createUserCall);
router.delete(`${BASE_PATH}/user_call/:id`, deleteUserCall);
router.get(`${BASE_PATH}/user_call/:id`, getAllMembersCall);
export { router };