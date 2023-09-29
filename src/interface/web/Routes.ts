import { Router, Response } from "express";
import UserController from "./Controllers/User.controller";
const routes: Router = Router();
const user = new UserController

routes.post("/insert", user.insertUser)

export default routes;
