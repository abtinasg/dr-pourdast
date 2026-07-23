/**
 * Endometriosis service page content.
 *
 * All medical content on this page must be reviewed and approved
 * by the doctor before publication.
 *
 * WordPress-ready fields: service_title, service_description, hero_image,
 * symptoms, diagnosis_steps, treatment_options, doctor_section,
 * visit_checklist, faqs, related_services, seo_title, seo_description
 */
var ENDOMETRIOSIS_PAGE = {
  slug: "endometriosis",
  route: "/en/services/endometriosis",
  seo: {
    title: "Endometriosis Treatment in Shiraz | Dr. Tahereh Poordast",
    description:
      "Learn about endometriosis symptoms, diagnosis, and treatment options, with a focus on specialist evaluation and minimally invasive gynecologic surgery by Dr. Tahereh Poordast in Shiraz.",
    canonical: "https://drpourdast.ir/en/services/endometriosis",
    ogImage: "/assets/images/og-endometriosis.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Specialist Services", href: "/en/services" },
    { label: "Endometriosis", href: "/en/services/endometriosis" },
  ],
  hero: {
    eyebrow: "Gynecologic Specialist Services",
    title: "Specialist Diagnosis and Treatment of Endometriosis",
    description:
      "Endometriosis is a common gynecologic condition that may involve pelvic pain, painful periods, and fertility concerns. Treatment depends on symptoms, evaluation findings, and each patient's circumstances.",
    primaryCta: {
      text: "View open appointments",
      source: "endometriosis-hero",
    },
    secondaryCta: {
      text: "Learn about the treatment pathway",
      href: "#diagnosis-and-treatment",
    },
    trust: [
      "Specialist endometriosis evaluation",
      "Fellowship in gynecologic laparoscopy",
      "Treatment approach tailored to each patient",
    ],
  },
  pageNav: [
    { label: "Symptoms", href: "#symptoms" },
    { label: "When to seek care", href: "#when-to-seek" },
    { label: "Diagnosis", href: "#diagnosis" },
    { label: "Treatment", href: "#treatment" },
    { label: "Documents", href: "#preparation" },
    { label: "FAQ", href: "#faq" },
  ],
  medicalReview: {
    text: "This content has been prepared or reviewed under the scientific supervision of Dr. Tahereh Poordast.",
    dateLabel: "Last reviewed: July 2026",
  },
  whatIs: {
    eyebrow: "Understanding the Condition",
    title: "What Is Endometriosis?",
    paragraphs: [
      "Endometriosis develops when tissue similar to the uterine lining grows outside the uterus. It may appear on the ovaries, fallopian tubes, or other pelvic areas and can cause pain, inflammation, or fertility problems in some patients.",
      "Symptom severity does not always match the extent of disease. Some patients may have severe symptoms, while others with significant involvement may experience only limited symptoms.",
    ],
  },
  symptoms: {
    id: "symptoms",
    eyebrow: "Common Symptoms",
    title: "What Symptoms May Be Associated with Endometriosis?",
    items: [
      "Very painful periods",
      "Chronic pelvic pain",
      "Pain during intercourse",
      "Pain with bowel movements or urination during some cycles",
      "Fertility concerns",
      "Fatigue or related gastrointestinal discomfort",
    ],
    note:
      "Having these symptoms alone does not mean you have endometriosis. Diagnosis requires evaluation by a physician.",
  },
  whenToSeek: {
    id: "when-to-seek",
    eyebrow: "When to Seek Care",
    title: "When should you seek evaluation for endometriosis?",
    items: [
      "Severe, recurring menstrual pain",
      "Pelvic pain that interferes with daily activities",
      "Pain during intercourse",
      "History of infertility or difficulty conceiving",
      "Ovarian cysts suspicious for endometrioma",
      "Return of symptoms after previous treatment or surgery",
    ],
    note:
      "Determining the cause of symptoms and selecting the appropriate evaluation should be done by a physician.",
  },
  diagnosis: {
    id: "diagnosis",
    eyebrow: "Evaluation Pathway",
    title: "How Is Endometriosis Evaluated?",
    steps: [
      {
        title: "Review of symptoms and medical history",
        description:
          "Pain severity, symptom onset, treatment history, and fertility status are reviewed.",
      },
      {
        title: "Review of records and imaging",
        description:
          "Ultrasound, MRI, laboratory results, and prior surgical reports are evaluated when available.",
      },
      {
        title: "Specialist examination and assessment",
        description:
          "Based on the patient's condition, examination and additional evaluation may be recommended.",
      },
      {
        title: "Determining the treatment pathway",
        description:
          "After reviewing all information, treatment options appropriate to the patient's condition are discussed.",
      },
    ],
  },
  treatment: {
    id: "treatment",
    eyebrow: "Treatment Options",
    title: "How Is Endometriosis Treatment Selected?",
    options: [
      {
        title: "Monitoring and symptom management",
        description:
          "In some patients, depending on symptom severity and individual circumstances, monitoring or symptom control may be part of the treatment pathway.",
      },
      {
        title: "Medical therapy",
        description:
          "Certain medications may be considered to reduce symptoms or control disease activity. Medication selection should be made by a physician.",
      },
      {
        title: "Laparoscopic surgery",
        description:
          "In some cases, minimally invasive laparoscopic surgery may be considered to evaluate or treat endometriosis lesions.",
      },
    ],
    note:
      "Not all patients with endometriosis require surgery. Treatment selection depends on symptoms, location of involvement, age, fertility status, and prior treatment history.",
  },
  whySpecialized: {
    eyebrow: "Specialist Evaluation",
    title: "Why Is Thorough Endometriosis Evaluation Important?",
    points: [
      "Symptoms vary among patients",
      "Pain severity does not always reflect the extent of disease",
      "Surgery is not the first option for every patient",
      "Treatment should be chosen with fertility status and patient goals in mind",
    ],
  },
  doctor: {
    imageSrc: "/assets/images/endometriosis.png",
    imageAlt: "Specialized endometriosis evaluation in clinic",
    imageFit: "center",
    title: "Endometriosis Evaluation by Dr. Tahereh Poordast",
    paragraphs: [
      "Dr. Tahereh Poordast is an obstetrician-gynecologist with advanced fellowship training in gynecologic laparoscopy, specializing in the evaluation and treatment of gynecologic conditions and minimally invasive surgery.",
      "During your visit, symptoms, medical records, imaging studies, and treatment history are reviewed so that an individualized treatment pathway can be selected.",
    ],
    aboutLink: "/en/about",
    appointmentSource: "endometriosis-doctor-section",
  },
  /**
   * All academic and research information must be provided or approved
   * by Dr. Tahereh Poordast before publication.
   * Section hidden when items array is empty.
   *
   * @type {{ eyebrow: string, title: string, items: Array<{title: string, category: string, year: string, href?: string, external?: boolean, verified: boolean}> }}
   */
  research: {
    eyebrow: "Academic Activity",
    title: "Research and Education in Gynecologic Conditions",
    items: [],
  },
  preparation: {
    id: "preparation",
    eyebrow: "Before Your Visit",
    title: "What Records Should You Bring to Your First Appointment?",
    checklist: [
      "Previous ultrasound reports",
      "MRI reports, if available",
      "Relevant laboratory results",
      "Prior surgical reports",
      "List of current medications",
      "Summary of treatment history",
      "Information about menstrual cycle and symptom onset",
    ]
  },
  /**
   * Patient guide links only — no detailed instructions on this page.
   * All guide content must be reviewed and approved by the doctor.
   */
  faqs: [
    {
      id: "pain-period",
      question: "Is severe menstrual pain always a sign of endometriosis?",
      answer:
        "No. Severe menstrual pain can have many causes. Diagnosing endometriosis requires review of symptoms, medical history, and physician evaluation.",
    },
    {
      id: "infertility",
      question: "Does endometriosis cause infertility?",
      answer:
        "Endometriosis may affect fertility in some patients, but not everyone with the condition experiences infertility. Each patient's situation should be evaluated individually.",
    },
    {
      id: "laparoscopy",
      question: "Do all patients need laparoscopy?",
      answer:
        "No. The need for surgery depends on symptom severity, imaging findings, fertility status, and response to prior treatments.",
    },
    {
      id: "recurrence",
      question: "Can endometriosis return after treatment?",
      answer:
        "In some patients, symptoms or disease may recur. Follow-up and an appropriate long-term management plan can be part of ongoing care.",
    },
    {
      id: "ultrasound",
      question: "Can endometriosis be diagnosed with ultrasound?",
      answer:
        "Ultrasound can help evaluate certain types of involvement or related cysts, but results should be interpreted alongside symptoms and other assessments.",
    },
    {
      id: "appointment",
      question: "How do I book an appointment?",
      answer:
        "Visits with Dr. Tahereh Poordast are booked on Axon. Doctoreto usually offers earlier slots handled by her colleagues in consultation with her.",
    },
  ],
  relatedServices: {
    title: "Related Services",
    items: [
      { label: "Gynecologic Laparoscopy", href: "/en/services/gynecologic-laparoscopy", description: "Minimally invasive surgery for pelvic conditions" },
      { label: "Ovarian Cyst", href: "/en/services/ovarian-cyst", description: "Evaluation of cyst types and treatment pathways" },
      { label: "Pelvic Adhesions", href: "/en/services/pelvic-adhesion", description: "Assessment of pelvic pain and adhesion-related issues" },
    ],
  },
  finalCta: {
    title: "Book a visit for an accurate evaluation of your symptoms",
    description:
      "Choose a suitable time on Axon for a visit with the doctor, or on Doctoreto for an earlier slot with her colleagues.",
    cta: {
      text: "View open appointments",
      source: "endometriosis-final-cta",
    },
  },
};
