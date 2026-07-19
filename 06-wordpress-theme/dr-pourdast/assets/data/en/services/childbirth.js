/**
 * Childbirth service page content.
 *
 * All medical content on this page must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */
var CHILDBIRTH_PAGE = {
  slug: "childbirth",
  route: "/en/services/childbirth",
  seo: {
    title: "Natural Delivery and Cesarean Section in Shiraz | Dr. Tahereh Pordast",
    description:
      "Counseling and selection of the appropriate delivery method—vaginal or cesarean—based on maternal and fetal conditions by Dr. Tahereh Pordast, obstetrician-gynecologist in Shiraz.",
    canonical: "https://drpourdast.ir/en/services/childbirth",
    ogImage: "/assets/images/og-childbirth.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Specialist Services", href: "/en/services" },
    { label: "Childbirth (Vaginal and Cesarean)", href: "/en/services/childbirth" },
  ],
  hero: {
    eyebrow: "Support Throughout the Delivery Journey",
    title: "Vaginal Delivery and Cesarean Section",
    description:
      "The choice of delivery method should be made based on maternal condition, fetal status, pregnancy history, and medical findings. The goal is safe, informed support throughout pregnancy and delivery.",
    primaryCta: {
      text: "View open appointments",
      source: "childbirth-hero",
    },
    secondaryCta: {
      text: "Compare delivery methods",
      href: "#delivery-methods",
    },
    trust: [
      "Pre-delivery counseling",
      "Assessment of maternal and fetal condition",
      "Delivery method selected to match each patient's status",
    ],
  },
  pageNav: [
    { label: "Delivery methods", href: "#delivery-methods" },
    { label: "Prenatal care", href: "#prenatal-care" },
    { label: "Considerations", href: "#considerations" },
    { label: "Documents", href: "#preparation" },
    { label: "FAQ", href: "#faq" },
  ],
  medicalReview: {
    text: "This content has been prepared or reviewed under the scientific supervision of Dr. Tahereh Pourdast.",
    dateLabel: "Last reviewed: July 2026",
  },
  whatIs: {
    eyebrow: "Understanding the Service",
    title: "Counseling and Support for Childbirth",
    paragraphs: [
      "Delivery may occur through vaginal birth or cesarean section. The appropriate method depends on multiple factors, including maternal condition, fetal status, prior delivery history, and medical findings.",
      "Throughout pregnancy, regular visits and necessary assessments evaluate maternal and fetal condition so that, at the appropriate time, the best decision about the delivery method can be made.",
    ],
    panel: {
      title: "Focus of Care",
      points: [
        "Regular pregnancy follow-up",
        "Assessment of maternal and fetal condition",
        "Counseling on delivery method",
      ],
    },
  },
  deliveryMethods: {
    id: "delivery-methods",
    eyebrow: "Delivery Methods",
    title: "What Is the Difference Between Vaginal Delivery and Cesarean Section?",
    methods: [
      {
        title: "Vaginal delivery",
        description:
          "In vaginal delivery, the baby is born through the birth canal. In appropriate circumstances, this method may be a natural option with a shorter recovery period.",
        uses: [
          "Pregnancy without major complications",
          "Suitable maternal and fetal condition",
          "No absolute surgical contraindication",
          "History of successful vaginal delivery",
        ],
      },
      {
        title: "Cesarean section",
        description:
          "In cesarean section, the baby is delivered through a surgical incision in the abdomen and uterus. This method is selected in specific medical circumstances or when vaginal delivery is not safe.",
        uses: [
          "Pregnancy complications that make vaginal delivery high risk",
          "Unfavorable fetal condition",
          "Certain abnormal placental positions",
          "Specific prior uterine surgery",
        ],
      },
    ],
    note:
      "The choice of delivery method should be based on medical evaluation and individual maternal and fetal conditions, not personal preference alone.",
  },
  prenatalCare: {
    id: "prenatal-care",
    eyebrow: "Prenatal Care",
    title: "What Assessments Are Performed During Pregnancy?",
    steps: [
      {
        title: "Regular visits",
        description:
          "Routine maternal examination, blood pressure monitoring, weight assessment, and review of general symptoms throughout pregnancy.",
      },
      {
        title: "Pregnancy ultrasounds",
        description:
          "Evaluation of fetal growth, amniotic fluid, placenta, and other important pregnancy findings.",
      },
      {
        title: "Routine laboratory testing",
        description:
          "Blood tests, glucose screening, antibody testing, and other recommended pregnancy assessments.",
      },
      {
        title: "Fetal condition assessment",
        description:
          "Monitoring fetal heart rate and evaluation of warning signs when present.",
      },
      {
        title: "Delivery planning",
        description:
          "In the final weeks, delivery method, timing, and location are determined based on clinical circumstances.",
      },
    ],
  },
  considerations: {
    id: "considerations",
    eyebrow: "Informed Decision-Making",
    title: "Considerations in Choosing a Delivery Method",
    benefits: {
      title: "Factors supporting vaginal delivery",
      items: [
        "Uncomplicated pregnancy",
        "Suitable maternal and fetal condition",
        "No medical contraindication",
        "Appropriate readiness and support at the time of delivery",
      ],
    },
    limitations: {
      title: "When cesarean section may be necessary",
      items: [
        "Pregnancy complications such as placenta previa",
        "Unfavorable fetal condition",
        "Inadequate progress of labor",
        "Certain prior uterine surgeries",
        "Emergency maternal or fetal conditions",
      ],
    },
    note:
      "The final decision about delivery method should be made through medical evaluation with maternal and fetal safety as the priority.",
  },
  doctor: {
    imageSrc: "/assets/images/hero.jpg",
    imageAlt: "Dr. Tahereh Pourdast, obstetrician-gynecologist",
    eyebrow: "Treating Physician",
    title: "Support During Pregnancy and Childbirth by Dr. Tahereh Pordast",
    paragraphs: [
      "Dr. Tahereh Pordast is an obstetrician-gynecologist and Professor at Shiraz University of Medical Sciences.",
      "Throughout pregnancy, maternal and fetal condition is assessed through regular visits so that, at the appropriate time, a safe and suitable delivery method can be selected.",
    ],
    aboutLink: "/en/about",
    appointmentSource: "childbirth-doctor-section",
  },
  preparation: {
    id: "preparation",
    eyebrow: "Before Your Visit",
    title: "What Records Should You Bring to a Pregnancy Visit?",
    checklist: [
      "Pregnancy ultrasound reports",
      "Completed laboratory results",
      "Prior visit reports",
      "List of current medications",
      "Prior pregnancy and delivery history",
      "Date of last menstrual period",
      "Note your questions and concerns",
    ],
    guideLink: {
      text: "Guide to preparing for your first visit",
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
        label: "Pregnancy Ultrasound",
        description:
          "The importance of ultrasound in monitoring fetal growth",
        href: "/en/services/advanced-sonography",
      },
      {
        label: "Gynecologic Consultation",
        description:
          "Evaluation and women's health care across different life stages",
        href: "/en/services/gynecologic-consultation",
      },
    ],
  },
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Common Questions About Childbirth",
    items: [
      {
        id: "choose-method",
        question: "How is the delivery method chosen?",
        answer:
          "The delivery method is determined based on maternal condition, fetal status, pregnancy history, and medical findings throughout pregnancy.",
      },
      {
        id: "vaginal-possible",
        question: "Can everyone have a vaginal delivery?",
        answer:
          "No. In some medical circumstances, vaginal delivery is not safe and cesarean section is recommended.",
      },
      {
        id: "elective-cesarean",
        question: "Can cesarean section be chosen without a medical reason?",
        answer:
          "The decision about cesarean section should be made through medical evaluation, considering the benefits and risks of each method.",
      },
      {
        id: "visit-frequency",
        question: "How often should I have prenatal visits?",
        answer:
          "Visit intervals vary at different stages of pregnancy and are determined by the physician.",
      },
      {
        id: "emergency",
        question: "What should I do in an emergency?",
        answer:
          "Seek emergency care immediately for severe bleeding, reduced fetal movement, severe pain, or fever.",
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
      { label: "Advanced Sonography", href: "/en/services/advanced-sonography", description: "Specialist evaluation during and outside pregnancy" },
      { label: "Gynecologic Consultation", href: "/en/services/gynecologic-consultation", description: "Evaluation and women's health care" },
      { label: "Uterine Fibroid", href: "/en/services/uterine-fibroid", description: "Evaluation of uterine fibroids before or after pregnancy" },
    ],
  },
  finalCta: {
    title: "Book an appointment for pregnancy and childbirth counseling",
    description:
      "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: {
      text: "View open appointments",
      source: "childbirth-final-cta",
    },
  },
};
