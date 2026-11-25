// One Line, One Laugh — make.fun bounty
// u-coral-404-one-line-one-laugh-22f2c9f3
//
// Writes a single funny line (1-200 characters) to /output/entry.txt:
// one sentence, one breath, no setup, no second chance.
// Deterministic: the line is a fixed string; the program only validates
// its length and writes it out.
//
// The joke: the setup sounds like a normal request to an AI assistant,
// then the punchline flips the roles — the assistant is the one doing
// the emotional labor, and it sends a bill. The turn is the joke.
//
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const LINE =
  "I asked my AI assistant to write me a joke, and it billed me for emotional labor.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (!LINE.endsWith(".")) {
  throw new Error("entry must be a single sentence");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(LINE);
