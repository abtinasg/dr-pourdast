/**
 * Medical articles catalog.
 *
 * All medical article content must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */

/** @typedef {"endometriosis"|"laparoscopy"|"uterine-health"|"ovarian-health"|"patient-education"} ArticleCategory */

/** @type {Record<ArticleCategory, string>} */
var ARTICLE_CATEGORY_LABELS = {
  endometriosis: "Endometriosis",
  laparoscopy: "Laparoscopy & Minimally Invasive Surgery",
  "uterine-health": "Uterine Health & Conditions",
  "ovarian-health": "Ovarian Health & Conditions",
  "patient-education": "Patient Education",
};

/**
 * Article catalog. Only items with status "published" appear on the site.
 *
 * @type {Array<Object>}
 */
var ARTICLES_CATALOG = [];
