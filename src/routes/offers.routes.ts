import * as express from "express";
import { OffersController } from "../controllers/offers.controller";

export const router = express.Router();

router.get('/share/:shareId', OffersController.getOffersByShareId);
router.put('/make-offer', OffersController.makeOffer);
router.delete('/delete/:id', OffersController.deleteOffer);

export default router;