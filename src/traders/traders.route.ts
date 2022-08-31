import * as express from "express";
import Traders  from './traders.schema';

export const router = express.Router();

router.get('/all', async (req, res) => {
    console.log(Traders);
    
    const traders = await Traders.find({});
    try {
        res.send(traders);
    } catch (err) {
        res.status(500).send(err);
    }
})

export default router;