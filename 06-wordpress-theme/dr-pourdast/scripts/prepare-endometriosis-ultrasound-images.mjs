/**
 * Prepare article images for "endometriosis-ultrasound-diagnosis".
 *
 * Usage:
 *   node scripts/prepare-endometriosis-ultrasound-images.mjs \
 *     path/to/consultation.png \
 *     path/to/monitor.png \
 *     path/to/explanation.png
 *
 * Output: resized PNG + WebP in assets/images/
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "../assets/images");

const TARGETS = [
  { outBase: "article-endometriosis-ultrasound-consultation" },
  { outBase: "article-endometriosis-ultrasound-monitor" },
  { outBase: "article-endometriosis-ultrasound-explanation" },
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
    "Provide 3 source images: consultation monitor explanation"
  );
  process.exit(1);
}

for (let i = 0; i < TARGETS.length; i += 1) {
  await processImage(inputs[i], TARGETS[i].outBase);
}

console.log("Done.");
