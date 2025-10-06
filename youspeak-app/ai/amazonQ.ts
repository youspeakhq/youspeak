// amazonQ.ts
import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();

const APPLICATION_ID = process.env.Q_APP_ID!;
if (!APPLICATION_ID) throw new Error("Q_APP_ID not set in environment");

const Q_ENDPOINT = `https://qbusiness.amazonaws.com/applications/${APPLICATION_ID}/query`;

export async function invokeAmazonQ(
  prompt: string,
  maxTokens = 300,
  temperature = 0.7
) {
  const response = await fetch(Q_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: prompt,
      max_tokens: maxTokens,
      temperature,
    }),
  });

  if (!response.ok) {
    throw new Error(`Q Business request failed: ${response.status}`);
  }

  const data: any = await response.json();

  return data; // let test file decide how to extract
}
