/**
 * Endometriosis service page content.
 *
 * All medical content on this page must be reviewed and approved
 * by the doctor before publication.
 *
 * WordPress-ready fields: service_title, service_description, hero_image,
 * symptoms, diagnosis_steps, treatment_options, doctor_section,
 * visit_checklist, faqs, related_services, seo_title, seo_description
 */
var ENDOMETRIOSIS_PAGE = {
  slug: "endometriosis",
  route: "/ar/services/endometriosis",
  seo: {
    title: "علاج بطانة الرحم المهاجرة في شيراز | د. طاهرة پوردست",
    description:
      "تعرّف على أعراض بطانة الرحم المهاجرة وتشخيصها وطرق علاجها، مع التركيز على التقييم التخصصي والجراحات طفيفة التوغل في أمراض النساء، لدى د. طاهرة پوردست في شيراز.",
    canonical: "https://drpourdast.ir/ar/services/endometriosis",
    ogImage: "/assets/images/og-endometriosis.jpg",
    locale: "ar_SA",
  },
  breadcrumb: [
    { label: "الرئيسية", href: "/ar" },
    { label: "الخدمات التخصصية", href: "/ar/services" },
    { label: "بطانة الرحم المهاجرة", href: "/ar/services/endometriosis" },
  ],
  hero: {
    eyebrow: "خدمات أمراض النساء التخصصية",
    title: "تشخيص وعلاج بطانة الرحم المهاجرة",
    description:
      "بطانة الرحم المهاجرة من الأمراض الشائعة لدى النساء، وقد تُصاحبها آلام الحوض ودورة شهرية مؤلمة ومشكلات في الخصوبة. يعتمد اختيار العلاج على الأعراض ونتائج الفحص وظروف كل مريضة.",
    primaryCta: {
      text: "عرض المواعيد المتاحة",
      source: "endometriosis-hero",
    },
    secondaryCta: {
      text: "اطّلع على مسار التشخيص والعلاج",
      href: "#diagnosis-and-treatment",
    },
    trust: [
      "تقييم تخصصي لبطانة الرحم المهاجرة",
      "زمالة منظار البطن المتقدم لأمراض النساء",
      "نهج علاجي يتناسب مع حالة المريضة",
    ],
  },
  pageNav: [
    { label: "الأعراض", href: "#symptoms" },
    { label: "وقت المراجعة", href: "#when-to-seek" },
    { label: "التشخيص", href: "#diagnosis" },
    { label: "العلاج", href: "#treatment" },
    { label: "المستندات", href: "#preparation" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ],
  medicalReview: {
    text: "أُعدّ هذا المحتوى أو روجع تحت الإشراف العلمي للدكتورة طاهرة بوردست.",
    dateLabel: "آخر مراجعة: تير ١٤٠٥ / يوليو ٢٠٢٦",
  },
  whatIs: {
    eyebrow: "التعرّف على المرض",
    title: "ما هي بطانة الرحم المهاجرة؟",
    paragraphs: [
      "تحدث بطانة الرحم المهاجرة عندما ينمو نسيج يشبه بطانة الرحم الداخلية خارج الرحم. قد يظهر في المبيضين أو الأنبوبين الرحميين أو مناطق أخرى من الحوض، وقد يسبب لدى بعض المريضات ألماً أو التهاباً أو مشكلات في الخصوبة.",
      "لا تتناسب شدة الأعراض دائماً مع مدى انتشار المرض. قد تعاني بعض المريضات من أعراض شديدة، بينما قد تُظهر أخريات أعراضاً محدودة رغم وجود إصابة ملحوظة.",
    ],
  },
  symptoms: {
    id: "symptoms",
    eyebrow: "الأعراض الشائعة",
    title: "ما الأعراض التي قد ترتبط ببطانة الرحم المهاجرة؟",
    items: [
      "دورة شهرية شديدة الألم",
      "ألم مزمن في الحوض",
      "ألم أثناء الجماع",
      "ألم أثناء التبرز أو التبول في بعض الفترات",
      "مشكلات في الخصوبة",
      "إرهاق أو اضطرابات هضمية مرتبطة",
    ],
    note:
      "وجود هذه الأعراض لا يعني بذاته الإصابة ببطانة الرحم المهاجرة، ويتطلب التشخيص تقييماً طبياً.",
  },
  whenToSeek: {
    id: "when-to-seek",
    eyebrow: "وقت المراجعة",
    title: "متى نراجع الطبيبة لفحص بطانة الرحم المهاجرة؟",
    items: [
      "آلام شديدة ومتكررة أثناء الدورة الشهرية",
      "ألم في الحوض يعيق النشاط اليومي",
      "ألم أثناء الجماع",
      "تاريخ عقم أو صعوبة في الحمل",
      "أكياس مبيضية مشتبه بأنها اندومتريوما",
      "عودة الأعراض بعد علاج أو جراحة سابقة",
    ],
    note:
      "تحديد سبب الأعراض واختيار طريقة الفحص يجب أن يتم بواسطة الطبيبة.",
  },
  diagnosis: {
    id: "diagnosis",
    eyebrow: "مسار الفحص",
    title: "كيف تُفحص بطانة الرحم المهاجرة؟",
    steps: [
      {
        title: "مراجعة الأعراض والتاريخ الطبي",
        description:
          "تُراجع شدة الألم، ووقت بدء الأعراض، وتاريخ العلاج، وظروف الخصوبة لدى المريضة.",
      },
      {
        title: "مراجعة السجلات والتصوير",
        description:
          "تُقيَّم نتائج الموجات فوق الصوتية والرنين المغناطيسي والتحاليل أو تقارير الجراحات السابقة إن وُجدت.",
      },
      {
        title: "فحص سريري وتقييم تخصصي",
        description:
          "بناءً على حالة المريضة، قد تُقترح فحصاً سريرياً وفحوصات تكميلية.",
      },
      {
        title: "تحديد مسار العلاج",
        description:
          "بعد جمع المعلومات، تُراجع خيارات العلاج المناسبة لحالة المريضة.",
      },
    ],
  },
  treatment: {
    id: "treatment",
    eyebrow: "طرق العلاج",
    title: "كيف يُختار علاج بطانة الرحم المهاجرة؟",
    options: [
      {
        title: "المتابعة والسيطرة على الأعراض",
        description:
          "في بعض المريضات، وبحسب شدة الأعراض والظروف الفردية، قد تكون المتابعة أو السيطرة على الأعراض جزءاً من مسار العلاج.",
      },
      {
        title: "العلاج الدوائي",
        description:
          "قد تُراجع بعض العلاجات الدوائية لتخفيف الأعراض أو السيطرة على نشاط المرض. يجب أن يكون اختيار الدواء بقرار من الطبيبة.",
      },
      {
        title: "جراحة منظار البطن",
        description:
          "في بعض الحالات، قد يُنظر في جراحة منظار البطن طفيفة التوغل لفحص أو علاج آفات بطانة الرحم المهاجرة.",
      },
    ],
    note:
      "لا تحتاج جميع المريضات المصابات ببطانة الرحم المهاجرة إلى جراحة. يعتمد اختيار طريقة العلاج على الأعراض وموقع الإصابة والعمر وظروف الخصوبة وتاريخ العلاج.",
  },
  whySpecialized: {
    eyebrow: "تقييم تخصصي",
    title: "لماذا يُعد الفحص الدقيق لبطانة الرحم المهاجرة مهماً؟",
    points: [
      "تختلف الأعراض بين المريضات",
      "شدة الألم لا تعكس دائماً مدى الإصابة",
      "الجراحة ليست الخيار الأول لجميع المريضات",
      "يجب اختيار العلاج وفقاً لظروف الخصوبة وأهداف المريضة",
    ],
  },
  doctor: {
    imageSrc: "/assets/images/endometriosis.png",
    imageAlt: "تقييم متخصص لبطانة الرحم المهاجرة في العيادة",
    imageFit: "center",
    title: "تقييم بطانة الرحم المهاجرة لدى د. طاهرة پوردست",
    paragraphs: [
      "د. طاهرة پوردست، أخصائية نساء وتوليد وحاصلة على زمالة منظار البطن المتقدم لأمراض النساء، تعمل في مجال تقييم وعلاج أمراض النساء والجراحات طفيفة التوغل.",
      "في مسار المراجعة، تُفحص الأعراض والسجلات الطبية والتصوير وتاريخ العلاج لدى المريضة لاختيار مسار علاج يتناسب مع حالتها الفردية.",
    ],
    aboutLink: "/ar/about",
    appointmentSource: "endometriosis-doctor-section",
  },
  /**
   * All academic and research information must be provided or approved
   * by Dr. Tahere Pourdast before publication.
   * Section hidden when items array is empty.
   *
   * @type {{ eyebrow: string, title: string, items: Array<{title: string, category: string, year: string, href?: string, external?: boolean, verified: boolean}> }}
   */
  research: {
    eyebrow: "النشاط العلمي",
    title: "البحث والتعليم في مجال أمراض النساء",
    items: [],
  },
  preparation: {
    id: "preparation",
    eyebrow: "قبل المراجعة",
    title: "ما المستندات التي يُفضّل إحضارها للجلسة الأولى؟",
    checklist: [
      "تقارير الموجات فوق الصوتية السابقة",
      "تقرير الرنين المغناطيسي إن وُجد",
      "التحاليل ذات الصلة",
      "تقارير الجراحات السابقة",
      "قائمة الأدوية المستخدمة",
      "ملخص تاريخ العلاج",
      "معلومات عن الدورة الشهرية ووقت بدء الأعراض",
    ],
    guideLink: {
      text: "عرض دليل الجلسة الأولى الكامل",
      href: "/ar/patient-guides/first-visit",
    },
  },
  /**
   * Patient guide links only — no detailed instructions on this page.
   * All guide content must be reviewed and approved by the doctor.
   */
  relatedGuides: {
    eyebrow: "دليل المريضات",
    title: "أدلة مرتبطة ببطانة الرحم المهاجرة ومسار العلاج",
    items: [
      {
        label: "دليل مريضات بطانة الرحم المهاجرة",
        href: "/ar/patient-guides/endometriosis",
      },
      {
        label: "الاستعداد للجلسة الأولى",
        href: "/ar/patient-guides/first-visit",
      },
      {
        label: "الاستعداد قبل منظار البطن",
        href: "/ar/patient-guides/before-laparoscopy",
      },
      {
        label: "الرعاية العامة بعد الجراحة",
        href: "/ar/patient-guides/after-surgery",
      },
    ],
  },
  faqs: [
    {
      id: "pain-period",
      question: "هل الألم الشديد أثناء الدورة الشهرية دائماً دليل على بطانة الرحم المهاجرة؟",
      answer:
        "لا. قد يكون للألم الشديد أثناء الدورة أسباب متعددة. تشخيص بطانة الرحم المهاجرة يتطلب مراجعة الأعراض والتاريخ الطبي وتقييماً طبياً.",
    },
    {
      id: "infertility",
      question: "هل تسبب بطانة الرحم المهاجرة العقم؟",
      answer:
        "قد تؤثر بطانة الرحم المهاجرة على الخصوبة لدى بعض المريضات، لكن لا تصاب جميع المصابات بالعقم. يجب فحص حالة كل مريضة على حدة.",
    },
    {
      id: "laparoscopy",
      question: "هل تحتاج جميع المريضات إلى منظار البطن؟",
      answer:
        "لا. الحاجة إلى الجراحة تعتمد على شدة الأعراض ونتائج التصوير وظروف الخصوبة والاستجابة للعلاجات السابقة.",
    },
    {
      id: "recurrence",
      question: "هل قد تعود بطانة الرحم المهاجرة بعد العلاج؟",
      answer:
        "في بعض المريضات، قد تعود الأعراض أو المرض. قد تكون المتابعة واختيار برنامج علاج مناسب جزءاً من الإدارة طويلة الأمد.",
    },
    {
      id: "ultrasound",
      question: "هل يمكن تشخيص بطانة الرحم المهاجرة بالموجات فوق الصوتية؟",
      answer:
        "قد تساعد الموجات فوق الصوتية في فحص بعض أنواع الإصابة أو الأكياس المرتبطة، لكن ينبغي تفسير نتائجها مع الأعراض والتقييمات الأخرى.",
    },
    {
      id: "appointment",
      question: "كيف أحجز موعداً؟",
      answer:
        "يتم الحجز الإلكتروني عبر الصفحة الرسمية لد. طاهرة پوردست على منصة Doctoreto.",
    },
  ],
  relatedServices: {
    title: "خدمات ذات صلة",
    items: [
      { label: "منظار البطن النسائي", href: "/ar/services/gynecologic-laparoscopy", description: "View details about this specialized service" },
      { label: "كيس المبيض", href: "/ar/services/ovarian-cyst", description: "تقييم أنواع الأكياس واختيار مسار العلاج المناسب" },
      { label: "التصاقات الحوض", href: "/ar/services/pelvic-adhesion", description: "تقييم ألم الحوض والالتصاقات بعد الالتهاب أو الجراحة" },
    ],
  },
  finalCta: {
    title: "احجزي موعداً لتقييم دقيق للأعراض",
    description:
      "اختاري الوقت المناسب من الصفحة الرسمية للطبيبة على منصة Doctoreto.",
    cta: {
      text: "عرض المواعيد المتاحة",
      source: "endometriosis-final-cta",
    },
  },
};
