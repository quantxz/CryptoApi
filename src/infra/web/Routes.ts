import { Router, Response, Request } from "express";
import UsersController from "./Controllers/User.controller";
import authFluxController from "../../infra/web/Controllers/auth-flux.controller"
import sensiviteDataController from "./Controllers/data.controller";
const routes: Router = Router();
const user = new UsersController
const flux = new authFluxController
const sensiveData = new sensiviteDataController

routes.get("/apiKey", flux.publicLogin)

routes.post("/register", user.insertUser)
routes.post("/apiKey", flux.privateLoginUrlKeyAutentication)
routes.get("/aba", (req, res) => {
    res.render('PrivateLoginAuth');
});
routes.post("/apiKeySecond", flux.privateLogin)
routes.post("/brCrypt", sensiveData.cryptBrUser)

export default routes;
