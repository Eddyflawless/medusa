import NodeCache from "node-cache";
import winston from "winston";

export interface ServiceMidOptions {
  logger: winston.Logger;
  cacheTTL?: number;
  inMemoryCache: NodeCache;
  useCache?: boolean;
}
export type hasRoleFn = (role: string) => boolean;

export interface Queues {
  sendEmail: () => Promise<void>;
  publishCallbackEvent: () => Promise<void>;
}
