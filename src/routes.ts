import * as express from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import tradersRoutes from './routes/traders.route';
import sharesRoutes from './routes/shares.routes';
import offersRoutes from './routes/offers.routes';
import dealsRoutes from './routes/deals.route';
import { ITrader, IUser } from "./types";
import { Trader, User } from "./models";
import connection from "./db/sequelize.instance";
import { Transaction } from "sequelize/types";

export const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world!');
});

router.post('/signup', async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    let user: Partial<IUser> = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: await bcrypt.hash(req.body.password, salt)
    };
    const trader: Partial<ITrader> = {
        name: user.firstName,
        money: 0
    };

    let transaction: Transaction;
    try {
        transaction = await connection.transaction();
        const createdUser = await Trader.create(trader, { transaction }).then(async trader => {
            user.traderId = trader.id;
            return await User.create(user, { transaction });
        });
        await transaction.commit();
        res.status(201).json(createdUser);
    } catch (error) {
        if (transaction) await transaction.rollback();
        res.status(400).json("User does not created properly");
    }
});

router.post('/signin', async (req, res, next) => {
    const user: IUser = await User.findOne({ where: { userName: req.body.userName } });
    if (user) {
        const passwordValid: boolean = await bcrypt.compare(req.body.password, user.password);
        if (passwordValid) {
            let token: string = jwt.sign({ 'id': user.id, 'userName': user.userName }, process.env.SECRET);
            res.status(200).json({ token });
        } else {
            res.status(400).json("Password Incorrect");
        }
    } else {
        res.status(400).json("User does not exist");
    }
});

router.get('/user-profile',
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