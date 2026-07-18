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
var ARTICLES_CATALOG = [
  {
    slug: "endometriosis-symptoms",
    title: "Endometriosis Symptoms: When Should You See a Doctor?",
    excerpt:
      "Learn about common endometriosis symptoms, when to seek medical care, and the importance of early diagnosis.",
    category: "endometriosis",
    publishedAt: "Apr 2025",
    status: "published",
    featured: true,
    seoTitle: "Endometriosis Symptoms: When Should You See a Doctor? | Dr. Tahereh Pordast",
    seoDescription:
      "Learn about common endometriosis symptoms, when to seek medical care, and the importance of early diagnosis.",
  },
  {
    slug: "endometriosis-diagnosis",
    title: "Diagnosing Endometriosis: From Examination to Laparoscopy",
    excerpt:
      "An overview of general diagnostic approaches for endometriosis, from clinical examination to imaging and laparoscopy.",
    category: "endometriosis",
    publishedAt: "Apr 2025",
    status: "published",
    seoTitle: "Diagnosing Endometriosis | Dr. Tahereh Pordast",
    seoDescription:
      "Learn about the general steps in diagnosing endometriosis and the role of ultrasound, MRI, and laparoscopy.",
  },
  {
    slug: "laparoscopy-recovery",
    title: "Post-Laparoscopy Care: What You Should Know",
    excerpt:
      "A general guide to recovery after gynecologic laparoscopy, including daily activity and incision care.",
    category: "laparoscopy",
    publishedAt: "Apr 2025",
    status: "published",
    seoTitle: "Post-Laparoscopy Care | Dr. Tahereh Pordast",
    seoDescription:
      "A general guide to recovery after gynecologic laparoscopy.",
  },
  {
    slug: "hysteroscopy-vs-laparoscopy",
    title: "Hysteroscopy vs. Laparoscopy: Which Is Used for What?",
    excerpt:
      "A general comparison of hysteroscopy and laparoscopy and the clinical uses of each procedure.",
    category: "laparoscopy",
    publishedAt: "Mar 2025",
    status: "published",
    seoTitle: "Hysteroscopy vs. Laparoscopy | Dr. Tahereh Pordast",
    seoDescription:
      "Learn the differences between hysteroscopy and laparoscopy and when each procedure is used.",
  },
  {
    slug: "ovarian-cyst-types",
    title: "Types of Ovarian Cysts and When Follow-Up Is Needed",
    excerpt:
      "An overview of common ovarian cyst types and when further evaluation may be recommended.",
    category: "ovarian-health",
    publishedAt: "Mar 2025",
    status: "published",
    seoTitle: "Types of Ovarian Cysts | Dr. Tahereh Pordast",
    seoDescription:
      "Learn about types of ovarian cysts and when follow-up or treatment may be needed.",
  },
  {
    slug: "uterine-fibroid-overview",
    title: "Uterine Fibroids: Symptoms, Types, and Treatment Options",
    excerpt:
      "An overview of uterine fibroid types, common symptoms, and treatment approaches.",
    category: "uterine-health",
    publishedAt: "Mar 2025",
    status: "published",
    seoTitle: "Uterine Fibroids: Symptoms & Treatment | Dr. Tahereh Pordast",
    seoDescription:
      "Learn about types of uterine fibroids, common symptoms, and treatment options.",
  },
  {
    slug: "abnormal-bleeding",
    title: "Abnormal Uterine Bleeding: Common Causes and When to Seek Care",
    excerpt:
      "Learn about common causes of abnormal uterine bleeding and when evaluation is recommended.",
    category: "uterine-health",
    publishedAt: "Feb 2025",
    status: "published",
    seoTitle: "Abnormal Uterine Bleeding | Dr. Tahereh Pordast",
    seoDescription:
      "Common causes of abnormal uterine bleeding and when to see a physician.",
  },
  {
    slug: "pelvic-pain-causes",
    title: "Chronic Pelvic Pain: Common Causes and Evaluation Approach",
    excerpt:
      "An overview of common causes of chronic pelvic pain and general evaluation steps.",
    category: "patient-education",
    publishedAt: "Feb 2025",
    status: "published",
    seoTitle: "Chronic Pelvic Pain: Common Causes | Dr. Tahereh Pordast",
    seoDescription:
      "Learn about common causes of chronic pelvic pain and when to seek care.",
  },
  {
    slug: "first-visit-tips",
    title: "Important Tips for Your First Visit to a Gynecologist",
    excerpt:
      "A brief guide to help you prepare for your first visit to a gynecologist.",
    category: "patient-education",
    publishedAt: "Jan 2025",
    status: "published",
    seoTitle: "Tips for Your First Gynecology Visit | Dr. Tahereh Pordast",
    seoDescription:
      "Important tips to help you prepare for your first visit to a gynecologist.",
  },
];
