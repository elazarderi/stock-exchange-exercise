import * as express from "express";

export const router = express.Router();

router.get('/all', (req, res) =>{
    res.send('shares all');
})

export default router;