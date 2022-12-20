import express, { Response, Request, NextFunction } from "express";
// import * as adminRoutes from "./company";
import companyAdmin from "./company/admin";
import companyCallbacks from "./company/callbacks";

const router = express.Router();

router.use((_req: Request, _res: Response, next: NextFunction) => {
  next();
});

router.use("/company", companyAdmin, companyCallbacks);

export default router;
