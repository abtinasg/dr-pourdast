#!/usr/bin/env node
/**
 * Simplifies header navigation across Persian source pages.
 * Run: node scripts/update-header-nav.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function findHtmlPages(dir, base = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const pages = [];

  for (const entry of entries) {
    if (["en", "ar", "assets", "scripts", "node_modules"].includes(entry.name)) {
      continue;
    }

    const rel = path.join(base, entry.name);
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      pages.push(...findHtmlPages(full, rel));
    } else if (entry.name === "index.html") {
      pages.push(rel);
    }
  }

  return pages;
}

function updateHeaderNav(html) {
  let output = html;

  output = output.replace(
    /\n\s*<li><a href="\/contact" class="nav-list__link"(?: aria-current="page")?>تماس و نوبت<\/a><\/li>/g,
    ""
  );
  output = output.replace(
    /\n\s*<li><a href="\/contact" class="mobile-nav__link"(?: aria-current="page")?>تماس و نوبت<\/a><\/li>/g,
    ""
  );

  output = output.replace(
    /(<a href="\/about" class="nav-list__link"[^>]*>)درباره دکتر(<\/a>)/g,
    "$1درباره پزشک$2"
  );
  output = output.replace(
    /(<a href="\/about" class="mobile-nav__link"[^>]*>)درباره دکتر(<\/a>)/g,
    "$1درباره پزشک$2"
  );

  output = output.replace(
    /(data-source="header" class="btn btn--primary btn--sm">)دریافت نوبت(<\/a>)/g,
    "$1رزرو نوبت$2"
  );
  output = output.replace(
    /(data-source="mobile-nav" class="btn btn--primary">)دریافت نوبت(<\/a>)/g,
    "$1رزرو نوبت$2"
  );

  return output;
}

const pages = findHtmlPages(ROOT);
let changed = 0;

for (const page of pages) {
  const filePath = path.join(ROOT, page);
  const original = fs.readFileSync(filePath, "utf8");
  const updated = updateHeaderNav(original);

  if (updated !== original) {
    fs.writeFileSync(filePath, updated);
    changed++;
  }
}

console.log(`Updated ${changed} of ${pages.length} Persian pages`);
