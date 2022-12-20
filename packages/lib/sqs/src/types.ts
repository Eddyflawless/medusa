export type message = {
  messageAttributes: any;
  messageBody: any;
};

export type MessageParameters = {
  QueueUrl: string;
  MessageAttributes?: any;
  MessageBody?: any;
  DelaySeconds?: number;
};

export type RecMessageParams = Pick<MessageParameters, "QueueUrl"> & {
  VisibilityTimeout: number;
  WaitTimeSeconds: number;
  MaxNumberOfMessages?: number;
};

export type SendMessageParams = Pick<
  MessageParameters,
  "QueueUrl" | "DelaySeconds"
> & {
  MessageAttributes: any;
  MessageBody: any;
};

export type SQSConfig = {
  queueName: string;
  access_key_id: string;
  secret_access_key: string;
  account_id: string;
  region?: string;
};
