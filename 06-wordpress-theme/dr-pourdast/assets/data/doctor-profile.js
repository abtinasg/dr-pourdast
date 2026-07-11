/**
 * Centralized doctor profile data for the About page.
 *
 * All professional, academic, and medical information must be reviewed
 * and approved by Dr. Tahere Pourdast before publication.
 */
var DOCTOR_PROFILE = {
  slug: "about",
  route: "/about",
  seo: {
    title: "درباره دکتر طاهره پوردست | متخصص زنان و لاپاراسکوپی در شیراز",
    description:
      "آشنایی با سوابق حرفه‌ای، حوزه‌های درمانی، فعالیت دانشگاهی و رویکرد درمانی دکتر طاهره پوردست، متخصص زنان و فلوشیپ لاپاراسکوپی پیشرفته زنان در شیراز.",
    canonical: "https://drpourdast.ir/about",
    ogImage: "/assets/images/og-about.jpg",
    locale: "fa_IR",
  },
  breadcrumb: [
    { label: "خانه", href: "/" },
    { label: "درباره دکتر", href: "/about" },
  ],
  hero: {
    eyebrow: "درباره پزشک",
    name: "دکتر طاهره پوردست",
    subtitle: "متخصص زنان و زایمان و فلوشیپ لاپاراسکوپی پیشرفته زنان",
    introduction:
      "تمرکز فعالیت حرفه‌ای دکتر طاهره پوردست بر بررسی و درمان بیماری‌های زنان، اندومتریوز، مشکلات رحم و تخمدان و جراحی‌های کم‌تهاجمی زنان است.",
    imageAlt: "تصویر دکتر طاهره پوردست، متخصص زنان و زایمان",
    appointmentSource: "about-hero",
    servicesLink: {
      text: "مشاهده خدمات تخصصی",
      href: "/services",
    },
  },
  introduction: {
    eyebrow: "معرفی حرفه‌ای",
    title: "تخصص، تجربه علمی و رویکرد درمانی",
    paragraphs: [
      "دکتر طاهره پوردست، متخصص زنان و زایمان و دارای فلوشیپ لاپاراسکوپی پیشرفته زنان است. حوزه فعالیت ایشان شامل ارزیابی و درمان اندومتریوز، بیماری‌های رحم و تخمدان و جراحی‌های کم‌تهاجمی زنان است.",
      "در روند ارزیابی، علائم بیمار، مدارک پزشکی، تصویربرداری‌ها، درمان‌های قبلی و شرایط فردی بررسی می‌شوند تا مسیر درمان متناسب با وضعیت هر بیمار انتخاب شود.",
    ],
  },
  credentials: {
    title: "سوابق و اطلاعات حرفه‌ای",
    items: [
      { label: "تخصص زنان و زایمان", verified: true },
      { label: "فلوشیپ لاپاراسکوپی پیشرفته زنان", verified: true },
      { label: "دانشیار دانشگاه علوم پزشکی شیراز", verified: true },
      { label: "شماره نظام پزشکی ۹۰۵۶۶", verified: true },
      { label: "شیراز", verified: true },
    ],
  },
  treatmentFocus: {
    eyebrow: "حوزه‌های فعالیت",
    title: "تمرکزهای اصلی درمانی",
    items: [
      { label: "اندومتریوز", href: "/services/endometriosis" },
      { label: "لاپاراسکوپی زنان", href: "/services/gynecologic-laparoscopy" },
      { label: "هیستروسکوپی", href: "/services/hysteroscopy" },
      { label: "کیست تخمدان", href: "/services/ovarian-cyst" },
      { label: "فیبروم رحم", href: "/services/uterine-fibroid" },
      { label: "چسبندگی لگنی", href: "/services/pelvic-adhesion" },
    ],
  },
  treatmentApproach: {
    eyebrow: "رویکرد درمانی",
    title: "ارزیابی دقیق پیش از انتخاب مسیر درمان",
    principles: [
      "بررسی کامل علائم و سوابق",
      "ارزیابی مدارک و تصویربرداری",
      "بررسی گزینه‌های غیرجراحی و جراحی",
      "انتخاب درمان متناسب با شرایط بیمار",
    ],
    note:
      "روش درمان برای هر بیمار بر اساس شرایط فردی، علائم، یافته‌های پزشکی و اهداف درمانی انتخاب می‌شود.",
  },
  /**
   * All academic and research information must be provided or approved
   * by Dr. Tahere Pourdast before publication.
   */
  research: {
    eyebrow: "فعالیت علمی",
    title: "آموزش و پژوهش در حوزه بیماری‌های زنان",
    items: [],
    link: {
      text: "مشاهده فعالیت‌های علمی",
      href: "/research",
      routeExists: false,
    },
  },
  consultation: {
    eyebrow: "پیش از مراجعه",
    title: "برای جلسه اول چه مدارکی همراه داشته باشید؟",
    checklist: [
      "سونوگرافی‌های قبلی",
      "MRI در صورت وجود",
      "آزمایش‌های مرتبط",
      "گزارش جراحی‌های قبلی",
      "جواب پاتولوژی در صورت وجود",
      "فهرست داروهای مصرفی",
      "خلاصه سوابق درمانی",
    ],
    guideLink: {
      text: "مشاهده راهنمای جلسه اول",
      href: "/patient-guides/first-visit",
    },
  },
  finalCta: {
    title: "برای دریافت نوبت مراجعه",
    description:
      "زمان‌های آزاد و اطلاعات نوبت‌دهی دکتر طاهره پوردست از طریق صفحه رسمی ایشان در سامانه دکترتو قابل مشاهده است.",
    cta: {
      text: "مشاهده نوبت‌های آزاد در دکترتو",
      source: "about-final-cta",
    },
  },
};
