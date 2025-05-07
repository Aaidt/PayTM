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


export default router