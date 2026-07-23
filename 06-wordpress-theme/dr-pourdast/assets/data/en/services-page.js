/**
 * Services hub page content.
 *
 * All medical content must be reviewed and approved
 * by Dr. Tahereh Poordast before publication.
 */
var SERVICES_PAGE = {
  slug: "services",
  route: "/en/services",
  seo: {
    title: "Gynecologic Specialty Services | Dr. Tahereh Poordast",
    description:
      "Specialty diagnosis and treatment services for endometriosis, ovarian cysts, uterine fibroids, pelvic adhesions, hysteroscopy, and gynecologic laparoscopy by Dr. Tahereh Poordast in Shiraz.",
    canonical: "https://drpourdast.ir/en/services",
    ogImage: "/assets/images/og-services.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Specialty Services", href: "/en/services" },
  ],
  hero: {
    eyebrow: "Treatment areas",
    title: "Gynecologic specialty services and minimally invasive surgery",
    description:
      "Evaluation, diagnosis, and treatment of gynecologic conditions with a focus on endometriosis, uterine and ovarian disorders, and advanced laparoscopic and hysteroscopic surgery.",
    note:
      "The treatment approach for each patient is selected based on individual circumstances, symptoms, and clinical findings.",
    primaryCta: {
      text: "View services",
      href: "#services-list",
    },
    appointmentSource: "services-hub-hero",
  },
  services: {
    id: "services-list",
    eyebrow: "Services",
    title: "Treatment areas",
    subtitle:
      "Visit each service page to learn more about the specialty care provided.",
  },
  approach: {
    eyebrow: "Treatment approach",
    title: "Thorough evaluation before selecting a treatment pathway",
    points: [
      {
        title: "Comprehensive review of symptoms and history",
        description: "Medical history, records, and prior treatments are reviewed.",
      },
      {
        title: "Imaging evaluation",
        description: "Ultrasound, MRI, and prior surgical reports are assessed when available.",
      },
      {
        title: "Tailored treatment selection",
        description: "Non-surgical and surgical options are reviewed according to the patient's condition.",
      },
    ],
  },
  disclaimer: {
    title: "Important note about medical content",
    paragraphs: [
      "The content in this section is provided for general educational purposes only and does not replace examination, diagnosis, or medical treatment recommendations.",
    ],
  },
  finalCta: {
    title: "Book an appointment to discuss your condition",
    description:
      "For a visit with Dr. Tahereh Poordast, book on Axon. Doctoreto appointments are usually earlier and handled by her colleagues.",
    cta: {
      text: "View available appointments",
      source: "services-hub-final-cta",
    },
  },
};
