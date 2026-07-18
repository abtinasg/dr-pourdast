/**
 * After surgery patient guide content.
 * Must be reviewed and approved by Dr. Tahereh Pordast before publication.
 */
var GUIDE_PAGE = {
  slug: "after-surgery",
  route: "/en/patient-guides/after-surgery",
  seo: {
    title: "General Post-Surgery Care | Dr. Tahereh Pordast",
    description:
      "A general guide to post-operative care after gynecologic surgery, including daily activity, incision care, and follow-up visits.",
    canonical: "https://drpourdast.ir/en/patient-guides/after-surgery",
    ogImage: "/assets/images/og-after-surgery-guide.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Patient Guides", href: "/en/patient-guides" },
    { label: "Post-Surgery Care", href: "/en/patient-guides/after-surgery" },
  ],
  hero: {
    eyebrow: "After Treatment",
    label: "General Guide",
    title: "General post-surgery care",
    description:
      "General information about follow-up, daily activity, and care after laparoscopic or hysteroscopic surgery.",
    note: "Follow the exact post-operative instructions provided by your treating physician.",
    primaryCta: { text: "Read laparoscopy recovery article", href: "/en/articles/laparoscopy-recovery" },
    appointmentSource: "after-surgery-guide-hero",
  },
  prose: {
    eyebrow: "The First Few Days",
    title: "What to expect after surgery",
    paragraphs: [
      "After minimally invasive surgery, many patients are discharged the same day or the day after. Fatigue, abdominal bloating, or mild incision pain are common.",
      "These symptoms usually improve over several days, but recovery time varies for each person.",
    ],
  },
  prepareInfo: {
    eyebrow: "Incision Care",
    title: "General wound care tips",
    items: [
      "Keep the incision site clean and dry",
      "Report any redness, swelling, or discharge to your physician",
      "Do not remove dressings without medical guidance",
      "Take fever or severe pain seriously",
    ],
    suggestion: "Obtain exact instructions for washing and dressing the wound from your care team.",
  },
  evaluation: {
    eyebrow: "Activity and Rest",
    title: "Daily activity after surgery",
    paragraphs: [
      "Adequate rest is recommended in the first few days. Short walks may help reduce bloating.",
      "Avoid lifting heavy objects and strenuous activity until your physician says it is safe.",
    ],
    items: ["Adequate rest", "Gradual walking", "Avoid heavy activity", "Follow-up as scheduled"],
  },
  mistakes: {
    eyebrow: "Warning Signs",
    title: "When should you contact your physician immediately?",
    intro: "Contact your care team if you notice any of the following:",
    items: [
      "High fever",
      "Severe pain or sudden worsening of pain",
      "Pus-like or foul-smelling discharge from the incision",
      "Abnormal bleeding",
      "Shortness of breath or chest pain",
    ],
  },
  relatedGuides: {
    title: "Related Guides",
    items: [
      { label: "Preparing for Laparoscopy", href: "/en/patient-guides/before-laparoscopy" },
      { label: "Preparing for Your First Visit", href: "/en/patient-guides/first-visit" },
    ],
  },
  disclaimer: {
    paragraphs: [
      "This guide does not replace instructions from your treating physician.",
    ],
  },
  finalCta: {
    title: "Book a post-operative follow-up appointment",
    description: "To view available times, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: { text: "View available appointments", source: "after-surgery-guide-final-cta" },
  },
};
