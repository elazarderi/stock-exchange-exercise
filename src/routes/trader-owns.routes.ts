import * as express from "express";
import { TraderOwnsController } from "../controllers/trader-owns.controller";

export const router = express.Router();

router.get('/:traderId/:shareId', TraderOwnsController.getOwnsOfTrader);

export default router;