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
    "ویزیت مستقیم خانم دکتر در سامانه اکسون ثبت می‌شود. نوبت‌های دکترتو معمولاً زودتر و توسط همکاران ایشان انجام می‌گیرد.",
  steps: [
    {
      title: "ورود به سامانه اکسون",
      description:
        "با انتخاب «رزرو نوبت در اکسون»، وارد صفحه رسمی دکتر طاهره پوردست می‌شوید. در اکسون امکان نوبت ویزیت و سونوگرافی نیز وجود دارد.",
      icon: MEDICAL_ICONS.externalLink,
    },
    {
      title: "انتخاب زمان مناسب",
      description:
        "زمان‌های آزاد را مشاهده کنید و روز و ساعت مناسب را برای مراجعه انتخاب کنید. اگر نوبت زودتر می‌خواهید، می‌توانید از سامانه دکترتو استفاده کنید؛ این نوبت‌ها توسط همکاران خانم دکتر انجام می‌شود و با ایشان مشورت می‌گردد.",
      icon: MEDICAL_ICONS.calendar,
    },
    {
      title: "مراجعه به مطب",
      description:
        "پس از ثبت نوبت، در زمان مشخص‌شده به مطب مراجعه کنید. در صورت نیاز به عمل جراحی، خود خانم دکتر آن را انجام می‌دهند. ویزیت توسط همکاران به تسریع روند درمان بیماران کمک می‌کند.",
      icon: MEDICAL_ICONS.clinic,
    },
  ],
  ctas: {
    primary: {
      text: "رزرو نوبت در اکسون",
      source: "appointment-process",
    },
    contact: {
      source: "appointment-process-contact",
    },
  },
};
