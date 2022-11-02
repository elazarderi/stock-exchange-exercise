import * as express from "express";
import { DealsController } from "../controllers/deals.controller";

export const router = express.Router();

router.get('/share/:shareId', DealsController.getDealsByShareId);
router.get('/trader/:traderId', DealsController.getDealsByTraderId);

export default router;