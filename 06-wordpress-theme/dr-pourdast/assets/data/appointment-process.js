/**
 * Appointment process section content.
 *
 * NOTE: This appointment-process content must be reviewed and approved
 * by the clinic before final publication.
 *
 * @typedef {Object} ProcessStep
 * @property {string} title
 * @property {string} description
 * @property {string} icon - Inline SVG markup
 */

/** @type {Object} */
var APPOINTMENT_PROCESS = {
  id: "appointment",
  eyebrow: "نوبت‌دهی",
  title: "مسیر دریافت نوبت و مراجعه",
  subtitle:
    "برای مشاهده زمان‌های آزاد و ثبت نوبت، وارد سامانه دکترتو یا اکسون شوید.",
  steps: [
    {
      title: "ورود به سامانه نوبت‌دهی",
      description:
        "با انتخاب گزینه دریافت نوبت، وارد صفحه دکتر طاهره پوردست در سامانه دکترتو یا اکسون می‌شوید.",
      icon:
        '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10 5H6C5.4 5 5 5.4 5 6V18C5 18.6 5.4 19 6 19H18C18.6 19 19 18.6 19 18V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M14 4H20V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 13L20 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    },
    {
      title: "انتخاب زمان مناسب",
      description:
        "زمان‌های آزاد مطب را مشاهده کنید و روز و ساعت مناسب را برای مراجعه انتخاب کنید.",
      icon:
        '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M8 3V5M16 3V5M4 10H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="15" r="2" stroke="currentColor" stroke-width="1.5"/></svg>',
    },
    {
      title: "مراجعه و ارزیابی اولیه",
      description:
        "پس از ثبت نوبت، در زمان مشخص‌شده به مطب مراجعه کنید. روند ارزیابی اولیه و حضور پزشک باید مطابق اطلاعات تأییدشده مطب انجام شود.",
      icon:
        '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 20V10L12 5L19 10V20H5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M10 20V14H14V20" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 11V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    },
  ],
  ctas: {
    primary: {
      text: "مشاهده نوبت‌های آزاد در دکترتو",
      source: "appointment-process",
    },
    contact: {
      source: "appointment-process-contact",
    },
  },
};
