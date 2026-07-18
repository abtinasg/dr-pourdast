/**
 * Article: Chronic Pelvic Pain
 * Content must be reviewed by Dr. Tahereh Pordast before publication.
 */
var ARTICLE_PAGE = {
  slug: "pelvic-pain-causes",
  route: "/en/articles/pelvic-pain-causes",
  seo: {
    title: "Chronic Pelvic Pain: Common Causes and Evaluation | Dr. Tahereh Pordast",
    description: "Learn about common causes of chronic pelvic pain and the general evaluation process by a gynecologist.",
    canonical: "https://drpourdast.ir/en/articles/pelvic-pain-causes",
    ogImage: "/assets/images/og-article.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Articles", href: "/en/articles" },
    { label: "Chronic Pelvic Pain", href: "/en/articles/pelvic-pain-causes" },
  ],
  hero: {
    categoryLabel: "Ovarian Conditions",
    date: "Jan 2025",
    readingTime: "6 min read",
    title: "Chronic Pelvic Pain: Common Causes and Evaluation",
    lead: "Chronic pelvic pain (lasting more than 6 months) can have many causes, and a thorough evaluation is essential for appropriate diagnosis and treatment.",
    note: "Pelvic pain does not always indicate a serious condition, but it should not be ignored.",
  },
  body: {
    blocks: [
      { type: "heading", level: 2, id: "causes", text: "Common Causes" },
      { type: "list", ordered: false, items: ["Endometriosis", "Adenomyosis", "Ovarian cysts", "Uterine fibroids", "Pelvic infection", "Pelvic adhesions", "Gastrointestinal or urinary disorders"] },
      { type: "heading", level: 2, id: "evaluation", text: "Evaluation Approach" },
      { type: "paragraph", text: "Your doctor will help identify the cause through a detailed history, clinical examination, and when needed, imaging (ultrasound, MRI) and laboratory tests. Diagnostic laparoscopy is sometimes required." },
      { type: "callout", title: "Note", text: "Treatment varies depending on the underlying cause, and self-treatment is not recommended." },
    ],
  },
  author: { label: "Author", name: "Dr. Tahereh Pordast", title: "Obstetrician and Gynecologist", note: "Requires final review." },
  relatedArticles: {
    eyebrow: "Related Content", title: "Recommended Articles",
    items: [
      { categoryLabel: "Endometriosis", title: "Endometriosis Symptoms", href: "/en/articles/endometriosis-symptoms" },
      { categoryLabel: "Ovarian Conditions", title: "Types of Ovarian Cysts", href: "/en/articles/ovarian-cyst-types" },
    ],
  },
  disclaimer: {
    title: "Important Note About Medical Content",
    paragraphs: ["The information in this section is provided for general educational purposes only and does not replace a physician's examination, diagnosis, or treatment recommendations.", "Treatment decisions should be made by a specialist physician."],
  },
  finalCta: {
    title: "Book an appointment to evaluate pelvic pain",
    description: "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: { text: "View available appointments", source: "article-pelvic-pain-cta" },
  },
};
