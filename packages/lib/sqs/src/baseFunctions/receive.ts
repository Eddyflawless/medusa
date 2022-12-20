import { RecMessageParams } from "../types";
import { client, getQueueUrl } from "../aws-client";

export const receiveMessage = async () => {
  const params: RecMessageParams = {
    QueueUrl: getQueueUrl(),
    VisibilityTimeout: 10,
    WaitTimeSeconds: 0,
    MaxNumberOfMessages: 10,
  };

  return await client.receiveMessage(params).promise();
};
