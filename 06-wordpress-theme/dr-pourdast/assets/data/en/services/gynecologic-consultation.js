/**
 * Gynecologic consultation service page content.
 *
 * All medical content on this page must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */
var GYNECOLOGIC_CONSULTATION_PAGE = {
  slug: "gynecologic-consultation",
  route: "/en/services/gynecologic-consultation",
  seo: {
    title: "Gynecologic Consultation and Examination in Shiraz | Dr. Tahereh Pordast",
    description:
      "Evaluation and treatment of infections, uterine fibroids, menstrual disorders, and other common women's health concerns through specialist consultation and examination by Dr. Tahereh Pordast in Shiraz.",
    canonical: "https://drpourdast.ir/en/services/gynecologic-consultation",
    ogImage: "/assets/images/og-gynecologic-consultation.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Specialist Services", href: "/en/services" },
    { label: "Gynecologic Consultation and Examination", href: "/en/services/gynecologic-consultation" },
  ],
  hero: {
    eyebrow: "Evaluation and Treatment of Women's Health Concerns",
    title: "Gynecologic Consultation and Examination",
    description:
      "Gynecologic consultation and examination is often the starting point for evaluating many common women's health concerns. During this visit, symptoms, medical history, and prior findings are reviewed so an appropriate treatment pathway can be determined.",
    primaryCta: {
      text: "View open appointments",
      source: "gynecologic-consultation-hero",
    },
    secondaryCta: {
      text: "Learn about the evaluation pathway",
      href: "#evaluation",
    },
    trust: [
      "Specialist evaluation of women's health concerns",
      "Review of symptoms and medical history",
      "Treatment pathway selected to match each patient's condition",
    ],
  },
  pageNav: [
    { label: "Conditions", href: "#conditions" },
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
    eyebrow: "Understanding the Service",
    title: "What Is Gynecologic Consultation and Examination?",
    paragraphs: [
      "Gynecologic consultation and examination includes reviewing symptoms, performing a clinical examination when indicated, and evaluating the patient's medical history. The goal of this visit is to identify the cause of the problem and determine whether further testing, imaging, or treatment is needed.",
      "Many women's health concerns—such as infections, menstrual disorders, pelvic pain, and uterine fibroids—are often first evaluated in this setting, and a treatment or follow-up plan is determined based on the findings.",
    ],
    panel: {
      title: "Focus of Evaluation",
      points: [
        "Review of symptoms and history",
        "Specialist gynecologic examination",
        "Determining the need for testing or imaging",
      ],
    },
  },
  conditions: {
    id: "conditions",
    eyebrow: "Conditions Evaluated",
    title: "What Is Reviewed During a Gynecologic Consultation?",
    categories: [
      {
        title: "Gynecologic infections",
        description:
          "Evaluation of symptoms, examination, and when indicated sampling or treatment of vaginal and pelvic infections.",
      },
      {
        title: "Menstrual disorders",
        description:
          "Assessment of irregular periods, abnormal bleeding, painful menstruation, and cycle-related changes.",
        link: {
          text: "Guide to uterine bleeding",
          href: "/en/patient-guides/uterine-bleeding",
        },
      },
      {
        title: "Uterine fibroids",
        description:
          "Evaluation of symptoms, fibroid size and location, and determination of the need for follow-up or treatment.",
        link: {
          text: "View the uterine fibroid page",
          href: "/en/services/uterine-fibroid",
        },
      },
      {
        title: "Pelvic pain and chronic conditions",
        description:
          "Assessment of pelvic pain, possible endometriosis, and other causes related to the patient's symptoms.",
        link: {
          text: "View the endometriosis page",
          href: "/en/services/endometriosis",
        },
      },
    ],
    note:
      "Final diagnosis and treatment selection should be made after a complete examination and physician review.",
  },
  whenEvaluate: {
    id: "when-to-seek",
    eyebrow: "When to Seek Care",
    title: "When Should You See a Gynecologist?",
    items: [
      "Persistent or recurrent pelvic pain or discomfort",
      "Changes in menstrual pattern or abnormal bleeding",
      "Infection symptoms such as discharge, itching, or odor",
      "Pain during intercourse",
      "Sensation of a pelvic mass or pressure",
      "Fertility concerns or pregnancy planning",
      "Abnormal findings on ultrasound",
      "Follow-up after prior treatment or surgery",
    ],
    note:
      "Even when symptoms are not severe, timely evaluation can help with early diagnosis and appropriate treatment.",
  },
  evaluation: {
    id: "evaluation",
    eyebrow: "Evaluation Pathway",
    title: "What Happens During a Gynecologic Consultation?",
    steps: [
      {
        title: "Review of symptoms and history",
        description:
          "The type of symptoms, time of onset, pregnancy history, prior surgeries, and previous treatments are reviewed.",
      },
      {
        title: "Specialist examination",
        description:
          "When indicated, a clinical examination is performed for more detailed assessment.",
      },
      {
        title: "Review of records and imaging",
        description:
          "Previous ultrasounds, laboratory results, and reports are reviewed when available.",
      },
      {
        title: "Determining the need for additional testing",
        description:
          "Based on the findings, laboratory testing, ultrasound, or referral for further specialist evaluation may be recommended.",
      },
      {
        title: "Planning treatment or follow-up",
        description:
          "Treatment options—medical, non-surgical, or surgical when needed—are explained.",
      },
    ],
  },
  treatmentApproach: {
    eyebrow: "Treatment Approach",
    title: "Do All Women's Health Problems Require Surgery?",
    intro: [
      "No. Many women's health concerns can be managed with medication, follow-up, or outpatient care.",
      "Surgery is considered only when other treatments are insufficient or the patient's condition requires a surgical approach.",
    ],
    benefits: {
      title: "Non-surgical treatments",
      items: [
        "Medication for infections",
        "Menstrual regulation and bleeding control",
        "Follow-up of small fibroids or cysts",
        "Counseling and preventive care",
      ],
    },
    limitations: {
      title: "When further evaluation is needed",
      items: [
        "No improvement with initial treatment",
        "Severe or persistent bleeding",
        "Pelvic pain resistant to treatment",
        "Suspicious findings on imaging",
        "Need for minimally invasive or specialist surgery",
      ],
    },
    note:
      "The choice of treatment should be made individually after a complete evaluation.",
  },
  doctor: {
    imageSrc: "/assets/images/hero.jpg",
    imageAlt: "Dr. Tahereh Pourdast, obstetrician-gynecologist",
    eyebrow: "Treating Physician",
    title: "Specialist Gynecologic Consultation by Dr. Tahereh Pordast",
    paragraphs: [
      "Dr. Tahereh Pordast is an obstetrician-gynecologist with advanced fellowship training in gynecologic laparoscopy.",
      "During consultation visits, patient symptoms, medical history, and prior findings are carefully reviewed so an appropriate treatment pathway can be selected.",
    ],
    aboutLink: "/en/about",
    appointmentSource: "gynecologic-consultation-doctor-section",
  },
  preparation: {
    id: "preparation",
    eyebrow: "Before Your Visit",
    title: "What Records Should You Bring to Your Consultation?",
    checklist: [
      "Previous ultrasound reports",
      "Relevant laboratory results",
      "Pathology reports, if available",
      "Prior surgical or treatment reports",
      "List of current medications",
      "Date of last menstrual period",
      "Summary of symptoms and when they began",
    ],
    guideLink: {
      text: "Complete guide to preparing for your first visit",
      href: "/en/patient-guides/first-visit",
    },
  },
  relatedGuides: {
    eyebrow: "Patient Guides",
    title: "Related Guides",
    items: [
      {
        label: "Preparing for Your First Visit",
        description:
          "Records and information to bring for initial evaluation",
        href: "/en/patient-guides/first-visit",
      },
      {
        label: "Understanding Abnormal Bleeding",
        description:
          "General information about some causes of abnormal bleeding and the importance of medical evaluation",
        href: "/en/patient-guides/uterine-bleeding",
      },
      {
        label: "Important Points Before Your Visit",
        description:
          "Information that helps support faster and more accurate diagnosis",
        href: "/en/patient-guides/first-visit",
      },
    ],
  },
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Common Questions About Gynecologic Consultation",
    items: [
      {
        id: "first-visit",
        question: "What happens at the first visit?",
        answer:
          "Symptoms and medical history are reviewed first. An examination is performed when indicated, and a treatment or follow-up plan is determined based on the findings.",
      },
      {
        id: "exam-needed",
        question: "Is an examination always required?",
        answer:
          "Whether an examination is needed depends on the type of symptoms and the patient's condition. The physician decides after the initial review.",
      },
      {
        id: "ultrasound",
        question: "Is ultrasound performed during the same visit?",
        answer:
          "Depending on circumstances and clinic scheduling, ultrasound may be performed the same day or at another time.",
      },
      {
        id: "period",
        question: "Can I come during my menstrual period?",
        answer:
          "In many cases, visits during menstruation are possible, but it is best to ask the clinic for guidance when booking.",
      },
      {
        id: "documents",
        question: "What records should I bring to the first visit?",
        answer:
          "It is best to bring ultrasound reports, laboratory results, prior reports, and a list of current medications.",
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
      { label: "Advanced Sonography", href: "/en/services/advanced-sonography", description: "Specialist evaluation of the uterus, ovaries, and pelvic findings" },
      { label: "Uterine Fibroid", href: "/en/services/uterine-fibroid", description: "Evaluation of uterine fibroids and selection of an appropriate treatment pathway" },
      { label: "Endometriosis", href: "/en/services/endometriosis", description: "Specialist diagnosis and treatment of endometriosis" },
    ],
  },
  finalCta: {
    title: "Book an evaluation appointment for gynecologic consultation",
    description:
      "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: {
      text: "View open appointments",
      source: "gynecologic-consultation-final-cta",
    },
  },
};
