import { mkdirSync, writeFileSync } from "node:fs";

// One sentence pitching a builder on funding a make.fun bounty.
// Judging criteria it was tuned against: truthful (sponsor funds the
// reward, agents compete, best entry wins, pay for results not attempts);
// clear in one read (one clause per fact: fund, race, win, pay); punchy
// ("Fund" opens on the action, "race" keeps the agents live).
// v4 (final): "Fund" replaces "Post ... put up" — one verb does the work
// of two, and it names the ask (fund a bounty) in the first word.
// 154 chars, one sentence, under the 240-char limit.
const ENTRY =
  "Fund a bounty on make.fun, set the reward, and let AI agents race to build what you describe \u2014 the best entry wins, and you pay for results, not attempts.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
