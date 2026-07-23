/**
 * Gynecologic laparoscopy service page content.
 *
 * All medical content on this page must be reviewed and approved
 * by Dr. Tahereh Poordast before publication.
 */
var LAPAROSCOPY_PAGE = {
  slug: "gynecologic-laparoscopy",
  route: "/en/services/gynecologic-laparoscopy",
  seo: {
    title: "Gynecologic Laparoscopy in Shiraz | Dr. Tahereh Poordast",
    description:
      "Learn about gynecologic laparoscopy applications, the evaluation pathway, pre-operative preparation, and general post-operative care by Dr. Tahereh Poordast, advanced fellowship-trained gynecologic laparoscopist in Shiraz.",
    canonical: "https://drpourdast.ir/en/services/gynecologic-laparoscopy",
    ogImage: "/assets/images/og-laparoscopy.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Specialist Services", href: "/en/services" },
    { label: "Gynecologic Laparoscopy", href: "/en/services/gynecologic-laparoscopy" },
  ],
  hero: {
    eyebrow: "Minimally Invasive Gynecologic Surgery",
    title: "Advanced Gynecologic Laparoscopy",
    description:
      "Laparoscopy is a minimally invasive surgical approach that may be used to evaluate or treat certain gynecologic conditions. The decision to proceed with surgery is made after reviewing symptoms, imaging, treatment history, and each patient's individual circumstances.",
    primaryCta: {
      text: "View open appointments",
      source: "laparoscopy-hero",
    },
    secondaryCta: {
      text: "Learn about evaluation and surgery",
      href: "#evaluation-and-surgery",
    },
    trust: [
      "Advanced fellowship in gynecologic laparoscopy",
      "Evaluation tailored to each patient",
      "Minimally invasive surgery in selected cases",
    ],
  },
  pageNav: [
    { label: "Uses", href: "#applications" },
    { label: "When considered", href: "#when-considered" },
    { label: "Evaluation", href: "#evaluation" },
    { label: "Documents", href: "#preparation" },
    { label: "FAQ", href: "#faq" },
  ],
  medicalReview: {
    text: "This content has been prepared or reviewed under the scientific supervision of Dr. Tahereh Poordast.",
    dateLabel: "Last reviewed: July 2026",
  },
  whatIs: {
    eyebrow: "Understanding the Procedure",
    title: "What Is Gynecologic Laparoscopy?",
    paragraphs: [
      "In laparoscopic surgery, the physician examines pelvic organs through small incisions using a camera and specialized instruments.",
      "This approach may be used to diagnose or treat certain conditions of the uterus, ovaries, fallopian tubes, and pelvic tissues. Whether it is appropriate for each patient must be determined after specialist evaluation.",
    ],
    panel: {
      title: "Minimally Invasive Approach",
      points: [
        "Small incisions in the abdominal wall",
        "Direct visualization of pelvic organs",
        "Diagnostic or therapeutic intervention when indicated",
      ],
    },
  },
  applications: {
    id: "applications",
    eyebrow: "Common Applications",
    title: "When May Gynecologic Laparoscopy Be Used?",
    items: [
      "Evaluation and treatment of endometriosis",
      "Surgery for certain ovarian cysts",
      "Treatment of certain uterine fibroids",
      "Evaluation and treatment of pelvic adhesions",
      "Evaluation of some causes of chronic pelvic pain",
      "Assessment of certain fallopian tube conditions",
    ],
    note:
      "Having one of these conditions alone does not mean laparoscopy is definitely required. The treatment approach is selected after evaluating the patient's condition.",
  },
  whenConsidered: {
    id: "when-considered",
    eyebrow: "When Surgery Is Considered",
    title: "When May Laparoscopy Be Evaluated?",
    items: [
      "Persistent symptoms despite prior treatments",
      "Significant findings on ultrasound or MRI",
      "Ongoing or severe pelvic pain",
      "Certain ovarian cysts or masses",
      "Suspected endometriosis or pelvic adhesions",
      "Need for simultaneous diagnostic and therapeutic evaluation",
    ],
    note:
      "The final decision about surgery should consider symptoms, imaging findings, fertility status, and treatment history.",
  },
  evaluation: {
    id: "evaluation",
    eyebrow: "Visit Pathway",
    title: "Evaluation Pathway Before Deciding on Laparoscopy",
    steps: [
      {
        title: "Review of symptoms and treatment history",
        description:
          "Current symptoms, duration of involvement, prior treatments, and surgical history are reviewed.",
      },
      {
        title: "Review of imaging and laboratory results",
        description:
          "Ultrasound, MRI, laboratory tests, and available medical reports are evaluated.",
      },
      {
        title: "Specialist assessment",
        description:
          "The patient's condition, treatment goals, and fertility status when relevant are reviewed.",
      },
      {
        title: "Review of treatment options",
        description:
          "Non-surgical and surgical approaches are considered based on the patient's condition.",
      },
      {
        title: "Surgical planning when indicated",
        description:
          "If surgery is selected, the type of procedure, required preparation, and follow-up plan are explained by the care team.",
      },
    ],
  },
  benefitsLimitations: {
    eyebrow: "Informed Decision-Making",
    title: "Benefits and Limitations of Laparoscopy",
    benefits: {
      title: "Potential Benefits",
      items: [
        "Surgery through smaller incisions",
        "Direct visualization of pelvic organs",
        "Ability to perform diagnostic and therapeutic steps at the same time",
        "Less tissue trauma compared with some open surgeries",
      ],
    },
    limitations: {
      title: "Considerations and Limitations",
      items: [
        "Not suitable for every patient or every condition",
        "Like any surgery, it may carry risks and complications",
        "Recovery time varies among patients",
        "Intraoperative findings may lead to changes in the treatment plan",
      ],
    },
    note:
      "Benefits, limitations, and potential risks should be discussed individually with your physician before surgery.",
  },
  linkedConditions: {
    eyebrow: "Treatment Areas",
    title: "Conditions That May Be Evaluated or Treated with Laparoscopy",
    items: [
      {
        label: "Endometriosis",
        description:
          "Evaluation and treatment of certain endometriosis lesions and related adhesions",
        href: "/en/services/endometriosis",
      },
      {
        label: "Ovarian Cyst",
        description: "Evaluation and surgery for certain types of ovarian cysts",
        href: "/en/services/ovarian-cyst",
      },
      {
        label: "Uterine Fibroid",
        description: "Evaluation of the appropriate surgical approach for certain uterine fibroids",
        href: "/en/services/uterine-fibroid",
      },
      {
        label: "Pelvic Adhesions",
        description: "Evaluation and treatment of certain intra-pelvic adhesions",
        href: "/en/services/pelvic-adhesion",
      },
    ],
  },
  doctor: {
    imageSrc: "/assets/images/laparoscopy.png",
    imageAlt: "Gynecologic laparoscopy instruments and equipment",
    imageFit: "center",
    eyebrow: "Treating Physician",
    title: "Evaluation and Surgery by Dr. Tahereh Poordast",
    paragraphs: [
      "Dr. Tahereh Poordast is an obstetrician-gynecologist with advanced fellowship training in gynecologic laparoscopy.",
      "During evaluation, symptoms, medical records, imaging findings, prior treatments, and individual circumstances are reviewed to select the most appropriate treatment pathway.",
    ],
    aboutLink: "/en/about",
    appointmentSource: "laparoscopy-doctor-section",
  },
  preparation: {
    id: "preparation",
    eyebrow: "Before Your Visit",
    title: "What Records Should You Bring for Initial Evaluation?",
    checklist: [
      "Recent ultrasound reports",
      "MRI reports, if available",
      "Relevant laboratory results",
      "Prior surgical reports",
      "Pathology reports, if available",
      "List of current medications",
      "Summary of medical and treatment history",
      "Pregnancy or fertility information when relevant",
    ]
  },
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Common Questions About Gynecologic Laparoscopy",
    items: [
      {
        id: "all-diseases",
        question: "Are all gynecologic conditions treated with laparoscopy?",
        answer:
          "No. The choice of surgical approach depends on the type of condition, symptom severity, imaging findings, and the patient's overall health.",
      },
      {
        id: "diagnosis-treatment",
        question: "Is laparoscopy used only for treatment?",
        answer:
          "Laparoscopy may be used for diagnosis, treatment, or both. Its role for each patient is determined after evaluation.",
      },
      {
        id: "anesthesia",
        question: "Does laparoscopy require general anesthesia?",
        answer:
          "Many laparoscopic procedures are performed under general anesthesia, but the type of anesthesia and details should be determined by the surgical and anesthesia team.",
      },
      {
        id: "recovery",
        question: "How long is recovery after laparoscopy?",
        answer:
          "Recovery depends on the type of surgery, extent of the procedure, and the patient's overall condition. The exact timeline for returning to activity should be determined by your physician.",
      },
      {
        id: "conversion",
        question: "Can laparoscopic surgery be converted to open surgery?",
        answer:
          "In some situations, based on intraoperative findings, a change in surgical approach may be necessary. This possibility should be discussed with your physician before the procedure.",
      },
      {
        id: "documents",
        question: "What records should I bring to my first appointment?",
        answer:
          "It is best to bring ultrasound reports, MRI, laboratory results, prior surgical reports, pathology results, and a list of current medications.",
      },
      {
        id: "appointment",
        question: "How do I book an appointment?",
        answer:
          "Visits with Dr. Tahereh Poordast are booked on Axon. Doctoreto usually offers earlier slots handled by her colleagues in consultation with her.",
      },
    ],
  },
  /**
   * All academic and research information must be provided or approved
   * by Dr. Tahereh Poordast before publication.
   */
  research: {
    eyebrow: "Academic Activity",
    title: "Research and Education in Gynecologic Surgery",
    items: [],
  },
  relatedServices: {
    title: "Related Services",
    items: [
      { label: "Endometriosis", href: "/en/services/endometriosis", description: "Specialized evaluation and treatment of endometriosis" },
      { label: "Hysteroscopy", href: "/en/services/hysteroscopy", description: "Minimally invasive assessment and treatment inside the uterus" },
      { label: "Ovarian Cyst", href: "/en/services/ovarian-cyst", description: "Evaluation of cyst types and treatment pathways" },
    ],
  },
  finalCta: {
    title: "Book an evaluation appointment to discuss laparoscopy",
    description:
      "For a visit with Dr. Tahereh Poordast, book on Axon. Doctoreto appointments are usually earlier and handled by her colleagues.",
    cta: {
      text: "View open appointments",
      source: "laparoscopy-final-cta",
    },
  },
};
