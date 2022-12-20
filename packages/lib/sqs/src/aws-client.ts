import * as AWS from "aws-sdk";
import { SQSConfig } from "./types";

const config: SQSConfig = {
  region: `${process.env.AWS_REGION}`,
  access_key_id: `${process.env.ACCESS_KEY_ID}`,
  secret_access_key: `${process.env.SECRET_ACCESS_KE}`,
  account_id: `${process.env.AWS_ACCOUNT_ID}`,
  queueName: `${process.env.QUEUE_NAME}`,
};

// Set credentials
AWS.config.update({
  accessKeyId: config.access_key_id,
  secretAccessKey: config.secret_access_key,
  region: config.region,
});

export const getQueueUrl = (): string => {
  const { region, account_id, queueName } = config;

  return `https://sqs.${region}.amazonaws.com/${account_id}/${queueName}`;
};

export const client = new AWS.SQS({ apiVersion: "2012-11-05" });
