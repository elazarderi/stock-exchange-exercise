import * as express from "express";
import { SharesController } from "../controllers/shares.controller";

export const router = express.Router();

router.get('/all', SharesController.getShares);

router.get('/:id', async (req, res) => {
    try {
        req.params.id
    } catch (err) {
        res.status(500).send(err);
    }
})

export default router;