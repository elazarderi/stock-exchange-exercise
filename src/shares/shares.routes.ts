import * as express from "express";
import Shares from "./shares.schema";

export const router = express.Router();

router.get('/all', async (req, res) => {
    const traders = await Shares.find({}).exec();
    try {
        res.send(traders);
    } catch (err) {
        res.status(500).send(err);
    }
})

export default router;