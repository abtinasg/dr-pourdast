/**
 * Patient guides hub page content.
 *
 * All patient guide content must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */
var PATIENT_GUIDES_PAGE = {
  slug: "patient-guides",
  route: "/patient-guides",
  seo: {
    title: "راهنمای بیماران | دکتر طاهره پوردست",
    description:
      "راهنماهای عمومی برای آمادگی پیش از مراجعه، شناخت اندومتریوز، آمادگی پیش از لاپاراسکوپی و مراقبت‌های عمومی پس از درمان در سایت دکتر طاهره پوردست.",
    canonical: "https://drpourdast.ir/patient-guides",
    ogImage: "/assets/images/og-patient-guides.jpg",
    locale: "fa_IR",
  },
  breadcrumb: [
    { label: "خانه", href: "/" },
    { label: "راهنمای بیماران", href: "/patient-guides" },
  ],
  hero: {
    eyebrow: "راهنمای بیماران",
    title: "اطلاعات لازم برای آمادگی بهتر پیش از مراجعه و درمان",
    description:
      "در این بخش می‌توانید راهنماهای عمومی مربوط به جلسه اول، شناخت برخی بیماری‌های زنان، آمادگی پیش از اقدامات درمانی و مراقبت‌های عمومی پس از درمان را مطالعه کنید.",
    primaryCta: {
      text: "مشاهده راهنماها",
      href: "#guides",
    },
    appointmentSource: "patient-guides-hero",
    note:
      "این مطالب جایگزین معاینه، تشخیص یا توصیه درمانی پزشک نیستند.",
  },
  guides: {
    id: "guides",
    eyebrow: "دسته‌بندی راهنماها",
    title: "راهنمای موردنظر خود را انتخاب کنید",
    subtitle:
      "هر راهنما شامل اطلاعات عمومی و قابل‌فهم برای آمادگی بهتر بیمار است.",
    items: [
      {
        slug: "first-visit",
        category: "پیش از مراجعه",
        title: "آمادگی برای جلسه اول",
        description:
          "مدارک، تصویربرداری‌ها، آزمایش‌ها و اطلاعاتی که بهتر است هنگام اولین مراجعه همراه داشته باشید.",
        href: "/patient-guides/first-visit",
        featured: true,
        icon:
          '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 6H19V18H5V6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 10H15M9 13H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 6V4.5C8 4.2 8.2 4 8.5 4H15.5C15.8 4 16 4.2 16 4.5V6" stroke="currentColor" stroke-width="1.5"/></svg>',
      },
      {
        slug: "endometriosis",
        category: "شناخت بیماری",
        title: "راهنمای بیماران اندومتریوز",
        description:
          "آشنایی عمومی با علائم، روند بررسی، گزینه‌های درمان و اهمیت پیگیری اندومتریوز.",
        href: "/patient-guides/endometriosis",
        icon:
          '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 4H17V20H7V4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M10 8H14M10 11H14M10 14H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>',
      },
      {
        slug: "before-laparoscopy",
        category: "پیش از درمان",
        title: "آمادگی پیش از لاپاراسکوپی",
        description:
          "اطلاعات عمومی درباره مدارک، هماهنگی‌ها و آمادگی‌های پیش از جراحی لاپاراسکوپی.",
        href: "/patient-guides/before-laparoscopy",
        icon:
          '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M8 3V7M16 3V7M4 10H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 14H11M8 17H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
      },
      {
        slug: "after-surgery",
        category: "پس از درمان",
        title: "مراقبت‌های عمومی پس از جراحی",
        description:
          "آشنایی با اصول کلی پیگیری، فعالیت روزانه و مراقبت‌های عمومی بعد از جراحی.",
        href: "/patient-guides/after-surgery",
        icon:
          '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4L5 8V13C5 17 8.5 19.5 12 20C15.5 19.5 19 17 19 13V8L12 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      },
      {
        slug: "uterine-bleeding",
        category: "مشکلات رحم",
        title: "آشنایی با خونریزی‌های غیرطبیعی رحم",
        description:
          "اطلاعات عمومی درباره اهمیت بررسی خونریزی‌های غیرمعمول و زمان مراجعه برای ارزیابی.",
        href: "/patient-guides/uterine-bleeding",
        icon:
          '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 4H17V20H7V4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M10 8H14M10 11H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9 15H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
      },
    ],
  },
  howToUse: {
    eyebrow: "نحوه استفاده",
    title: "این راهنماها چگونه به شما کمک می‌کنند؟",
    points: [
      {
        title: "آمادگی بهتر برای مراجعه",
        description:
          "کمک می‌کنند مدارک و اطلاعات لازم را پیش از جلسه آماده کنید.",
      },
      {
        title: "درک بهتر روند بررسی",
        description: "با مراحل عمومی ارزیابی و درمان آشنا می‌شوید.",
      },
      {
        title: "کاهش ابهام پیش از درمان",
        description:
          "اطلاعات عمومی لازم را بدون جایگزین‌کردن نظر پزشک دریافت می‌کنید.",
      },
    ],
  },
  disclaimer: {
    title: "نکته مهم درباره مطالب پزشکی",
    paragraphs: [
      "مطالب این بخش صرفاً برای آگاهی عمومی تهیه شده‌اند و جایگزین معاینه، تشخیص، نسخه یا توصیه درمانی پزشک نیستند.",
      "شرایط هر بیمار متفاوت است و تصمیم درباره آزمایش‌ها، داروها، جراحی یا مراقبت‌های پس از درمان باید توسط پزشک و تیم درمان انجام شود.",
    ],
  },
  relatedServices: {
    eyebrow: "خدمات مرتبط",
    title: "مطالعه درباره خدمات تخصصی",
    items: [
      { label: "اندومتریوز", href: "/services/endometriosis" },
      { label: "لاپاراسکوپی زنان", href: "/services/gynecologic-laparoscopy" },
      { label: "هیستروسکوپی", href: "/services/hysteroscopy" },
      { label: "کیست تخمدان", href: "/services/ovarian-cyst" },
    ],
  },
  finalCta: {
    title: "برای بررسی شرایط خود، نوبت مراجعه دریافت کنید",
    description:
      "برای مشاهده زمان‌های آزاد و ثبت نوبت، وارد صفحه رسمی دکتر طاهره پوردست در سامانه دکترتو شوید.",
    cta: {
      text: "مشاهده نوبت‌های آزاد در دکترتو",
      source: "patient-guides-final-cta",
    },
  },
};
