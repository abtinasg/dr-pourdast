/**
 * Patient guides hub page content.
 *
 * All patient guide content must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */
var PATIENT_GUIDES_PAGE = {
  slug: "patient-guides",
  route: "/ar/patient-guides",
  seo: {
    title: "دليل المريضات | د. طاهرة پوردست",
    description:
      "أدلة عامة للاستعداد قبل الزيارة، والتعرف على بطانة الرحم المهاجرة، والاستعداد قبل منظار البطن، والرعاية العامة بعد العلاج على موقع د. طاهرة پوردست.",
    canonical: "https://drpourdast.ir/ar/patient-guides",
    ogImage: "/assets/images/og-patient-guides.jpg",
    locale: "ar_SA",
  },
  breadcrumb: [
    { label: "الرئيسية", href: "/ar" },
    { label: "دليل المريضات", href: "/ar/patient-guides" },
  ],
  hero: {
    eyebrow: "دليل المريضات",
    title: "المعلومات اللازمة للاستعداد الأفضل قبل الزيارة والعلاج",
    description:
      "في هذا القسم يمكنك قراءة أدلة عامة عن الزيارة الأولى، والتعرف على بعض أمراض النساء، والاستعداد قبل الإجراءات العلاجية، والرعاية العامة بعد العلاج.",
    primaryCta: {
      text: "عرض الأدلة",
      href: "#guides",
    },
    appointmentSource: "patient-guides-hero",
    note:
      "هذا المحتوى لا يغني عن الفحص أو التشخيص أو التوصيات العلاجية من الطبيب.",
  },
  guides: {
    id: "guides",
    eyebrow: "تصنيف الأدلة",
    title: "اختاري الدليل المناسب",
    subtitle:
      "يتضمن كل دليل معلومات عامة وسهلة الفهم لمساعدة المريضة على الاستعداد بشكل أفضل.",
    items: [
      {
        slug: "first-visit",
        category: "قبل الزيارة",
        title: "الاستعداد للزيارة الأولى",
        description:
          "المستندات، والتصوير، والتحاليل، والمعلومات التي يُفضل إحضارها عند الزيارة الأولى.",
        href: "/ar/patient-guides/first-visit",
        featured: true,
        icon: MEDICAL_ICONS.firstVisit,
      },
      {
        slug: "endometriosis",
        category: "التعرف على المرض",
        title: "دليل مريضات بطانة الرحم المهاجرة",
        description:
          "تعريف عام بالأعراض، ومسار الفحص، وخيارات العلاج، وأهمية المتابعة في بطانة الرحم المهاجرة.",
        href: "/ar/patient-guides/endometriosis",
        icon: MEDICAL_ICONS.guideEndometriosis,
      },
      {
        slug: "before-laparoscopy",
        category: "قبل العلاج",
        title: "الاستعداد قبل منظار البطن",
        description:
          "معلومات عامة عن المستندات، والتنسيق، والاستعدادات قبل جراحة منظار البطن.",
        href: "/ar/patient-guides/before-laparoscopy",
        icon: MEDICAL_ICONS.beforeLaparoscopy,
      },
      {
        slug: "after-surgery",
        category: "بعد العلاج",
        title: "الرعاية العامة بعد الجراحة",
        description:
          "التعرف على مبادئ المتابعة، والنشاط اليومي، والرعاية العامة بعد الجراحة.",
        href: "/ar/patient-guides/after-surgery",
        icon: MEDICAL_ICONS.afterSurgery,
      },
      {
        slug: "uterine-bleeding",
        category: "مشكلات الرحم",
        title: "التعرف على النزيف الرحمي غير الطبيعي",
        description:
          "معلومات عامة عن أهمية فحص النزيف غير المعتاد وموعد المراجعة للتقييم.",
        href: "/ar/patient-guides/uterine-bleeding",
        icon: MEDICAL_ICONS.guideEndometriosis,
      },
    ],
  },
  howToUse: {
    eyebrow: "كيفية الاستخدام",
    title: "كيف تساعدك هذه الأدلة؟",
    points: [
      {
        title: "استعداد أفضل للزيارة",
        description:
          "تساعدك على تجهيز المستندات والمعلومات اللازمة قبل الموعد.",
      },
      {
        title: "فهم أفضل لمسار الفحص",
        description: "تتعرفين على مراحل التقييم والعلاج العامة.",
      },
      {
        title: "تقليل الغموض قبل العلاج",
        description:
          "تحصلين على معلومات عامة دون أن تحل محل رأي الطبيب.",
      },
    ],
  },
  disclaimer: {
    title: "ملاحظة مهمة بشأن المحتوى الطبي",
    paragraphs: [
      "المحتوى في هذا القسم مُعدّ للتوعية العامة فقط ولا يغني عن الفحص أو التشخيص أو الوصفة أو التوصيات العلاجية من الطبيب.",
      "تختلف حالة كل مريضة، ويجب أن يتخذ الطبيب وفريق العلاج قرارات الفحوصات، والأدوية، والجراحة، أو الرعاية اللاحقة.",
    ],
  },
  relatedServices: {
    eyebrow: "خدمات ذات صلة",
    title: "اقرئي عن الخدمات المتخصصة",
    items: [
      { label: "بطانة الرحم المهاجرة", href: "/ar/services/endometriosis" },
      { label: "منظار البطن لأمراض النساء", href: "/ar/services/gynecologic-laparoscopy" },
      { label: "منظار الرحم", href: "/ar/services/hysteroscopy" },
      { label: "كيس المبيض", href: "/ar/services/ovarian-cyst" },
    ],
  },
  finalCta: {
    title: "لتقييم حالتك، احجزي موعداً",
    description:
      "للاطلاع على المواعيد المتاحة وتسجيل الحجز، يُرجى زيارة الصفحة الرسمية لد. طاهرة پوردست على منصة Doctoreto.",
    cta: {
      text: "عرض المواعيد المتاحة",
      source: "patient-guides-final-cta",
    },
  },
};
