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
];
