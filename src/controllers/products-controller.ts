import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";

class ProductController {
    async index(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json({ message: "OK"})
        } catch (error) {
            next(error)
        }
    }
}

export { ProductController }
