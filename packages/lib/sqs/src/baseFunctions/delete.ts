import { client, getQueueUrl } from "../aws-client";
export const deleteSqsMessage = async function (message: any) {
  const delete_params = {
    QueueUrl: getQueueUrl(),
    ReceiptHandle: message.ReceiptHandle,
  };
  //delete messafe so we wont have to handle it again
  await client.deleteMessage(delete_params).promise();
};
