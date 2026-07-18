/**
 * First visit preparation guide content.
 *
 * All patient preparation content must be reviewed and approved
 * by Dr. Tahereh Pordast before publication.
 */
var FIRST_VISIT_GUIDE = {
  slug: "first-visit",
  route: "/en/patient-guides/first-visit",
  seo: {
    title: "Preparing for Your First Gynecology Visit | Dr. Tahereh Pordast",
    description:
      "A general guide to records, imaging studies, treatment history, and information to bring to your first appointment with Dr. Tahereh Pordast.",
    canonical: "https://drpourdast.ir/en/patient-guides/first-visit",
    ogImage: "/assets/images/og-first-visit-guide.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Patient Guides", href: "/en/patient-guides" },
    { label: "Preparing for Your First Visit", href: "/en/patient-guides/first-visit" },
  ],
  hero: {
    eyebrow: "Pre-Visit Guide",
    label: "General Guide",
    title: "What documents should you bring to your first visit?",
    description:
      "Preparing medical records, imaging studies, and a summary of your treatment history can help your condition be reviewed more systematically at your first appointment.",
    note:
      "Which documents are needed depends on the reason for your visit and your individual circumstances.",
    primaryCta: {
      text: "View document checklist",
      href: "#visit-checklist",
    },
    appointmentSource: "first-visit-guide-hero",
  },
  whyPreparation: {
    eyebrow: "Pre-Visit Preparation",
    title: "Why prepare your documents in advance?",
    points: [
      {
        title: "Better review of your history",
        description:
          "Previous reports help your physician better understand the course of your symptoms and prior treatments.",
      },
      {
        title: "Less repetition",
        description:
          "A written summary helps you avoid forgetting important details and keeps the visit more organized.",
      },
      {
        title: "More informed decisions",
        description:
          "Prior imaging and laboratory results may influence the choice of further testing or treatment options.",
      },
    ],
  },
  checklist: {
    id: "visit-checklist",
    eyebrow: "Visit Checklist",
    title: "Documents to bring when available",
    showPrint: true,
    groups: [
      {
        title: "Imaging studies",
        items: [
          "Previous ultrasound reports",
          "MRI reports, if available",
          "Imaging images or digital files",
          "Reports related to the uterus, ovaries, and pelvis",
        ],
      },
      {
        title: "Laboratory tests",
        items: [
          "Recent relevant test results",
          "Hormonal studies, if performed",
          "Other results requested by a previous physician",
        ],
      },
      {
        title: "Surgical history",
        items: [
          "Reports from previous surgeries",
          "Laparoscopy or hysteroscopy reports",
          "Pathology results, if available",
          "Hospital discharge summaries",
        ],
      },
      {
        title: "Treatment history",
        items: [
          "Names of previous treatments",
          "Duration of medication use",
          "Treatment response or possible side effects",
          "Reason for stopping treatment, if known",
        ],
      },
      {
        title: "Medication list",
        items: [
          "Current medications",
          "Supplements you take",
          "Drug allergies, if any",
        ],
        note: "Do not stop or change any medication without consulting your physician.",
      },
      {
        title: "Menstrual and symptom information",
        items: [
          "Date of last menstrual period",
          "Cycle regularity or irregularity",
          "When pain or bleeding began",
          "Severity and pattern of symptoms",
          "Relationship of symptoms to the menstrual cycle",
        ],
      },
      {
        title: "Pregnancy and fertility history",
        items: [
          "Pregnancy history",
          "History of miscarriage or infertility treatment",
          "Current pregnancy plans, if relevant",
          "Previous fertility-related evaluations",
        ],
      },
    ],
    note:
      "You do not need to bring every item listed for every patient. Documents related to the reason for your visit are the priority.",
  },
  prepareInfo: {
    eyebrow: "Summary of Your Condition",
    title: "What information should you note before the visit?",
    items: [
      "What is your main concern?",
      "When did your symptoms begin?",
      "What makes your symptoms better or worse?",
      "At what points in your menstrual cycle are symptoms most severe?",
      "What treatments have you already tried?",
      "Do you have a history of surgery or hospitalization?",
      "Do you have specific fertility goals or concerns?",
      "What is the most important question you want to ask your physician?",
    ],
    suggestion:
      "It helps to write this information briefly in chronological order so nothing is forgotten during the visit.",
  },
  organizing: {
    eyebrow: "Organizing Your Records",
    title: "How should you organize your documents?",
    steps: [
      {
        title: "Separate your most recent records",
        description:
          "Keep your latest ultrasounds, MRI reports, and laboratory results easy to access.",
      },
      {
        title: "Arrange documents chronologically",
        description:
          "Order reports from oldest to newest, or the reverse, so changes over time are clear.",
      },
      {
        title: "Bring digital files when available",
        description:
          "If you have them, keep medical imaging files on your phone, a storage device, or an accessible online portal.",
      },
      {
        title: "Write a short summary",
        description:
          "On one page, note when symptoms began, prior treatments, and your main concerns.",
      },
    ],
  },
  evaluation: {
    eyebrow: "Evaluation Process",
    title: "What may be reviewed at the first visit?",
    paragraphs: [
      "At your first appointment, your physician or care team may ask about your symptoms, medical history, menstrual history, prior treatments, and your goals for the visit.",
      "Medical records and imaging are reviewed, and depending on your condition, an examination or additional testing may be recommended.",
      "The exact evaluation process depends on the reason for your visit and your individual circumstances.",
    ],
    items: [
      "History and symptom review",
      "Review of records",
      "Review of treatment history",
      "Planning next steps",
    ],
  },
  questions: {
    eyebrow: "Questions for Your Physician",
    title: "Questions you may want to ask",
    questions: [
      "What is the most likely cause of my symptoms?",
      "Do I need additional testing or imaging?",
      "What treatment options are available for my condition?",
      "Can non-surgical treatment be considered?",
      "Under what circumstances might surgery be recommended?",
      "How might treatment affect my fertility plans?",
      "When should I return for follow-up?",
    ],
    note:
      "These are general suggestions only. You may also want to write down your own personal questions in advance.",
  },
  mistakes: {
    eyebrow: "Practical Tips",
    title: "What can make the visit more difficult?",
    intro:
      "A little preparation can help prevent important information from being missed.",
    items: [
      "Not bringing previous reports",
      "Forgetting the names of medications you take",
      "Sharing information without a clear timeline",
      "Expecting a definitive diagnosis before a full evaluation",
    ],
  },
  appointment: {
    eyebrow: "Book an Appointment",
    title: "How do you schedule a visit?",
    content:
      "Available appointment times with Dr. Tahereh Pordast can be viewed and booked through her official profile on Doctoreto.",
    appointmentSource: "first-visit-guide-appointment",
  },
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Common questions about preparing for your first visit",
    items: [
      {
        id: "all-documents",
        question: "Do I need to bring all of my documents?",
        answer:
          "No. Documents related to the reason for your visit and your most recent evaluations are the most important. If you are unsure, you may contact the clinic before your appointment.",
      },
      {
        id: "old-imaging",
        question: "Should I bring older ultrasound or MRI reports?",
        answer:
          "Yes. They may be useful for comparing changes over time. Whether new imaging is needed will be decided after your physician's evaluation.",
      },
      {
        id: "new-tests",
        question: "Should I get new tests before the visit?",
        answer:
          "Unless requested by your physician or coordinated with the clinic, you do not need to arrange new tests or imaging on your own.",
      },
      {
        id: "phone-notes",
        question: "Can I show a symptom list on my phone?",
        answer:
          "Yes. A brief, organized note of symptoms, dates, and prior treatments can help you share information more accurately.",
      },
      {
        id: "medication-list",
        question: "Is it enough to bring only medication names?",
        answer:
          "It is better to note the medication name, dose, and duration of use when possible. Do not change any medication without your physician's guidance.",
      },
      {
        id: "appointment",
        question: "How do I book an appointment?",
        answer:
          "Online booking is available through Dr. Tahereh Pordast's official profile on Doctoreto.",
        hasAppointmentLink: true,
        appointmentSource: "first-visit-guide-faq",
      },
    ],
  },
  relatedGuides: {
    title: "Related Guides",
    items: [
      { label: "Endometriosis Patient Guide", href: "/en/patient-guides/endometriosis" },
      { label: "Preparing for Laparoscopy", href: "/en/patient-guides/before-laparoscopy" },
      { label: "General Post-Surgery Care", href: "/en/patient-guides/after-surgery" },
    ],
  },
  disclaimer: {
    paragraphs: [
      "This guide is intended for general pre-visit preparation only. The need for testing, imaging, examination, or treatment must be determined individually by your physician.",
    ],
  },
  finalCta: {
    title: "Book an appointment for your first evaluation",
    description:
      "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: {
      text: "View available appointments",
      source: "first-visit-guide-final-cta",
    },
  },
};
