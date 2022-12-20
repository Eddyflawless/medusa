import { message, SendMessageParams } from "../types";
import { client, getQueueUrl } from "../aws-client";

export const sendMessage = async ({
  messageAttributes,
  messageBody,
}: message) => {
  const params: SendMessageParams = {
    DelaySeconds: 10,
    QueueUrl: getQueueUrl(),
    MessageAttributes: messageAttributes,
    MessageBody: messageBody,
  };

  return await client.sendMessage(params).promise();
};
