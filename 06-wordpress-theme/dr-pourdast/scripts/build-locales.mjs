#!/usr/bin/env node
/**
 * Generates /en/ and /ar/ HTML pages from Persian source pages.
 * Run: node scripts/build-locales.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const LOCALES = {
  en: { lang: "en", dir: "ltr", ogLocale: "en_US", prefix: "/en" },
  ar: { lang: "ar", dir: "rtl", ogLocale: "ar_SA", prefix: "/ar" },
};

const TEXT_REPLACEMENTS = {
  en: {
    "رفتن به محتوای اصلی": "Skip to main content",
    "صفحه اصلی — دکتر طاهره پوردست": "Homepage — Dr. Tahereh Pordast",
    "دکتر طاهره پوردست": "Dr. Tahereh Pordast",
    "متخصص زنان و زایمان": "Obstetrician & Gynecologist",
    "منوی اصلی": "Main menu",
    "خانه": "Home",
    "درباره پزشک": "About the Doctor",
    "درباره دکتر": "About the Doctor",
    "خدمات تخصصی": "Services",
    "راهنمای بیماران": "Patient Guides",
    "مقالات": "Articles",
    "تماس و نوبت": "Contact & Booking",
    "رزرو نوبت در دکترتو": "View appointments on Doctoreto",
    "رزرو نوبت": "View appointments",
    "دریافت نوبت": "View appointments",
    "تماس با مطب": "Contact clinic",
    "درخواست نوبت": "View appointments",
    "باز کردن منو": "Open menu",
    "منوی موبایل": "Mobile menu",
    "مشاهده خدمات تخصصی": "View Services",
    "دریافت نوبت از اکسون": "Book on Axon",
    "مرکز تخصصی درمان بیماری‌های زنان": "Specialized Women's Health Center",
    "درمان تخصصی اندومتریوز و بیماری‌های زنان":
      "Specialized Treatment for Endometriosis & Gynecologic Conditions",
    "تشخیص دقیق، درمان علمی و جراحی‌های کم‌تهاجمی زنان با همراهی دکتر طاهره پوردست، متخصص زنان و زایمان و فلوشیپ لاپاراسکوپی پیشرفته زنان.":
      "Accurate diagnosis, evidence-based treatment, and minimally invasive gynecologic surgery with Dr. Tahereh Pordast, obstetrician-gynecologist and advanced laparoscopy fellow.",
    "فلوشیپ لاپاراسکوپی زنان": "Fellowship in Gynecologic Laparoscopy",
    "استاد دانشگاه علوم پزشکی شیراز": "Professor at Shiraz University of Medical Sciences",
    "شماره نظام پزشکی ۹۰۵۶۶": "Medical License No. 90566",
    "اعتبارنامه‌های تخصصی": "Professional credentials",
    "تصویر دکتر طاهره پوردست — به‌زودی": "Photo of Dr. Tahereh Pordast — coming soon",
    "محل قرارگیری تصویر پرتره دکتر": "Doctor portrait placeholder",
    "عنوان تخصصی": "Specialty title",
    "عنوان تخصصی:": "Specialty:",
    "فلوشیپ لاپاراسکوپی پیشرفته زنان": "Advanced Gynecologic Laparoscopy Fellowship",
    "شیراز": "Shiraz",
  },
  ar: {
    "رفتن به محتوای اصلی": "الانتقال إلى المحتوى الرئيسي",
    "صفحه اصلی — دکتر طاهره پوردست": "الصفحة الرئيسية — د. طاهرة پوردست",
    "دکتر طاهره پوردست": "د. طاهرة پوردست",
    "متخصص زنان و زایمان": "أخصائية نساء وتوليد",
    "منوی اصلی": "القائمة الرئيسية",
    "خانه": "الرئيسية",
    "درباره پزشک": "عن الطبيبة",
    "درباره دکتر": "عن الطبيبة",
    "خدمات تخصصی": "الخدمات التخصصية",
    "راهنمای بیماران": "دليل المرضى",
    "مقالات": "المقالات",
    "تماس و نوبت": "التواصل والحجز",
    "رزرو نوبت در دکترتو": "عرض المواعيد المتاحة في Doctoreto",
    "رزرو نوبت": "عرض المواعيد المتاحة",
    "دریافت نوبت": "عرض المواعيد المتاحة",
    "تماس با مطب": "الاتصال بالعيادة",
    "درخواست نوبت": "عرض المواعيد المتاحة",
    "باز کردن منو": "فتح القائمة",
    "منوی موبایل": "قائمة الجوال",
    "مشاهده خدمات تخصصی": "عرض الخدمات",
    "دریافت نوبت از اکسون": "حجز موعد عبر Axon",
    "مرکز تخصصی درمان بیماری‌های زنان": "مركز متخصص لعلاج أمراض النساء",
    "درمان تخصصی اندومتریوز و بیماری‌های زنان":
      "علاج متخصص لبطانة الرحم وامتدادها وأمراض النساء",
    "تشخیص دقیق، درمان علمی و جراحی‌های کم‌تهاجمی زنان با همراهی دکتر طاهره پوردست، متخصص زنان و زایمان و فلوشیپ لاپاراسکوپی پیشرفته زنان.":
      "تشخيص دقيق وعلاج علمي وجراحات نسائية طفيفة التوغل مع د. طاهرة پوردست، أخصائية نساء وتوليد وزميلة منظار البطن المتقدم.",
    "فلوشیپ لاپاراسکوپی زنان": "زمالة منظار البطن النسائي",
    "استاد دانشگاه علوم پزشکی شیراز": "أستاذة في جامعة علوم طب شيراز",
    "شماره نظام پزشکی ۹۰۵۶۶": "رقم الترخيص الطبي 90566",
    "اعتبارنامه‌های تخصصی": "الاعتمادات المهنية",
    "تصویر دکتر طاهره پوردست — به‌زودi": "صورة د. طاهرة پوردست — قريباً",
    "تصویر دکتر طاهره پوردست — به‌زودی": "صورة د. طاهرة پوردست — قريباً",
    "محل قرارگیری تصویر پرتره دکتر": "مكان صورة الطبيبة",
    "عنوان تخصصی": "عنوان التخصص",
    "عنوان تخصصی:": "التخصص:",
    "فلوشیپ لاپاراسکوپی پیشرفته زنان": "زمالة منظار البطن النسائي المتقدم",
    "شیراز": "شيراز",
  },
};

const HOME_SEO = {
  en: {
    title: "Dr. Tahereh Pordast | Obstetrician & Gynecologist — Shiraz",
    description:
      "Specialized treatment for endometriosis and gynecologic conditions — Dr. Tahereh Pordast, obstetrician-gynecologist, advanced laparoscopy fellow, Shiraz.",
  },
  ar: {
    title: "د. طاهرة پوردست | أخصائية نساء وتوليد — شيراز",
    description:
      "علاج متخصص لبطانة الرحم وأمراض النساء — د. طاهرة پوردست، أخصائية نساء وتوليد، زميلة منظار البطن المتقدم، شيراز.",
  },
};

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

function targetDepth(pagePath) {
  const dir = path.dirname(pagePath);
  const sourceDepth = dir === "." ? 0 : dir.split(path.sep).length;
  return sourceDepth + 1;
}

function assetPrefix(depth) {
  return "../".repeat(depth);
}

function extractSeoFromDataFile(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, "utf8");
  const seoBlock = content.match(/seo:\s*\{([\s\S]*?)\n\s*\},/);
  if (!seoBlock) return null;

  const title = seoBlock[1].match(/title:\s*"((?:\\.|[^"\\])*)"/);
  const description = seoBlock[1].match(/description:\s*\n?\s*"((?:\\.|[^"\\])*)"/);
  const canonical = seoBlock[1].match(/canonical:\s*"((?:\\.|[^"\\])*)"/);

  if (!title || !description) return null;

  return {
    title: title[1],
    description: description[1],
    canonical: canonical ? canonical[1] : null,
  };
}

function findPrimaryDataScript(html) {
  const matches = [
    ...html.matchAll(/assets\/data\/([a-z0-9\-\/]+\.js)/g),
  ].map((match) => match[1]);

  const specificArticle = matches.find((file) =>
    /^articles\/[^/]+\.js$/.test(file)
  );
  if (specificArticle) return specificArticle;

  const specificGuide = matches.find((file) =>
    /^patient-guides\/[^/]+\.js$/.test(file)
  );
  if (specificGuide) return specificGuide;

  const specificService = matches.find((file) =>
    /^services\/[^/]+\.js$/.test(file)
  );
  if (specificService) return specificService;

  return (
    matches.find((file) =>
      /^(doctor-profile|contact-page|services-page|articles-page|patient-guides|faq-page|privacy-page|terms-page)\.js$/.test(
        file
      )
    ) || null
  );
}

function applyReplacements(html, localeKey) {
  const replacements = TEXT_REPLACEMENTS[localeKey];
  const sortedKeys = Object.keys(replacements).sort((a, b) => b.length - a.length);
  let output = html;
  for (const key of sortedKeys) {
    output = output.split(key).join(replacements[key]);
  }
  return output;
}

function rewriteAssetPaths(html, depth, localeKey) {
  let output = html;

  output = output.replace(
    /(href|src)="(?:\.\.\/)*assets\/data\/(?:en\/|ar\/)?([^"?]+\.js)(\?[^"]*)?"/g,
    (_match, attr, file, query) =>
      `${attr}="${assetPrefix(depth)}assets/data/${localeKey}/${file}${query || ""}"`
  );

  output = output.replace(
    /(href|src)="(?:\.\.\/)*assets\/(css|js|images)\/([^"]+)"/g,
    (_match, attr, folder, file) => {
      if (folder === "js" && file.startsWith("data/")) {
        return _match;
      }
      return `${attr}="${assetPrefix(depth)}assets/${folder}/${file}"`;
    }
  );

  return output;
}

function rewriteInternalLinks(html, prefix) {
  return html.replace(/href="\/(?!\/)([^"#?]*?)"/g, (match, pathname) => {
    if (pathname.startsWith("assets/")) return match;
    const normalized = pathname.replace(/\/$/, "");
    if (!normalized) return `href="${prefix}/"`;
    return `href="${prefix}/${normalized}"`;
  });
}

function applySeo(html, seo, locale) {
  if (!seo) return html;

  let output = html;
  output = output.replace(/<title>[^<]*<\/title>/, `<title>${seo.title}</title>`);
  output = output.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${seo.description}">`
  );

  if (seo.canonical) {
    if (output.includes('rel="canonical"')) {
      output = output.replace(
        /<link rel="canonical" href="[^"]*">/,
        `<link rel="canonical" href="${seo.canonical}">`
      );
    }
    output = output.replace(
      /<meta property="og:title" content="[^"]*">/,
      `<meta property="og:title" content="${seo.title}">`
    );
    output = output.replace(
      /<meta property="og:description" content="[^"]*">/,
      `<meta property="og:description" content="${seo.description}">`
    );
    output = output.replace(
      /<meta property="og:url" content="[^"]*">/,
      `<meta property="og:url" content="${seo.canonical}">`
    );
  }

  output = output.replace(
    /property="og:locale" content="[^"]*"/,
    `property="og:locale" content="${locale.ogLocale}"`
  );

  return output;
}

function transformHtml(sourceHtml, localeKey, pagePath) {
  const locale = LOCALES[localeKey];
  const depth = targetDepth(pagePath);
  let html = sourceHtml;

  html = html.replace(
    /<html lang="fa" dir="rtl">/,
    `<html lang="${locale.lang}" dir="${locale.dir}">`
  );

  html = rewriteAssetPaths(html, depth, localeKey);
  html = rewriteInternalLinks(html, locale.prefix);
  html = applyReplacements(html, localeKey);

  if (pagePath === "index.html") {
    html = applySeo(html, HOME_SEO[localeKey], locale);
    html = html.replace(
      /https:\/\/drpourdast\.ir\//g,
      `https://drpourdast.ir${locale.prefix}/`
    );
  } else {
    const dataScript = findPrimaryDataScript(sourceHtml);
    if (dataScript) {
      const seo = extractSeoFromDataFile(
        path.join(ROOT, "assets", "data", localeKey, dataScript)
      );
      html = applySeo(html, seo, locale);
    }
  }

  return html;
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

const pages = findHtmlPages(ROOT);

for (const localeKey of Object.keys(LOCALES)) {
  for (const page of pages) {
    const sourcePath = path.join(ROOT, page);
    const targetPath = path.join(ROOT, localeKey, page);
    const sourceHtml = fs.readFileSync(sourcePath, "utf8");
    const output = transformHtml(sourceHtml, localeKey, page);
    ensureDir(targetPath);
    fs.writeFileSync(targetPath, output);
  }
}

console.log(`Generated ${pages.length} pages for each locale: en, ar`);
