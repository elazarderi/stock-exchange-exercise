import * as express from "express";
import { TradersController } from "../controllers/traders.controller";

export const router = express.Router();

router.get('/all', TradersController.getTraders);
router.get('/names', TradersController.getTradersNames);
router.get('/status/:id', TradersController.getTraderStatus);
router.get('/deals/:id', TradersController.getTraderDeals);

export default router;