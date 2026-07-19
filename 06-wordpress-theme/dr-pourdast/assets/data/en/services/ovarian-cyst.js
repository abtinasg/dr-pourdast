/**
 * Ovarian cyst service page content.
 *
 * All medical content on this page must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */
var OVARIAN_CYST_PAGE = {
  slug: "ovarian-cyst",
  route: "/en/services/ovarian-cyst",
  seo: {
    title: "Ovarian Cyst Treatment in Shiraz | Dr. Tahereh Pordast",
    description:
      "Learn about types of ovarian cysts, symptoms, evaluation methods, and treatment options, with a focus on specialist assessment and minimally invasive gynecologic surgery by Dr. Tahereh Pordast in Shiraz.",
    canonical: "https://drpourdast.ir/en/services/ovarian-cyst",
    ogImage: "/assets/images/og-ovarian-cyst.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Specialist Services", href: "/en/services" },
    { label: "Ovarian Cyst", href: "/en/services/ovarian-cyst" },
  ],
  hero: {
    eyebrow: "Evaluation and Treatment of Ovarian Conditions",
    title: "Diagnosis and Treatment of Ovarian Cysts",
    description:
      "Ovarian cysts can have different types and causes. Some resolve without specific treatment, while others may require further evaluation or treatment depending on size, appearance, symptoms, and the patient's individual circumstances.",
    primaryCta: {
      text: "View open appointments",
      source: "ovarian-cyst-hero",
    },
    secondaryCta: {
      text: "Learn about the evaluation pathway",
      href: "#ovarian-cyst-evaluation",
    },
    trust: [
      "Specialist evaluation of ovarian cysts",
      "Assessment of whether surgery is needed",
      "Minimally invasive surgery in selected cases",
    ],
  },
  pageNav: [
    { label: "Symptoms", href: "#symptoms" },
    { label: "When to seek care", href: "#when-to-seek" },
    { label: "Evaluation", href: "#evaluation" },
    { label: "Documents", href: "#preparation" },
    { label: "FAQ", href: "#faq" },
  ],
  medicalReview: {
    text: "This content has been prepared or reviewed under the scientific supervision of Dr. Tahereh Pourdast.",
    dateLabel: "Last reviewed: July 2026",
  },
  whatIs: {
    eyebrow: "Understanding the Condition",
    title: "What Is an Ovarian Cyst?",
    paragraphs: [
      "An ovarian cyst is a fluid-filled structure that forms inside or on the surface of the ovary. Cysts may develop as part of the normal ovarian cycle or may have other causes.",
      "Cyst type, size, ultrasound appearance, patient age, presence of symptoms, and changes over time are all important in selecting monitoring or treatment.",
    ],
    panel: {
      title: "Key Points in Evaluation",
      points: [
        "Different types of ovarian cysts",
        "Importance of ultrasound and follow-up",
        "Review of symptoms and individual circumstances",
      ],
    },
  },
  categories: {
    eyebrow: "Types of Cysts",
    title: "What Types of Ovarian Cysts Exist?",
    categories: [
      {
        title: "Functional cysts",
        description:
          "May develop as part of the normal ovarian cycle and often resolve on their own in many cases.",
      },
      {
        title: "Endometrioma",
        description:
          "A cyst associated with endometriosis that should be evaluated alongside symptoms, fertility status, and possible extent of involvement.",
        link: {
          text: "View the endometriosis page",
          href: "/en/services/endometriosis",
        },
      },
      {
        title: "Dermoid cyst",
        description:
          "A cyst with a distinct structure whose monitoring or treatment depends on size, symptoms, and patient circumstances.",
      },
      {
        title: "Complex or non-functional cysts",
        description:
          "Some cysts have an unusual appearance on imaging and may require more detailed evaluation or specialist follow-up.",
      },
    ],
    note:
      "Cyst type cannot be determined from symptoms alone and requires physician evaluation and imaging.",
  },
  symptoms: {
    id: "symptoms",
    eyebrow: "Possible Symptoms",
    title: "What Symptoms May Be Associated with an Ovarian Cyst?",
    items: [
      "Pain or heaviness in the lower abdomen",
      "One-sided or intermittent pelvic pain",
      "Bloating or abdominal pressure",
      "Changes in menstrual pattern",
      "Pain during intercourse",
      "No symptoms and incidental discovery on ultrasound",
    ],
    note:
      "Having these symptoms alone does not mean an ovarian cyst is present. Their cause should be evaluated by a physician.",
  },
  whenEvaluate: {
    id: "when-to-seek",
    eyebrow: "When to Seek Care",
    title: "When Should an Ovarian Cyst Be Evaluated?",
    items: [
      "Persistent or recurring pelvic pain",
      "Cyst seen on ultrasound",
      "Enlargement or change in cyst appearance on follow-up",
      "Cyst associated with endometriosis",
      "Cyst persisting across multiple evaluations",
      "Interference with daily activities",
      "New symptoms after menopause",
      "History of prior cyst surgery or treatment",
    ],
    note:
      "The type of evaluation and follow-up interval should be determined based on age, symptoms, ultrasound appearance, and patient circumstances.",
  },
  evaluation: {
    id: "evaluation",
    eyebrow: "Evaluation Pathway",
    title: "How Is an Ovarian Cyst Evaluated?",
    steps: [
      {
        title: "Review of symptoms and history",
        description:
          "Pain pattern, menstrual changes, cyst history, prior surgery, and treatments are reviewed.",
      },
      {
        title: "Review of imaging",
        description:
          "Previous ultrasounds, changes in cyst size, and reported imaging features are evaluated.",
      },
      {
        title: "Assessment of individual circumstances",
        description:
          "Age, fertility status, menstrual status, and coexisting conditions are important in decision-making.",
      },
      {
        title: "Determining need for follow-up or treatment",
        description:
          "Based on findings, imaging follow-up, treatment, or further evaluation may be recommended.",
      },
      {
        title: "Surgical evaluation when indicated",
        description:
          "In selected cases, the appropriate surgical approach and possibility of laparoscopy are reviewed.",
      },
    ],
  },
  treatmentPathways: {
    eyebrow: "Selecting Treatment",
    title: "Do All Ovarian Cysts Require Surgery?",
    intro: [
      "No. Many cysts may require only monitoring, depending on type, size, symptoms, and patient circumstances.",
      "Surgery may be considered when a cyst is large, causes significant symptoms, persists or changes over time, has a complex appearance, or when there is concern about related complications.",
    ],
    benefits: {
      title: "Monitoring and periodic evaluation",
      items: [
        "Tracking changes in cyst size",
        "Comparing ultrasound studies",
        "Monitoring symptom changes",
        "Follow-up interval determined by the physician",
      ],
    },
    limitations: {
      title: "When surgery may be considered",
      items: [
        "Significant symptoms",
        "Enlargement or change in cyst appearance",
        "Persistent cyst on follow-up",
        "Possible endometrioma or complex cyst",
        "Concern about ovarian injury or other complications",
      ],
    },
    note:
      "The choice between monitoring, medical treatment, and surgery should be made individually after complete evaluation.",
  },
  laparoscopicSurgery: {
    eyebrow: "Minimally Invasive Surgery",
    title: "Laparoscopic Surgery for Ovarian Cysts",
    paragraphs: [
      "In some patients, ovarian cyst surgery may be performed laparoscopically. The goal of surgery and type of procedure depend on cyst type, size, location, ovarian condition, and fertility status.",
      "When possible, preserving healthy ovarian tissue is an important consideration in surgical planning, but feasibility and outcome depend on each patient's condition.",
    ],
    link: {
      text: "Learn about gynecologic laparoscopy",
      href: "/en/services/gynecologic-laparoscopy",
    },
  },
  endometrioma: {
    eyebrow: "Endometrioma",
    title: "How Is an Endometrioma Different from Other Cysts?",
    variant: "callout",
    paragraphs: [
      "An endometrioma is a type of ovarian cyst associated with endometriosis. Its evaluation should consider patient symptoms, possible involvement of other pelvic structures, fertility status, and prior treatments.",
      "Having an endometrioma does not always mean urgent surgery is required. Treatment should be selected based on individual circumstances.",
    ],
    link: {
      text: "Learn about endometriosis",
      href: "/en/services/endometriosis",
    },
  },
  doctor: {
    imageSrc: "/assets/images/ovarian-cyst.png",
    imageAlt: "Ovarian cyst evaluation with ultrasound",
    imageFit: "center",
    eyebrow: "Treating Physician",
    title: "Ovarian Cyst Evaluation by Dr. Tahereh Pordast",
    paragraphs: [
      "Dr. Tahereh Pordast is an obstetrician-gynecologist with advanced fellowship training in gynecologic laparoscopy.",
      "During ovarian cyst evaluation, patient symptoms, ultrasound findings, cyst changes, treatment history, and individual circumstances are reviewed to select the appropriate monitoring or treatment approach.",
    ],
    aboutLink: "/en/about",
    appointmentSource: "ovarian-cyst-doctor-section",
  },
  preparation: {
    id: "preparation",
    eyebrow: "Before Your Visit",
    title: "What Records Should You Bring for Ovarian Cyst Evaluation?",
    checklist: [
      "Previous ultrasound reports",
      "Report of changes in cyst size",
      "MRI reports, if available",
      "Relevant laboratory results",
      "Prior surgical or pathology reports",
      "List of current medications",
      "Date of last menstrual period",
      "Summary of symptoms and when they began",
    ]
  },
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Common Questions About Ovarian Cysts",
    items: [
      {
        id: "dangerous",
        question: "Are all ovarian cysts dangerous?",
        answer:
          "No. Ovarian cysts have many types, and many are benign or temporary. Cyst type should be evaluated based on imaging and patient circumstances.",
      },
      {
        id: "surgery-needed",
        question: "Do all ovarian cysts require surgery?",
        answer:
          "No. Some cysts may require only monitoring. The decision about surgery depends on type, size, symptoms, and changes over time.",
      },
      {
        id: "infertility",
        question: "Do ovarian cysts cause infertility?",
        answer:
          "The effect on fertility depends on cyst type, size, ovarian involvement, and individual patient factors. Not all cysts cause infertility.",
      },
      {
        id: "endometrioma",
        question: "What is an endometrioma?",
        answer:
          "An endometrioma is an ovarian cyst associated with endometriosis. It should be evaluated alongside symptoms, fertility status, and possible involvement of other pelvic structures.",
      },
      {
        id: "medication",
        question: "Can ovarian cysts be treated with medication?",
        answer:
          "Treatment depends on cyst type and patient circumstances. In some cases, only monitoring or symptom management may be appropriate, while other cases require further evaluation.",
      },
      {
        id: "laparoscopy",
        question: "Is ovarian cyst surgery performed laparoscopically?",
        answer:
          "In some patients, surgery may be performed laparoscopically. The choice of surgical approach depends on cyst type, size, ovarian condition, and patient status.",
      },
      {
        id: "documents",
        question: "What records should I bring to my first appointment?",
        answer:
          "It is best to bring ultrasound reports, MRI if available, laboratory results, prior reports, and a list of current medications.",
      },
      {
        id: "appointment",
        question: "How do I book an appointment?",
        answer:
          "Online appointment booking is available through Dr. Tahereh Pordast's official profile on Doctoreto.",
      },
    ],
  },
  relatedServices: {
    title: "Related Services",
    items: [
      { label: "Endometriosis", href: "/en/services/endometriosis", description: "Specialized evaluation and treatment of endometriosis" },
      { label: "Gynecologic Laparoscopy", href: "/en/services/gynecologic-laparoscopy", description: "Minimally invasive surgery for pelvic conditions" },
      { label: "Pelvic Adhesions", href: "/en/services/pelvic-adhesion", description: "Assessment of pelvic pain and adhesion-related issues" },
    ],
  },
  finalCta: {
    title: "Book an evaluation appointment for ovarian cyst assessment",
    description:
      "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: {
      text: "View open appointments",
      source: "ovarian-cyst-final-cta",
    },
  },
};
