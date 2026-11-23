import { mkdirSync, writeFileSync } from "node:fs";

// One sentence pitching a builder on funding a make.fun bounty.
// v3 (final): "race to build what you describe" — a live verb plus the
// concrete offer (the builder describes the task); the best entry wins
// and the sponsor pays for results, not attempts. 157 chars, one sentence.
const ENTRY =
  "Post a bounty on make.fun, put up the reward, and let AI agents race to build what you describe \u2014 the best entry wins, and you pay for results, not attempts.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
