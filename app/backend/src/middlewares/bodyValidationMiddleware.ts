import { NextFunction, Request, Response } from "express";
import { ZodAny } from "zod";

import ApiError from '../utils/ApiError';

const bodyValidation = (bodySchema: ZodAny) => (req: Request, _res: Response, next: NextFunction) => {
  const validation = bodySchema.safeParse(req.body);

  if (!validation.success) {
    throw new ApiError(validation.error.message, 400);
  }

  next();
};

module.exports = bodyValidation;