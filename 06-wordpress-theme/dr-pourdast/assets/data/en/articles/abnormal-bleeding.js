/**
 * Article: Abnormal Uterine Bleeding
 * Content must be reviewed by Dr. Tahereh Pordast before publication.
 */
var ARTICLE_PAGE = {
  slug: "abnormal-bleeding",
  route: "/en/articles/abnormal-bleeding",
  seo: {
    title: "Abnormal Uterine Bleeding: Common Causes and When to Seek Care | Dr. Tahereh Pordast",
    description: "Learn about common causes of abnormal uterine bleeding and when urgent medical evaluation is recommended.",
    canonical: "https://drpourdast.ir/en/articles/abnormal-bleeding",
    ogImage: "/assets/images/og-article.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Articles", href: "/en/articles" },
    { label: "Abnormal Uterine Bleeding", href: "/en/articles/abnormal-bleeding" },
  ],
  hero: {
    categoryLabel: "Uterine Conditions",
    date: "Jan 2025",
    readingTime: "5 min read",
    title: "Abnormal Uterine Bleeding: Common Causes and When to Seek Care",
    lead: "Changes in your menstrual pattern or unexpected bleeding can signal various conditions and warrant evaluation.",
    note: "Any bleeding after menopause requires prompt evaluation.",
  },
  body: {
    blocks: [
      { type: "heading", level: 2, id: "causes", text: "Common Causes" },
      { type: "list", ordered: false, items: ["Hormonal disorders", "Uterine fibroids or polyps", "Endometriosis", "Infection", "Bleeding disorders", "Precancerous or cancerous lesions (rare)"] },
      { type: "heading", level: 2, id: "when", text: "When to Seek Care" },
      { type: "paragraph", text: "You should see a doctor if you have very heavy bleeding, frequent bleeding between periods, bleeding after menopause, or bleeding accompanied by severe pain." },
      { type: "callout", title: "Warning", text: "Postmenopausal bleeding is never normal and should be evaluated promptly." },
    ],
  },
  author: { label: "Author", name: "Dr. Tahereh Pordast", title: "Obstetrician and Gynecologist", note: "Requires final review." },
  relatedArticles: {
    eyebrow: "Related Content", title: "Recommended Articles",
    items: [
      { categoryLabel: "Uterine Conditions", title: "Uterine Fibroids", href: "/en/articles/uterine-fibroid-overview" },
      { categoryLabel: "Laparoscopy", title: "Hysteroscopy vs. Laparoscopy", href: "/en/articles/hysteroscopy-vs-laparoscopy" },
    ],
  },
  disclaimer: {
    title: "Important Note About Medical Content",
    paragraphs: ["The information in this section is provided for general educational purposes only and does not replace a physician's examination, diagnosis, or treatment recommendations.", "Treatment decisions should be made by a specialist physician."],
  },
  finalCta: {
    title: "Book an appointment to evaluate abnormal bleeding",
    description: "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: { text: "View available appointments", source: "article-abnormal-bleeding-cta" },
  },
};
