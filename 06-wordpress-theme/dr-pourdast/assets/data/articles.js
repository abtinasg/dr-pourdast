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
var ARTICLES_CATALOG = [];
