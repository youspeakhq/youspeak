import { invokeAmazonQ, resetConversation } from "../amazonQ";

async function main() {
  try {
    const testQuestions = [
      "What is You Speak?",
      "How is You Speak different from Duolingo?",
      
      "What are the four SpeakX Rooms?",
      "Can I earn rewards while learning on You Speak?",
      "What are tournaments in You Speak?",
      
      "Is You Speak free to use?",
      "What are SPKS or Spokens?",
      "What are the subscription plans and their prices?",
      
      "What technology does You Speak use?",
      "Is You Speak a Web3 project?",
      "How do SPKS work?",
      
      "Who can use You Speak?",
      "Are there any age restrictions?",
      
      "How does You Speak protect user data?",
      "What regulations does You Speak comply with?",
      
      "What is You Speak's mission?",
      "Why was You Speak built from Africa?",
      "What are You Speak's growth targets?",
    ];

    console.log("=".repeat(80));
    console.log("YOU SPEAK KNOWLEDGE BASE TEST");
    console.log("=".repeat(80));
    console.log(`Testing ${testQuestions.length} questions about You Speak\n`);

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < testQuestions.length; i++) {
      const question = testQuestions[i];
      
      console.log(`\n${"─".repeat(80)}`);
      console.log(`[${i + 1}/${testQuestions.length}] Question: ${question}`);
      console.log("─".repeat(80));

      try {
        const result = await invokeAmazonQ(question, true); 
        
        console.log("\n✓ Response:");
        console.log(result.message);
        console.log(`\nConversation ID: ${result.conversationId}`);
        
        successCount++;
      } catch (error: any) {
        console.error("\n✗ Error:", error.message);
        failCount++;
      }


      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log("\n" + "=".repeat(80));
    console.log("TEST SUMMARY");
    console.log("=".repeat(80));
    console.log(`✓ Successful: ${successCount}`);
    console.log(`✗ Failed: ${failCount}`);
    console.log(`Total: ${testQuestions.length}`);
    console.log("=".repeat(80));

  } catch (err: any) {
    console.error("\n Fatal Error:", err.message);
    console.error(err);
  }
}

main();