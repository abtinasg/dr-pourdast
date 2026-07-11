/**
 * Medical articles catalog.
 *
 * All medical article content must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */

/** @typedef {"endometriosis"|"laparoscopy"|"uterine-health"|"ovarian-health"|"patient-education"} ArticleCategory */

/** @type {Record<ArticleCategory, string>} */
var ARTICLE_CATEGORY_LABELS = {
  endometriosis: "اندومتریوز",
  laparoscopy: "لاپاراسکوپی و جراحی کم‌تهاجمی",
  "uterine-health": "بیماری‌ها و سلامت رحم",
  "ovarian-health": "بیماری‌ها و سلامت تخمدان",
  "patient-education": "آموزش و آگاهی بیماران",
};

/**
 * Article catalog. Only items with status "published" appear on the site.
 *
 * @type {Array<Object>}
 */
var ARTICLES_CATALOG = [
  {
    slug: "endometriosis-symptoms",
    title: "علائم اندومتریوز: چه زمانی باید به پزشک مراجعه کرد؟",
    excerpt:
      "آشنایی با علائم شایع اندومتریوز، زمان مراجعه به پزشک و اهمیت تشخیص زودهنگام.",
    category: "endometriosis",
    publishedAt: "۱۴۰۴/۰۱/۱۵",
    status: "published",
    featured: true,
    seoTitle: "علائم اندومتریوز: چه زمانی باید به پزشک مراجعه کرد؟ | دکتر طاهره پوردست",
    seoDescription:
      "آشنایی با علائم شایع اندومتریوز، زمان مراجعه به پزشک و اهمیت تشخیص زودهنگام این بیماری.",
  },
  {
    slug: "endometriosis-diagnosis",
    title: "روش‌های تشخیص اندومتریوز: از معاینه تا لاپاراسکوپی",
    excerpt:
      "بررسی روش‌های عمومی تشخیص اندومتریوز از معاینه بالینی تا تصویربرداری و لاپاراسکوپی.",
    category: "endometriosis",
    publishedAt: "۱۴۰۴/۰۱/۲۰",
    status: "published",
    seoTitle: "روش‌های تشخیص اندومتریوز | دکتر طاهره پوردست",
    seoDescription:
      "آشنایی با مراحل عمومی تشخیص اندومتریوز و نقش سونوگرافی، MRI و لاپاراسکوپی.",
  },
  {
    slug: "laparoscopy-recovery",
    title: "مراقبت‌های پس از لاپاراسکوپی: آنچه باید بدانید",
    excerpt:
      "راهنمای عمومی مراقبت‌های پس از جراحی لاپاراسکوپی زنان شامل فعالیت روزانه و مراقبت از محل برش.",
    category: "laparoscopy",
    publishedAt: "۱۴۰۴/۰۱/۱۰",
    status: "published",
    seoTitle: "مراقبت‌های پس از لاپاراسکوپی | دکتر طاهره پوردست",
    seoDescription:
      "راهنمای عمومی مراقبت‌های پس از جراحی لاپاراسکوپی زنان.",
  },
  {
    slug: "hysteroscopy-vs-laparoscopy",
    title: "تفاوت هیستروسکوپی و لاپاراسکوپی: کدام برای چه مواردی؟",
    excerpt:
      "مقایسه عمومی هیستروسکوپی و لاپاراسکوپی و کاربرد هر روش در بیماری‌های زنان.",
    category: "laparoscopy",
    publishedAt: "۱۴۰۳/۱۲/۱۵",
    status: "published",
    seoTitle: "تفاوت هیستروسکوپی و لاپاراسکوپی | دکتر طاهره پوردست",
    seoDescription:
      "آشنایی با تفاوت هیستروسکوپی و لاپاراسکوپی و کاربرد هر روش.",
  },
  {
    slug: "ovarian-cyst-types",
    title: "انواع کیست تخمدان و زمان نیاز به پیگیری",
    excerpt:
      "آشنایی با انواع شایع کیست تخمدان و زمان مراجعه برای بررسی بیشتر.",
    category: "ovarian-health",
    publishedAt: "۱۴۰۳/۱۲/۱۰",
    status: "published",
    seoTitle: "انواع کیست تخمدان | دکتر طاهره پوردست",
    seoDescription:
      "آشنایی با انواع کیست تخمدان و زمان نیاز به پیگیری یا درمان.",
  },
  {
    slug: "uterine-fibroid-overview",
    title: "فیبروم رحم: علائم، انواع و گزینه‌های درمان",
    excerpt:
      "آشنایی با انواع فیبروم رحم، علائم شایع و رویکردهای درمانی.",
    category: "uterine-health",
    publishedAt: "۱۴۰۳/۱۲/۲۰",
    status: "published",
    seoTitle: "فیبروم رحم: علائم و درمان | دکتر طاهره پوردست",
    seoDescription:
      "آشنایی با انواع فیبروم رحم، علائم شایع و گزینه‌های درمان.",
  },
  {
    slug: "abnormal-bleeding",
    title: "خونریزی غیرطبیعی رحم: علل شایع و زمان مراجعه",
    excerpt:
      "آشنایی با علل شایع خونریزی غیرطبیعی رحم و زمان مراجعه برای ارزیابی.",
    category: "uterine-health",
    publishedAt: "۱۴۰۳/۱۱/۲۵",
    status: "published",
    seoTitle: "خونریزی غیرطبیعی رحم | دکتر طاهره پوردست",
    seoDescription:
      "علل شایع خونریزی غیرطبیعی رحم و زمان مراجعه به پزشک.",
  },
  {
    slug: "pelvic-pain-causes",
    title: "درد لگن مزمن: علل شایع و رویکرد ارزیابی",
    excerpt:
      "بررسی علل شایع درد لگن مزمن و رویکرد عمومی ارزیابی.",
    category: "patient-education",
    publishedAt: "۱۴۰۳/۱۱/۱۵",
    status: "published",
    seoTitle: "درد لگن مزمن: علل شایع | دکتر طاهره پوردست",
    seoDescription:
      "آشنایی با علل شایع درد لگن مزمن و زمان مراجعه.",
  },
  {
    slug: "first-visit-tips",
    title: "نکات مهم برای اولین مراجعه به متخصص زنان",
    excerpt:
      "راهنمای کوتاه برای آمادگی بهتر در اولین مراجعه به متخصص زنان.",
    category: "patient-education",
    publishedAt: "۱۴۰۳/۱۰/۲۰",
    status: "published",
    seoTitle: "نکات اولین مراجعه به متخصص زنان | دکتر طاهره پوردست",
    seoDescription:
      "نکات مهم برای آمادگی بهتر در اولین مراجعه به متخصص زنان.",
  },
];
