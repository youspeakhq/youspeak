import * as fs from "fs";
import * as path from "path";
import { invokeDeepSeek } from "../bedrock";

async function main() {
  try {
    const promptFiles = ["quiz.json", "scenario.json", "customization.json"];

    for (const fileName of promptFiles) {
      const filePath = path.join(__dirname, "../prompts", fileName);
      const prompts = JSON.parse(fs.readFileSync(filePath, "utf-8"));

      console.log(`\nLoaded prompts from ${fileName}:`);

      for (const key in prompts) {
        const prompt = prompts[key];
        console.log(`\nPrompt [${key}]: ${prompt}`);

        const output = await invokeDeepSeek(prompt);
        const assistantMessage = output.choices?.[0]?.message?.content;

        if (assistantMessage) {
          console.log("\nGenerated text:\n", assistantMessage);
        } else {
          console.log("\nNo generated text returned:", output);
        }
      }
    }
  } catch (err: any) {
    console.error("Error:", err.message);
    if (err.$metadata) console.error("Metadata:", err.$metadata);
  }
}

main();
