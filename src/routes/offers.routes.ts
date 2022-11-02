import * as express from "express";
import { OffersController } from "../controllers/offers.controller";

export const router = express.Router();

router.get('/share/:shareId', OffersController.getOffersByShareId);
router.put('/make-offer', OffersController.makeOffer);

export default router;