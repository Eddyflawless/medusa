import * as winston from "winston";
import Transport from "winston-transport";
import { TransportOptions } from "./types";

export type FileTransportOptions = {
  filename: string;
} & Partial<TransportOptions>;

// const consoleOutput = winston.format.printf(
//     ({level, message, timestamp, ...meta}) =>
//         `${timestamp} [${level}] : ${message} - ${JSON.stringify(meta)}`
// )

export const createTransport = (options: FileTransportOptions): Transport => {
  const format = winston.format;
  return new winston.transports.File({
    filename: options.filename,
    level: options.level,
    silent: options.silent || false,

    format: format.combine(
      format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
      winston.format.json()
      //consoleOutput,
    ),
  });
};
