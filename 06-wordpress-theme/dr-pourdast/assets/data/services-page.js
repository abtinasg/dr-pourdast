/**
 * Services hub page content.
 *
 * All medical content must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */
var SERVICES_PAGE = {
  slug: "services",
  route: "/services",
  seo: {
    title: "خدمات تخصصی زنان | دکتر طاهره پوردست",
    description:
      "خدمات تخصصی تشخیص و درمان اندومتریوز، کیست تخمدان، فیبروم رحم، چسبندگی لگنی، هیستروسکوپی و لاپاراسکوپی زنان توسط دکتر طاهره پوردست در شیراز.",
    canonical: "https://drpourdast.ir/services",
    ogImage: "/assets/images/og-services.jpg",
    locale: "fa_IR",
  },
  breadcrumb: [
    { label: "خانه", href: "/" },
    { label: "خدمات تخصصی", href: "/services" },
  ],
  hero: {
    eyebrow: "حوزه‌های درمانی",
    title: "خدمات تخصصی زنان و جراحی‌های کم‌تهاجمی",
    description:
      "بررسی، تشخیص و درمان مشکلات زنان با تمرکز بر اندومتریوز، بیماری‌های رحم و تخمدان و جراحی‌های پیشرفته لاپاراسکوپی و هیستروسکوپی.",
    note:
      "انتخاب روش درمان برای هر بیمار بر اساس شرایط فردی، علائم و یافته‌های پزشکی انجام می‌شود.",
    primaryCta: {
      text: "مشاهده خدمات",
      href: "#services-list",
    },
    appointmentSource: "services-hub-hero",
  },
  services: {
    id: "services-list",
    eyebrow: "خدمات",
    title: "حوزه‌های درمانی",
    subtitle:
      "برای آشنایی با هر خدمت، صفحه تخصصی آن را مطالعه کنید.",
  },
  approach: {
    eyebrow: "رویکرد درمانی",
    title: "ارزیابی دقیق پیش از انتخاب مسیر درمان",
    points: [
      {
        title: "بررسی کامل علائم و سوابق",
        description: "شرح حال، مدارک پزشکی و درمان‌های قبلی بررسی می‌شوند.",
      },
      {
        title: "ارزیابی تصویربرداری",
        description: "سونوگرافی، MRI و گزارش‌های جراحی در صورت وجود ارزیابی می‌شوند.",
      },
      {
        title: "انتخاب درمان متناسب",
        description: "گزینه‌های غیرجراحی و جراحی با توجه به شرایط بیمار بررسی می‌شوند.",
      },
    ],
  },
  disclaimer: {
    title: "نکته مهم درباره مطالب پزشکی",
    paragraphs: [
      "مطالب این بخش صرفاً برای آگاهی عمومی تهیه شده‌اند و جایگزین معاینه، تشخیص یا توصیه درمانی پزشک نیستند.",
    ],
  },
  relatedGuides: {
    eyebrow: "راهنمای بیماران",
    title: "برای آمادگی پیش از مراجعه",
    items: [
      { label: "آمادگی برای جلسه اول", href: "/patient-guides/first-visit" },
      { label: "راهنمای بیماران اندومتریوز", href: "/patient-guides/endometriosis" },
      { label: "آمادگی پیش از لاپاراسکوپی", href: "/patient-guides/before-laparoscopy" },
    ],
  },
  finalCta: {
    title: "برای بررسی شرایط خود، نوبت مراجعه دریافت کنید",
    description:
      "برای مشاهده زمان‌های آزاد و ثبت نوبت، وارد صفحه رسمی دکتر طاهره پوردست در سامانه دکترتو شوید.",
    cta: {
      text: "رزرو نوبت در دکترتو",
      source: "services-hub-final-cta",
    },
  },
};
