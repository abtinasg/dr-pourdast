/**
 * Advanced sonography service page content.
 *
 * All medical content on this page must be reviewed and approved
 * by Dr. Tahereh Poordast before publication.
 */
var ADVANCED_SONOGRAPHY_PAGE = {
  slug: "advanced-sonography",
  route: "/en/services/advanced-sonography",
  seo: {
    title: "Advanced Gynecologic Sonography in Shiraz | Dr. Tahereh Poordast",
    description:
      "Specialist evaluation of the uterus, ovaries, endometrial thickness, and pelvic findings with advanced sonography by Dr. Tahereh Poordast, obstetrician-gynecologist in Shiraz.",
    canonical: "https://drpourdast.ir/en/services/advanced-sonography",
    ogImage: "/assets/images/og-advanced-sonography.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Specialist Services", href: "/en/services" },
    { label: "Advanced Sonography", href: "/en/services/advanced-sonography" },
  ],
  hero: {
    eyebrow: "Specialist Gynecologic Imaging",
    title: "Advanced Gynecologic Sonography",
    description:
      "Advanced sonography is an important tool for evaluating the uterus, ovaries, endometrial thickness, and pelvic findings. It plays a key role in the diagnosis, follow-up, and treatment planning for many women's health concerns.",
    primaryCta: {
      text: "View open appointments",
      source: "advanced-sonography-hero",
    },
    secondaryCta: {
      text: "Learn about applications",
      href: "#applications",
    },
    trust: [
      "Specialist evaluation of pelvic organs",
      "Assessment of the uterus and ovaries",
      "Support for diagnosis and treatment follow-up",
    ],
  },
  pageNav: [
    { label: "Applications", href: "#applications" },
    { label: "Types of scans", href: "#scan-types" },
    { label: "When to seek care", href: "#when-to-seek" },
    { label: "Evaluation", href: "#evaluation" },
    { label: "FAQ", href: "#faq" },
  ],
  medicalReview: {
    text: "This content has been prepared or reviewed under the scientific supervision of Dr. Tahereh Poordast.",
    dateLabel: "Last reviewed: July 2026",
  },
  whatIs: {
    eyebrow: "Understanding the Procedure",
    title: "What Is Advanced Gynecologic Sonography?",
    paragraphs: [
      "Advanced gynecologic sonography is a non-invasive method for visualizing the uterus, ovaries, fallopian tubes, and other pelvic structures. It is performed without radiation and without incisions.",
      "In specialist evaluation, in addition to viewing the organs, features of lesions, endometrial thickness, cyst size, and uterine changes are assessed with greater precision.",
    ],
    panel: {
      title: "Benefits of Sonography",
      points: [
        "Non-invasive and radiation-free",
        "Direct visualization of pelvic organs",
        "Support for diagnosis and follow-up",
      ],
    },
  },
  scanTypes: {
    id: "scan-types",
    eyebrow: "Types of Evaluation",
    title: "What Does Advanced Sonography Evaluate?",
    categories: [
      {
        title: "Uterine evaluation",
        description:
          "Assessment of uterine size and shape, endometrial thickness, polyps, and intrauterine fibroids.",
        link: {
          text: "View the uterine fibroid page",
          href: "/en/services/uterine-fibroid",
        },
      },
      {
        title: "Ovarian evaluation",
        description:
          "Visualization of cysts, ovarian size, and findings related to endometriosis.",
        link: {
          text: "View the ovarian cyst page",
          href: "/en/services/ovarian-cyst",
        },
      },
      {
        title: "Endometrial thickness",
        description:
          "Evaluation of endometrial thickness and characteristics in patients with abnormal bleeding or during treatment follow-up.",
      },
      {
        title: "Pelvic findings",
        description:
          "Assessment of masses, free pelvic fluid, and suspicious findings that require follow-up.",
      },
    ],
    note:
      "Sonography interpretation should be combined with the patient's symptoms and physician examination.",
  },
  applications: {
    id: "applications",
    eyebrow: "Common Applications",
    title: "When Is Advanced Sonography Used?",
    items: [
      "Evaluation of pelvic pain and chronic symptoms",
      "Assessment of ovarian cysts and follow-up of changes",
      "Evaluation of uterine fibroids and their size",
      "Assessment of abnormal uterine bleeding",
      "Follow-up of endometriosis treatment",
      "Evaluation of endometrial thickness",
      "Assessment of infertility and reproductive conditions",
      "Follow-up after surgery or treatment",
    ],
    note:
      "The need for sonography and the timing of the scan should be determined based on each patient's condition.",
  },
  whenEvaluate: {
    id: "when-to-seek",
    eyebrow: "When to Seek Care",
    title: "When Is Specialist Sonography Recommended?",
    items: [
      "Persistent or recurrent pelvic pain",
      "Abnormal bleeding or changes in menstruation",
      "Suspicious findings on a prior ultrasound",
      "Follow-up of a known cyst or fibroid",
      "Investigation of infertility",
      "Preoperative assessment",
      "Follow-up after treatment or surgery",
      "Evaluation of endometrial thickness in menopause",
    ],
    note:
      "The appropriate timing for sonography—for example, which day of the cycle—depends on the purpose of the scan.",
  },
  evaluation: {
    id: "evaluation",
    eyebrow: "Evaluation Pathway",
    title: "Sonography Process and Interpretation",
    steps: [
      {
        title: "Review of symptoms and imaging goal",
        description:
          "The reason for the scan, patient symptoms, and medical history are reviewed.",
      },
      {
        title: "Performing the sonography",
        description:
          "The uterus, ovaries, and other pelvic structures are evaluated using the appropriate technique.",
      },
      {
        title: "Recording and reviewing findings",
        description:
          "The size, shape, and characteristics of organs and lesions are documented and assessed.",
      },
      {
        title: "Comparison with prior imaging",
        description:
          "When prior ultrasounds are available, changes in size or appearance are compared.",
      },
      {
        title: "Determining the need for follow-up or treatment",
        description:
          "Based on the findings, follow-up, testing, or treatment may be recommended.",
      },
    ],
  },
  doctor: {
    imageSrc: "/assets/images/ovarian-cyst.png",
    imageAlt: "Specialist gynecologic sonography",
    imageFit: "center",
    eyebrow: "Treating Physician",
    title: "Specialist Sonography by Dr. Tahereh Poordast",
    paragraphs: [
      "Dr. Tahereh Poordast is an obstetrician-gynecologist with advanced fellowship training in gynecologic laparoscopy.",
      "Sonography findings are reviewed together with patient symptoms and medical history so an appropriate treatment or follow-up pathway can be selected.",
    ],
    aboutLink: "/en/about",
    appointmentSource: "advanced-sonography-doctor-section",
  },
  preparation: {
    id: "preparation",
    eyebrow: "Before Your Visit",
    title: "What Should You Prepare Before Sonography?",
    checklist: [
      "Previous ultrasound reports",
      "Date of last menstrual period",
      "Relevant laboratory reports",
      "List of current medications",
      "Summary of symptoms and reason for visit",
      "Prior surgical or treatment reports",
    ]
  },
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Common Questions About Advanced Sonography",
    items: [
      {
        id: "pain",
        question: "Does sonography hurt?",
        answer:
          "Sonography is a painless, non-invasive procedure. Mild pressure may be felt in some cases.",
      },
      {
        id: "cycle-day",
        question: "What is the best day of the cycle for sonography?",
        answer:
          "The appropriate timing depends on the purpose of the scan. The physician or clinic will provide guidance when booking.",
      },
      {
        id: "vs-mri",
        question: "What is the difference between sonography and MRI?",
        answer:
          "Both are imaging methods with different applications. In some cases, one or both may be needed for more detailed evaluation.",
      },
      {
        id: "cyst-detection",
        question: "Does sonography show all cysts?",
        answer:
          "Sonography is a useful tool for visualizing many cysts, but interpretation of findings and the need for follow-up should be determined by a physician.",
      },
      {
        id: "documents",
        question: "Should I bring prior ultrasound reports?",
        answer:
          "Yes. Prior ultrasounds help compare changes and support more accurate decision-making.",
      },
      {
        id: "appointment",
        question: "How do I book an appointment?",
        answer:
          "Visits with Dr. Tahereh Poordast are booked on Axon. Doctoreto usually offers earlier slots handled by her colleagues in consultation with her.",
      },
    ],
  },
  relatedServices: {
    title: "Related Services",
    items: [
      { label: "Gynecologic Consultation", href: "/en/services/gynecologic-consultation", description: "Evaluation and treatment of common women's health concerns" },
      { label: "Ovarian Cyst", href: "/en/services/ovarian-cyst", description: "Diagnosis and treatment of ovarian cyst types" },
      { label: "Endometriosis", href: "/en/services/endometriosis", description: "Specialist diagnosis and treatment of endometriosis" },
    ],
  },
  finalCta: {
    title: "Book an evaluation appointment for specialist sonography",
    description:
      "For a visit with Dr. Tahereh Poordast, book on Axon. Doctoreto appointments are usually earlier and handled by her colleagues.",
    cta: {
      text: "View open appointments",
      source: "advanced-sonography-final-cta",
    },
  },
};
