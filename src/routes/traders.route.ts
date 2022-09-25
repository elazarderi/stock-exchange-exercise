import * as express from "express";
import { ITrader } from "../types/index";
import { Trader } from "../models/index";
import { TradersController } from "../controllers/traders.controller";

export const router = express.Router();

router.get('/all', TradersController.getTraders);
router.get('/names', TradersController.getTradersNames);
router.get('/:id', TradersController.getTradersById);

export default router;