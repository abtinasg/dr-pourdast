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
    "بررسی، تشخیص و درمان مشکلات زنان با تمرکز بر اندومتریوز و جراحی‌های پیشرفته لاپاراسکوپی",
  groups: [
    {
      id: "conditions",
      title: "تشخیص و درمان بیماری‌های زنان",
      variant: "open",
      items: [
        {
          title: "اندومتریوز",
          description:
            "بررسی و درمان تخصصی دردهای لگنی، قاعدگی‌های دردناک و علائم مرتبط با اندومتریوز.",
          href: "/services/endometriosis",
          icon:
            '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><ellipse cx="32" cy="34" rx="14" ry="18" stroke="currentColor" stroke-width="2"/><path d="M32 16c-4 6-10 10-14 12M32 16c4 6 10 10 14 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="34" r="4" fill="currentColor"/><path d="M24 28c2 2 4 3 8 3s6-1 8-3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/><path d="M18 48c4 4 10 6 14 6s10-2 14-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        },
        {
          title: "کیست تخمدان",
          description:
            "ارزیابی و درمان انواع کیست‌های تخمدان با توجه به شرایط و نیاز هر بیمار.",
          href: "/services/ovarian-cyst",
          icon:
            '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><ellipse cx="24" cy="34" rx="10" ry="14" stroke="currentColor" stroke-width="2"/><ellipse cx="40" cy="34" rx="10" ry="14" stroke="currentColor" stroke-width="2"/><path d="M32 20V14M28 14h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="34" r="4" stroke="currentColor" stroke-width="1.75"/><circle cx="40" cy="32" r="3.5" fill="currentColor" opacity="0.35"/><circle cx="40" cy="32" r="3.5" stroke="currentColor" stroke-width="1.75"/><path d="M20 50c4 3 8 4 12 4s8-1 12-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        },
        {
          title: "فیبروم رحم",
          description:
            "بررسی علائم، روش‌های درمان و جراحی فیبروم‌های رحمی با رویکرد کم‌تهاجمی.",
          href: "/services/uterine-fibroid",
          icon:
            '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M32 12c-8 0-14 8-14 18 0 10 6 16 14 22 8-6 14-12 14-22 0-10-6-18-14-18Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="28" cy="28" r="3.5" fill="currentColor" opacity="0.4"/><circle cx="36" cy="34" r="4.5" fill="currentColor" opacity="0.25"/><circle cx="28" cy="28" r="3.5" stroke="currentColor" stroke-width="1.5"/><circle cx="36" cy="34" r="4.5" stroke="currentColor" stroke-width="1.5"/><path d="M26 44h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
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
          icon:
            '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><rect x="10" y="18" width="28" height="22" rx="3" stroke="currentColor" stroke-width="2"/><path d="M14 24h20M14 30h14M14 36h10" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/><circle cx="46" cy="22" r="5" stroke="currentColor" stroke-width="2"/><path d="M46 27v18M42 40l4 5 4-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="48" r="3" stroke="currentColor" stroke-width="1.75"/><path d="M24 51v5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        },
        {
          title: "هیستروسکوپی",
          highlight: "هیستروسکوپی",
          description:
            "بررسی و درمان مشکلات داخل رحم با روش کم‌تهاجمی، بدون برش شکمی.",
          href: "/services/hysteroscopy",
          icon:
            '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M18 32h22l10-10v20L40 32" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="14" cy="32" r="5" stroke="currentColor" stroke-width="2"/><path d="M50 26v12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="48" r="6" stroke="currentColor" stroke-width="2"/><path d="M32 42v-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M28 48h8M32 45v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
        },
        {
          title: "چسبندگی لگنی",
          highlight: "چسبندگی",
          description:
            "تشخیص و درمان چسبندگی‌های لگنی و مشکلات مرتبط با درد مزمن یا ناباروری.",
          href: "/services/pelvic-adhesion",
          icon:
            '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M16 20c8 4 12 10 16 18M48 20c-8 4-12 10-16 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M20 28c6 2 10 6 12 12M44 28c-6 2-10 6-12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="18" r="4" stroke="currentColor" stroke-width="2"/><circle cx="48" cy="18" r="4" stroke="currentColor" stroke-width="2"/><ellipse cx="32" cy="44" rx="10" ry="8" stroke="currentColor" stroke-width="2"/><path d="M26 44h12M32 40v8" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>',
        },
      ],
    },
  ],
};

SERVICES_SECTION.items = SERVICES_SECTION.groups.reduce(function (acc, group) {
  return acc.concat(group.items);
}, []);
