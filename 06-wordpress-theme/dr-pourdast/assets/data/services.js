/**
 * Services / procedures section — single source of truth.
 * Mirrors future WordPress/PHP data structure.
 *
 * @typedef {Object} ServiceItem
 * @property {string} title
 * @property {string} [highlight] - Leading word rendered in accent color
 * @property {string} description
 * @property {string} href
 * @property {string} icon - Inline SVG markup
 *
 * @typedef {Object} ServiceGroup
 * @property {string} id
 * @property {string} title
 * @property {"open"|"panel"} variant
 * @property {ServiceItem[]} items
 */

/** @type {{ id: string, eyebrow: string, title: string, subtitle: string, groups: ServiceGroup[], items: ServiceItem[] }} */
var SERVICES_SECTION = {
  id: "services",
  eyebrow: "حوزه‌های درمانی",
  title: "خدمات تخصصی زنان و جراحی‌های کم‌تهاجمی",
  subtitle:
    "بررسی، تشخیص و درمان مشکلات زنان با تمرکز بر اندومتریوز، فیبروم رحم و معاینه تخصصی",
  groups: [
    {
      id: "priority",
      title: "خدمات اصلی",
      variant: "open",
      items: [
        {
          title: "اندومتریوز",
          description:
            "تشخیص و درمان تخصصی اندومتریوز، دردهای لگنی و مشکلات مرتبط با قاعدگی.",
          href: "/services/endometriosis",
          icon: MEDICAL_ICONS.endometriosis,
        },
        {
          title: "درمان فیبروم رحم",
          highlight: "فیبروم",
          description:
            "تشخیص، پیگیری و انتخاب روش درمان مناسب فیبروم‌های رحمی، از درمان دارویی تا جراحی کم‌تهاجمی.",
          href: "/services/uterine-fibroid",
          icon: MEDICAL_ICONS.uterineFibroid,
        },
        {
          title: "معاینه و چک عفونت",
          highlight: "معاینه",
          description:
            "معاینه تخصصی زنان از نظر بررسی و چک عفونت‌ها و ارزیابی مشکلات شایع زنان.",
          href: "/services/gynecologic-consultation",
          icon: MEDICAL_ICONS.consultation,
        },
      ],
    },
    {
      id: "conditions",
      title: "سایر بیماری‌های زنان",
      variant: "open",
      items: [
        {
          title: "کیست تخمدان",
          description:
            "تشخیص و درمان انواع کیست تخمدان با توجه به نوع کیست، علائم و شرایط هر بیمار.",
          href: "/services/ovarian-cyst",
          icon: MEDICAL_ICONS.ovarianCyst,
        },
        {
          title: "سونوگرافی پیشرفته",
          highlight: "سونوگرافی",
          description:
            "بررسی دقیق رحم، تخمدان‌ها، ضخامت آندومتر و ضایعات لگنی با سونوگرافی تخصصی.",
          href: "/services/advanced-sonography",
          icon: MEDICAL_ICONS.ultrasound,
        },
        {
          title: "چسبندگی لگنی",
          highlight: "چسبندگی",
          description:
            "تشخیص و درمان چسبندگی‌های لگنی و مشکلات مرتبط با درد مزمن یا ناباروری.",
          href: "/services/pelvic-adhesion",
          icon: MEDICAL_ICONS.pelvicAdhesion,
        },
      ],
    },
    {
      id: "surgery",
      title: "جراحی‌های پیشرفته و لاپاراسکوپی",
      variant: "panel",
      items: [
        {
          title: "لاپاراسکوپی زنان",
          highlight: "لاپاراسکوپی",
          description:
            "جراحی کم‌تهاجمی برای تشخیص و درمان بیماری‌های زنان با حداقل برش و دوره نقاهت کوتاه‌تر.",
          href: "/services/gynecologic-laparoscopy",
          icon: MEDICAL_ICONS.laparoscopy,
        },
        {
          title: "هیستروسکوپی",
          highlight: "هیستروسکوپی",
          description:
            "بررسی و درمان مشکلات داخل رحم با روش کم‌تهاجمی، بدون برش شکمی.",
          href: "/services/hysteroscopy",
          icon: MEDICAL_ICONS.hysteroscopy,
        },
      ],
    },
  ],
};

SERVICES_SECTION.items = SERVICES_SECTION.groups.reduce(function (acc, group) {
  return acc.concat(group.items);
}, []);
