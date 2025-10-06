import * as fs from "fs";
import * as path from "path";
import { invokeAmazonQ } from "../amazonQ";

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

        const output = await invokeAmazonQ(prompt);
        const answer = output?.answer ?? "No answer returned";
        const source = output?.source ?? output?.sources?.[0]?.title;

        console.log("\nAnswer:\n", answer);
        console.log("Source:", source ?? "Unknown");
      }
    }
  } catch (err: any) {
    console.error("Error:", err.message);
  }
}

main();
