import * as winston from "winston";
import Transport from "winston-transport";

export type Options = {
  colorize: any;
  cli: any;
  handleExceptions?: boolean;
};

export const createTransport = (options: Options): Transport => {
  return new winston.transports.Console({
    format: winston.format.combine(
      options.colorize,
      options.cli,
      winston.format.json()
    ),
    handleExceptions: options?.handleExceptions || true,
  });
};
