import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { knex } from "@/database/knex"
import { AppError } from "@/utils/AppError";

class TableController {
    async index(req: Request, res: Response, next: NextFunction){
        try{

            const tables = await knex<TableRepository>("tables")
            .select()
            .orderBy("table_number")
            
            return res.json(tables)

        } catch(error) {
            next(error)
        }
    }
}


export { TableController }