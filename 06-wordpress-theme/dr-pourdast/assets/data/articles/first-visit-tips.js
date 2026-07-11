/**
 * Article: نکات اولین مراجعه
 * Content must be reviewed by Dr. Tahere Pourdast before publication.
 */
var ARTICLE_PAGE = {
  slug: "first-visit-tips",
  route: "/articles/first-visit-tips",
  seo: {
    title: "نکات مهم برای اولین مراجعه به متخصص زنان | دکتر طاهره پوردست",
    description: "راهنمای آمادگی برای اولین ویزیت: مدارک، سوابق و اطلاعاتی که بهتر است همراه داشته باشید.",
    canonical: "https://drpourdast.ir/articles/first-visit-tips",
    ogImage: "/assets/images/og-article.jpg",
    locale: "fa_IR",
  },
  breadcrumb: [
    { label: "خانه", href: "/" },
    { label: "مقالات", href: "/articles" },
    { label: "نکات اولین مراجعه", href: "/articles/first-visit-tips" },
  ],
  hero: {
    categoryLabel: "راهنمای بیماران",
    date: "۱۴۰۳/۱۱/۲۵",
    readingTime: "۵ دقیقه",
    title: "نکات مهم برای اولین مراجعه به متخصص زنان",
    lead: "آمادگی مناسب پیش از اولین ویزیت می‌تواند به بررسی دقیق‌تر و صرفه‌جویی در زمان کمک کند.",
    note: "لازم‌بودن هر مدرک به علت مراجعه بستگی دارد.",
  },
  body: {
    blocks: [
      { type: "heading", level: 2, id: "documents", text: "مدارک پیشنهادی" },
      { type: "list", ordered: false, items: ["سونوگرافی‌ها و تصویربرداری‌های قبلی", "نتایج آزمایش‌های اخیر", "لیست داروهای مصرفی", "خلاصه سوابق جراحی یا درمان"] },
      { type: "heading", level: 2, id: "info", text: "اطلاعاتی که بهتر است آماده کنید" },
      { type: "list", ordered: false, items: ["تاریخ شروع و الگوی علائم", "سابقه قاعدگی", "سابقه بارداری و زایمان", "سابقه خانوادگی بیماری‌های زنان"] },
      { type: "paragraph", text: "برای چک‌لیست کامل‌تر، راهنمای اختصاصی آمادگی جلسه اول را نیز مطالعه کنید." },
      { type: "callout", title: "راهنمای تکمیلی", text: "راهنمای جامع‌تر در بخش راهنمای بیماران: /patient-guides/first-visit" },
    ],
  },
  author: { label: "نویسنده", name: "دکتر طاهره پوردست", title: "متخصص زنان و زایمان", note: "نیاز به بازبینی نهایی دارد." },
  relatedArticles: {
    eyebrow: "مطالب مرتبط", title: "مقالات پیشنهادی",
    items: [
      { categoryLabel: "اندومتریوز", title: "علائم اندومتریوز", href: "/articles/endometriosis-symptoms" },
      { categoryLabel: "لاپاراسکوپی", title: "مراقبت‌های پس از لاپاراسکوپی", href: "/articles/laparoscopy-recovery" },
    ],
  },
  disclaimer: {
    title: "نکته مهم درباره مطالب پزشکی",
    paragraphs: ["مطالب این بخش صرفاً برای آگاهی عمومی تهیه شده‌اند و جایگزین معاینه، تشخیص یا توصیه درمانی پزشک نیستند.", "تصمیم درباره درمان باید توسط پزشک متخصص انجام شود."],
  },
  finalCta: {
    title: "برای اولین مراجعه، نوبت دریافت کنید",
    description: "برای مشاهده زمان‌های آزاد و ثبت نوبت، وارد صفحه رسمی دکتر طاهره پوردست در سامانه دکترتو شوید.",
    cta: { text: "مشاهده نوبت‌های آزاد در دکترتو", source: "article-first-visit-cta" },
  },
};
