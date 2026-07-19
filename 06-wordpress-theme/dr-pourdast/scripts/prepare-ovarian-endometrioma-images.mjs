/**
 * Prepare article images for "ovarian-endometrioma-chocolate-cyst".
 *
 * Usage:
 *   node scripts/prepare-ovarian-endometrioma-images.mjs \
 *     path/to/consultation.png \
 *     path/to/symptoms.png \
 *     path/to/doctor-patient.png \
 *     path/to/laparoscopy.png
 *
 * Output: resized PNG + WebP in assets/images/
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "../assets/images");

const TARGETS = [
  { outBase: "article-ovarian-endometrioma-consultation" },
  { outBase: "article-ovarian-endometrioma-symptoms" },
  { outBase: "article-ovarian-endometrioma-doctor-patient" },
  { outBase: "article-ovarian-endometrioma-laparoscopy" },
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

if (inputs.length !== 4) {
  console.error(
    "Provide 4 source images: consultation symptoms doctor-patient laparoscopy"
  );
  process.exit(1);
}

for (let i = 0; i < TARGETS.length; i += 1) {
  await processImage(inputs[i], TARGETS[i].outBase);
}

console.log("Done.");
