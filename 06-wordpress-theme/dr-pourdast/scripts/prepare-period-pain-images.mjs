/**
 * Prepare article images for "period-pain-vs-endometriosis".
 *
 * Usage:
 *   node scripts/prepare-period-pain-images.mjs \
 *     path/to/consultation.png \
 *     path/to/comparison.png \
 *     path/to/ultrasound.png
 *
 * Output: resized PNG + WebP in assets/images/
 *
 * Source images already include the brand logo; only resize/optimize.
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "../assets/images");

const TARGETS = [
  {
    key: "consultation",
    outBase: "article-period-pain-consultation",
  },
  {
    key: "comparison",
    outBase: "article-period-pain-comparison",
  },
  {
    key: "ultrasound",
    outBase: "article-period-pain-ultrasound",
  },
];

const WIDTH = 1200;
const HEIGHT = 675;

async function processImage(inputPath, outBase) {
  const outPng = path.join(imagesDir, `${outBase}.png`);
  const outWebp = path.join(imagesDir, `${outBase}.webp`);

  await sharp(inputPath)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(outPng);

  await sharp(outPng).webp({ quality: 82 }).toFile(outWebp);

  console.log(`${outBase}: done`);
}

const inputs = process.argv.slice(2);

if (inputs.length !== 3) {
  console.error(
    "Provide 3 source images: consultation comparison ultrasound"
  );
  process.exit(1);
}

for (let i = 0; i < TARGETS.length; i += 1) {
  await processImage(inputs[i], TARGETS[i].outBase);
}

console.log("Done.");
