import express, { Request, Response } from "express"
import { authMiddleware } from "../middlewares/authMiddleware"
import { AccountModel } from "../db/db"
const router = express.Router();

router.get("/balance", authMiddleware, async (req: Request, res: Response) => {
    try {
        const account = await AccountModel.findOne({
            userId: req.userId
        }).populate("userId");
        const balance = account?.balance

        res.status(200).json({ balance })

    } catch (err) {
        res.status(500).json({ message: "Internal server error " + err });
        console.log(err)
    }

})

router.post("/transfer", authMiddleware, async (req: Request, res: Response) => {
    const { to, amount } = req.body;

    try {
        const account = await AccountModel.findOne({
            userId: req.userId
        });

        if (!account?.balance) {
            console.log("No balance.")
            return
        }

        if (account?.balance < amount) {
            res.status(400).json({ message: "Insufficient balance" })
            return
        }

        const toAccount = await AccountModel.findOne({
            userId: to
        });
        if (!toAccount) {
            res.status(400).json({ message: "Invalid account" });
        }

        await AccountModel.findOne({
            userId: req.userId
        }, {
            $inc: {
                balance: -amount
            }
        })

        await AccountModel.findOne({
            userId: to
        }, {
            $inc: {
                balance: amount
            }
        })

        res.status(200).json({ message: "Transaction successfull" });

    } catch (err) {
        res.status(500).json({ message: "Internal server error " + err })
        console.log(err)
    }
})


export default router