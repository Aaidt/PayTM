import { Request, Response, NextFunction } from "express"

declare global {
    namespace Express {
        export interface Request{
            userId?: string
        }
    }
}