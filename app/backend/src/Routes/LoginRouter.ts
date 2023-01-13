import { Router } from "express";
import LoginController from "../Controllers/LoginController";

const LoginRouter = Router();
const loginController = new LoginController();

LoginRouter.post("/", async (req, res) => await loginController.login(req, res));

export default LoginRouter;