import { Request, Response } from "express";
import LoginService from "../Services/LoginService";

export default class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  async login(req: Request, res: Response) {
    const { password } = req.body;

    const token = await this.service.login(password);

    res.status(200).json({ token });
  }
}
