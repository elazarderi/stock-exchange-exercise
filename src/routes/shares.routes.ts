import * as express from "express";
import { Share } from "../models/index";
import { IShare } from "../types/index";

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