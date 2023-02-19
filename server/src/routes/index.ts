import { Router } from "express";
import {create} from "../controllers/Room";
const BASE_PATH = "/api/1_0";
const router = Router();
/**
 * Routes User
 */
router.post(`${BASE_PATH}/room`, create);

export { router };