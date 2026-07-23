/**
 * Centralized doctor profile data for the About page.
 *
 * All professional, academic, and medical information must be reviewed
 * and approved by Dr. Tahereh Poordast before publication.
 */
var DOCTOR_PROFILE = {
  slug: "about",
  route: "/ar/about",
  seo: {
    title: "عن د. طاهرة پوردست | أخصائية أمراض النساء ومنظار البطن في شيراز",
    description:
      "التعرف على السيرة المهنية، المجالات العلاجية، النشاط الأكاديمي، والمنهج العلاجي لد. طاهرة پوردست، أخصائية أمراض النساء والتوليد وزميلة منظار البطن المتقدم لأمراض النساء في شيراز.",
    canonical: "https://drpourdast.ir/ar/about",
    ogImage: "/assets/images/og-about.jpg",
    locale: "ar_SA",
  },
  breadcrumb: [
    { label: "الرئيسية", href: "/ar" },
    { label: "عن الطبيبة", href: "/ar/about" },
  ],
  hero: {
    eyebrow: "عن الطبيبة",
    name: "د. طاهرة پوردست",
    subtitle:
      "أخصائية أمراض النساء والتوليد، أستاذة مشاركة في قسم أمراض النساء، وزميلة فائقة التخصص في منظار البطن ومنظار الرحم المتقدم",
    introduction:
      "تركز ممارستها المهنية على فحص وعلاج أمراض النساء، وبطانة الرحم المهاجرة، ومشكلات الرحم والمبيض، والجراحات طفيفة التوغل لأمراض النساء.",
    imageAlt: "صورة د. طاهرة پوردست، أخصائية أمراض النساء والتوليد",
    imageSrc: "/assets/images/about-hero.jpg",
    appointmentSource: "about-hero",
    servicesLink: {
      text: "عرض الخدمات المتخصصة",
      href: "/ar/services",
    },
  },
  introduction: {
    eyebrow: "مقدمة مهنية",
    title: "التخصص، الخبرة العلمية، والمنهج العلاجي",
    paragraphs: [
      "د. طاهرة پوردست أخصائية أمراض النساء والتوليد، عضو هيئة التدريس بجامعة علوم طب شيراز، أستاذة مشاركة في قسم أمراض النساء، وحاصلة على زمالة فائقة التخصص في منظار البطن ومنظار الرحم المتقدم لأمراض النساء. يشمل مجال عملها تقييم وعلاج بطانة الرحم المهاجرة، وأمراض الرحم والمبيض، والجراحات طفيفة التوغل لأمراض النساء.",
      "في مسار التقييم، تُراجع الأعراض، والسجلات الطبية، والتصوير، والعلاجات السابقة، والظروف الفردية لاختيار مسار علاجي يناسب حالة كل مريضة.",
    ],
  },
  credentials: {
    title: "المؤهلات والمعلومات المهنية",
    items: [
      { label: "تخصص أمراض النساء والتوليد", verified: true },
      {
        label: "زمالة فائقة التخصص في منظار البطن ومنظار الرحم المتقدم",
        verified: true,
      },
      { label: "أستاذة مشاركة في قسم أمراض النساء", verified: true },
      { label: "عضو هيئة التدريس بجامعة علوم طب شيراز", verified: true },
      { label: "شيراز", verified: true },
    ],
  },
  treatmentFocus: {
    eyebrow: "مجالات العمل",
    title: "التركيزات العلاجية الرئيسية",
    items: [
      { label: "بطانة الرحم المهاجرة", href: "/ar/services/endometriosis" },
      { label: "علاج الورم الليفي الرحمي", href: "/ar/services/uterine-fibroid" },
      { label: "فحص وكشف العدوى", href: "/ar/services/gynecologic-consultation" },
      { label: "منظار البطن لأمراض النساء", href: "/ar/services/gynecologic-laparoscopy" },
      { label: "منظار الرحم", href: "/ar/services/hysteroscopy" },
      { label: "كيس المبيض", href: "/ar/services/ovarian-cyst" },
      { label: "التصاقات الحوض", href: "/ar/services/pelvic-adhesion" },
    ],
  },
  treatmentApproach: {
    eyebrow: "المنهج العلاجي",
    title: "تقييم دقيق قبل اختيار مسار العلاج",
    principles: [
      "فحص شامل للأعراض والتاريخ الطبي",
      "تقييم السجلات والتصوير الطبي",
      "مراجعة الخيارات غير الجراحية والجراحية",
      "اختيار العلاج المناسب لحالة المريضة",
    ],
    note:
      "يُختار أسلوب العلاج لكل مريضة بناءً على ظروفها الفردية، وأعراضها، والنتائج الطبية، والأهداف العلاجية.",
  },
  /**
   * All academic and research information must be provided or approved
   * by Dr. Tahereh Poordast before publication.
   */
  research: {
    eyebrow: "النشاط العلمي",
    title: "التعليم والبحث في مجال أمراض النساء",
    items: [],
    link: {
      text: "عرض الأنشطة العلمية",
      href: "/ar/research",
      routeExists: false,
    },
  },
  finalCta: {
    title: "لحجز موعد",
    description:
      "تُحجز زيارة الدكتورة مباشرة عبر Axon. مواعيد Doctoreto عادةً أسرع وتُجرى بواسطة زميلاتها مع التشاور معها.",
    cta: {
      text: "حجز موعد عبر Axon",
      source: "about-final-cta",
    },
  },
};
