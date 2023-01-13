import { Request, Response } from "express";
import WaitingLineService from "../Services/WaitingLineService";

export default class WaitingLineController {
  private service: WaitingLineService;

  constructor() {
    this.service = new WaitingLineService();
  }

  async create(req: Request, res: Response) {
    const { name } = req.body;

    const waitingLine = await this.service.create({ name });

    res.status(201).json(waitingLine);
  }
}