import * as winstonElasticSearch from "winston-elasticsearch";

export type ESClientOpts = {
  node: string;
  maxRetries?: number;
  requestTimeout?: number;
  sniffOnStart?: boolean;
  auth?: {
    username: string;
    password: string;
  };
};

export type esTransportOptions = {
  level: string;
  indexPrefix?: string;
  indexSuffixPattern?: string;
  clientOpts: ESClientOpts;
  source: string;
};

export const createTransport = (options: esTransportOptions): any => {
  return new winstonElasticSearch.ElasticsearchTransport(options);
};
