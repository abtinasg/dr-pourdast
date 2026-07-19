/**
 * Endometriosis patient guide content.
 * Must be reviewed and approved by Dr. Tahere Pourdast before publication.
 */
var GUIDE_PAGE = {
  slug: "endometriosis",
  route: "/patient-guides/endometriosis",
  seo: {
    title: "راهنمای بیماران اندومتریوز | دکتر طاهره پوردست",
    description:
      "راهنمای عمومی برای آشنایی با علائم، روند بررسی، گزینه‌های درمان و اهمیت پیگیری اندومتریوز.",
    canonical: "https://drpourdast.ir/patient-guides/endometriosis",
    ogImage: "/assets/images/og-endometriosis-guide.jpg",
    locale: "fa_IR",
  },
  breadcrumb: [
    { label: "خانه", href: "/" },
    { label: "راهنمای بیماران", href: "/patient-guides" },
    { label: "راهنمای اندومتریوز", href: "/patient-guides/endometriosis" },
  ],
  hero: {
    eyebrow: "شناخت بیماری",
    label: "راهنمای عمومی",
    title: "راهنمای بیماران اندومتریوز",
    description:
      "اطلاعات عمومی درباره علائم شایع، زمان مراجعه، روند بررسی و گزینه‌های درمانی اندومتریوز.",
    note: "این راهنما جایگزین معاینه یا تشخیص پزشک نیست.",
    primaryCta: { text: "مشاهده صفحه تخصصی اندومتریوز", href: "/services/endometriosis" },
    appointmentSource: "endometriosis-guide-hero",
  },
  whyPreparation: {
    eyebrow: "چرا مهم است",
    title: "چرا آشنایی با اندومتریوز مفید است؟",
    points: [
      { title: "شناخت علائم", description: "کمک می‌کند علائم خود را بهتر توصیف کنید." },
      { title: "آمادگی برای ارزیابی", description: "مدارک و سوابق را منظم‌تر آماده می‌کنید." },
      { title: "درک گزینه‌های درمان", description: "با مسیرهای عمومی درمان آشنا می‌شوید." },
    ],
  },
  prose: {
    eyebrow: "علائم شایع",
    title: "چه علائمی ممکن است با اندومتریوز مرتبط باشد؟",
    paragraphs: [
      "اندومتریوز می‌تواند با دردهای شدید قاعدگی، درد لگنی، درد هنگام رابطه، مشکلات گوارشی یا باروری همراه باشد.",
      "شدت علائم در بیماران مختلف متفاوت است و تشخیص نیازمند ارزیابی پزشک است.",
    ],
    items: [
      "قاعدگی‌های بسیار دردناک",
      "درد مزمن لگن",
      "درد هنگام رابطه",
      "مشکلات باروری",
      "خستگی یا علائم گوارشی مرتبط",
    ],
    note: "وجود این علائم به‌تنهایی به معنای ابتلا نیست.",
  },
  evaluation: {
    eyebrow: "روند بررسی",
    title: "ارزیابی اندومتریوز معمولاً شامل چه مراحلی است؟",
    paragraphs: [
      "پزشک ممکن است علائم، سوابق پزشکی، تصویربرداری‌ها و درمان‌های قبلی را بررسی کند.",
      "در برخی موارد معاینه یا بررسی‌های تکمیلی پیشنهاد می‌شود.",
    ],
    items: ["بررسی علائم و سوابق", "ارزیابی تصویربرداری", "معاینه تخصصی", "تعیین مسیر درمان"],
  },
  questions: {
    eyebrow: "پرسش از پزشک",
    title: "سؤال‌هایی که می‌توانید بپرسید",
    questions: [
      "آیا یافته‌های من با اندومتریوز سازگار است؟",
      "آیا نیاز به تصویربرداری یا بررسی بیشتر دارم؟",
      "چه گزینه‌های درمانی برای من وجود دارد؟",
      "آیا جراحی برای شرایط من لازم است؟",
    ],
    note: "سؤالات شخصی خود را نیز یادداشت کنید.",
  },
  appointment: {
    eyebrow: "دریافت نوبت",
    title: "نوبت ارزیابی",
    content: "برای بررسی علائم و دریافت راهنمایی تخصصی، نوبت از سامانه دکترتو ثبت کنید.",
    appointmentSource: "endometriosis-guide-appointment",
  },
  relatedGuides: {
    title: "راهنماهای مرتبط",
    items: [
      { label: "آمادگی برای جلسه اول", href: "/patient-guides/first-visit" },
      { label: "آمادگی پیش از لاپاراسکوپی", href: "/patient-guides/before-laparoscopy" },
      { label: "مراقبت پس از جراحی", href: "/patient-guides/after-surgery" },
    ],
  },
  disclaimer: {
    paragraphs: [
      "این راهنما صرفاً برای آگاهی عمومی است. تشخیص و درمان باید توسط پزشک انجام شود.",
    ],
  },
  finalCta: {
    title: "برای بررسی علائم، نوبت مراجعه دریافت کنید",
    description: "برای مشاهده زمان‌های آزاد، وارد صفحه دکتر طاهره پوردست در دکترتو شوید.",
    cta: { text: "رزرو نوبت در دکترتو", source: "endometriosis-guide-final-cta" },
  },
};
