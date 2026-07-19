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
    "Evaluation, diagnosis, and treatment of gynecologic conditions with a focus on endometriosis and advanced laparoscopic surgery",
  groups: [
    {
      id: "obstetrics",
      title: "Specialist Gynecology, Obstetrics & Ultrasound",
      variant: "open",
      items: [
        {
          title: "Specialist Gynecologic Consultation & Exam",
          highlight: "Consultation",
          description:
            "Evaluation and treatment of infections, uterine fibroids, menstrual disorders, and other common gynecologic concerns.",
          href: "/en/services/gynecologic-consultation",
          icon: MEDICAL_ICONS.consultation,
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
          title: "Delivery (Vaginal & Cesarean)",
          highlight: "Delivery",
          description:
            "Counseling and choosing the appropriate vaginal or cesarean delivery based on maternal and fetal circumstances.",
          href: "/en/services/childbirth",
          icon: MEDICAL_ICONS.childbirth,
        },
      ],
    },
    {
      id: "conditions",
      title: "Diagnosis & Treatment of Gynecologic Conditions",
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
          title: "Ovarian Cyst",
          description:
            "Diagnosis and treatment of ovarian cysts based on cyst type, symptoms, and each patient's circumstances.",
          href: "/en/services/ovarian-cyst",
          icon: MEDICAL_ICONS.ovarianCyst,
        },
        {
          title: "Uterine Fibroid",
          description:
            "Diagnosis, follow-up, and selecting the right treatment for uterine fibroids — from medication to minimally invasive surgery.",
          href: "/en/services/uterine-fibroid",
          icon: MEDICAL_ICONS.uterineFibroid,
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
  ],
};

SERVICES_SECTION.items = SERVICES_SECTION.groups.reduce(function (acc, group) {
  return acc.concat(group.items);
}, []);
