#!/usr/bin/env node
/**
 * Injects nav-dropdown.js before global-ui.js on all HTML pages.
 * Run: node scripts/inject-nav-dropdown.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function findHtmlPages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const pages = [];

  for (const entry of entries) {
    if (["assets", "scripts", "node_modules"].includes(entry.name)) {
      continue;
    }

    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      pages.push(...findHtmlPages(full));
    } else if (entry.name.endsWith(".html")) {
      pages.push(full);
    }
  }

  return pages;
}

const pages = findHtmlPages(ROOT);
let changed = 0;

for (const filePath of pages) {
  const original = fs.readFileSync(filePath, "utf8");

  if (!original.includes("global-ui.js") || original.includes("nav-dropdown.js")) {
    continue;
  }

  const updated = original.replace(
    /(<script src="([^"]*\/)global-ui\.js" defer><\/script>)/,
    '<script src="$2nav-dropdown.js" defer></script>\n  $1'
  );

  if (updated !== original) {
    fs.writeFileSync(filePath, updated);
    changed++;
  }
}

console.log(`Injected nav-dropdown.js on ${changed} of ${pages.length} HTML pages`);
