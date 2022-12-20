import express, { Handler, NextFunction } from "express";

export const dbMongo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};

export const dbGlobal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};
