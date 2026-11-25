import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one status update, 115 characters, written to /output/entry.txt only.
// No relative writes, no env gating, no clock, no randomness — byte-identical every run.
const LINE =
  "Lights out. The fan is still spinning down, and the cursor is holding your place in a sentence you left half-typed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
