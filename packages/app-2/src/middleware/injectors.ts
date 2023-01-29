import { NextFunction } from "express";

export const dbMongo = async (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  next();
};

export const dbGlobal = async (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  next();
};
