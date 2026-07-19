/**
 * Centralized doctor profile data for the About page.
 *
 * All professional, academic, and medical information must be reviewed
 * and approved by Dr. Tahere Pourdast before publication.
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
    subtitle: "أخصائية أمراض النساء والتوليد وزميلة منظار البطن المتقدم لأمراض النساء",
    introduction:
      "تركز ممارستها المهنية على فحص وعلاج أمراض النساء، وبطانة الرحم المهاجرة، ومشكلات الرحم والمبيض، والجراحات طفيفة التوغل لأمراض النساء.",
    imageAlt: "صورة د. طاهرة پوردست، أخصائية أمراض النساء والتوليد",
    imageSrc: "/assets/images/hero.jpg",
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
      "د. طاهرة پوردست أخصائية أمراض النساء والتوليد وحاصلة على زمالة منظار البطن المتقدم لأمراض النساء. يشمل مجال عملها تقييم وعلاج بطانة الرحم المهاجرة، وأمراض الرحم والمبيض، والجراحات طفيفة التوغل لأمراض النساء.",
      "في مسار التقييم، تُراجع الأعراض، والسجلات الطبية، والتصوير، والعلاجات السابقة، والظروف الفردية لاختيار مسار علاجي يناسب حالة كل مريضة.",
    ],
  },
  credentials: {
    title: "المؤهلات والمعلومات المهنية",
    items: [
      { label: "تخصص أمراض النساء والتوليد", verified: true },
      { label: "زمالة منظار البطن المتقدم لأمراض النساء", verified: true },
      { label: "أستاذة في جامعة علوم طب شيراز", verified: true },
      { label: "رقم الترخيص الطبي ۹۰۵۶۶", verified: true },
      { label: "شيراز", verified: true },
    ],
  },
  treatmentFocus: {
    eyebrow: "مجالات العمل",
    title: "التركيزات العلاجية الرئيسية",
    items: [
      { label: "بطانة الرحم المهاجرة", href: "/ar/services/endometriosis" },
      { label: "منظار البطن لأمراض النساء", href: "/ar/services/gynecologic-laparoscopy" },
      { label: "منظار الرحم", href: "/ar/services/hysteroscopy" },
      { label: "كيس المبيض", href: "/ar/services/ovarian-cyst" },
      { label: "الورم الليفي الرحمي", href: "/ar/services/uterine-fibroid" },
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
   * by Dr. Tahere Pourdast before publication.
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
  consultation: {
    eyebrow: "قبل الزيارة",
    title: "ما المستندات التي يُفضل إحضارها للزيارة الأولى؟",
    checklist: [
      "تقارير الموجات فوق الصوتية السابقة",
      "تصوير MRI إن وُجد",
      "التحاليل المختبرية ذات الصلة",
      "تقارير العمليات الجراحية السابقة",
      "تقرير الفحص النسيجي إن وُجد",
      "قائمة الأدوية المستخدمة",
      "ملخص السجل العلاجي",
    ]
  },
  finalCta: {
    title: "لحجز موعد",
    description:
      "يمكن الاطلاع على المواعيد المتاحة ومعلومات الحجز لد. طاهرة پوردست عبر صفحتها الرسمية على منصة Doctoreto.",
    cta: {
      text: "عرض المواعيد المتاحة",
      source: "about-final-cta",
    },
  },
};
