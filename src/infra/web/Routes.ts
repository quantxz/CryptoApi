import { Router, Response } from "express";
import UsersController from "./Controllers/User.controller";
import authFluxController from "../../infra/web/Controllers/auth-flux.controller"
import sensiviteDataController from "./Controllers/data.controller";
const routes: Router = Router();
const user = new UsersController
const flux = new authFluxController
const sensiveData = new sensiviteDataController

routes.get("/apiKey", flux.publicLogin)

routes.post("/register", user.insertUser)
routes.post("/apiKey", flux.privateLogin)
routes.post("/brCrypt", sensiveData.cryptBrUser)

export default routes;
