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
    name: "د. طاهرة پوردست",
    subtitle: "أخصائية نساء وتوليد",
    fellowship: "زمالة منظار البطن المتقدم لأمراض النساء",
    description:
      "تقديم خدمات متخصصة في تشخيص وعلاج أمراض النساء، وبطانة الرحم المهاجرة، والجراحات طفيفة التوغل.",
  },
  quickLinks: {
    title: "روابط سريعة",
    ariaLabel: "روابط سريعة",
    links: [
      { label: "الرئيسية", href: "/ar" },
      { label: "عن الطبيبة", href: "/ar/about" },
      { label: "الخدمات التخصصية", href: "/ar/services" },
      { label: "المقالات", href: "/ar/articles" },
      { label: "الأسئلة الشائعة", href: "/ar/faq" },
      { label: "اتصل بنا", href: "/ar/contact" },
    ],
  },
  serviceLinks: {
    title: "الخدمات التخصصية",
    ariaLabel: "الخدمات التخصصية",
    links: [
      { label: "استشارة ومعاينة نسائية تخصصية", href: "/ar/services/gynecologic-consultation" },
      { label: "سونوغرافيا متقدمة", href: "/ar/services/advanced-sonography" },
      { label: "الولادة", href: "/ar/services/childbirth" },
      { label: "بطانة الرحم المهاجرة", href: "/ar/services/endometriosis" },
      { label: "منظار البطن النسائي", href: "/ar/services/gynecologic-laparoscopy" },
      { label: "منظار الرحم", href: "/ar/services/hysteroscopy" },
      { label: "كيس المبيض", href: "/ar/services/ovarian-cyst" },
      { label: "الورم الليفي الرحمي", href: "/ar/services/uterine-fibroid" },
      { label: "التصاقات الحوض", href: "/ar/services/pelvic-adhesion" },
    ],
  },
  contact: {
    title: "الحجز والتواصل",
    appointmentText: "عرض المواعيد المتاحة",
    appointmentSource: "footer",
  },
  legal: {
    privacy: { label: "سياسة الخصوصية", href: "/ar/privacy" },
    terms: { label: "شروط الاستخدام", href: "/ar/terms" },
  },
  disclaimer:
    "محتوى هذا الموقع مخصص للتوعية العامة فقط ولا يغني عن الفحص أو التشخيص أو التوصيات العلاجية من الطبيب.",
  credit: {
    label: "آرایه",
    href: "https://araaye.com",
    prefix: "صُنع بـ 🤍 بواسطة",
  },
};
