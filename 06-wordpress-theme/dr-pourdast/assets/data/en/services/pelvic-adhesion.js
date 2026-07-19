/**
 * Pelvic adhesion service page content.
 *
 * All medical content on this page must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */
var PELVIC_ADHESION_PAGE = {
  slug: "pelvic-adhesion",
  route: "/en/services/pelvic-adhesion",
  seo: {
    title: "Pelvic Adhesion Treatment in Shiraz | Dr. Tahereh Pordast",
    description:
      "Learn about pelvic adhesion symptoms, causes, diagnostic approaches, and treatment options, with a focus on specialist evaluation and minimally invasive gynecologic surgery by Dr. Tahereh Pordast in Shiraz.",
    canonical: "https://drpourdast.ir/en/services/pelvic-adhesion",
    ogImage: "/assets/images/og-pelvic-adhesion.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Specialist Services", href: "/en/services" },
    { label: "Pelvic Adhesions", href: "/en/services/pelvic-adhesion" },
  ],
  hero: {
    eyebrow: "Evaluation and Treatment of Pelvic Conditions",
    title: "Diagnosis and Treatment of Pelvic Adhesions",
    description:
      "Pelvic adhesions occur when tissues or organs inside the pelvis stick together. They may develop after surgery, infection, or inflammation and, in some patients, may be associated with pain or fertility concerns.",
    primaryCta: {
      text: "View open appointments",
      source: "pelvic-adhesion-hero",
    },
    secondaryCta: {
      text: "Learn about the evaluation pathway",
      href: "#pelvic-adhesion-evaluation",
    },
    trust: [
      "Specialist evaluation of pelvic pain",
      "Assessment of causes of adhesions",
      "Laparoscopic surgery in selected cases",
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
    title: "What Are Pelvic Adhesions?",
    paragraphs: [
      "Pelvic adhesions refer to abnormal connections between tissues inside the pelvis. They may form between the uterus, fallopian tubes, ovaries, bowel, or pelvic wall.",
      "Having adhesions does not always cause symptoms. Symptom severity depends on location, extent of involvement, and individual patient factors.",
    ],
    panel: {
      title: "Key Points in Evaluation",
      points: [
        "History of surgery or infection",
        "Association with pain or infertility",
        "Evaluation of other causes of pelvic pain",
      ],
    },
  },
  categories: {
    eyebrow: "Common Causes",
    title: "What Commonly Causes Pelvic Adhesions?",
    categories: [
      {
        title: "Prior surgery",
        description:
          "Laparoscopy, laparotomy, and uterine or ovarian surgery are common causes of adhesions.",
      },
      {
        title: "Infection or inflammation",
        description:
          "Pelvic infections or chronic inflammation may lead to adhesion formation.",
      },
      {
        title: "Endometriosis",
        description:
          "In some patients, endometriosis may be seen together with pelvic adhesions.",
        link: {
          text: "View the endometriosis page",
          href: "/en/services/endometriosis",
        },
      },
      {
        title: "Other causes",
        description:
          "Some inflammatory conditions or prior pelvic disease may also play a role.",
      },
    ],
    note:
      "Determining the cause and extent of adhesions requires physician evaluation and comprehensive assessment.",
  },
  symptoms: {
    id: "symptoms",
    eyebrow: "Possible Symptoms",
    title: "What Symptoms May Be Associated with Pelvic Adhesions?",
    items: [
      "Chronic or recurring pelvic pain",
      "Pain during intercourse",
      "Pain with bowel movements",
      "Pelvic pressure or heaviness",
      "Fertility concerns",
      "Related gastrointestinal symptoms",
      "No symptoms despite adhesions seen on imaging",
    ],
    note:
      "Pelvic pain has many causes, and adhesions are not always the primary source of pain.",
  },
  whenEvaluate: {
    id: "when-to-seek",
    eyebrow: "When to Seek Care",
    title: "When Should Pelvic Adhesions Be Evaluated?",
    items: [
      "Persistent pelvic pain after surgery",
      "Return or persistence of pain after treatment",
      "Fertility concerns with prior pelvic surgery",
      "Possible adhesions noted in prior surgical reports",
      "Pain associated with endometriosis",
      "New symptoms after pelvic infection",
    ],
    note:
      "The need for further evaluation should be determined based on symptoms, history, and medical findings.",
  },
  evaluation: {
    id: "evaluation",
    eyebrow: "Evaluation Pathway",
    title: "How Are Pelvic Adhesions Evaluated?",
    steps: [
      {
        title: "Review of symptoms and history",
        description:
          "Pain pattern, surgical history, infections, prior treatments, and fertility status are reviewed.",
      },
      {
        title: "Review of records and surgical reports",
        description:
          "Prior laparoscopy or surgical reports are evaluated when available.",
      },
      {
        title: "Specialist assessment",
        description:
          "Examination and, when needed, imaging or additional evaluation may be recommended.",
      },
      {
        title: "Distinguishing other causes of pelvic pain",
        description:
          "Other causes such as endometriosis or uterine and ovarian conditions are also considered.",
      },
      {
        title: "Determining the treatment pathway",
        description:
          "After review, treatment options appropriate to the patient's condition are discussed.",
      },
    ],
  },
  treatmentPathways: {
    eyebrow: "Selecting Treatment",
    title: "How Are Pelvic Adhesions Treated?",
    intro: [
      "Treatment depends on symptoms, cause of adhesions, extent of involvement, and patient goals. Not all adhesions require surgery.",
      "In some patients, symptom management, treatment of underlying causes, or in selected cases laparoscopic surgery may be considered.",
    ],
    benefits: {
      title: "Non-surgical management",
      items: [
        "Symptom control in selected cases",
        "Treatment of underlying causes such as endometriosis",
        "Monitoring and periodic evaluation",
        "Fertility planning",
      ],
    },
    limitations: {
      title: "When surgery may be considered",
      items: [
        "Severe or treatment-resistant pain",
        "Related fertility concerns",
        "Extensive adhesions with significant symptoms",
        "Lack of response to prior treatments",
      ],
    },
    note:
      "Surgery is not always the first option and should be considered after weighing potential risks and benefits.",
  },
  laparoscopicSurgery: {
    eyebrow: "Minimally Invasive Surgery",
    title: "Laparoscopy in Pelvic Adhesion Treatment",
    paragraphs: [
      "In some patients, laparoscopy may be performed to evaluate or treat pelvic adhesions. The goal is to reduce symptoms and, when possible, improve pelvic organ function.",
      "Adhesions may recur after surgery, and this should be discussed with your physician before making a decision.",
    ],
    link: {
      text: "Learn about gynecologic laparoscopy",
      href: "/en/services/gynecologic-laparoscopy",
    },
  },
  endometrioma: {
    eyebrow: "Association with Endometriosis",
    title: "Adhesions and Endometriosis",
    variant: "callout",
    paragraphs: [
      "In patients with endometriosis, pelvic adhesions may be seen together with pain or fertility concerns. Evaluating both conditions together is important.",
      "Treatment should be planned based on symptoms, medical findings, and individual patient circumstances.",
    ],
    link: {
      text: "Learn about endometriosis",
      href: "/en/services/endometriosis",
    },
  },
  doctor: {
    imageSrc: "/assets/images/hero2.PNG",
    imageAlt: "Dr. Tahereh Pourdast",
    eyebrow: "Treating Physician",
    title: "Pelvic Adhesion Evaluation by Dr. Tahereh Pordast",
    paragraphs: [
      "Dr. Tahereh Pordast is an obstetrician-gynecologist with advanced fellowship training in gynecologic laparoscopy.",
      "During evaluation, symptoms, surgical history, prior reports, and fertility status are reviewed to select the appropriate treatment pathway.",
    ],
    aboutLink: "/en/about",
    appointmentSource: "pelvic-adhesion-doctor-section",
  },
  preparation: {
    id: "preparation",
    eyebrow: "Before Your Visit",
    title: "What Records Should You Bring for Pelvic Adhesion Evaluation?",
    checklist: [
      "Prior pelvic surgical reports",
      "Laparoscopy reports, if available",
      "Ultrasound and MRI reports",
      "Relevant laboratory results",
      "List of current medications",
      "Summary of symptoms and when they began",
      "Pregnancy history when relevant",
    ]
  },
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Common Questions About Pelvic Adhesions",
    items: [
      {
        id: "always-surgery",
        question: "Do all adhesions require surgery?",
        answer:
          "No. Many adhesions cause no symptoms and may not require intervention.",
      },
      {
        id: "recurrence",
        question: "Can adhesions return after surgery?",
        answer:
          "Adhesions may recur after surgery. This should be discussed with your physician before making a decision.",
      },
      {
        id: "infertility",
        question: "Do pelvic adhesions cause infertility?",
        answer:
          "In some cases they may affect fertility, but adhesions are not always the cause of infertility and should be evaluated comprehensively.",
      },
      {
        id: "laparoscopy",
        question: "Is laparoscopy performed for adhesions?",
        answer:
          "In selected cases, laparoscopy may be considered to evaluate or treat adhesions. The choice of approach depends on patient circumstances.",
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
      { label: "Ovarian Cyst", href: "/en/services/ovarian-cyst", description: "Evaluation of cyst types and treatment pathways" },
    ],
  },
  finalCta: {
    title: "Book an evaluation appointment for pelvic pain and adhesions",
    description:
      "To view available times and book an appointment, visit Dr. Tahereh Pordast's official profile on Doctoreto.",
    cta: {
      text: "View open appointments",
      source: "pelvic-adhesion-final-cta",
    },
  },
};
