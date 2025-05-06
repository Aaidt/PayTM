import express, { Request, Response } from "express";
import { z } from "zod";
import { UserModel } from "../db/db"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { authMiddleware } from "../middlewares/authMiddleware"

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;


const signupBody = z.object({
    username: z.string().email().endsWith("@gmail.com"),
    password: z.string(),
    firstname: z.string().min(3).max(30),
    lastname: z.string().min(3).max(30)
})


router.post("/signup", async (req: Request, res: Response) => {
    const { username, password, firstname, lastname } = req.body
    const parse = signupBody.safeParse(req.body);

    const saltRounds = 6;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    if (!JWT_SECRET) {
        console.log("JWT secret not provided.");
        return
    }

    if (!parse.success) {
        res.status(403).json({ message: "Invalid input." })
        return
    }

    try {
        const existingUser = await UserModel.find({ username: username })

        if (existingUser) {
            res.status(403).json({ message: "Username already exists." })
            return
        }

        const user = await UserModel.create({
            username,
            password: hashedPassword,
            firstname,
            lastname
        });

        const userId = user._id

        const token = jwt.sign({
            userId
        }, JWT_SECRET, { expiresIn: "1hr" })

        res.json({
            message: "You have successfully signed up!!!",
            token
        })
    } catch (err) {
        res.status(500).json({ Error: "Internal server error" + err })
        console.log(err)
    }
})


router.post("/signin", async (req: Request, res: Response) => {
    const { username, password, firstname, lastname } = req.body
    const parse = signupBody.safeParse(req.body);

    if (!JWT_SECRET) {
        console.log("JWT secret not provided.");
        return
    }

    if (!parse.success) {
        res.status(403).json({ message: "Invalid input." })
        return
    }

    try {
        const user = await UserModel.findOne({
            username,
            password
        })
        const hashedPassword = user?.password

        if (!password || !hashedPassword) {
            res.status(402).json({ message: "Missing credentials" })
            return
        }

        const isValidUser = bcrypt.compare(password, hashedPassword)

        if (!isValidUser) {
            res.status(401).json({ message: "Invalid credentials." })
        }

        const userId = user?._id
        const token = jwt.sign({
            userId
        }, JWT_SECRET, { expiresIn: "1hr" })

        res.json({
            message: "You have successfully signed in!!!",
            token
        })
    } catch (err) {
        res.status(500).json({ Error: "Internal server error" + err })
        console.log(err)
    }
})

export default router