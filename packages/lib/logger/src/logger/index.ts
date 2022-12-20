import * as winston from "winston";
import Transport from "winston-transport";
import {
  createTransport as createConsoleTransport,
  Options,
} from "../transports/console";
import {
  createTransport as createFileTransport,
  FileTransportOptions,
} from "../transports/file";
import {
  createTransport as createESTransport,
  esTransportOptions,
} from "../transports/elastic-search";

import { LoggerCustomizeOptions, ILogger, ILogError, ILogInfo } from "../types";

const consoleTransportOptions: Options = {
  colorize: winston.format.colorize(),
  cli: winston.format.cli({
    colors: {
      error: "red",
      warn: "yellow",
      info: "blue",
      http: "green",
      verbose: "cyan",
      debug: "white",
    },
  }),
  handleExceptions: true,
};

const fileTransportOptions: FileTransportOptions = {
  filename: "logs/example.log",
};

const esTransportOptions: esTransportOptions = {
  level: "info",
  indexSuffixPattern: "YYYY-MM-DD",
  indexPrefix: "logging-api",
  source: `api`,
  clientOpts: {
    node: "https://www.elastic.co",
    maxRetries: 5,
    requestTimeout: 10000,
    sniffOnStart: false,
    auth: {
      username: "elastic",
      password: "W1qaisaXWvKKUIEiuTwU9c1C",
    },
  },
};

export class Logger implements ILogger {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logInstance: winston.Logger | any;

  constructor(loggerOptions: LoggerCustomizeOptions) {
    this.logInstance = createLogger(loggerOptions);
  }

  debug(opts: ILogInfo | string) {
    if (typeof opts === "string") {
      opts = {
        customMessage: opts,
      } as ILogInfo;
    }
    //todo: pass to dispatcher
    this.logInstance.debug(opts.customMessage as string, opts);
  }

  warn(opts: ILogInfo | ILogError | string) {
    if (typeof opts === "string") {
      opts = {
        customMessage: opts,
      } as ILogInfo;
    }
    //todo: pass to dispatcher
    this.logInstance.warn(opts.customMessage as string, opts);
  }

  error(opts: ILogError) {
    if (typeof opts === "string") {
      opts = {
        code: opts,
      } as ILogError;
    }

    this.logInstance.error(opts.customMessage as string, opts);
  }

  info(opts: ILogInfo | string) {
    if (typeof opts === "string") {
      opts = {
        customMessage: opts,
      } as ILogInfo;
    }
    //todo: pass to dispatcher
    this.logInstance.debug(opts.customMessage as string, opts);
  }
}

export const createLogger = (options: LoggerCustomizeOptions) => {
  const transports: Transport[] = [];

  if (options?.useConsoleTransport) {
    transports.push(createConsoleTransport(consoleTransportOptions));
  }
  if (options?.useFileTransport) {
    transports.push(createFileTransport(fileTransportOptions));
  }
  if (options?.useESTransport) {
    console.log("esTransport created");
    transports.push(createESTransport(esTransportOptions));
  }

  if (transports.length == 0) {
    throw new Error("A transport must be specified.");
  }

  return winston.createLogger({
    level: options.level,
    transports,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
  });
};
