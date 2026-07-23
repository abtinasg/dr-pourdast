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
  eyebrow: "المجالات العلاجية",
  title: "خدمات متخصصة في أمراض النساء والجراحة طفيفة التوغل",
  subtitle:
    "فحص وتشخيص وعلاج مشكلات أمراض النساء مع التركيز على بطانة الرحم المهاجرة والأورام الليفية والفحص التخصصي",
  groups: [
    {
      id: "priority",
      title: "الخدمات الرئيسية",
      variant: "open",
      items: [
        {
          title: "بطانة الرحم المهاجرة",
          description:
            "تشخيص وعلاج متخصص لبطانة الرحم المهاجرة وآلام الحوض والمشكلات المرتبطة بالدورة الشهرية.",
          href: "/ar/services/endometriosis",
          icon: MEDICAL_ICONS.endometriosis,
        },
        {
          title: "علاج الورم الليفي الرحمي",
          highlight: "الورم الليفي",
          description:
            "تشخيص ومتابعة واختيار العلاج المناسب للأورام الليفية الرحمية، من العلاج الدوائي إلى الجراحة طفيفة التوغل.",
          href: "/ar/services/uterine-fibroid",
          icon: MEDICAL_ICONS.uterineFibroid,
        },
        {
          title: "فحص وكشف العدوى",
          highlight: "فحص",
          description:
            "فحص تخصصي لأمراض النساء من حيث التحقق من العدوى وتقييم المشكلات الشائعة.",
          href: "/ar/services/gynecologic-consultation",
          icon: MEDICAL_ICONS.consultation,
        },
      ],
    },
    {
      id: "conditions",
      title: "أمراض نسائية أخرى",
      variant: "open",
      items: [
        {
          title: "كيس المبيض",
          description:
            "تشخيص وعلاج أنواع أكياس المبيض وفق نوع الكيس والأعراض وحالة كل مريضة.",
          href: "/ar/services/ovarian-cyst",
          icon: MEDICAL_ICONS.ovarianCyst,
        },
        {
          title: "تصوير متقدم بالموجات فوق الصوتية",
          highlight: "الموجات فوق الصوتية",
          description:
            "فحص دقيق للرحم والمبيضين وسماكة بطانة الرحم وآفات الحوض بالموجات فوق الصوتية المتخصصة.",
          href: "/ar/services/advanced-sonography",
          icon: MEDICAL_ICONS.ultrasound,
        },
        {
          title: "التصاقات الحوض",
          highlight: "التصاقات",
          description:
            "تشخيص وعلاج التصاقات الحوض والمشكلات المرتبطة بالألم المزمن أو العقم.",
          href: "/ar/services/pelvic-adhesion",
          icon: MEDICAL_ICONS.pelvicAdhesion,
        },
      ],
    },
    {
      id: "surgery",
      title: "الجراحة المتقدمة ومنظار البطن",
      variant: "panel",
      items: [
        {
          title: "منظار البطن لأمراض النساء",
          highlight: "منظار البطن",
          description:
            "جراحة طفيفة التوغل لتشخيص وعلاج أمراض النساء بأقل عدد من الشقوق وفترة نقاهة أقصر.",
          href: "/ar/services/gynecologic-laparoscopy",
          icon: MEDICAL_ICONS.laparoscopy,
        },
        {
          title: "منظار الرحم",
          highlight: "منظار الرحم",
          description:
            "فحص وعلاج مشكلات تجويف الرحم بطريقة طفيفة التوغل، دون شق في البطن.",
          href: "/ar/services/hysteroscopy",
          icon: MEDICAL_ICONS.hysteroscopy,
        },
      ],
    },
  ],
};

SERVICES_SECTION.items = SERVICES_SECTION.groups.reduce(function (acc, group) {
  return acc.concat(group.items);
}, []);
