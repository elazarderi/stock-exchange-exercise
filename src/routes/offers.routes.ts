import * as express from "express";
import { OffersController } from "../controllers/offers.controller";

export const router = express.Router();

router.get('/share/:shareId', OffersController.getOffersByShareId);

export default router;