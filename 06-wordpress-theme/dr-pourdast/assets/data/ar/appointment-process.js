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
    "تُحجز زيارة الدكتورة مباشرة عبر Axon. مواعيد Doctoreto عادةً أسرع وتُجرى بواسطة زميلاتها مع التشاور معها.",
  steps: [
    {
      title: "الدخول إلى منصة Axon",
      description:
        "باختيار «حجز موعد عبر Axon»، ستنتقلين إلى الصفحة الرسمية لد. طاهرة پوردست. تتوفر في Axon مواعيد الزيارة والسونار أيضًا.",
      icon: MEDICAL_ICONS.externalLink,
    },
    {
      title: "اختيار الوقت المناسب",
      description:
        "اطلعي على الأوقات المتاحة واختاري اليوم والساعة المناسبين. للحصول على موعد أسرع، يمكنكِ استخدام Doctoreto؛ تُجرى هذه الزيارات بواسطة زميلات الدكتورة مع التشاور معها.",
      icon: MEDICAL_ICONS.calendar,
    },
    {
      title: "المراجعة في العيادة",
      description:
        "بعد تأكيد الموعد، راجعي العيادة في الوقت المحدد. عند الحاجة إلى جراحة، تُجريها الدكتورة بنفسها. زيارة الزميلات تُسرّع مسار علاج المريضات.",
      icon: MEDICAL_ICONS.clinic,
    },
  ],
  ctas: {
    primary: {
      text: "حجز موعد عبر Axon",
      source: "appointment-process",
    },
    contact: {
      source: "appointment-process-contact",
    },
  },
};
