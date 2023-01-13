import { Router } from "express";
import LoginController from "../Controllers/LoginController";

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post("/", async (req, res) => await loginController.login(req, res));

export default loginRouter;