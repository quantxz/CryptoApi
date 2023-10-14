import { Router, Response } from "express";
import UsersController from "./Controllers/User.controller";
import authFluxController from "../../infra/web/Controllers/auth-flux.controller"
const routes: Router = Router();
const user = new UsersController
const flux = new authFluxController

routes.post("/insert", user.insertUser)
routes.post("/apiKey", flux.privateLogin)
routes.get("/apiKey", flux.publicLogin)

export default routes;
