import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex"
import { number, z } from "zod";
import { AppError } from "@/utils/AppError";

class TablesSessionsControlller {

    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const sesions = await knex<TablesSessionsRepository>("tables_sessions")
            .orderBy("closed_at")

            return res.json(sesions)
        } catch (error) {
            next(error)
        }
    }

    async create(req: Request,res: Response, next: NextFunction ){
        try {

            const bodySchema = z.object({
                table_id: number(),
            })

            const { table_id } = bodySchema.parse(req.body)

            const sessions = await knex<TablesSessionsRepository>("tables_sessions")
            .where({ table_id })
            .orderBy("opened_at", "desc")
            .first()

            if (sessions && !sessions.closed_at) {
                throw new AppError("This table is already open")
            }

            await knex<TablesSessionsRepository>("tables_sessions").insert({
                table_id,
                opened_at: knex.fn.now(),
            })
            
            
            return res.status(201).json()


        } catch(error) {
            next(error)
        }
    }
    
    async update(req: Request,res: Response, next: NextFunction ){
        try {

            const id = z
            .string()
            .transform((value)=> Number(value))
            .refine((value) => !isNaN(value),{ message: "id must be a number" })
            .parse(req.params.id)

            const session = await knex<TablesSessionsRepository>("tables_sessions")
            .where({ id })
            .first()

            if (!session) {
                throw new AppError("Session table not found")
            }

            if (session.closed_at){
                throw new AppError("This session table is already closed")
            }

            await knex<TablesSessionsRepository>("tables_sessions")
            .update({ closed_at: knex.fn.now(), })
            .where({ id })
            
            
            return res.json()


        } catch(error) {
            next(error)
        }
    }

}

export { TablesSessionsControlller }