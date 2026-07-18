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
var ARTICLES_CATALOG = [
  {
    slug: "endometriosis-symptoms",
    title: "أعراض بطانة الرحم المهاجرة: متى يجب مراجعة الطبيب؟",
    excerpt:
      "التعرف على الأعراض الشائعة لبطانة الرحم المهاجرة، وموعد مراجعة الطبيب، وأهمية التشخيص المبكر.",
    category: "endometriosis",
    publishedAt: "۱۴۰۴/۰۱/۱۵",
    status: "published",
    featured: true,
    seoTitle: "أعراض بطانة الرحم المهاجرة: متى يجب مراجعة الطبيب؟ | د. طاهرة پوردست",
    seoDescription:
      "التعرف على الأعراض الشائعة لبطانة الرحم المهاجرة، وموعد مراجعة الطبيب، وأهمية التشخيص المبكر لهذا المرض.",
  },
  {
    slug: "endometriosis-diagnosis",
    title: "طرق تشخيص بطانة الرحم المهاجرة: من الفحص السريري إلى منظار البطن",
    excerpt:
      "مراجعة طرق التشخيص العامة لبطانة الرحم المهاجرة من الفحص السريري إلى التصوير ومنظار البطن.",
    category: "endometriosis",
    publishedAt: "۱۴۰۴/۰۱/۲۰",
    status: "published",
    seoTitle: "طرق تشخيص بطانة الرحم المهاجرة | د. طاهرة پوردست",
    seoDescription:
      "التعرف على مراحل التشخيص العامة لبطانة الرحم المهاجرة ودور الموجات فوق الصوتية، وMRI، ومنظار البطن.",
  },
  {
    slug: "laparoscopy-recovery",
    title: "الرعاية بعد منظار البطن: ما يجب معرفته",
    excerpt:
      "دليل عام للرعاية بعد جراحة منظار البطن لأمراض النساء، بما في ذلك النشاط اليومي والعناية بموقع الشق.",
    category: "laparoscopy",
    publishedAt: "۱۴۰۴/۰۱/۱۰",
    status: "published",
    seoTitle: "الرعاية بعد منظار البطن | د. طاهرة پوردست",
    seoDescription:
      "دليل عام للرعاية بعد جراحة منظار البطن لأمراض النساء.",
  },
  {
    slug: "hysteroscopy-vs-laparoscopy",
    title: "الفرق بين منظار الرحم ومنظار البطن: أيهما لأي الحالات؟",
    excerpt:
      "مقارنة عامة بين منظار الرحم ومنظار البطن واستخدام كل إجراء في أمراض النساء.",
    category: "laparoscopy",
    publishedAt: "۱۴۰۳/۱۲/۱۵",
    status: "published",
    seoTitle: "الفرق بين منظار الرحم ومنظار البطن | د. طاهرة پوردست",
    seoDescription:
      "التعرف على الفرق بين منظار الرحم ومنظار البطن واستخدام كل إجراء.",
  },
  {
    slug: "ovarian-cyst-types",
    title: "أنواع كيس المبيض وموعد الحاجة للمتابعة",
    excerpt:
      "التعرف على الأنواع الشائعة لكيس المبيض وموعد المراجعة لمزيد من الفحص.",
    category: "ovarian-health",
    publishedAt: "۱۴۰۳/۱۲/۱۰",
    status: "published",
    seoTitle: "أنواع كيس المبيض | د. طاهرة پوردست",
    seoDescription:
      "التعرف على أنواع كيس المبيض وموعد الحاجة للمتابعة أو العلاج.",
  },
  {
    slug: "uterine-fibroid-overview",
    title: "الورم الليفي الرحمي: الأعراض، الأنواع، وخيارات العلاج",
    excerpt:
      "التعرف على أنواع الورم الليفي الرحمي، والأعراض الشائعة، والمناهج العلاجية.",
    category: "uterine-health",
    publishedAt: "۱۴۰۳/۱۲/۲۰",
    status: "published",
    seoTitle: "الورم الليفي الرحمي: الأعراض والعلاج | د. طاهرة پوردست",
    seoDescription:
      "التعرف على أنواع الورم الليفي الرحمي، والأعراض الشائعة، وخيارات العلاج.",
  },
  {
    slug: "abnormal-bleeding",
    title: "النزيف الرحمي غير الطبيعي: الأسباب الشائعة وموعد المراجعة",
    excerpt:
      "التعرف على الأسباب الشائعة للنزيف الرحمي غير الطبيعي وموعد المراجعة للتقييم.",
    category: "uterine-health",
    publishedAt: "۱۴۰۳/۱۱/۲۵",
    status: "published",
    seoTitle: "النزيف الرحمي غير الطبيعي | د. طاهرة پوردست",
    seoDescription:
      "الأسباب الشائعة للنزيف الرحمي غير الطبيعي وموعد مراجعة الطبيب.",
  },
  {
    slug: "pelvic-pain-causes",
    title: "ألم الحوض المزمن: الأسباب الشائعة ومنهج التقييم",
    excerpt:
      "مراجعة الأسباب الشائعة لألم الحوض المزمن والمنهج العام للتقييم.",
    category: "patient-education",
    publishedAt: "۱۴۰۳/۱۱/۱۵",
    status: "published",
    seoTitle: "ألم الحوض المزمن: الأسباب الشائعة | د. طاهرة پوردست",
    seoDescription:
      "التعرف على الأسباب الشائعة لألم الحوض المزمن وموعد المراجعة.",
  },
  {
    slug: "first-visit-tips",
    title: "نصائح مهمة للزيارة الأولى لأخصائية أمراض النساء",
    excerpt:
      "دليل مختصر للاستعداد الأفضل في الزيارة الأولى لأخصائية أمراض النساء.",
    category: "patient-education",
    publishedAt: "۱۴۰۳/۱۰/۲۰",
    status: "published",
    seoTitle: "نصائح الزيارة الأولى لأخصائية أمراض النساء | د. طاهرة پوردست",
    seoDescription:
      "نصائح مهمة للاستعداد الأفضل في الزيارة الأولى لأخصائية أمراض النساء.",
  },
];
