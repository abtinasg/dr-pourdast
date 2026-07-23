/**
 * Articles hub page content.
 *
 * All medical article content must be reviewed and approved
 * by Dr. Tahereh Poordast before publication.
 */
var ARTICLES_PAGE = {
  slug: "articles",
  route: "/en/articles",
  seo: {
    title: "Gynecologic Articles & Patient Education | Dr. Tahereh Poordast",
    description:
      "Educational articles about endometriosis, laparoscopy, uterine and ovarian conditions, and women's health on the website of Dr. Tahereh Poordast.",
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
  finalCta: {
    title: "Book an appointment to discuss your condition",
    description:
      "For a visit with Dr. Tahereh Poordast, book on Axon. Doctoreto appointments are usually earlier and handled by her colleagues.",
    cta: {
      text: "View available appointments",
      source: "articles-final-cta",
    },
  },
};
