/**
 * Services hub page content.
 *
 * All medical content must be reviewed and approved
 * by Dr. Tahereh Poordast before publication.
 */
var SERVICES_PAGE = {
  slug: "services",
  route: "/ar/services",
  seo: {
    title: "خدمات متخصصة في أمراض النساء | د. طاهرة پوردست",
    description:
      "خدمات متخصصة في تشخيص وعلاج بطانة الرحم المهاجرة، وكيس المبيض، والورم الليفي الرحمي، والتصاقات الحوض، ومنظار الرحم، ومنظار البطن لأمراض النساء لدى د. طاهرة پوردست في شيراز.",
    canonical: "https://drpourdast.ir/ar/services",
    ogImage: "/assets/images/og-services.jpg",
    locale: "ar_SA",
  },
  breadcrumb: [
    { label: "الرئيسية", href: "/ar" },
    { label: "الخدمات المتخصصة", href: "/ar/services" },
  ],
  hero: {
    eyebrow: "المجالات العلاجية",
    title: "خدمات متخصصة في أمراض النساء والجراحة طفيفة التوغل",
    description:
      "فحص وتشخيص وعلاج مشكلات أمراض النساء مع التركيز على بطانة الرحم المهاجرة، وأمراض الرحم والمبيض، وجراحات منظار البطن ومنظار الرحم المتقدمة.",
    note:
      "يُختار أسلوب العلاج لكل مريضة بناءً على ظروفها الفردية، وأعراضها، والنتائج الطبية.",
    primaryCta: {
      text: "عرض الخدمات",
      href: "#services-list",
    },
    appointmentSource: "services-hub-hero",
  },
  services: {
    id: "services-list",
    eyebrow: "الخدمات",
    title: "المجالات العلاجية",
    subtitle:
      "للتعرف على كل خدمة، يُرجى قراءة صفحتها المتخصصة.",
  },
  approach: {
    eyebrow: "المنهج العلاجي",
    title: "تقييم دقيق قبل اختيار مسار العلاج",
    points: [
      {
        title: "فحص شامل للأعراض والتاريخ الطبي",
        description: "تُراجع الأعراض، والسجلات الطبية، والعلاجات السابقة.",
      },
      {
        title: "تقييم التصوير الطبي",
        description: "تُقيَّم الموجات فوق الصوتية، وMRI، وتقارير العمليات الجراحية إن وُجدت.",
      },
      {
        title: "اختيار العلاج المناسب",
        description: "تُراجع الخيارات غير الجراحية والجراحية وفق حالة المريضة.",
      },
    ],
  },
  disclaimer: {
    title: "ملاحظة مهمة بشأن المحتوى الطبي",
    paragraphs: [
      "المحتوى في هذا القسم مُعدّ للتوعية العامة فقط ولا يغني عن الفحص أو التشخيص أو التوصيات العلاجية من الطبيب.",
    ],
  },
  finalCta: {
    title: "لتقييم حالتك، احجزي موعداً",
    description:
      "لحجز زيارة الدكتورة، يُرجى استخدام Axon. مواعيد Doctoreto عادةً أسرع وبواسطة زميلاتها.",
    cta: {
      text: "عرض المواعيد المتاحة",
      source: "services-hub-final-cta",
    },
  },
};
