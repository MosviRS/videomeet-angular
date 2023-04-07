import { Router } from "express";
import {createRoom, getRoom} from "../controllers/Room";
const BASE_PATH = "/api/1_0";
const router = Router();
/**
 * Routes User
 */
router.post(`${BASE_PATH}/room`, createRoom);
router.get(`${BASE_PATH}/room/:id`, getRoom);

export { router };