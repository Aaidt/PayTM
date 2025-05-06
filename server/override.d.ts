import { Request, Response, NextFunction } from "express"
import { ObjectId } from "mongoose"

export {}

declare global {
    namespace Express {
        export interface Request{
            userId?: string
        }
    }
}