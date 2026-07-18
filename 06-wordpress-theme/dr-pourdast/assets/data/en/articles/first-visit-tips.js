/**
 * Article: First Visit Tips
 * Content must be reviewed by Dr. Tahereh Pordast before publication.
 */
var ARTICLE_PAGE = {
  slug: "first-visit-tips",
  route: "/en/articles/first-visit-tips",
  seo: {
    title: "Tips for Your First Visit to a Gynecologist | Dr. Tahereh Pordast",
    description: "A guide to preparing for your first appointment: documents, records, and information to bring with you.",
    canonical: "https://drpourdast.ir/en/articles/first-visit-tips",
    ogImage: "/assets/images/og-article.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Articles", href: "/en/articles" },
    { label: "First Visit Tips", href: "/en/articles/first-visit-tips" },
  ],
  hero: {
    categoryLabel: "Patient Guides",
    date: "Feb 2025",
    readingTime: "5 min read",
    title: "Tips for Your First Visit to a Gynecologist",
    lead: "Good preparation before your first appointment can lead to a more thorough evaluation and save time.",
    note: "Which documents you need depends on the reason for your visit.",
  },
  body: {
    blocks: [
      { type: "heading", level: 2, id: "documents", text: "Recommended Documents" },
      { type: "list", ordered: false, items: ["Previous ultrasounds and imaging studies", "Recent laboratory test results", "A list of current medications", "A summary of surgical or treatment history"] },
      { type: "heading", level: 2, id: "info", text: "Information to Prepare in Advance" },
      { type: "list", ordered: false, items: ["When symptoms started and their pattern", "Menstrual history", "Pregnancy and delivery history", "Family history of gynecologic conditions"] },
      { type: "paragraph", text: "For a more complete checklist, see the dedicated first-visit preparation guide." },
      { type: "callout", title: "Additional Guide", text: "A more comprehensive guide is available in the patient guides section: /en/patient-guides/first-visit" },
    ],
  },
  author: { label: "Author", name: "Dr. Tahereh Pordast", title: "Obstetrician and Gynecologist", note: "Requires final review." },
  relatedArticles: {
    eyebrow: "Related Content", title: "Recommended Articles",
    items: [
      { categoryLabel: "Endometriosis", title: "Endometriosis Symptoms", href: "/en/articles/endometriosis-symptoms" },
      { categoryLabel: "Laparoscopy", title: "Post-Laparoscopy Care", href: "/en/articles/laparoscopy-recovery" },
    ],
  },
  disclaimer: {
    title: "Important Note About Medical Content",
    paragraphs: ["The information in this section is provided for general educational purposes only and does not replace a physician's examination, diagnosis, or treatment recommendations.", "Treatment decisions should be made by a specialist physician."],
  },
  finalCta: {
    title: "Book your first appointment",
    description: "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: { text: "View available appointments", source: "article-first-visit-cta" },
  },
};
