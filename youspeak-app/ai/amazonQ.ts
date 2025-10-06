import {
  QBusinessClient,
  ChatSyncCommand,
} from "@aws-sdk/client-qbusiness";
import * as dotenv from "dotenv";

dotenv.config();

const client = new QBusinessClient({
  region: process.env.AWS_REGION_Q || "eu-west-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

let conversationId: string | undefined;

export async function invokeAmazonQ(prompt: string, newConversation: boolean = false) {
  const appId = process.env.QBUSINESS_APP_ID!;
  
  if (!appId) {
    throw new Error("Missing QBUSINESS_APP_ID in .env");
  }

  if (newConversation) {
    conversationId = undefined;
  }

  const commandInput: any = {
    applicationId: appId,
    userMessage: prompt,
  };

  if (conversationId) {
    commandInput.conversationId = conversationId;
  }

  const command = new ChatSyncCommand(commandInput);

  const response = await client.send(command);

  if (response.conversationId) {
    conversationId = response.conversationId;
  }

  const message = response.systemMessage || JSON.stringify(response, null, 2);

  return {
    message,
    conversationId: response.conversationId,
    response, 
  };
}

export function resetConversation() {
  conversationId = undefined;
}