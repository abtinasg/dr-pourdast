/**
 * Footer navigation and identity content.
 *
 * Clinic contact information must be confirmed before publication.
 * Contact fields are read from SITE_CONFIG — do not hardcode here.
 *
 * @typedef {Object} FooterLink
 * @property {string} label
 * @property {string} href
 * @property {boolean} [external]
 */

/** @type {Object} */
var FOOTER_DATA = {
  identity: {
    name: "Dr. Tahereh Poordast",
    subtitle: "Obstetrician & Gynecologist",
    fellowship: "Advanced Gynecologic Laparoscopy Fellowship",
    description:
      "Specialized care in the diagnosis and treatment of gynecologic conditions, endometriosis, and minimally invasive surgery.",
  },
  quickLinks: {
    title: "Quick Links",
    ariaLabel: "Quick links",
    links: [
      { label: "Home", href: "/en/" },
      { label: "About", href: "/en/about" },
      { label: "Services", href: "/en/services" },
      { label: "Articles", href: "/en/articles" },
      { label: "FAQ", href: "/en/faq" },
      { label: "Contact", href: "/en/contact" },
    ],
  },
  serviceLinks: {
    title: "Specialized Services",
    ariaLabel: "Specialized services",
    links: [
      { label: "Endometriosis", href: "/en/services/endometriosis" },
      { label: "Uterine Fibroid Treatment", href: "/en/services/uterine-fibroid" },
      { label: "Infection Screening Exam", href: "/en/services/gynecologic-consultation" },
      { label: "Advanced Sonography", href: "/en/services/advanced-sonography" },
      { label: "Gynecologic Laparoscopy", href: "/en/services/gynecologic-laparoscopy" },
      { label: "Hysteroscopy", href: "/en/services/hysteroscopy" },
      { label: "Ovarian Cyst", href: "/en/services/ovarian-cyst" },
      { label: "Pelvic Adhesion", href: "/en/services/pelvic-adhesion" },
    ],
  },
  contact: {
    title: "Appointments & Contact",
    appointmentText: "Book on Axon",
    appointmentSource: "footer",
  },
  legal: {
    privacy: { label: "Privacy Policy", href: "/en/privacy" },
    terms: { label: "Terms of Use", href: "/en/terms" },
  },
  disclaimer:
    "The content on this website is provided for general information only and does not replace examination, diagnosis, or medical advice from a physician.",
  credit: {
    label: "Araaye",
    href: "https://araaye.com",
    prefix: "Made with 🤍 by",
  },
};
