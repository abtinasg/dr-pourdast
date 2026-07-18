/**
 * Patient guides hub page content.
 *
 * All patient guide content must be reviewed and approved
 * by Dr. Tahereh Pordast before publication.
 */
var PATIENT_GUIDES_PAGE = {
  slug: "patient-guides",
  route: "/en/patient-guides",
  seo: {
    title: "Patient Guides | Dr. Tahereh Pordast",
    description:
      "General guides for preparing before your visit, understanding endometriosis, preparing for laparoscopy, and post-treatment care on the website of Dr. Tahereh Pordast.",
    canonical: "https://drpourdast.ir/en/patient-guides",
    ogImage: "/assets/images/og-patient-guides.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Patient Guides", href: "/en/patient-guides" },
  ],
  hero: {
    eyebrow: "Patient guides",
    title: "Information to help you prepare for your visit and treatment",
    description:
      "In this section, you can read general guides about your first appointment, understanding certain gynecologic conditions, preparing for treatment procedures, and general post-treatment care.",
    primaryCta: {
      text: "View guides",
      href: "#guides",
    },
    appointmentSource: "patient-guides-hero",
    note:
      "This content does not replace examination, diagnosis, or medical treatment recommendations.",
  },
  guides: {
    id: "guides",
    eyebrow: "Guide categories",
    title: "Select the guide you need",
    subtitle:
      "Each guide contains general, easy-to-understand information to help patients prepare.",
    items: [
      {
        slug: "first-visit",
        category: "Before your visit",
        title: "Preparing for your first visit",
        description:
          "Documents, imaging studies, laboratory tests, and information you should bring to your first appointment.",
        href: "/en/patient-guides/first-visit",
        featured: true,
        icon: MEDICAL_ICONS.firstVisit,
      },
      {
        slug: "endometriosis",
        category: "Understanding conditions",
        title: "Endometriosis patient guide",
        description:
          "General information about symptoms, the evaluation process, treatment options, and the importance of follow-up for endometriosis.",
        href: "/en/patient-guides/endometriosis",
        icon: MEDICAL_ICONS.guideEndometriosis,
      },
      {
        slug: "before-laparoscopy",
        category: "Before treatment",
        title: "Preparing for laparoscopy",
        description:
          "General information about documents, coordination, and preparation before laparoscopic surgery.",
        href: "/en/patient-guides/before-laparoscopy",
        icon: MEDICAL_ICONS.beforeLaparoscopy,
      },
      {
        slug: "after-surgery",
        category: "After treatment",
        title: "General post-surgical care",
        description:
          "An overview of general follow-up principles, daily activities, and post-surgical care after surgery.",
        href: "/en/patient-guides/after-surgery",
        icon: MEDICAL_ICONS.afterSurgery,
      },
      {
        slug: "uterine-bleeding",
        category: "Uterine conditions",
        title: "Understanding abnormal uterine bleeding",
        description:
          "General information about the importance of evaluating unusual bleeding and when to seek medical assessment.",
        href: "/en/patient-guides/uterine-bleeding",
        icon: MEDICAL_ICONS.guideEndometriosis,
      },
    ],
  },
  howToUse: {
    eyebrow: "How to use",
    title: "How these guides can help you",
    points: [
      {
        title: "Better preparation for your visit",
        description:
          "They help you gather the necessary documents and information before your appointment.",
      },
      {
        title: "Better understanding of the evaluation process",
        description: "You will become familiar with the general steps of evaluation and treatment.",
      },
      {
        title: "Reduced uncertainty before treatment",
        description:
          "You receive the general information you need without replacing your physician's advice.",
      },
    ],
  },
  disclaimer: {
    title: "Important note about medical content",
    paragraphs: [
      "The content in this section is provided for general educational purposes only and does not replace examination, diagnosis, prescriptions, or medical treatment recommendations.",
      "Each patient's condition is different, and decisions about tests, medications, surgery, or post-treatment care must be made by the physician and treatment team.",
    ],
  },
  relatedServices: {
    eyebrow: "Related services",
    title: "Learn about specialty services",
    items: [
      { label: "Endometriosis", href: "/en/services/endometriosis" },
      { label: "Gynecologic Laparoscopy", href: "/en/services/gynecologic-laparoscopy" },
      { label: "Hysteroscopy", href: "/en/services/hysteroscopy" },
      { label: "Ovarian Cyst", href: "/en/services/ovarian-cyst" },
    ],
  },
  finalCta: {
    title: "Book an appointment to discuss your condition",
    description:
      "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: {
      text: "View available appointments",
      source: "patient-guides-final-cta",
    },
  },
};
