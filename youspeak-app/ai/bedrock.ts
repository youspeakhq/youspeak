import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import * as dotenv from "dotenv";

dotenv.config();

export const bedrockClient = new BedrockRuntimeClient({
  region: process.env.AWS_REGION || "eu-north-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function invokeDeepSeek(
  prompt: string,
  profileArn?: string,
  maxTokens = 300,
  temperature = 0.7
) {
  const modelId = profileArn || process.env.BEDROCK_PROFILE_ARN!;
  if (!modelId) throw new Error("BEDROCK_PROFILE_ARN not set in environment");

  const command = new InvokeModelCommand({
    modelId,
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
      messages: [{ role: "user", content: prompt }],
      max_tokens: maxTokens,
      temperature,
    }),
  });

  const response = await bedrockClient.send(command);
  const raw = new TextDecoder().decode(response.body);
  const parsed = JSON.parse(raw);

  return parsed;
}
