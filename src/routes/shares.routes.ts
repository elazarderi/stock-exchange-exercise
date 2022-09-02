import * as express from "express";
import { Share } from "../models/shares.model";
import { IShare } from "../types/share.interface";

export const router = express.Router();

router.get('/all', async (req, res) => {
    try {
        const shares: IShare[] = await Share.findAll();
        res.send(shares);
    } catch (err) {
        res.status(500).send(err);
    }
})

export default router;