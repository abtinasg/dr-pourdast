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
    "دکتر طاهره پوردست، متخصص زنان و زایمان و دارای فلوشیپ لاپاراسکوپی پیشرفته زنان است. حوزه اصلی فعالیت ایشان، تشخیص و درمان اندومتریوز، بیماری‌های رحم و تخمدان و جراحی‌های کم‌تهاجمی زنان است.",
    "ایشان استاد دانشگاه علوم پزشکی شیراز است و در کنار فعالیت درمانی، در زمینه آموزش و پژوهش بیماری‌های زنان نیز فعالیت دارد. رویکرد درمانی ایشان بر ارزیابی دقیق شرایط بیمار و انتخاب کم‌تهاجمی‌ترین روش درمان استوار است.",
  ],
  imageAlt: "تصویر دکتر طاهره پوردست، متخصص زنان و زایمان",
  videoSrc: "/assets/videos/doctor-intro.mp4",
  videoPoster: "/assets/images/videocover.PNG",
  videoLabel: "ویدیوی معرفی دکتر طاهره پوردست",
  videoPlayLabel: "مشاهده ویدیو",
  credentials: [
    {
      title: "فلوشیپ لاپاراسکوپی زنان",
      icon: MEDICAL_ICONS.fellowship,
    },
    {
      title: "استاد دانشگاه علوم پزشکی شیراز",
      icon: MEDICAL_ICONS.university,
    },
    {
      title: "تشخیص و درمان تخصصی اندومتریوز",
      icon: MEDICAL_ICONS.endometriosisFocus,
    },
    {
      title: "شماره نظام پزشکی ۹۰۵۶۶",
      icon: MEDICAL_ICONS.medicalLicense,
    },
  ],
  ctas: {
    primary: {
      text: "مشاهده سوابق علمی و حرفه‌ای",
      href: "/about",
      source: "doctor-section",
    },
  },
};
