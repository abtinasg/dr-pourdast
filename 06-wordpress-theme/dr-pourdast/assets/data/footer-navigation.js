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
    name: "دکتر طاهره پوردست",
    subtitle: "متخصص زنان و زایمان",
    fellowship: "فلوشیپ لاپاراسکوپی پیشرفته زنان",
    description:
      "ارائه خدمات تخصصی در زمینه تشخیص و درمان بیماری‌های زنان، اندومتریوز و جراحی‌های کم‌تهاجمی.",
  },
  quickLinks: {
    title: "دسترسی سریع",
    ariaLabel: "دسترسی سریع",
    links: [
      { label: "خانه", href: "/" },
      { label: "درباره دکتر", href: "/about" },
      { label: "خدمات تخصصی", href: "/services" },
      { label: "راهنمای بیماران", href: "/patient-guides" },
      { label: "مقالات", href: "/articles" },
      { label: "سؤالات پرتکرار", href: "/faq" },
      { label: "تماس با ما", href: "/contact" },
    ],
  },
  serviceLinks: {
    title: "خدمات تخصصی",
    ariaLabel: "خدمات تخصصی",
    links: [
      { label: "مشاوره و معاینه تخصصی زنان", href: "/services/gynecologic-consultation" },
      { label: "سونوگرافی پیشرفته", href: "/services/advanced-sonography" },
      { label: "زایمان", href: "/services/childbirth" },
      { label: "اندومتریوز", href: "/services/endometriosis" },
      { label: "لاپاراسکوپی زنان", href: "/services/gynecologic-laparoscopy" },
      { label: "هیستروسکوپی", href: "/services/hysteroscopy" },
      { label: "کیست تخمدان", href: "/services/ovarian-cyst" },
      { label: "فیبروم رحم", href: "/services/uterine-fibroid" },
      { label: "چسبندگی لگنی", href: "/services/pelvic-adhesion" },
    ],
  },
  contact: {
    title: "نوبت و تماس",
    appointmentText: "رزرو نوبت در دکترتو",
    appointmentSource: "footer",
  },
  legal: {
    privacy: { label: "حریم خصوصی", href: "/privacy" },
    terms: { label: "شرایط استفاده", href: "/terms" },
  },
  disclaimer:
    "مطالب این وب‌سایت صرفاً برای آگاهی عمومی ارائه شده‌اند و جایگزین معاینه، تشخیص یا توصیه درمانی پزشک نیستند.",
  credit: {
    label: "آرایه",
    href: "https://araaye.com",
    prefix: "ساخته شده با ❤️ توسط",
  },
};
