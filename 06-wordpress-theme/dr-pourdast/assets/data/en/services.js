/**
 * Services / procedures section — single source of truth.
 * Mirrors future WordPress/PHP data structure.
 *
 * @typedef {Object} ServiceItem
 * @property {string} title
 * @property {string} [highlight] - Leading word rendered in accent color
 * @property {string} description
 * @property {string} href
 * @property {string} icon - Inline SVG markup
 *
 * @typedef {Object} ServiceGroup
 * @property {string} id
 * @property {string} title
 * @property {"open"|"panel"} variant
 * @property {ServiceItem[]} items
 */

/** @type {{ id: string, eyebrow: string, title: string, subtitle: string, groups: ServiceGroup[], items: ServiceItem[] }} */
var SERVICES_SECTION = {
  id: "services",
  eyebrow: "Treatment Areas",
  title: "Specialized Gynecologic & Minimally Invasive Surgery Services",
  subtitle:
    "Evaluation, diagnosis, and treatment of gynecologic conditions with a focus on endometriosis, uterine fibroids, and specialist examination",
  groups: [
    {
      id: "priority",
      title: "Primary Services",
      variant: "open",
      items: [
        {
          title: "Endometriosis",
          description:
            "Specialist diagnosis and treatment of endometriosis, pelvic pain, and related menstrual concerns.",
          href: "/en/services/endometriosis",
          icon: MEDICAL_ICONS.endometriosis,
        },
        {
          title: "Uterine Fibroid Treatment",
          highlight: "Fibroid",
          description:
            "Diagnosis, follow-up, and selecting the right treatment for uterine fibroids — from medication to minimally invasive surgery.",
          href: "/en/services/uterine-fibroid",
          icon: MEDICAL_ICONS.uterineFibroid,
        },
        {
          title: "Infection Screening Exam",
          highlight: "Exam",
          description:
            "Specialist gynecologic examination for infection screening and evaluation of common women's health concerns.",
          href: "/en/services/gynecologic-consultation",
          icon: MEDICAL_ICONS.consultation,
        },
      ],
    },
    {
      id: "conditions",
      title: "Other Gynecologic Conditions",
      variant: "open",
      items: [
        {
          title: "Ovarian Cyst",
          description:
            "Diagnosis and treatment of ovarian cysts based on cyst type, symptoms, and each patient's circumstances.",
          href: "/en/services/ovarian-cyst",
          icon: MEDICAL_ICONS.ovarianCyst,
        },
        {
          title: "Advanced Ultrasound",
          highlight: "Ultrasound",
          description:
            "Specialist ultrasound assessment of the uterus, ovaries, endometrial thickness, and pelvic lesions.",
          href: "/en/services/advanced-sonography",
          icon: MEDICAL_ICONS.ultrasound,
        },
        {
          title: "Pelvic Adhesion",
          highlight: "Adhesion",
          description:
            "Diagnosis and treatment of pelvic adhesions and related chronic pain or infertility concerns.",
          href: "/en/services/pelvic-adhesion",
          icon: MEDICAL_ICONS.pelvicAdhesion,
        },
      ],
    },
    {
      id: "surgery",
      title: "Advanced & Laparoscopic Surgery",
      variant: "panel",
      items: [
        {
          title: "Gynecologic Laparoscopy",
          highlight: "Laparoscopy",
          description:
            "Minimally invasive surgery to diagnose and treat gynecologic conditions with smaller incisions and a shorter recovery period.",
          href: "/en/services/gynecologic-laparoscopy",
          icon: MEDICAL_ICONS.laparoscopy,
        },
        {
          title: "Hysteroscopy",
          highlight: "Hysteroscopy",
          description:
            "Evaluation and treatment of intrauterine conditions using a minimally invasive approach without abdominal incisions.",
          href: "/en/services/hysteroscopy",
          icon: MEDICAL_ICONS.hysteroscopy,
        },
      ],
    },
  ],
};

SERVICES_SECTION.items = SERVICES_SECTION.groups.reduce(function (acc, group) {
  return acc.concat(group.items);
}, []);
