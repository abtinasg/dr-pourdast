/**
 * Uterine bleeding patient guide content.
 * Must be reviewed and approved by Dr. Tahereh Pordast before publication.
 */
var GUIDE_PAGE = {
  slug: "uterine-bleeding",
  route: "/en/patient-guides/uterine-bleeding",
  seo: {
    title: "Understanding Abnormal Uterine Bleeding | Dr. Tahereh Pordast",
    description:
      "A general guide to the importance of evaluating unusual uterine bleeding and when to seek medical assessment.",
    canonical: "https://drpourdast.ir/en/patient-guides/uterine-bleeding",
    ogImage: "/assets/images/og-uterine-bleeding-guide.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Patient Guides", href: "/en/patient-guides" },
    { label: "Abnormal Uterine Bleeding", href: "/en/patient-guides/uterine-bleeding" },
  ],
  hero: {
    eyebrow: "Uterine Conditions",
    label: "General Guide",
    title: "Understanding abnormal uterine bleeding",
    description:
      "General information about symptoms, common causes, and when to seek evaluation for unusual bleeding.",
    note: "Any abnormal uterine bleeding should be evaluated by a physician.",
    primaryCta: { text: "Read abnormal bleeding article", href: "/en/articles/abnormal-bleeding" },
    appointmentSource: "uterine-bleeding-guide-hero",
  },
  prose: {
    eyebrow: "General Definition",
    title: "What is abnormal uterine bleeding?",
    paragraphs: [
      "Abnormal uterine bleeding refers to any bleeding that falls outside your usual menstrual pattern. This may include very heavy periods, bleeding between cycles, or bleeding after menopause.",
      "Various causes may contribute, including fibroids, polyps, hormonal disorders, or other uterine conditions.",
    ],
  },
  prepareInfo: {
    eyebrow: "Warning Signs",
    title: "What requires urgent evaluation?",
    items: [
      "Very heavy bleeding",
      "Bleeding after menopause",
      "Prolonged or frequent bleeding between periods",
      "Associated dizziness or severe weakness",
      "Bleeding after intercourse",
    ],
    suggestion: "In severe or concerning cases, seek care as soon as possible.",
  },
  evaluation: {
    eyebrow: "Evaluation Process",
    title: "Evaluating abnormal uterine bleeding",
    paragraphs: [
      "Your physician may review your bleeding pattern, medical history, and ultrasound findings.",
      "In some cases, laboratory testing or hysteroscopy may be recommended to determine the cause.",
    ],
    items: ["Detailed history", "Physical examination", "Ultrasound", "Additional testing if needed"],
  },
  questions: {
    eyebrow: "Questions for Your Physician",
    title: "Suggested questions",
    questions: [
      "What is the likely cause of my bleeding?",
      "Do I need laboratory tests or imaging?",
      "Is hysteroscopy necessary?",
      "Which treatments may be appropriate for me?",
    ],
    note: "Diagnosis and treatment must be provided by a physician.",
  },
  relatedGuides: {
    title: "Related Guides",
    items: [
      { label: "Preparing for Your First Visit", href: "/en/patient-guides/first-visit" },
      { label: "Post-Surgery Care", href: "/en/patient-guides/after-surgery" },
    ],
  },
  disclaimer: {
    paragraphs: [
      "This guide does not replace a physician's examination or diagnosis.",
    ],
  },
  finalCta: {
    title: "Book an appointment to evaluate your bleeding",
    description: "To view available times, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: { text: "View available appointments", source: "uterine-bleeding-guide-final-cta" },
  },
};
