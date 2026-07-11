/**
 * Doctor introduction section content.
 *
 * NOTE: Biography text must be reviewed and approved by the doctor
 * before final publication.
 *
 * @typedef {Object} CredentialItem
 * @property {string} title
 * @property {string} icon - Inline SVG markup
 */

/** @type {Object} */
var DOCTOR_INTRODUCTION = {
  id: "about",
  eyebrow: "درباره پزشک",
  title: "درباره دکتر طاهره پوردست",
  biography: [
    "دکتر طاهره پوردست، متخصص زنان و زایمان و دارای فلوشیپ لاپاراسکوپی پیشرفته زنان است. تمرکز اصلی فعالیت حرفه‌ای ایشان بر تشخیص و درمان اندومتریوز، بیماری‌های رحم و تخمدان و انجام جراحی‌های کم‌تهاجمی زنان است.",
    "ایشان به‌عنوان دانشیار دانشگاه علوم پزشکی شیراز، در کنار فعالیت درمانی، در زمینه آموزش و پژوهش بیماری‌های زنان نیز فعالیت دارد. رویکرد درمانی ایشان بر ارزیابی دقیق شرایط هر بیمار، انتخاب مسیر درمان مناسب و کاهش مداخلات غیرضروری استوار است.",
  ],
  imageAlt: "تصویر دکتر طاهره پوردست، متخصص زنان و زایمان",
  credentialCard: [
    "متخصص زنان و زایمان",
    "فلوشیپ لاپاراسکوپی پیشرفته زنان",
  ],
  credentials: [
    {
      title: "فلوشیپ لاپاراسکوپی زنان",
      icon:
        '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 3H14L16 7V17H4V7L6 3Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M8 10H12M8 13H12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
    },
    {
      title: "دانشیار دانشگاه علوم پزشکی شیراز",
      icon:
        '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 8L10 4L17 8L10 12L3 8Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M6 10V14C6 14 8 16 10 16C12 16 14 14 14 14V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
    },
    {
      title: "تمرکز بر درمان اندومتریوز",
      icon:
        '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="11" r="4" stroke="currentColor" stroke-width="1.3"/><path d="M10 7V4M10 15V18M6 11H3M17 11H14" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="10" cy="11" r="1" fill="currentColor"/></svg>',
    },
    {
      title: "شماره نظام پزشکی ۹۰۵۶۶",
      icon:
        '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4" y="3" width="12" height="14" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M7 8H13M7 11H11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M12 14L13.5 15.5L16 13" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    },
  ],
  ctas: {
    primary: { text: "درخواست نوبت", source: "doctor-section" },
    secondary: { text: "مشاهده رزومه دکتر", href: "/about" },
  },
};
