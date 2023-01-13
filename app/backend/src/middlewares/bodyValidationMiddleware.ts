import { NextFunction, Request, Response } from "express";

import ApiError from '../utils/ApiError';

const bodyValidation = (bodySchema: any) => (req: Request, _res: Response, next: NextFunction) => {
  const validation = bodySchema.safaParse(req.body);
  console.log("🚀 ~ file: bodyValidationMiddleware.ts:7 ~ bodyValidation ~ validation", validation)

  if (!validation.success) {
    throw new ApiError(validation.error.message, 400);
  }

  next();
};

export default bodyValidation;