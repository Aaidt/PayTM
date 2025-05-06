import express, { Request, Response } from "express";
import { z } from "zod";

const router = express.Router();

const signupBody = z.object({
    username: z.string().email().endsWith("@gmail.com"),
    password: z.string(),
    firstname: z.string().min(3).max(30),
    lastname: z.string().min(3).max(30)
})


router.post("/signup", (req: Request, res: Response) => {
    const { username, password, firstname, lastname } = req.body
    
})


export default router