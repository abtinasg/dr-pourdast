/**
 * Medical articles catalog.
 *
 * All medical article content must be reviewed and approved
 * by Dr. Tahereh Poordast before publication.
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
var ARTICLES_CATALOG = [
  {
    slug: "period-pain-vs-endometriosis",
    title: "Normal Period Pain vs. Endometriosis: When Should You Be Evaluated?",
    excerpt:
      "An educational guide to recognizing the difference between typical menstrual pain and pain that warrants evaluation, from clinical assessment to the role of laparoscopy.",
    category: "endometriosis",
    publishedAt: "July 19, 2026",
    status: "published",
    featured: true,
    image: "/assets/images/article-period-pain-comparison.webp",
    imageAlt: "Comparison of typical menstrual pain and pain that warrants medical evaluation",
    seoTitle:
      "Normal Period Pain vs. Endometriosis: When Should You Be Evaluated? | Dr. Tahereh Poordast",
    seoDescription:
      "An educational guide to recognizing the difference between typical menstrual pain and pain that warrants evaluation, from clinical assessment to the role of laparoscopy in selected patients.",
  },
  {
    slug: "endometriosis-ultrasound-diagnosis",
    title: "Can Endometriosis Be Seen on Ultrasound?",
    excerpt:
      "Ultrasound can show some signs of endometriosis, especially ovarian endometriotic cysts and certain deep pelvic involvements. However, a normal ultrasound does not completely rule out endometriosis. This article reviews the role and limitations of ultrasound, MRI, and laparoscopy.",
    category: "endometriosis",
    publishedAt: "July 19, 2026",
    status: "published",
    featured: false,
    image: "/assets/images/article-endometriosis-ultrasound-consultation.webp",
    imageAlt:
      "Gynecologist explaining pelvic ultrasound images to a patient in the clinic",
    seoTitle: "Can Endometriosis Be Seen on Ultrasound? | Diagnostic Guide",
    seoDescription:
      "What types of endometriosis can ultrasound show? Learn about the uses and limitations of ultrasound, how it differs from MRI, and the role of laparoscopy in diagnosis.",
    author: "Dr. Tahereh Poordast Medical Content Team",
  },
  {
    slug: "ovarian-endometrioma-chocolate-cyst",
    title: "What Is an Ovarian Chocolate Cyst, and When Does It Need Treatment?",
    excerpt:
      "A chocolate cyst, or endometrioma, is a type of ovarian cyst associated with endometriosis. Not all of these cysts require surgery, and the choice among follow-up, medical treatment, or surgery depends on symptoms, cyst appearance and size, age, pregnancy plans, and ovarian reserve.",
    category: "endometriosis",
    publishedAt: "July 19, 2026",
    status: "published",
    featured: false,
    image: "/assets/images/article-ovarian-endometrioma-consultation.webp",
    imageAlt:
      "Gynecologist reviewing ovarian cyst and endometrioma ultrasound images",
    seoTitle: "What Is an Ovarian Chocolate Cyst? Symptoms, Treatment, and When Surgery Is Considered",
    seoDescription:
      "What is a chocolate cyst or endometrioma? Learn about symptoms, ultrasound diagnosis, effects on fertility, medical treatment, and when surgery may be considered.",
    author: "Dr. Tahereh Poordast Medical Content Team",
  },
];
