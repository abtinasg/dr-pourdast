/**
 * Articles hub page content.
 *
 * All medical article content must be reviewed and approved
 * by Dr. Tahereh Poordast before publication.
 */
var ARTICLES_PAGE = {
  slug: "articles",
  route: "/ar/articles",
  seo: {
    title: "مقالات ومواد تثقيفية في أمراض النساء | د. طاهرة پوردست",
    description:
      "مواد تثقيفية عن بطانة الرحم المهاجرة، ومنظار البطن، وأمراض الرحم والمبيض، وصحة المرأة على موقع د. طاهرة پوردست.",
    canonical: "https://drpourdast.ir/ar/articles",
    ogImage: "/assets/images/og-articles.jpg",
    locale: "ar_SA",
  },
  breadcrumb: [
    { label: "الرئيسية", href: "/ar" },
    { label: "المقالات", href: "/ar/articles" },
  ],
  hero: {
    eyebrow: "مواد تثقيفية",
    title: "مقالات متخصصة عن صحة المرأة وأمراض النساء",
    description:
      "محتوى عام وتثقيفي عن بطانة الرحم المهاجرة، والجراحة طفيفة التوغل، وأمراض الرحم والمبيض، وموضوعات صحة المرأة ذات الصلة.",
    note:
      "محتوى هذا القسم للتوعية العامة ولا يغني عن التقييم الطبي.",
    searchPlaceholder: "البحث في المقالات",
  },
  categorySection: {
    title: "موضوعات المقالات",
  },
  categories: [
    { slug: "all", label: "جميع المواد" },
    { slug: "endometriosis", label: "بطانة الرحم المهاجرة" },
    { slug: "laparoscopy", label: "منظار البطن والجراحة طفيفة التوغل" },
    { slug: "uterine-health", label: "أمراض وصحة الرحم" },
    { slug: "ovarian-health", label: "أمراض وصحة المبيض" },
    { slug: "patient-education", label: "تثقيف وتوعية المريضات" },
  ],
  listSection: {
    id: "articles-list",
    title: "أحدث المقالات",
  },
  emptyStates: {
    noArticles: {
      title: "ستُنشر المقالات قريباً",
      description:
        "ستتوفر مواد هذا القسم بعد مراجعتها واعتمادها من الطبيبة.",
      actions: [
        { label: "عرض الخدمات المتخصصة", href: "/ar/services" },
      ],
    },
    noSearch: {
      title: "لم يُعثر على محتوى بهذا المصطلح",
      description: "جرّبي مصطلحاً آخر أو اعرضي جميع التصنيفات.",
      actionLabel: "مسح البحث",
    },
    noCategory: {
      title: "لم يُنشر محتوى في هذا التصنيف بعد",
      actionLabel: "عرض جميع المواد",
    },
  },
  pagination: {
    perPage: 9,
  },
  disclaimer: {
    paragraphs: [
      "المحتوى في هذا القسم مُعدّ للتوعية العامة فقط ولا يغني عن الفحص أو التشخيص أو الوصفة أو التوصيات العلاجية من الطبيب. يجب تقييم حالة كل مريضة على حدة.",
    ],
  },
  finalCta: {
    title: "لتقييم حالتك، احجزي موعداً",
    description:
      "لحجز زيارة الدكتورة، يُرجى استخدام Axon. مواعيد Doctoreto عادةً أسرع وبواسطة زميلاتها.",
    cta: {
      text: "عرض المواعيد المتاحة",
      source: "articles-final-cta",
    },
  },
};
