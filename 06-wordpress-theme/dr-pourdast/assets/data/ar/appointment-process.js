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
  eyebrow: "حجز المواعيد",
  title: "خطوات حجز الموعد",
  subtitle:
    "في ثلاث خطوات، اختاري الوقت المناسب واحجزيه عبر منصة Doctoreto.",
  steps: [
    {
      title: "الدخول إلى منصة Doctoreto",
      description:
        "باختيار «عرض المواعيد المتاحة في Doctoreto»، ستنتقلين إلى صفحة د. طاهرة پوردست الرسمية.",
      icon: MEDICAL_ICONS.externalLink,
    },
    {
      title: "اختيار الوقت المناسب",
      description:
        "اطلعي على الأوقات المتاحة في العيادة واختاري اليوم والساعة المناسبين للمراجعة.",
      icon: MEDICAL_ICONS.calendar,
    },
    {
      title: "المراجعة في العيادة",
      description:
        "بعد تأكيد الموعد، راجعي العيادة في الوقت المحدد. تظهر تفاصيل المراجعة وفق المعلومات المؤكدة في المنصة.",
      icon: MEDICAL_ICONS.clinic,
    },
  ],
  ctas: {
    primary: {
      text: "عرض المواعيد المتاحة في Doctoreto",
      source: "appointment-process",
    },
    contact: {
      source: "appointment-process-contact",
    },
  },
};
