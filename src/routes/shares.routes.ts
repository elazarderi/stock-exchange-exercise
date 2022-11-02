import * as express from "express";
import { SharesController } from "../controllers/shares.controller";

export const router = express.Router();

router.get('/all', SharesController.getShares);
router.get('/:id', SharesController.getShareById);

export default router;