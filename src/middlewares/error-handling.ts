import { AppError } from "@/utils/AppError";
import { NextFunction, Request, Response } from "express";


export function errorHandling( error: any, req: Request, res: Response, _: NextFunction) {
    if (error instanceof AppError){
        return res.status(error.statusCode).json({message: error.menssage})
    }


    return res.status(500).json({message: error.menssage})
}