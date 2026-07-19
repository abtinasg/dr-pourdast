/**
 * Before laparoscopy patient guide content.
 * Must be reviewed and approved by Dr. Tahere Pourdast before publication.
 */
var GUIDE_PAGE = {
  slug: "before-laparoscopy",
  route: "/patient-guides/before-laparoscopy",
  seo: {
    title: "آمادگی پیش از لاپاراسکوپی | دکتر طاهره پوردست",
    description:
      "راهنمای عمومی آمادگی پیش از جراحی لاپاراسکوپی زنان شامل مدارک، هماهنگی‌ها و نکات قبل از عمل.",
    canonical: "https://drpourdast.ir/patient-guides/before-laparoscopy",
    ogImage: "/assets/images/og-before-laparoscopy-guide.jpg",
    locale: "fa_IR",
  },
  breadcrumb: [
    { label: "خانه", href: "/" },
    { label: "راهنمای بیماران", href: "/patient-guides" },
    { label: "آمادگی پیش از لاپاراسکوپی", href: "/patient-guides/before-laparoscopy" },
  ],
  hero: {
    eyebrow: "پیش از درمان",
    label: "راهنمای عمومی",
    title: "آمادگی پیش از لاپاراسکوپی",
    description:
      "اطلاعات عمومی درباره مدارک، هماهنگی‌ها و آمادگی‌های پیش از جراحی لاپاراسکوپی زنان.",
    note: "دستورالعمل دقیق قبل از عمل را از تیم درمان دریافت کنید.",
    primaryCta: { text: "مشاهده صفحه لاپاراسکوپی", href: "/services/gynecologic-laparoscopy" },
    appointmentSource: "before-laparoscopy-guide-hero",
  },
  whyPreparation: {
    eyebrow: "اهمیت آمادگی",
    title: "چرا آمادگی پیش از لاپاراسکوپی مهم است؟",
    points: [
      { title: "هماهنگی بهتر", description: "کاهش ابهام درباره زمان و مدارک لازم." },
      { title: "ایمنی بیشتر", description: "اطلاعات دارویی و سوابق کامل‌تر بررسی می‌شود." },
      { title: "آرامش بیشتر", description: "آشنایی با مراحل عمومی قبل از عمل." },
    ],
  },
  checklist: {
    id: "laparoscopy-prep-checklist",
    eyebrow: "چک‌لیست",
    title: "موارد عمومی که بهتر است آماده کنید",
    showPrint: true,
    groups: [
      {
        title: "مدارک پزشکی",
        items: ["سونوگرافی‌ها و MRI", "گزارش جراحی‌های قبلی", "آزمایش‌های اخیر", "فهرست داروهای مصرفی"],
      },
      {
        title: "اطلاعات شخصی",
        items: ["خلاصه علائم", "سابقه حساسیت دارویی", "سابقه بیماری‌های مزمن", "اطلاعات تماس همراه"],
      },
    ],
    note: "لیست دقیق را از مطب یا بیمارستان دریافت کنید.",
  },
  organizing: {
    eyebrow: "پیش از روز عمل",
    title: "مراحل عمومی آمادگی",
    steps: [
      { title: "هماهنگی با تیم درمان", description: "زمان بستری، ناشتایی و قطع داروها را تأیید کنید." },
      { title: "آماده‌سازی مدارک", description: "مدارک پزشکی و کارت شناسایی را آماده کنید." },
      { title: "برنامه همراه", description: "در صورت نیاز، همراه برای روز ترخیص هماهنگ کنید." },
      { title: "پرسیدن سؤالات", description: "سؤالات خود درباره عمل و دوره بهبودی را یادداشت کنید." },
    ],
  },
  questions: {
    eyebrow: "پرسش از پزشک",
    title: "سؤال‌های پیشنهادی",
    questions: [
      "هدف لاپاراسکوپی در مورد من چیست؟",
      "چه مدت در بیمارستان خواهم ماند؟",
      "چه داروهایی باید قبل از عمل قطع شوند؟",
      "چه زمانی می‌توانم به فعالیت عادی برگردم؟",
    ],
    note: "دستورالعمل‌های فردی را از پزشک دریافت کنید.",
  },
  relatedGuides: {
    title: "راهنماهای مرتبط",
    items: [
      { label: "آمادگی برای جلسه اول", href: "/patient-guides/first-visit" },
      { label: "مراقبت پس از جراحی", href: "/patient-guides/after-surgery" },
      { label: "راهنمای اندومتریوز", href: "/patient-guides/endometriosis" },
    ],
  },
  disclaimer: {
    paragraphs: [
      "این راهنما جایگزین دستورالعمل‌های پزشک یا بیمارستان نیست.",
    ],
  },
  finalCta: {
    title: "برای مشاوره پیش از عمل، نوبت دریافت کنید",
    description: "برای مشاهده زمان‌های آزاد، وارد صفحه دکتر طاهره پوردست در دکترتو شوید.",
    cta: { text: "رزرو نوبت در دکترتو", source: "before-laparoscopy-guide-final-cta" },
  },
};
