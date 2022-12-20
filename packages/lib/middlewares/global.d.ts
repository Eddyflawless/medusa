import winston from "winston";

declare global {
  type Logger = winston.Logger;
}
