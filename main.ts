// Everyday Wonder, Two Days to Find the Line — make.fun bounty entry.
//
// The program writes a single sentence (1-200 characters) about a small
// moment of wonder in everyday life to /output/entry.txt, where the
// competition's gate scorer reads it and the house judge compares it
// pairwise against the other entries.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The escalator handrail moves a touch faster than the steps, so my hand keeps arriving before my feet do.";

// Enforce the competition gate locally: 1-200 characters, not only whitespace.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry fails the gate: ${[...ENTRY].length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
