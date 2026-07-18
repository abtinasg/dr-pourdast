/**
 * Article: Types of Ovarian Cysts
 * Content must be reviewed by Dr. Tahereh Pordast before publication.
 */
var ARTICLE_PAGE = {
  slug: "ovarian-cyst-types",
  route: "/en/articles/ovarian-cyst-types",
  seo: {
    title: "Types of Ovarian Cysts and When Follow-Up Is Needed | Dr. Tahereh Pordast",
    description: "Learn about common types of ovarian cysts and signs that warrant medical evaluation.",
    canonical: "https://drpourdast.ir/en/articles/ovarian-cyst-types",
    ogImage: "/assets/images/og-article.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Articles", href: "/en/articles" },
    { label: "Types of Ovarian Cysts", href: "/en/articles/ovarian-cyst-types" },
  ],
  hero: {
    categoryLabel: "Ovarian Conditions",
    date: "Mar 2025",
    readingTime: "6 min read",
    title: "Types of Ovarian Cysts and When Follow-Up Is Needed",
    lead: "Ovarian cysts are the most common ovarian lesions. Many cysts are benign and temporary, resolving without treatment.",
    note: "Regular follow-up is necessary for certain types of cysts.",
  },
  body: {
    blocks: [
      { type: "heading", level: 2, id: "types", text: "Common Types of Cysts" },
      { type: "list", ordered: false, items: ["Follicular cyst (functional)", "Corpus luteum cyst", "Endometrioma", "Dermoid cyst", "Simple cysts"] },
      { type: "paragraph", text: "Functional cysts usually resolve on their own within a few months. Other types may require monitoring or treatment." },
      { type: "heading", level: 2, id: "warning", text: "Warning Signs" },
      { type: "list", ordered: false, items: ["Sudden, severe pelvic pain", "Fever with pain", "Nausea and vomiting", "Abnormal bleeding"] },
      { type: "callout", title: "Important", text: "If you experience sudden severe pain, seek emergency care promptly." },
    ],
  },
  author: { label: "Author", name: "Dr. Tahereh Pordast", title: "Obstetrician and Gynecologist", note: "Requires final review." },
  relatedArticles: {
    eyebrow: "Related Content", title: "Recommended Articles",
    items: [
      { categoryLabel: "Ovarian Conditions", title: "Chronic Pelvic Pain: Common Causes", href: "/en/articles/pelvic-pain-causes" },
      { categoryLabel: "Laparoscopy", title: "Post-Laparoscopy Care", href: "/en/articles/laparoscopy-recovery" },
    ],
  },
  disclaimer: {
    title: "Important Note About Medical Content",
    paragraphs: ["The information in this section is provided for general educational purposes only and does not replace a physician's examination, diagnosis, or treatment recommendations.", "Treatment decisions should be made by a specialist physician."],
  },
  finalCta: {
    title: "Book an appointment to discuss your condition",
    description: "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: { text: "View available appointments", source: "article-ovarian-cyst-cta" },
  },
};
