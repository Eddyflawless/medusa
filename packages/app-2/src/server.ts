import express, { Response, Request, Express, NextFunction } from "express";
// const morgan = require("morgan");
import * as dotenv from "dotenv";
import * as middleware from "@medusa/middlewares/dist";
import routes from "./routes";

import { LoggerCustomizeOptions, Logger } from "@medusa/logger/dist";

dotenv.config();

const loggerOptions: LoggerCustomizeOptions = {
  useConsoleTransport: true,
  useFileTransport: true,
  useESTransport: true,
  level: "info",
};

const log = new Logger(loggerOptions);

export function createApp() {
  const app: Express = express();
  // app.use(morgan('combined'));

  app.use(middleware.db());
  app.use(middleware.queues());

  app.use(routes);

  app.get("/health", (req: Request, res: Response) => {
    console.log(req);
    res.status(200).json({});
  });

  app.get("/test", (_: Request, res: Response) => {
    log.info("log something...");
    console.log("here");
    const err = new Error("test error");
    log.error({
      code: ``,
      customMessage: ` ${JSON.stringify({
        data: err.message,
      })}`,
    });

    res.status(200).json({});
  });

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    log.error({
      code: ``,
      customMessage: `500 | An error occured | data: ${JSON.stringify({
        data: err.message,
      })}`,
    });

    let errMsg = "";
    if (process.env.NODE_ENV !== "production") {
      errMsg = "An error occured";
    }

    res.status(500).json({ msg: errMsg });
  });

  app.locals.logger = log;

  return app;
}
