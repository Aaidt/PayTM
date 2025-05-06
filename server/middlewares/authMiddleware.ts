import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express"

const JWT_SECRET = process.env.JWT_SECRET;

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!JWT_SECRET) {
        console.log("Jwt secret not provided")
        return
    }

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        res.status(401).json({ message: "User not Signed-in" })
        return
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string}

        req.userId = decoded.userId;

        next();
    } catch (err) {
        res.status(500).json({ message: "Internal server error" + err })
        console.log("Error: " + err)
    }

}