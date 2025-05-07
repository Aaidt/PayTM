import express, { Request, Response } from "express";
import { z } from "zod";
import { UserModel } from "../db/db"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { authMiddleware } from "../middlewares/authMiddleware"
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;


const authBody = z.object({
    username: z.string().email().endsWith("@gmail.com"),
    password: z.string(),
    firstname: z.string().min(3).max(30),
    lastname: z.string().min(3).max(30)
})

router.post("/signup", async (req: Request, res: Response) => {
    const { username, password, firstname, lastname } = req.body
    const parse = authBody.safeParse(req.body);
    if (!parse.success) {
        res.status(403).json({ message: "Invalid input." })
        return
    }

    const saltRounds = 6;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    if (!JWT_SECRET) {
        console.log("JWT secret not provided.");
        return
    }


    try {
        const existingUser = await UserModel.findOne({ username: username })

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


router.post("/signin", authMiddleware, async (req: Request, res: Response) => {
    const { username, password, firstname, lastname } = req.body
    const parse = authBody.safeParse(req.body);
    const userId = req.userId

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

const updateBody = z.object({
    password: z.string().optional(),
    firstname: z.string().min(3).max(30).optional(),
    lastname: z.string().min(3).max(30).optional()
})

router.put("/", authMiddleware, async (req: Request, res: Response) => {
    const { password, firstname, lastname } = req.body;
    const { success } = updateBody.safeParse(req.body);

    if (!success) {
        res.status(411).json({ message: "Invalid input provided." })
        return
    }

    const updateData: any = {}

    if (password) {
        updateData.password = await bcrypt.hash(password, 6);
    }
    if (firstname) {
        updateData.firstname = firstname
    }
    if (lastname) {
        updateData.lastname = lastname
    }

    try {
        const update = await UserModel.findOneAndUpdate({
            _id: req.userId
        }, updateData)
        res.status(200).json({ message: "User updated successfully!!!" })

        if (!update) {
            res.status(411).json({ message: "User not found." })
            return
        }
    } catch (err) {
        res.status(500).json({ message: "Internal server error" + err })
        console.log(err)
    }
})

router.get("/bulk:filter", authMiddleware, async (req: Request, res: Response) => {
    const { filter } = req.params;

    try {
        const foundUser = await UserModel.findOne({
            username: filter
        });

        res.status(200).json({
            foundUser
        });

        if (!foundUser) {
            res.status(403).json({ message: "User not found." })
            return 
        }
    } catch (err) {
        console.log("Error" + err);
        res.status(500).json({ message: "Iternal server error" + err })
    }

})

export default router