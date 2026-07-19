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
  eyebrow: "عن الطبيبة",
  title: "عن د. طاهرة پوردست",
  biography: [
    "د. طاهرة پوردست أخصائية نساء وتوليد وحاصلة على زمالة منظار البطن المتقدم لأمراض النساء. يتركز عملها على تشخيص وعلاج بطانة الرحم المهاجرة وأمراض الرحم والمبيض والجراحات النسائية طفيفة التوغل.",
    "تعمل أستاذة في جامعة علوم طب شيراز، وإلى جانب عملها العلاجي تُشارك في التعليم والبحث. يقوم نهجها على التقييم الدقيق واختيار أقل الطرق توغلاً للعلاج.",
  ],
  imageAlt: "صورة د. طاهرة پوردست، أخصائية نساء وتوليد",
  videoSrc: "/assets/videos/doctor-intro.mp4",
  videoPoster: "/assets/images/videocover.PNG",
  videoLabel: "فيديو تعريفي بد. طاهرة پوردست",
  videoPlayLabel: "مشاهدة الفيديو",
  credentials: [
    {
      title: "زمالة منظار البطن النسائي",
      icon: MEDICAL_ICONS.fellowship,
    },
    {
      title: "أستاذة في جامعة علوم طب شيراز",
      icon: MEDICAL_ICONS.university,
    },
    {
      title: "تشخيص وعلاج متخصص لبطانة الرحم المهاجرة",
      icon: MEDICAL_ICONS.endometriosisFocus,
    },
    {
      title: "رقم الترخيص الطبي 90566",
      icon: MEDICAL_ICONS.medicalLicense,
    },
  ],
  ctas: {
    primary: {
      text: "عرض السجل العلمي والمهني",
      href: "/ar/about",
      source: "doctor-section",
    },
  },
};
