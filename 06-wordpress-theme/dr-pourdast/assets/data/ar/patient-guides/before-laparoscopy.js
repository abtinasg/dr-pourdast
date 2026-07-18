/**
 * Before laparoscopy patient guide content.
 * Must be reviewed and approved by Dr. Tahere Pourdast before publication.
 */
var GUIDE_PAGE = {
  slug: "before-laparoscopy",
  route: "/ar/patient-guides/before-laparoscopy",
  seo: {
    title: "الاستعداد قبل منظار البطن | د. طاهرة پوردست",
    description:
      "دليل عام للاستعداد قبل جراحة منظار البطن النسائي، يشمل الوثائق والتنسيقات والنصائح قبل العملية.",
    canonical: "https://drpourdast.ir/ar/patient-guides/before-laparoscopy",
    ogImage: "/assets/images/og-before-laparoscopy-guide.jpg",
    locale: "ar_SA",
  },
  breadcrumb: [
    { label: "الرئيسية", href: "/ar" },
    { label: "دليل المرضى", href: "/ar/patient-guides" },
    { label: "الاستعداد قبل منظار البطن", href: "/ar/patient-guides/before-laparoscopy" },
  ],
  hero: {
    eyebrow: "قبل العلاج",
    label: "دليل عام",
    title: "الاستعداد قبل منظار البطن",
    description:
      "معلومات عامة عن الوثائق، والتنسيقات، والاستعدادات قبل جراحة منظار البطن النسائي.",
    note: "احصلي على التعليمات الدقيقة قبل العملية من فريق العلاج.",
    primaryCta: { text: "عرض صفحة منظار البطن", href: "/ar/services/gynecologic-laparoscopy" },
    appointmentSource: "before-laparoscopy-guide-hero",
  },
  whyPreparation: {
    eyebrow: "أهمية الاستعداد",
    title: "لماذا الاستعداد قبل منظار البطن مهم؟",
    points: [
      { title: "تنسيق أفضل", description: "تقليل الغموض بشأن الموعد والوثائق المطلوبة." },
      { title: "أمان أكبر", description: "مراجعة أشمل للمعلومات الدوائية والسجلات." },
      { title: "راحة أكبر", description: "الإلمام بالمراحل العامة قبل العملية." },
    ],
  },
  checklist: {
    id: "laparoscopy-prep-checklist",
    eyebrow: "قائمة التحقق",
    title: "المواد العامة التي يُفضَّل تجهيزها",
    showPrint: true,
    groups: [
      {
        title: "الوثائق الطبية",
        items: ["تصويرات الموجات فوق الصوتية والرنين المغناطيسي", "تقارير العمليات السابقة", "الفحوصات الأخيرة", "قائمة الأدوية الحالية"],
      },
      {
        title: "المعلومات الشخصية",
        items: ["ملخص الأعراض", "تاريخ الحساسية الدوائية", "تاريخ الأمراض المزمنة", "بيانات الاتصال للمرافق"],
      },
    ],
    note: "احصلي على القائمة الدقيقة من العيادة أو المستشفى.",
  },
  organizing: {
    eyebrow: "قبل يوم العملية",
    title: "مراحل الاستعداد العامة",
    steps: [
      { title: "التنسيق مع فريق العلاج", description: "أكّدي موعد الدخول، والصيام، وإيقاف الأدوية." },
      { title: "تجهيز الوثائق", description: "جهّزي الوثائق الطبية وبطاقة الهوية." },
      { title: "ترتيب المرافق", description: "إن لزم، رتّبي مرافقاً ليوم الخروج." },
      { title: "تدوين الأسئلة", description: "دوّني أسئلتك عن العملية وفترة التعافي." },
    ],
  },
  questions: {
    eyebrow: "أسئلة للطبيبة",
    title: "أسئلة مقترحة",
    questions: [
      "ما الهدف من منظار البطن في حالتي؟",
      "كم سأبقى في المستشفى؟",
      "ما الأدوية التي يجب إيقافها قبل العملية؟",
      "متى يمكنني العودة إلى نشاطي المعتاد؟",
    ],
    note: "احصلي على التعليمات الفردية من الطبيبة.",
  },
  relatedGuides: {
    title: "أدلة ذات صلة",
    items: [
      { label: "الاستعداد للجلسة الأولى", href: "/ar/patient-guides/first-visit" },
      { label: "الرعاية بعد الجراحة", href: "/ar/patient-guides/after-surgery" },
      { label: "دليل بطانة الرحم المهاجرة", href: "/ar/patient-guides/endometriosis" },
    ],
  },
  disclaimer: {
    paragraphs: [
      "هذا الدليل لا يغني عن تعليمات الطبيبة أو المستشفى.",
    ],
  },
  finalCta: {
    title: "احجزي موعداً للاستشارة قبل العملية",
    description: "لعرض الأوقات المتاحة، ادخلي إلى صفحة د. طاهرة پوردست على Doctoreto.",
    cta: { text: "عرض المواعيد المتاحة", source: "before-laparoscopy-guide-final-cta" },
  },
};
