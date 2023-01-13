import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/client";
import JWT from "../utils/token";

export default async function authAdmin(req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).send("Token Inexistent");
  }

  const payload = JWT.tokenValidation(token);
  const admin = await prisma.admin.findFirst({
    where: {
      id: payload.id,
    }
  })

  if (!admin) {
    return res.status(401).send("Unauthorized");
  }

  next();
};