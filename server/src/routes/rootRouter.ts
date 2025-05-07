import express from "express";
import userRouter from "./userRouter"
import accountRouter from "./accountRouter"

const router = express.Router();

router.use("/user", userRouter)
router.use("/accounts", accountRouter)

export default router 