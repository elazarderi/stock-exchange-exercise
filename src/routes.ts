import * as express from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export const router = express.Router();

import tradersRoutes from './routes/traders.route';
import sharesRoutes from './routes/shares.routes';
import offersRoutes from './routes/offers.routes';
import dealsRoutes from './routes/deals.route';
import { IUser } from "./types";
import { User } from "./models";

router.get('/', (req, res) => {
    res.send('Hello world!');
});

router.post('/register', async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    const user: Partial<IUser> = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: await bcrypt.hash(req.body.password, salt)
    };
    const createdUser = await User.create(user);
    res.status(201).json(createdUser);
});

router.post('/login', async (req, res, next) => {
    const user: IUser = await User.findOne({ where: { userName: req.body.userName } });
    if (user) {
        const passwordValid: boolean = await bcrypt.compare(req.body.password, user.password);
        if (passwordValid) {
            let token: string = jwt.sign({ 'id': user.id, 'userName': user.userName }, process.env.SECRET);
            res.status(200).json({ token });
        } else {
            res.status(400).json({ error: "Password Incorrect" });
        }
    } else {
        res.status(404).json({ error: "User does not exist" });
    }
});

router.get('/me',
    async (req, res, next) => {
        try {
            let token = req.headers['authorization'].split(" ")[1];
            let decoded = jwt.verify(token, process.env.SECRET);
            req.body.user = decoded;
            next();
        } catch (err) {
            res.status(401).json({ "msg": "Couldnt Authenticate" });
        }
    },
    async (req, res, next) => {
        let user = await User.findOne({ where: { id: req.body.user.id }, attributes: { exclude: ["password"] } });
        if (user === null) {
            res.status(404).json({ 'msg': "User not found" });
        }
        res.status(200).json(user);
    });

router.use('/traders', tradersRoutes);
router.use('/shares', sharesRoutes);
router.use('/offers', offersRoutes);
router.use('/deals', dealsRoutes);