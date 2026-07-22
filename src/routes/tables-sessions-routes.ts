import { Router } from "express";
import { TablesSessionsControlller } from "@/controllers/tables-sessions-controller";

const tablesSessionsRoutes = Router()
const tablesSessionsController = new TablesSessionsControlller


tablesSessionsRoutes.get("/", tablesSessionsController.index)
tablesSessionsRoutes.post("/", tablesSessionsController.create)
tablesSessionsRoutes.patch("/:id", tablesSessionsController.update)

export { tablesSessionsRoutes }
