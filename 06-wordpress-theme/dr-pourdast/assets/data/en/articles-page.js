/**
 * Articles hub page content.
 *
 * All medical article content must be reviewed and approved
 * by Dr. Tahereh Pordast before publication.
 */
var ARTICLES_PAGE = {
  slug: "articles",
  route: "/en/articles",
  seo: {
    title: "Gynecologic Articles & Patient Education | Dr. Tahereh Pordast",
    description:
      "Educational articles about endometriosis, laparoscopy, uterine and ovarian conditions, and women's health on the website of Dr. Tahereh Pordast.",
    canonical: "https://drpourdast.ir/en/articles",
    ogImage: "/assets/images/og-articles.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Articles", href: "/en/articles" },
  ],
  hero: {
    eyebrow: "Patient education",
    title: "Specialty articles on women's health and gynecologic conditions",
    description:
      "General educational content about endometriosis, minimally invasive surgery, uterine and ovarian conditions, and related topics in women's health.",
    note:
      "The content in this section is for general educational purposes and does not replace a physician's evaluation.",
    searchPlaceholder: "Search articles",
  },
  categorySection: {
    title: "Article topics",
  },
  categories: [
    { slug: "all", label: "All articles" },
    { slug: "endometriosis", label: "Endometriosis" },
    { slug: "laparoscopy", label: "Laparoscopy & minimally invasive surgery" },
    { slug: "uterine-health", label: "Uterine conditions & health" },
    { slug: "ovarian-health", label: "Ovarian conditions & health" },
    { slug: "patient-education", label: "Patient education & awareness" },
  ],
  listSection: {
    id: "articles-list",
    title: "Latest articles",
  },
  emptyStates: {
    noArticles: {
      title: "Articles coming soon",
      description:
        "Content in this section will be available after review and approval by the physician.",
      actions: [
        { label: "View specialty services", href: "/en/services" },
        { label: "View patient guides", href: "/en/patient-guides" },
      ],
    },
    noSearch: {
      title: "No articles found for this search",
      description: "Try a different search term or browse all categories.",
      actionLabel: "Clear search",
    },
    noCategory: {
      title: "No articles published in this category yet",
      actionLabel: "View all articles",
    },
  },
  pagination: {
    perPage: 9,
  },
  disclaimer: {
    paragraphs: [
      "The content in this section is provided for general educational purposes only and does not replace examination, diagnosis, prescriptions, or medical treatment recommendations. Each patient's condition must be evaluated individually.",
    ],
  },
  relatedGuides: {
    eyebrow: "Patient guides",
    title: "Prepare for your visit",
    items: [
      {
        label: "Preparing for your first visit",
        href: "/en/patient-guides/first-visit",
      },
      {
        label: "Endometriosis patient guide",
        href: "/en/patient-guides/endometriosis",
      },
      {
        label: "Preparing for laparoscopy",
        href: "/en/patient-guides/before-laparoscopy",
      },
    ],
  },
  finalCta: {
    title: "Book an appointment to discuss your condition",
    description:
      "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: {
      text: "View available appointments",
      source: "articles-final-cta",
    },
  },
};
