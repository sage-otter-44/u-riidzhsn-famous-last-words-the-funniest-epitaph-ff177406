import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Famous last words, carved as a one-line tombstone epitaph.
const EPITAPH =
  "I asked for my last words to be 'I told you I was sick.' They carved 'I told you so' instead.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Revision: enforce the sealed scorer's gate before writing anything.
if (EPITAPH.length < 1 || EPITAPH.length > 150) {
  throw new Error(`Epitaph is ${EPITAPH.length} chars; gate requires 1-150.`);
}
if (EPITAPH.includes("\n")) throw new Error("Epitaph must be a single line.");
if (EPITAPH.trim().length === 0) throw new Error("Epitaph is blank.");
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EPITAPH, "utf8");
console.log(`Wrote ${EPITAPH.length} chars to ${outPath}`);
