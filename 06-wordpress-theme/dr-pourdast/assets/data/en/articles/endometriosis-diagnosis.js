/**
 * Article: Diagnosing Endometriosis
 * Content must be reviewed by Dr. Tahereh Pordast before publication.
 */
var ARTICLE_PAGE = {
  slug: "endometriosis-diagnosis",
  route: "/en/articles/endometriosis-diagnosis",
  seo: {
    title: "Methods for Diagnosing Endometriosis | Dr. Tahereh Pordast",
    description: "Clinical evaluation, imaging, and the role of laparoscopy in diagnosing endometriosis.",
    canonical: "https://drpourdast.ir/en/articles/endometriosis-diagnosis",
    ogImage: "/assets/images/og-article.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Articles", href: "/en/articles" },
    { label: "Diagnosing Endometriosis", href: "/en/articles/endometriosis-diagnosis" },
  ],
  hero: {
    categoryLabel: "Endometriosis",
    date: "Feb 2025",
    readingTime: "7 min read",
    title: "Diagnosing Endometriosis: From Examination to Laparoscopy",
    lead: "Diagnosing endometriosis can take time and requires step-by-step evaluation by a gynecologist.",
    note: "No single test alone provides a definitive diagnosis.",
  },
  body: {
    blocks: [
      { type: "heading", level: 2, id: "clinical", text: "Clinical Evaluation" },
      { type: "paragraph", text: "Your doctor begins with a detailed history of symptoms, pain patterns, menstrual cycles, and reproductive history. A pelvic examination is also part of the initial assessment." },
      { type: "heading", level: 2, id: "imaging", text: "Imaging Studies" },
      { type: "paragraph", text: "Transvaginal ultrasound and, in some cases, MRI can help identify suspicious lesions, but mild endometriosis may not be visible on imaging." },
      { type: "heading", level: 2, id: "laparoscopy", text: "The Role of Laparoscopy" },
      { type: "paragraph", text: "Laparoscopy is the gold standard for diagnosing endometriosis and, in many cases, allows simultaneous treatment." },
      { type: "callout", title: "Note", text: "The decision to proceed with laparoscopy should be made after consulting your doctor, taking into account your symptoms and pregnancy plans." },
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
    title: "Book an appointment to discuss your symptoms",
    description: "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: { text: "View available appointments", source: "article-endometriosis-diagnosis-cta" },
  },
};
