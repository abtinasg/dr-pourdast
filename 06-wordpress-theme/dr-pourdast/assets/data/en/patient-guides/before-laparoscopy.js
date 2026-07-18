/**
 * Before laparoscopy patient guide content.
 * Must be reviewed and approved by Dr. Tahereh Pordast before publication.
 */
var GUIDE_PAGE = {
  slug: "before-laparoscopy",
  route: "/en/patient-guides/before-laparoscopy",
  seo: {
    title: "Preparing for Laparoscopy | Dr. Tahereh Pordast",
    description:
      "A general guide to preparing for gynecologic laparoscopy, including records, coordination, and pre-operative considerations.",
    canonical: "https://drpourdast.ir/en/patient-guides/before-laparoscopy",
    ogImage: "/assets/images/og-before-laparoscopy-guide.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Patient Guides", href: "/en/patient-guides" },
    { label: "Preparing for Laparoscopy", href: "/en/patient-guides/before-laparoscopy" },
  ],
  hero: {
    eyebrow: "Before Treatment",
    label: "General Guide",
    title: "Preparing for laparoscopy",
    description:
      "General information about records, coordination, and preparation before gynecologic laparoscopic surgery.",
    note: "Follow the exact pre-operative instructions provided by your care team.",
    primaryCta: { text: "View laparoscopy service page", href: "/en/services/gynecologic-laparoscopy" },
    appointmentSource: "before-laparoscopy-guide-hero",
  },
  whyPreparation: {
    eyebrow: "Why Preparation Matters",
    title: "Why is pre-laparoscopy preparation important?",
    points: [
      { title: "Better coordination", description: "Reduces uncertainty about timing and required documents." },
      { title: "Greater safety", description: "Medication information and medical history can be reviewed more completely." },
      { title: "More confidence", description: "Helps you become familiar with the general steps before surgery." },
    ],
  },
  checklist: {
    id: "laparoscopy-prep-checklist",
    eyebrow: "Checklist",
    title: "General items to prepare",
    showPrint: true,
    groups: [
      {
        title: "Medical records",
        items: ["Ultrasound and MRI reports", "Reports from previous surgeries", "Recent laboratory results", "List of current medications"],
      },
      {
        title: "Personal information",
        items: ["Brief summary of symptoms", "History of drug allergies", "History of chronic conditions", "Emergency contact information"],
      },
    ],
    note: "Obtain the exact list from the clinic or hospital.",
  },
  organizing: {
    eyebrow: "Before Surgery Day",
    title: "General preparation steps",
    steps: [
      { title: "Coordinate with your care team", description: "Confirm admission time, fasting requirements, and medication changes." },
      { title: "Prepare your documents", description: "Gather medical records and identification." },
      { title: "Plan for a companion", description: "If needed, arrange for someone to accompany you on discharge day." },
      { title: "Write down your questions", description: "Note questions about the procedure and recovery period." },
    ],
  },
  questions: {
    eyebrow: "Questions for Your Physician",
    title: "Suggested questions",
    questions: [
      "What is the goal of laparoscopy in my case?",
      "How long will I stay in the hospital?",
      "Which medications should I stop before surgery?",
      "When can I return to normal activity?",
    ],
    note: "Follow individualized instructions from your physician.",
  },
  relatedGuides: {
    title: "Related Guides",
    items: [
      { label: "Preparing for Your First Visit", href: "/en/patient-guides/first-visit" },
      { label: "Post-Surgery Care", href: "/en/patient-guides/after-surgery" },
      { label: "Endometriosis Guide", href: "/en/patient-guides/endometriosis" },
    ],
  },
  disclaimer: {
    paragraphs: [
      "This guide does not replace instructions from your physician or hospital.",
    ],
  },
  finalCta: {
    title: "Book a pre-operative consultation",
    description: "To view available times, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: { text: "View available appointments", source: "before-laparoscopy-guide-final-cta" },
  },
};
