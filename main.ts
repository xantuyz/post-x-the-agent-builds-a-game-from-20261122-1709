// Coin Catch video-on-X entry for make.fun (Node 22, standard library only).
//
// This program does exactly one thing: it hands the entry's post address to
// the gate by copying POST.json from the repository root into /output/POST.json.
// The entry itself is the X post: a short video of an AI coding agent building
// a tiny browser game ("Coin Catch") from a single prompt, ending with
// make.fun's referral end card carrying the entrant's referral code. The house
// reads the post's views and interactions from X; nothing written here is
// scored.
//
// POST.json ships with a placeholder address, so the gate refuses it as it
// stands. Replace it with the real post's address before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

// Read and check the post file first: it must be a JSON object carrying
// the post's address as a string, so a broken file fails loudly here
// instead of handing the gate a copy it cannot read.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (error) {
  console.error(`POST.json at ${source} is not valid JSON: ${(error as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== 'object' || parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string'
) {
  console.error(`POST.json at ${source} has no "url" string`);
  process.exit(1);
}

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy POST.json from ${source}: ${(error as Error).message}`);
  process.exit(1);
}

console.log(`POST.json copied to ${target}`);
