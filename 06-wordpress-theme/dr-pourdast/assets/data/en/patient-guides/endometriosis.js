/**
 * Endometriosis patient guide content.
 * Must be reviewed and approved by Dr. Tahereh Pordast before publication.
 */
var GUIDE_PAGE = {
  slug: "endometriosis",
  route: "/en/patient-guides/endometriosis",
  seo: {
    title: "Endometriosis Patient Guide | Dr. Tahereh Pordast",
    description:
      "A general guide to understanding endometriosis symptoms, evaluation, treatment options, and the importance of follow-up care.",
    canonical: "https://drpourdast.ir/en/patient-guides/endometriosis",
    ogImage: "/assets/images/og-endometriosis-guide.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Patient Guides", href: "/en/patient-guides" },
    { label: "Endometriosis Guide", href: "/en/patient-guides/endometriosis" },
  ],
  hero: {
    eyebrow: "Understanding the Condition",
    label: "General Guide",
    title: "Endometriosis patient guide",
    description:
      "General information about common symptoms, when to seek care, evaluation, and treatment options for endometriosis.",
    note: "This guide does not replace a physician's examination or diagnosis.",
    primaryCta: { text: "View endometriosis service page", href: "/en/services/endometriosis" },
    appointmentSource: "endometriosis-guide-hero",
  },
  whyPreparation: {
    eyebrow: "Why It Matters",
    title: "Why is learning about endometriosis helpful?",
    points: [
      { title: "Recognizing symptoms", description: "Helps you describe your symptoms more clearly." },
      { title: "Preparing for evaluation", description: "Encourages you to organize records and history in advance." },
      { title: "Understanding treatment options", description: "Introduces common treatment pathways." },
    ],
  },
  prose: {
    eyebrow: "Common Symptoms",
    title: "What symptoms may be associated with endometriosis?",
    paragraphs: [
      "Endometriosis may be associated with severe menstrual pain, pelvic pain, pain during intercourse, gastrointestinal symptoms, or fertility concerns.",
      "Symptom severity varies among patients, and diagnosis requires evaluation by a physician.",
    ],
    items: [
      "Very painful periods",
      "Chronic pelvic pain",
      "Pain during intercourse",
      "Fertility concerns",
      "Fatigue or related gastrointestinal symptoms",
    ],
    note: "Having these symptoms alone does not confirm the diagnosis.",
  },
  evaluation: {
    eyebrow: "Evaluation Process",
    title: "What does endometriosis evaluation usually involve?",
    paragraphs: [
      "Your physician may review your symptoms, medical history, imaging studies, and prior treatments.",
      "In some cases, an examination or additional testing may be recommended.",
    ],
    items: ["Symptom and history review", "Imaging evaluation", "Specialist examination", "Treatment planning"],
  },
  questions: {
    eyebrow: "Questions for Your Physician",
    title: "Questions you may want to ask",
    questions: [
      "Are my findings consistent with endometriosis?",
      "Do I need additional imaging or testing?",
      "What treatment options are available for me?",
      "Is surgery necessary in my case?",
    ],
    note: "Write down your personal questions as well.",
  },
  appointment: {
    eyebrow: "Book an Appointment",
    title: "Schedule an evaluation",
    content: "To discuss your symptoms and receive specialist guidance, book an appointment through Doctoreto.",
    appointmentSource: "endometriosis-guide-appointment",
  },
  relatedGuides: {
    title: "Related Guides",
    items: [
      { label: "Preparing for Your First Visit", href: "/en/patient-guides/first-visit" },
      { label: "Preparing for Laparoscopy", href: "/en/patient-guides/before-laparoscopy" },
      { label: "General Post-Surgery Care", href: "/en/patient-guides/after-surgery" },
    ],
  },
  disclaimer: {
    paragraphs: [
      "This guide is for general awareness only. Diagnosis and treatment must be provided by a physician.",
    ],
  },
  finalCta: {
    title: "Book an appointment to discuss your symptoms",
    description: "To view available times, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: { text: "View available appointments", source: "endometriosis-guide-final-cta" },
  },
};
