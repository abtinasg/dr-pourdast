/**
 * Medical articles catalog.
 *
 * All medical article content must be reviewed and approved
 * by Dr. Tahereh Poordast before publication.
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
    slug: "period-pain-vs-endometriosis",
    title: "تفاوت درد پریود طبیعی و اندومتریوز: چه زمانی باید بررسی شود؟",
    excerpt:
      "راهنمای آموزشی برای تشخیص تفاوت درد قاعدگی معمول و دردی که نیاز به بررسی دارد؛ از ارزیابی بالینی تا نقش لاپاراسکوپی.",
    category: "endometriosis",
    publishedAt: "۱۴۰۵/۰۴/۲۸",
    status: "published",
    featured: true,
    image: "/assets/images/article-period-pain-comparison.webp",
    imageAlt: "مقایسه درد معمول قاعدگی و دردی که نیاز به بررسی پزشکی دارد",
    seoTitle:
      "تفاوت درد پریود طبیعی و اندومتریوز: چه زمانی باید بررسی شود؟ | دکتر طاهره پوردست",
    seoDescription:
      "راهنمای آموزشی برای تشخیص تفاوت درد قاعدگی معمول و دردی که نیاز به بررسی دارد؛ از ارزیابی بالینی تا نقش لاپاراسکوپی در برخی بیماران.",
  },
  {
    slug: "endometriosis-ultrasound-diagnosis",
    title: "آیا اندومتریوز در سونوگرافی مشخص می‌شود؟",
    excerpt:
      "سونوگرافی می‌تواند بعضی نشانه‌های اندومتریوز، به‌ویژه کیست‌های اندومتریوزی تخمدان و برخی درگیری‌های عمقی لگن را نشان دهد؛ اما طبیعی‌بودن سونوگرافی، اندومتریوز را به‌طور کامل رد نمی‌کند. در این مقاله نقش و محدودیت‌های سونوگرافی، MRI و لاپاراسکوپی را بررسی می‌کنیم.",
    category: "endometriosis",
    publishedAt: "۱۴۰۵/۰۴/۲۸",
    status: "published",
    featured: false,
    image: "/assets/images/article-endometriosis-ultrasound-consultation.webp",
    imageAlt:
      "متخصص زنان در حال توضیح تصویر سونوگرافی لگن به بیمار در مطب",
    seoTitle: "آیا اندومتریوز در سونوگرافی مشخص می‌شود؟ | راهنمای تشخیص",
    seoDescription:
      "سونوگرافی چه انواعی از اندومتریوز را نشان می‌دهد؟ با کاربرد و محدودیت سونوگرافی، تفاوت آن با MRI و نقش لاپاراسکوپی در تشخیص آشنا شوید.",
    author: "تیم محتوای پزشکی وب‌سایت دکتر طاهره پوردست",
  },
  {
    slug: "ovarian-endometrioma-chocolate-cyst",
    title: "کیست شکلاتی تخمدان چیست و چه زمانی نیاز به درمان دارد؟",
    excerpt:
      "کیست شکلاتی یا اندومتریوما، نوعی کیست تخمدانی مرتبط با اندومتریوز است. همه این کیست‌ها به جراحی نیاز ندارند و انتخاب میان پیگیری، درمان دارویی یا جراحی به علائم، ظاهر و اندازه کیست، سن، برنامه بارداری و ذخیره تخمدان بستگی دارد.",
    category: "endometriosis",
    publishedAt: "۱۴۰۵/۰۴/۲۸",
    status: "published",
    featured: false,
    image: "/assets/images/article-ovarian-endometrioma-consultation.webp",
    imageAlt:
      "متخصص زنان در حال بررسی تصاویر سونوگرافی کیست تخمدان و اندومتریوما",
    seoTitle: "کیست شکلاتی تخمدان چیست؟ علائم، درمان و زمان جراحی",
    seoDescription:
      "کیست شکلاتی یا اندومتریوما چیست؟ با علائم، روش تشخیص با سونوگرافی، تأثیر بر باروری، درمان دارویی و زمان بررسی جراحی آشنا شوید.",
    author: "تیم محتوای پزشکی وب‌سایت دکتر طاهره پوردست",
  },
];
