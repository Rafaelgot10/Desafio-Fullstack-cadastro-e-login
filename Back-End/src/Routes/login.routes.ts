import { Router } from "express";
import loginController from "../Controllers/login.controllers";

const loginRouter = Router();

loginRouter.post("", loginController);

export default loginRouter;
