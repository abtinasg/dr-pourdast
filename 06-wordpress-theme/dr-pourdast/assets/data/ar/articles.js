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
    slug: "period-pain-vs-endometriosis",
    title: "الفرق بين ألم الدورة الطبيعي وبطانة الرحم المهاجرة: متى ينبغي التقييم؟",
    excerpt:
      "دليل تثقيفي للتمييز بين ألم الحيض المعتاد والألم الذي يستدعي التقييم؛ من الفحص السريري إلى دور منظار البطن.",
    category: "endometriosis",
    publishedAt: "۱۹ تیر ۱۴۰۵",
    status: "published",
    featured: true,
    image: "/assets/images/article-period-pain-comparison.webp",
    imageAlt: "مقارنة بين ألم الحيض المعتاد والألم الذي يستدعي التقييم الطبي",
    seoTitle:
      "الفرق بين ألم الدورة الطبيعي وبطانة الرحم المهاجرة: متى ينبغي التقييم؟ | د. طاهرة پوردست",
    seoDescription:
      "دليل تثقيفي للتمييز بين ألم الحيض المعتاد والألم الذي يستدعي التقييم؛ من الفحص السريري إلى دور منظار البطن لدى بعض المريضات.",
  },
  {
    slug: "endometriosis-ultrasound-diagnosis",
    title: "هل تظهر بطانة الرحم المهاجرة في السونوغرافيا؟",
    excerpt:
      "قد تُظهر السونوغرافيا بعض مؤشرات بطانة الرحم المهاجرة، ولا سيما أكياس الاندومتريوما في المبيض وبعض الإصابات العميقة في الحوض؛ لكن السونوغرافيا الطبيعية لا تستبعد المرض بالكامل. في هذا المقال نراجع دور السونوغرافيا وحدودها، وفرقها عن التصوير بالرنين المغناطيسي، ودور منظار البطن.",
    category: "endometriosis",
    publishedAt: "۱۹ تیر ۱۴۰۵",
    status: "published",
    featured: false,
    image: "/assets/images/article-endometriosis-ultrasound-consultation.webp",
    imageAlt:
      "أخصائية نسائية تشرح صورة السونوغرافيا الحوضية للمريضة في العيادة",
    seoTitle: "هل تظهر بطانة الرحم المهاجرة في السونوغرافيا؟ | دليل التشخيص",
    seoDescription:
      "ما أنواع بطانة الرحم المهاجرة التي قد تُظهرها السونوغرافيا؟ تعرّفي على فائدة السونوغرافيا وحدودها، وفرقها عن التصوير بالرنين المغناطيسي، ودور منظار البطن في التشخيص.",
    author: "فريق المحتوى الطبي لموقع د. طاهرة پوردست",
  },
  {
    slug: "ovarian-endometrioma-chocolate-cyst",
    title: "ما كيس الشوكولاتة في المبيض ومتى يحتاج إلى علاج؟",
    excerpt:
      "الاندومتريوما أو كيس الشوكولاتة نوع من أكياس المبيض المرتبطة ببطانة الرحم المهاجرة. لا تحتاج كل هذه الأكياس إلى جراحة، ويعتمد الاختيار بين المتابعة والعلاج الدوائي أو الجراحة على الأعراض، ومظهر الكيس وحجمه، والعمر، وخطة الحمل، واحتياطي المبيض.",
    category: "endometriosis",
    publishedAt: "۱۹ تیر ۱۴۰۵",
    status: "published",
    featured: false,
    image: "/assets/images/article-ovarian-endometrioma-consultation.webp",
    imageAlt:
      "أخصائية نسائية تراجع صور السونوغرافيا لكيس المبيض والاندومتريوما",
    seoTitle: "ما كيس الشوكولاتة في المبيض؟ الأعراض والعلاج ووقت الجراحة",
    seoDescription:
      "ما الاندومتريوما أو كيس الشوكولاتة؟ تعرّفي على الأعراض، وطريقة التشخيص بالسونوغرافيا، والتأثير على الخصوبة، والعلاج الدوائي، ووقت مراجعة الجراحة.",
    author: "فريق المحتوى الطبي لموقع د. طاهرة پوردست",
  },
];
