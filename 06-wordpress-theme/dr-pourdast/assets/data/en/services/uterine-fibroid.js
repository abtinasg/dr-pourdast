/**
 * Uterine fibroid service page content.
 *
 * All medical content on this page must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */
var UTERINE_FIBROID_PAGE = {
  slug: "uterine-fibroid",
  route: "/en/services/uterine-fibroid",
  seo: {
    title: "Uterine Fibroid Treatment in Shiraz | Dr. Tahereh Pordast",
    description:
      "Learn about uterine fibroid symptoms, types, evaluation methods, and treatment options, with a focus on specialist assessment and minimally invasive gynecologic surgery by Dr. Tahereh Pordast in Shiraz.",
    canonical: "https://drpourdast.ir/en/services/uterine-fibroid",
    ogImage: "/assets/images/og-uterine-fibroid.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Specialist Services", href: "/en/services" },
    { label: "Uterine Fibroid", href: "/en/services/uterine-fibroid" },
  ],
  hero: {
    eyebrow: "Evaluation and Treatment of Uterine Conditions",
    title: "Diagnosis and Treatment of Uterine Fibroids",
    description:
      "Uterine fibroids are among the most common benign tumors in women. Many fibroids cause no symptoms, but some may lead to bleeding, pain, or fertility concerns and require evaluation or treatment.",
    primaryCta: {
      text: "View open appointments",
      source: "uterine-fibroid-hero",
    },
    secondaryCta: {
      text: "Learn about the evaluation pathway",
      href: "#uterine-fibroid-evaluation",
    },
    trust: [
      "Specialist uterine fibroid evaluation",
      "Review of non-surgical and surgical options",
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
  video: {
    src: "/assets/videos/fibrom.mp4",
    poster: "/assets/images/fibrom-poster.jpg",
    label: "Uterine fibroid treatment introduction video",
    eyebrow: "Video",
    title: "A brief look at uterine fibroids",
  },
  whatIs: {
    eyebrow: "Understanding the Condition",
    title: "What Is a Uterine Fibroid?",
    paragraphs: [
      "A uterine fibroid (myoma) is a benign tumor that develops from the muscle of the uterus. Size, number, and location of fibroids vary among patients, and not all fibroids require treatment.",
      "Fibroid type, symptoms, patient age, pregnancy plans, and imaging findings are important in selecting monitoring or treatment.",
    ],
    video: {
      src: "/assets/videos/fibrom.mp4",
      poster: "/assets/images/fibrom-poster.jpg",
      label: "Uterine fibroid treatment introduction video",
    },
    panel: {
      title: "Key Points in Evaluation",
      points: [
        "Fibroid types based on location in the uterus",
        "Importance of symptoms and size",
        "Assessment of impact on fertility",
      ],
    },
  },
  categories: {
    eyebrow: "Types of Fibroids",
    title: "What Types of Uterine Fibroids Exist?",
    categories: [
      {
        title: "Intracavitary fibroid",
        description:
          "Located inside the uterine cavity and may be associated with bleeding or fertility concerns.",
      },
      {
        title: "Submucosal fibroid",
        description:
          "Located beneath the endometrial lining and may sometimes cause heavy bleeding.",
      },
      {
        title: "Intramural fibroid",
        description:
          "Located within the uterine muscle wall and may cause varying symptoms depending on size.",
      },
      {
        title: "Subserosal fibroid",
        description:
          "Located on the outer surface of the uterus and in some cases may create pressure on nearby organs.",
      },
    ],
    note:
      "Determining fibroid type and location requires physician evaluation and imaging.",
  },
  symptoms: {
    id: "symptoms",
    eyebrow: "Common Symptoms",
    title: "What Symptoms May Be Associated with Uterine Fibroids?",
    items: [
      "Heavy or prolonged menstrual bleeding",
      "Abnormal bleeding between periods",
      "Pelvic pain or pressure",
      "Frequent urination",
      "Constipation or abdominal pressure",
      "Back pain",
      "No symptoms and incidental discovery on ultrasound",
    ],
    note:
      "Having these symptoms alone does not mean you have a fibroid. Their cause should be evaluated by a physician.",
  },
  whenEvaluate: {
    id: "when-to-seek",
    eyebrow: "When to Seek Care",
    title: "When Should Uterine Fibroids Be Evaluated?",
    items: [
      "Heavy or prolonged menstrual bleeding",
      "Abnormal uterine bleeding",
      "Persistent or recurring pelvic pain",
      "Fibroid enlargement on follow-up",
      "Fertility concerns or pregnancy planning",
      "Symptoms of bladder or bowel pressure",
      "Fibroid seen on ultrasound",
    ],
    note:
      "The evaluation approach and follow-up interval should be determined based on symptoms, fibroid size, and patient circumstances.",
  },
  evaluation: {
    id: "evaluation",
    eyebrow: "Evaluation Pathway",
    title: "How Are Uterine Fibroids Evaluated?",
    steps: [
      {
        title: "Review of symptoms and history",
        description:
          "Bleeding pattern, pain, pregnancy history, and prior treatments are reviewed.",
      },
      {
        title: "Review of imaging",
        description:
          "Previous ultrasounds, fibroid size and location, and changes over time are evaluated.",
      },
      {
        title: "Assessment of individual circumstances",
        description:
          "Age, pregnancy plans, and overall health are important in decision-making.",
      },
      {
        title: "Determining need for follow-up or treatment",
        description:
          "Based on findings, monitoring, medical therapy, or surgical evaluation may be recommended.",
      },
      {
        title: "Review of appropriate treatment approach",
        description:
          "Hysteroscopy, laparoscopy, or other approaches may be considered depending on fibroid type.",
      },
    ],
  },
  treatmentPathways: {
    eyebrow: "Selecting Treatment",
    title: "What Are the Treatment Options for Uterine Fibroids?",
    intro: [
      "Fibroid treatment depends on size, location, symptoms, and patient goals. Not all fibroids require surgery.",
      "Some patients may need regular monitoring, others medical therapy, and in selected cases minimally invasive surgical approaches may be considered.",
    ],
    benefits: {
      title: "Monitoring and non-surgical treatment",
      items: [
        "Tracking changes in fibroid size",
        "Symptom control in selected cases",
        "Evaluation of medical therapy",
        "Determining when intervention is needed",
      ],
    },
    limitations: {
      title: "When surgery may be considered",
      items: [
        "Heavy bleeding or treatment-resistant bleeding",
        "Significant pain or pressure",
        "Rapid fibroid growth",
        "Related fertility concerns",
        "Lack of response to prior treatments",
      ],
    },
    note:
      "Treatment selection should be made individually after complete evaluation.",
  },
  laparoscopicSurgery: {
    eyebrow: "Minimally Invasive Surgery",
    title: "Hysteroscopy and Laparoscopy in Fibroid Treatment",
    paragraphs: [
      "Depending on fibroid type and location, hysteroscopy may be considered for intrauterine fibroids, or laparoscopy for certain other fibroids.",
      "The goal of treatment is to reduce symptoms and, when possible, preserve uterine function, but the appropriate approach depends on each patient's condition.",
    ],
    link: {
      text: "Learn about hysteroscopy",
      href: "/en/services/hysteroscopy",
    },
  },
  endometrioma: {
    eyebrow: "Related Conditions",
    title: "Fibroids and Abnormal Bleeding",
    variant: "callout",
    paragraphs: [
      "Uterine fibroids are a common cause of heavy or abnormal uterine bleeding, but they are not the only cause. Complete evaluation is necessary to determine the source of bleeding.",
      "Having a fibroid does not always mean urgent surgery is required.",
    ],
    link: {
      text: "Learn about hysteroscopy",
      href: "/en/services/hysteroscopy",
    },
  },
  doctor: {
    imageSrc: "/assets/images/hero2.PNG",
    imageAlt: "Dr. Tahereh Pourdast",
    eyebrow: "Treating Physician",
    title: "Uterine Fibroid Evaluation by Dr. Tahereh Pordast",
    paragraphs: [
      "Dr. Tahereh Pordast is an obstetrician-gynecologist with advanced fellowship training in gynecologic laparoscopy.",
      "During fibroid evaluation, symptoms, imaging findings, treatment history, and fertility status are reviewed to select the appropriate approach.",
    ],
    aboutLink: "/en/about",
    appointmentSource: "uterine-fibroid-doctor-section",
  },
  preparation: {
    id: "preparation",
    eyebrow: "Before Your Visit",
    title: "What Records Should You Bring for Uterine Fibroid Evaluation?",
    checklist: [
      "Previous ultrasound reports",
      "MRI reports, if available",
      "Laboratory results related to bleeding",
      "Prior surgical or hysteroscopy reports",
      "List of current medications",
      "Summary of menstrual pattern and bleeding",
      "Pregnancy history when relevant",
    ],
    guideLink: {
      text: "Complete guide to preparing for your first visit",
      href: "/en/patient-guides/first-visit",
    },
  },
  relatedGuides: {
    eyebrow: "Patient Guides",
    title: "Guides Related to Uterine Fibroids",
    items: [
      {
        label: "Preparing for Your First Visit",
        description: "Records and information needed for initial evaluation",
        href: "/en/patient-guides/first-visit",
      },
      {
        label: "Understanding Abnormal Uterine Bleeding",
        description: "General information about when to seek evaluation",
        href: "/en/patient-guides/uterine-bleeding",
      },
      {
        label: "General Post-Surgery Care",
        description: "Follow-up and care after therapeutic procedures",
        href: "/en/patient-guides/after-surgery",
      },
    ],
  },
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Common Questions About Uterine Fibroids",
    items: [
      {
        id: "cancer",
        question: "Are uterine fibroids cancerous?",
        answer:
          "Uterine fibroids are usually benign tumors. However, any new uterine finding should be evaluated by a physician.",
      },
      {
        id: "surgery-needed",
        question: "Do all fibroids require surgery?",
        answer:
          "No. Many fibroids cause no symptoms and may require only monitoring.",
      },
      {
        id: "infertility",
        question: "Do uterine fibroids cause infertility?",
        answer:
          "In some cases, especially depending on location and size, fibroids may affect fertility. This should be evaluated individually.",
      },
      {
        id: "hysteroscopy",
        question: "Can fibroids be treated with hysteroscopy?",
        answer:
          "Some intrauterine fibroids may be evaluated or treated with hysteroscopy. The choice of approach depends on fibroid type and location.",
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
      { label: "Hysteroscopy", href: "/en/services/hysteroscopy", description: "Minimally invasive assessment and treatment inside the uterus" },
      { label: "Gynecologic Laparoscopy", href: "/en/services/gynecologic-laparoscopy", description: "Minimally invasive surgery for pelvic conditions" },
      { label: "Endometriosis", href: "/en/services/endometriosis", description: "Specialized evaluation and treatment of endometriosis" },
    ],
  },
  finalCta: {
    title: "Book an evaluation appointment for uterine fibroid assessment",
    description:
      "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: {
      text: "View open appointments",
      source: "uterine-fibroid-final-cta",
    },
  },
};
