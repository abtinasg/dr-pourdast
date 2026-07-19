/**
 * Articles hub page content.
 *
 * All medical article content must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */
var ARTICLES_PAGE = {
  slug: "articles",
  route: "/articles",
  seo: {
    title: "مقالات و مطالب آموزشی زنان | دکتر طاهره پوردست",
    description:
      "مطالب آموزشی درباره اندومتریوز، لاپاراسکوپی، بیماری‌های رحم و تخمدان و سلامت زنان در وب‌سایت دکتر طاهره پوردست.",
    canonical: "https://drpourdast.ir/articles",
    ogImage: "/assets/images/og-articles.jpg",
    locale: "fa_IR",
  },
  breadcrumb: [
    { label: "خانه", href: "/" },
    { label: "مقالات", href: "/articles" },
  ],
  hero: {
    eyebrow: "مطالب آموزشی",
    title: "مقالات تخصصی درباره سلامت و بیماری‌های زنان",
    description:
      "مطالب عمومی و آموزشی درباره اندومتریوز، جراحی‌های کم‌تهاجمی، بیماری‌های رحم و تخمدان و موضوعات مرتبط با سلامت زنان.",
    note:
      "مطالب این بخش برای آگاهی عمومی هستند و جایگزین ارزیابی پزشک نیستند.",
    searchPlaceholder: "جست‌وجو در مقالات",
  },
  categorySection: {
    title: "موضوعات مقالات",
  },
  categories: [
    { slug: "all", label: "همه مطالب" },
    { slug: "endometriosis", label: "اندومتریوز" },
    { slug: "laparoscopy", label: "لاپاراسکوپی و جراحی کم‌تهاجمی" },
    { slug: "uterine-health", label: "بیماری‌ها و سلامت رحم" },
    { slug: "ovarian-health", label: "بیماری‌ها و سلامت تخمدان" },
    { slug: "patient-education", label: "آموزش و آگاهی بیماران" },
  ],
  listSection: {
    id: "articles-list",
    title: "آخرین مطالب",
  },
  emptyStates: {
    noArticles: {
      title: "مقالات به‌زودی منتشر می‌شوند",
      description:
        "مطالب این بخش پس از بررسی و تأیید پزشک در دسترس قرار خواهند گرفت.",
      actions: [
        { label: "مشاهده خدمات تخصصی", href: "/services" },
        { label: "مشاهده راهنمای بیماران", href: "/patient-guides" },
      ],
    },
    noSearch: {
      title: "مطلبی با این عبارت پیدا نشد",
      description: "عبارت دیگری جست‌وجو کنید یا همه دسته‌بندی‌ها را مشاهده کنید.",
      actionLabel: "پاک‌کردن جست‌وجو",
    },
    noCategory: {
      title: "در این دسته‌بندی هنوز مطلبی منتشر نشده است",
      actionLabel: "مشاهده همه مطالب",
    },
  },
  pagination: {
    perPage: 9,
  },
  disclaimer: {
    paragraphs: [
      "مطالب این بخش صرفاً برای آگاهی عمومی تهیه شده‌اند و جایگزین معاینه، تشخیص، نسخه یا توصیه درمانی پزشک نیستند. شرایط هر بیمار باید به‌صورت جداگانه بررسی شود.",
    ],
  },
  relatedGuides: {
    eyebrow: "راهنمای بیماران",
    title: "برای آمادگی پیش از مراجعه",
    items: [
      {
        label: "آمادگی برای جلسه اول",
        href: "/patient-guides/first-visit",
      },
      {
        label: "راهنمای بیماران اندومتریوز",
        href: "/patient-guides/endometriosis",
      },
      {
        label: "آمادگی پیش از لاپاراسکوپی",
        href: "/patient-guides/before-laparoscopy",
      },
    ],
  },
  finalCta: {
    title: "برای بررسی شرایط خود، نوبت مراجعه دریافت کنید",
    description:
      "برای مشاهده زمان‌های آزاد و ثبت نوبت، وارد صفحه رسمی دکتر طاهره پوردست در سامانه دکترتو شوید.",
    cta: {
      text: "رزرو نوبت در دکترتو",
      source: "articles-final-cta",
    },
  },
};
