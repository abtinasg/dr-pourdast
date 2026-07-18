/**
 * Hysteroscopy service page content.
 *
 * All medical content on this page must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */
var HYSTEROSCOPY_PAGE = {
  slug: "hysteroscopy",
  route: "/en/services/hysteroscopy",
  seo: {
    title: "Hysteroscopy in Shiraz | Dr. Tahereh Pordast",
    description:
      "Learn about diagnostic and operative hysteroscopy, its applications, the evaluation pathway, and general pre-visit considerations by Dr. Tahereh Pordast, obstetrician-gynecologist and advanced fellowship-trained gynecologic laparoscopist in Shiraz.",
    canonical: "https://drpourdast.ir/en/services/hysteroscopy",
    ogImage: "/assets/images/og-hysteroscopy.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Specialist Services", href: "/en/services" },
    { label: "Hysteroscopy", href: "/en/services/hysteroscopy" },
  ],
  hero: {
    eyebrow: "Evaluation and Treatment of Intrauterine Conditions",
    title: "Diagnostic and Operative Hysteroscopy",
    description:
      "Hysteroscopy is a procedure to visualize the inside of the uterus and may be used to evaluate or treat certain uterine conditions. Whether this approach is appropriate depends on symptoms, imaging results, medical history, and each patient's individual circumstances.",
    primaryCta: {
      text: "View open appointments",
      source: "hysteroscopy-hero",
    },
    secondaryCta: {
      text: "Learn about the evaluation pathway",
      href: "#hysteroscopy-evaluation",
    },
    trust: [
      "Specialist evaluation of intrauterine conditions",
      "Minimally invasive approach in selected cases",
      "Treatment selected to match each patient's condition",
    ],
  },
  pageNav: [
    { label: "Uses", href: "#applications" },
    { label: "Symptoms", href: "#symptoms" },
    { label: "Evaluation", href: "#evaluation" },
    { label: "Documents", href: "#preparation" },
    { label: "FAQ", href: "#faq" },
  ],
  medicalReview: {
    text: "This content has been prepared or reviewed under the scientific supervision of Dr. Tahereh Pourdast.",
    dateLabel: "Last reviewed: July 2026",
  },
  whatIs: {
    eyebrow: "Understanding the Procedure",
    title: "What Is Hysteroscopy?",
    paragraphs: [
      "In hysteroscopy, a thin camera is passed through the natural cervical opening into the uterine cavity so the physician can examine the inside of the uterus.",
      "The procedure may be performed for diagnostic or therapeutic purposes. The need for hysteroscopy should be determined after reviewing symptoms, ultrasound findings, treatment history, and individual patient factors.",
    ],
    panel: {
      title: "Intrauterine Evaluation",
      points: [
        "Camera inserted through the natural cervical route",
        "Visualization of the uterine cavity",
        "Diagnostic or therapeutic intervention when indicated",
      ],
    },
  },
  methodComparison: {
    eyebrow: "Comparing Procedures",
    title: "What Is the Difference Between Hysteroscopy and Laparoscopy?",
    methods: [
      {
        title: "Hysteroscopy",
        description:
          "Used to visualize and evaluate the inside of the uterus, with instruments introduced through the natural cervical opening.",
        uses: [
          "Evaluation of intrauterine polyps",
          "Evaluation of intrauterine adhesions",
          "Evaluation of certain submucosal fibroids",
          "Assessment of some abnormal bleeding patterns",
        ],
      },
      {
        title: "Laparoscopy",
        description:
          "Used to visualize pelvic organs, with instruments typically introduced through small abdominal incisions.",
        uses: [
          "Evaluation of endometriosis",
          "Evaluation of ovarian cysts",
          "Evaluation of pelvic adhesions",
          "Surgery for certain uterine and ovarian conditions",
        ],
      },
    ],
    note:
      "In some patients, one of these approaches or a combination of evaluations may be recommended based on medical circumstances. The choice should be made by a physician.",
    link: {
      text: "View the gynecologic laparoscopy page",
      href: "/en/services/gynecologic-laparoscopy",
    },
  },
  applications: {
    id: "applications",
    eyebrow: "Common Applications",
    title: "When May Hysteroscopy Be Used?",
    items: [
      "Evaluation of intrauterine polyps",
      "Evaluation of certain submucosal fibroids",
      "Evaluation of intrauterine adhesions",
      "Assessment of some abnormal uterine bleeding",
      "Evaluation of certain intrauterine abnormalities",
      "Removal of selected foreign bodies or tissue inside the uterus",
    ],
    note:
      "Having one of these conditions alone does not mean hysteroscopy is definitely required. The final decision is made after physician evaluation.",
  },
  symptoms: {
    id: "symptoms",
    eyebrow: "When to Seek Care",
    title: "What Conditions May Require Further Evaluation?",
    items: [
      "Abnormal or irregular uterine bleeding",
      "Bleeding after menopause",
      "Suspicious findings on ultrasound",
      "Suspected intrauterine polyp or fibroid",
      "History of intrauterine adhesions",
      "Certain fertility-related concerns",
      "Retained intrauterine tissue in selected cases",
      "Return of symptoms after prior treatment",
    ],
    note:
      "These symptoms can have different causes, and determining the appropriate evaluation requires physician assessment.",
  },
  evaluation: {
    id: "evaluation",
    eyebrow: "Evaluation Pathway",
    title: "Evaluation Pathway Before Hysteroscopy",
    steps: [
      {
        title: "Review of symptoms and medical history",
        description:
          "Bleeding pattern, pain, pregnancy history, prior treatments, and uterine surgeries are reviewed.",
      },
      {
        title: "Review of ultrasound and records",
        description:
          "Ultrasound results, laboratory tests, pathology reports, and other available medical records are evaluated.",
      },
      {
        title: "Specialist assessment",
        description:
          "Based on the patient's condition, examination or additional evaluation may be recommended.",
      },
      {
        title: "Determining the goal of hysteroscopy",
        description:
          "It is determined whether hysteroscopy will be performed for diagnosis, treatment, or both.",
      },
      {
        title: "Planning the procedure when indicated",
        description:
          "If this approach is selected, required preparation, where the procedure will take place, and follow-up are explained by the care team.",
      },
    ],
  },
  procedureTypes: {
    eyebrow: "Types of Hysteroscopy",
    title: "What Is the Difference Between Diagnostic and Operative Hysteroscopy?",
    panels: [
      {
        title: "Diagnostic hysteroscopy",
        description:
          "Performed to visualize the uterine cavity and investigate the cause of certain symptoms or imaging findings.",
      },
      {
        title: "Operative hysteroscopy",
        description:
          "In some cases, therapeutic steps such as removal of certain polyps, intrauterine fibroids, or adhesions may be performed during the same procedure.",
      },
    ],
    note:
      "The type of procedure, conditions for performance, and need for anesthesia or specialized equipment should be determined individually by the care team.",
  },
  benefitsLimitations: {
    eyebrow: "Informed Decision-Making",
    title: "Benefits and Considerations of Hysteroscopy",
    benefits: {
      title: "Potential Benefits",
      items: [
        "Direct visualization of the uterine cavity",
        "More precise diagnosis of certain intrauterine conditions",
        "Ability to perform some therapeutic steps without abdominal incisions",
        "Targeted biopsy in selected cases",
      ],
    },
    limitations: {
      title: "Considerations and Limitations",
      items: [
        "Not suitable for all uterine conditions",
        "May require anesthesia or therapeutic equipment",
        "Like any medical procedure, it may carry risks",
        "Recovery varies among patients",
        "Additional evaluation or treatment may still be needed",
      ],
    },
    note:
      "Benefits, limitations, and potential risks should be discussed with your physician before the procedure.",
  },
  doctor: {
    imageSrc: "/assets/images/hero2.PNG",
    imageAlt: "Dr. Tahereh Pourdast",
    eyebrow: "Treating Physician",
    title: "Evaluation of Uterine Conditions by Dr. Tahereh Pordast",
    paragraphs: [
      "Dr. Tahereh Pordast is an obstetrician-gynecologist with advanced fellowship training in gynecologic laparoscopy.",
      "During evaluation, patient symptoms, ultrasound findings, treatment history, and medical findings are reviewed so that an appropriate diagnostic or therapeutic approach can be selected when needed.",
    ],
    aboutLink: "/en/about",
    appointmentSource: "hysteroscopy-doctor-section",
  },
  preparation: {
    id: "preparation",
    eyebrow: "Before Your Visit",
    title: "What Records Should You Bring for Initial Evaluation?",
    checklist: [
      "Previous ultrasound reports",
      "Relevant laboratory results",
      "Pathology reports, if available",
      "Prior hysteroscopy or surgical reports",
      "List of current medications",
      "Summary of pregnancy and treatment history",
      "Menstrual cycle information",
      "Timing and severity of abnormal bleeding",
    ],
    guideLink: {
      text: "Complete guide to preparing for your first visit",
      href: "/en/patient-guides/first-visit",
    },
  },
  relatedGuides: {
    eyebrow: "Patient Guides",
    title: "Guides Related to Uterine Evaluation and Treatment",
    items: [
      {
        label: "Preparing for Your First Visit",
        description:
          "Records and information to bring for initial evaluation",
        href: "/en/patient-guides/first-visit",
      },
      {
        label: "General Post-Procedure Care",
        description:
          "General information about follow-up and care after therapeutic procedures",
        href: "/en/patient-guides/after-surgery",
      },
      {
        label: "Understanding Uterine Bleeding Problems",
        description:
          "General information about some causes of abnormal bleeding and the importance of medical evaluation",
        href: "/en/patient-guides/uterine-bleeding",
      },
    ],
  },
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Common Questions About Hysteroscopy",
    items: [
      {
        id: "is-surgery",
        question: "Is hysteroscopy a surgical procedure?",
        answer:
          "Hysteroscopy may be performed for diagnostic or therapeutic purposes. The type of procedure and how it is performed depend on the patient's condition and the physician's decision.",
      },
      {
        id: "vs-laparoscopy",
        question: "What is the difference between hysteroscopy and laparoscopy?",
        answer:
          "Hysteroscopy is used to visualize the inside of the uterus, whereas laparoscopy is used to visualize pelvic organs through small abdominal incisions.",
      },
      {
        id: "anesthesia",
        question: "Does hysteroscopy require anesthesia?",
        answer:
          "Depending on the type of hysteroscopy, the goal of the procedure, and the patient's condition, different forms of local anesthesia or general anesthesia may be used. The final decision is made by the care team.",
      },
      {
        id: "polyps-fibroids",
        question: "Are all polyps or fibroids treated with hysteroscopy?",
        answer:
          "No. The size, location, and type of lesion are important in selecting treatment, and not all cases are suitable for hysteroscopy.",
      },
      {
        id: "recovery",
        question: "How long is recovery after hysteroscopy?",
        answer:
          "Recovery depends on the type of procedure, extent of treatment, and the patient's overall condition. The exact timeline for returning to activity should be determined by your physician.",
      },
      {
        id: "documents",
        question: "What records should I bring to my first appointment?",
        answer:
          "It is best to bring ultrasound reports, laboratory results, pathology reports, treatment history, and a list of current medications.",
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
      { label: "Uterine Fibroid", href: "/en/services/uterine-fibroid", description: "Evaluation of uterine fibroids and treatment options" },
      { label: "Gynecologic Laparoscopy", href: "/en/services/gynecologic-laparoscopy", description: "Minimally invasive surgery for pelvic conditions" },
      { label: "Uterine and Pelvic Adhesions", href: "/en/services/pelvic-adhesion", description: "Assessment of pelvic pain and adhesion-related issues" },
    ],
  },
  finalCta: {
    title: "Book an evaluation appointment to discuss hysteroscopy",
    description:
      "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: {
      text: "View open appointments",
      source: "hysteroscopy-final-cta",
    },
  },
};
