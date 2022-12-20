import Transport from "winston-transport";
// const logstash = require("winston-logstash-transport");
import logstash from "winston-logstash-transport";

export type LogStashOptions = {
  host: string;
  port: number;
};

export const createTransport = (options: LogStashOptions): Transport => {
  return new logstash.LogstashTransport({
    host: options.host,
    port: options.port,
  });
};
