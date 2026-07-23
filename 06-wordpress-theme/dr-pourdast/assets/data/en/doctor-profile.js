/**
 * Centralized doctor profile data for the About page.
 *
 * All professional, academic, and medical information must be reviewed
 * and approved by Dr. Tahereh Poordast before publication.
 */
var DOCTOR_PROFILE = {
  slug: "about",
  route: "/en/about",
  seo: {
    title: "About Dr. Tahereh Poordast | Gynecologist & Laparoscopy Specialist in Shiraz",
    description:
      "Learn about the professional background, clinical specialties, academic activities, and treatment approach of Dr. Tahereh Poordast, an obstetrician-gynecologist and advanced gynecologic laparoscopy fellow in Shiraz.",
    canonical: "https://drpourdast.ir/en/about",
    ogImage: "/assets/images/og-about.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "About the Physician", href: "/en/about" },
  ],
  hero: {
    eyebrow: "About the Physician",
    name: "Dr. Tahereh Poordast",
    subtitle:
      "Obstetrician-Gynecologist, Associate Professor of Gynecology, and Advanced Fellow in Laparoscopy & Hysteroscopy",
    introduction:
      "Dr. Tahereh Poordast's clinical practice focuses on the evaluation and treatment of gynecologic conditions, endometriosis, uterine and ovarian disorders, and minimally invasive gynecologic surgery.",
    imageAlt: "Photo of Dr. Tahereh Poordast, obstetrician-gynecologist",
    imageSrc: "/assets/images/about-hero.jpg",
    appointmentSource: "about-hero",
    servicesLink: {
      text: "View specialty services",
      href: "/en/services",
    },
  },
  introduction: {
    eyebrow: "Professional Overview",
    title: "Expertise, academic experience, and treatment approach",
    paragraphs: [
      "Dr. Tahereh Poordast is an obstetrician-gynecologist, Associate Professor of Gynecology, and faculty member at Shiraz University of Medical Sciences, with an advanced fellowship in gynecologic laparoscopy and hysteroscopy. Her clinical focus includes the evaluation and treatment of endometriosis, uterine and ovarian conditions, and minimally invasive gynecologic surgery.",
      "During the evaluation process, the patient's symptoms, medical records, imaging studies, prior treatments, and individual circumstances are reviewed to select a treatment pathway appropriate to each patient's condition.",
    ],
  },
  credentials: {
    title: "Professional background",
    items: [
      { label: "Obstetrician & Gynecologist", verified: true },
      {
        label: "Advanced Fellowship in Gynecologic Laparoscopy & Hysteroscopy",
        verified: true,
      },
      { label: "Associate Professor of Gynecology", verified: true },
      {
        label: "Faculty Member, Shiraz University of Medical Sciences",
        verified: true,
      },
      { label: "Shiraz", verified: true },
    ],
  },
  treatmentFocus: {
    eyebrow: "Clinical focus areas",
    title: "Primary treatment specialties",
    items: [
      { label: "Endometriosis", href: "/en/services/endometriosis" },
      { label: "Uterine Fibroid Treatment", href: "/en/services/uterine-fibroid" },
      { label: "Infection Screening Exam", href: "/en/services/gynecologic-consultation" },
      { label: "Gynecologic Laparoscopy", href: "/en/services/gynecologic-laparoscopy" },
      { label: "Hysteroscopy", href: "/en/services/hysteroscopy" },
      { label: "Ovarian Cyst", href: "/en/services/ovarian-cyst" },
      { label: "Pelvic Adhesion", href: "/en/services/pelvic-adhesion" },
    ],
  },
  treatmentApproach: {
    eyebrow: "Treatment approach",
    title: "Thorough evaluation before selecting a treatment pathway",
    principles: [
      "Comprehensive review of symptoms and medical history",
      "Evaluation of records and imaging studies",
      "Review of non-surgical and surgical options",
      "Selection of treatment tailored to the patient's condition",
    ],
    note:
      "The treatment approach for each patient is selected based on individual circumstances, symptoms, clinical findings, and therapeutic goals.",
  },
  /**
   * All academic and research information must be provided or approved
   * by Dr. Tahereh Poordast before publication.
   */
  research: {
    eyebrow: "Academic activities",
    title: "Teaching and research in gynecologic medicine",
    items: [],
    link: {
      text: "View academic activities",
      href: "/en/research",
      routeExists: false,
    },
  },
  finalCta: {
    title: "Book a consultation appointment",
    description:
      "Visits with Dr. Tahereh Poordast are booked on Axon. Doctoreto usually offers earlier slots with her clinic colleagues.",
    cta: {
      text: "Book on Axon",
      source: "about-final-cta",
    },
  },
};
