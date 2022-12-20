import { Request, Response } from "express";

export type ILogRequest = Request<any> & { [key: string]: any };
export type ILogResponse = Response<any> & { [key: string]: any };

// final composed log format with optional + custom parameters
export type MLog = {
  message: string | symbol;
  logTimestamp: string;
  level: LogLevel;
  version: string;
  errorCode: string;
  isTest?: boolean;
  userMessage?: string;
  systemMessage?: string;
  headers?: ILogRequest["headers"];
  method?: ILogRequest["method"];
  query: ILogRequest["query"];
  body?: ILogRequest["body"];
  url?: ILogRequest["url"];
  tag?: string;
  branch?: string;
};

export type IParsedLog = MLog;

export type LogFormat = {
  message: string | { [key: string]: any };
  level: LogLevel;
  stack?: string | { [key: string]: any };
};

export type ILogBase = {
  // OPTIONAL
  code?: string;
  req?: ILogRequest;
  res?: ILogResponse;
  message?: string;

  // CUSTOM
  stack?: string | { [key: string]: any };
  errorName?: string;
  err?: { [key: string]: any } | Error;
  customMessage?: string;
  systemMessage?: string;
};

export enum LogLevel {
  DEBUG = "debug",
  ERROR = "error",
  INFO = "info",
  WARN = "warn",
}

export type LoggerInterface = {
  [key in LogLevel]: ILogMethod;
};

interface ILogMethod {
  (opts: MLog): void;
}

export interface IGenericObject {
  [key: string]: any;
}

// this interface can be used to get logs for logger.debug / logger.info / logger.warn
export type ILogInfo = ILogBase & {
  //REQUIRED
  customMessage: string;
};

export type ILogError = ILogBase & {
  code: any;
};

export type LoggerCustomizeOptions = {
  useConsoleTransport?: boolean;
  useFileTransport?: boolean;
  useESTransport: boolean;
  level: string;
};

export interface ILogger {
  error: (options: ILogError) => any | void;
  warn: (options: ILogInfo | ILogError) => any | void;
  info: (options: ILogInfo) => any | void;
  debug: (options: ILogInfo) => any | void;
}
