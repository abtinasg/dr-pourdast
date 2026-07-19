/**
 * Medical articles catalog.
 *
 * All medical article content must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */

/** @typedef {"endometriosis"|"laparoscopy"|"uterine-health"|"ovarian-health"|"patient-education"} ArticleCategory */

/** @type {Record<ArticleCategory, string>} */
var ARTICLE_CATEGORY_LABELS = {
  endometriosis: "بطانة الرحم المهاجرة",
  laparoscopy: "منظار البطن والجراحة طفيفة التوغل",
  "uterine-health": "أمراض وصحة الرحم",
  "ovarian-health": "أمراض وصحة المبيض",
  "patient-education": "تثقيف وتوعية المريضات",
};

/**
 * Article catalog. Only items with status "published" appear on the site.
 *
 * @type {Array<Object>}
 */
var ARTICLES_CATALOG = [];
