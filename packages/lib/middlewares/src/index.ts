import { Handler, Request } from "express";
import { sendEmail, publishCallbackEvent } from "./queues";
import _ from "lodash/pick";
//import * as log from "@medusa/logger/dist";

type IRequest = Request & { [key: string]: any };

export const queues = (): Handler => {
  return async (req: IRequest, _res, next) => {
    try {
      //const compId = (req.headers["x-comp"] as string) || "";

      req.queues = {
        sendEmail,
        publishCallbackEvent,
      };

      //req.queues = {};
      next();
    } catch (e) {
      console.log(e);
    }
  };
};

export const db = (): Handler => {
  return (_req, _res, next) => {
    next();
  };
};

export function acceptBody(...fields: string[]): Handler {
  return (_req, _res, next) => {
    //req.body =  R.pick(fields, req.body);
    console.log(fields);
    next();
  };
}
