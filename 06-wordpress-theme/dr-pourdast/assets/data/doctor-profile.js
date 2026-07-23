/**
 * Centralized doctor profile data for the About page.
 *
 * All professional, academic, and medical information must be reviewed
 * and approved by Dr. Tahereh Poordast before publication.
 */
var DOCTOR_PROFILE = {
  slug: "about",
  route: "/about",
  seo: {
    title: "درباره دکتر طاهره پوردست | متخصص زنان و لاپاراسکوپی در شیراز",
    description:
      "آشنایی با سوابق حرفه‌ای، حوزه‌های درمانی، فعالیت دانشگاهی و رویکرد درمانی دکتر طاهره پوردست، متخصص زنان، دانشیار گروه زنان و فلوشیپ فوق تخصصی لاپاراسکوپی و هیستروسکوپی پیشرفته زنان در شیراز.",
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
    subtitle:
      "متخصص زنان و زایمان، دانشیار گروه زنان و فلوشیپ فوق تخصصی لاپاراسکوپی و هیستروسکوپی پیشرفته زنان",
    introduction:
      "تمرکز فعالیت حرفه‌ای دکتر طاهره پوردست بر بررسی و درمان بیماری‌های زنان، اندومتریوز، مشکلات رحم و تخمدان و جراحی‌های کم‌تهاجمی زنان است.",
    imageAlt: "تصویر دکتر طاهره پوردست، متخصص زنان و زایمان",
    imageSrc: "/assets/images/about-hero.jpg",
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
      "دکتر طاهره پوردست، متخصص زنان و زایمان، عضو هیئت علمی دانشگاه علوم پزشکی شیراز، دانشیار گروه زنان و دارای فلوشیپ فوق تخصصی لاپاراسکوپی و هیستروسکوپی پیشرفته زنان است. حوزه فعالیت ایشان شامل ارزیابی و درمان اندومتریوز، بیماری‌های رحم و تخمدان و جراحی‌های کم‌تهاجمی زنان است.",
      "در روند ارزیابی، علائم بیمار، مدارک پزشکی، تصویربرداری‌ها، درمان‌های قبلی و شرایط فردی بررسی می‌شوند تا مسیر درمان متناسب با وضعیت هر بیمار انتخاب شود.",
    ],
  },
  credentials: {
    title: "سوابق و اطلاعات حرفه‌ای",
    items: [
      { label: "تخصص زنان و زایمان", verified: true },
      {
        label: "فلوشیپ فوق تخصصی لاپاراسکوپی و هیستروسکوپی پیشرفته زنان",
        verified: true,
      },
      { label: "دانشیار گروه زنان", verified: true },
      { label: "عضو هیئت علمی دانشگاه علوم پزشکی شیراز", verified: true },
      { label: "شیراز", verified: true },
    ],
  },
  treatmentFocus: {
    eyebrow: "حوزه‌های فعالیت",
    title: "تمرکزهای اصلی درمانی",
    items: [
      { label: "اندومتریوز", href: "/services/endometriosis" },
      { label: "درمان فیبروم رحم", href: "/services/uterine-fibroid" },
      { label: "معاینه و چک عفونت", href: "/services/gynecologic-consultation" },
      { label: "لاپاراسکوپی زنان", href: "/services/gynecologic-laparoscopy" },
      { label: "هیستروسکوپی", href: "/services/hysteroscopy" },
      { label: "کیست تخمدان", href: "/services/ovarian-cyst" },
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
   * by Dr. Tahereh Poordast before publication.
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
  finalCta: {
    title: "برای دریافت نوبت مراجعه",
    description:
      "ویزیت مستقیم خانم دکتر در سامانه اکسون ثبت می‌شود. نوبت‌های دکترتو معمولاً زودتر و توسط همکاران ایشان انجام می‌گیرد.",
    cta: {
      text: "رزرو نوبت در اکسون",
      source: "about-final-cta",
    },
  },
};
