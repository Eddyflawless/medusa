declare namespace Express {
  export interface Request {
    queues: Record<string, any>;
    logger: Logger;
    db: any;
  }
}
