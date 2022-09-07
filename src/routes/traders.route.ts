import * as express from "express";
import { ITrader } from "../types/index";
import { Trader } from "../models/index";
import { TradersController } from "../controllers/traders.controller";

export const router = express.Router();

router.get('/all', TradersController.getTraders)

export default router;