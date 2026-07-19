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
  title: "مراحل دریافت نوبت",
  subtitle:
    "در سه مرحله، زمان مناسب را در سامانه دکترتو انتخاب و رزرو کنید.",
  steps: [
    {
      title: "ورود به سامانه دکترتو",
      description:
        "با انتخاب «رزرو نوبت در دکترتو»، وارد صفحه رسمی دکتر طاهره پوردست در سامانه دکترتو می‌شوید.",
      icon: MEDICAL_ICONS.externalLink,
    },
    {
      title: "انتخاب زمان مناسب",
      description:
        "زمان‌های آزاد مطب را مشاهده کنید و روز و ساعت مناسب را برای مراجعه انتخاب کنید.",
      icon: MEDICAL_ICONS.calendar,
    },
    {
      title: "مراجعه به مطب",
      description:
        "پس از ثبت نوبت، در زمان مشخص‌شده به مطب مراجعه کنید. جزئیات مراجعه مطابق اطلاعات تأییدشده سامانه نمایش داده می‌شود.",
      icon: MEDICAL_ICONS.clinic,
    },
  ],
  ctas: {
    primary: {
      text: "رزرو نوبت در دکترتو",
      source: "appointment-process",
    },
    contact: {
      source: "appointment-process-contact",
    },
  },
};
