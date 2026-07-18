/**
 * Contact and appointment page content.
 *
 * All clinic contact information must be confirmed by the clinic
 * before publication. Verified values are read from SITE_CONFIG.
 */
var CONTACT_PAGE = {
  slug: "contact",
  route: "/ar/contact",
  seo: {
    title: "التواصل وحجز الموعد | د. طاهرة پوردست",
    description:
      "معلومات التواصل، وعنوان العيادة، وحجز الموعد عبر الإنترنت لد. طاهرة پوردست من خلال منصتي Doctoreto وAxon.",
    canonical: "https://drpourdast.ir/ar/contact",
    ogImage: "/assets/images/og-contact.jpg",
    locale: "ar_SA",
  },
  breadcrumb: [
    { label: "الرئيسية", href: "/ar" },
    { label: "التواصل والموعد", href: "/ar/contact" },
  ],
  hero: {
    eyebrow: "التواصل والموعد",
    title: "معلومات الزيارة وحجز الموعد",
    description:
      "للاطلاع على المواعيد المتاحة وتسجيل الحجز، استخدمي الصفحة الرسمية لد. طاهرة پوردست على منصتي Doctoreto أو Axon. كما يمكنك الاطلاع على معلومات التواصل وعنوان العيادة في هذه الصفحة.",
    appointmentSource: "contact-hero",
    secondaryCta: {
      text: "عرض معلومات العيادة",
      href: "#clinic-information",
    },
  },
  booking: {
    eyebrow: "الحجز عبر الإنترنت",
    title: "حجز موعد إلكتروني",
    content:
      "تُعرض المواعيد المتاحة، وأيام الحضور، ومعلومات التسجيل عبر الصفحة الرسمية لد. طاهرة پوردست على منصتي Doctoreto وAxon.",
    appointmentSource: "contact-booking-section",
    note: "يُجرى الحجز عبر الإنترنت خارج هذا الموقع ومن خلال منصتي Doctoreto أو Axon.",
  },
  clinic: {
    id: "clinic-information",
    eyebrow: "معلومات العيادة",
    title: "طرق التواصل والزيارة",
    emptyNote:
      "ستُنشر معلومات التواصل المعتمدة في هذا القسم بعد التنسيق مع العيادة.",
    appointmentSummary:
      "للاطلاع على المواعيد المتاحة وتسجيل الحجز، استخدمي منصتي Doctoreto أو Axon.",
  },
  map: {
    eyebrow: "موقع العيادة",
    title: "التوجيه إلى العيادة",
    linkText: "فتح المسار على الخريطة",
  },
  outOfTown: {
    eyebrow: "الزيارة من خارج المدينة",
    title: "قبل السفر، راجعي هذه النقاط",
    points: [
      {
        title: "أكّدي موعدك",
        description:
          "قبل التخطيط للسفر، تحققي من وقت الموعد وحالة التسجيل على منصة Doctoreto.",
      },
      {
        title: "أحضري المستندات الطبية",
        description:
          "أحضري تقارير الموجات فوق الصوتية، وMRI، والتحاليل، وتقارير العلاج ذات الصلة إن وُجدت.",
      },
      {
        title: "تحققي من العنوان والمسار",
        description:
          "قبل السفر، راجعي عنوان العيادة ومسار الوصول من المعلومات المعتمدة في هذه الصفحة.",
      },
      {
        title: "نسّقي مع العيادة عند الحاجة",
        description:
          "إذا كان لديكِ أي استفسار عن المستندات، أو وقت الحضور، أو مسار الزيارة، تواصلي عبر وسيلة الاتصال المعتمدة للعيادة.",
      },
    ],
    note:
      "هذه معلومات عامة، ويجب مطابقة تفاصيل الزيارة مع البيانات المسجلة على Doctoreto أو في العيادة.",
  },
  whatToBring: {
    eyebrow: "قبل الزيارة",
    title: "ما المستندات التي يُفضل إحضارها؟",
    items: [
      "تقارير الموجات فوق الصوتية السابقة",
      "تصوير MRI إن وُجد",
      "التحاليل المختبرية ذات الصلة",
      "تقارير العمليات الجراحية السابقة",
      "تقرير الفحص النسيجي إن وُجد",
      "قائمة الأدوية المستخدمة",
      "ملخص السجل العلاجي",
    ],
    guideLink: {
      text: "عرض الدليل الكامل للزيارة الأولى",
      href: "/ar/patient-guides/first-visit",
    },
  },
  faqs: {
    eyebrow: "الأسئلة الشائعة",
    title: "أسئلة متكررة عن التواصل والموعد",
    items: [
      {
        id: "online-appointment",
        question: "كيف أحجز موعداً عبر الإنترنت؟",
        answer:
          "يُجرى الحجز عبر الإنترنت من خلال الصفحة الرسمية لد. طاهرة پوردست على منصتي Doctoreto أو Axon.",
        hasAppointmentLink: true,
        appointmentSource: "contact-faq",
      },
      {
        id: "site-booking",
        question: "هل يمكن الحجز من خلال هذا الموقع؟",
        answer:
          "لا. هذا الموقع مخصص للتعريف بالخدمات وتقديم معلومات عامة، ويُجرى الحجز عبر منصتي Doctoreto أو Axon.",
      },
      {
        id: "first-visit-docs",
        question: "ما المستندات التي يُفضل إحضارها للزيارة الأولى؟",
        answer:
          "يُفضل إحضار المستندات ذات الصلة مثل الموجات فوق الصوتية، وMRI، والتحاليل، وتقارير العمليات الجراحية السابقة، وقائمة الأدوية المستخدمة إن وُجدت.",
      },
      {
        id: "out-of-town",
        question: "هل يمكنني الزيارة من خارج المدينة؟",
        answer:
          "نعم، لكن يُفضل قبل السفر التحقق من وقت الموعد، وعنوان العيادة، والمستندات اللازمة، والتنسيق مع العيادة عند الحاجة.",
      },
      {
        id: "contact-info",
        question: "من أين أجد العنوان ورقم التواصل؟",
        answer:
          "تُعرض معلومات العيادة المعتمدة في هذه الصفحة. لن تُنشر المعلومات التي لم تعتمدها العيادة بعد.",
      },
    ],
  },
  privacyNote: {
    title: "ملاحظة مهمة",
    content:
      "لحماية الخصوصية، لا ترسلي معلومات طبية حساسة عبر رسائل عامة، أو شبكات التواصل الاجتماعي، أو نماذج غير رسمية. قدّمي المستندات الطبية أثناء الزيارة أو عبر المسار المعتمد من فريق العلاج.",
  },
  finalCta: {
    title: "لحجز موعد",
    description:
      "يمكن الاطلاع على المواعيد المتاحة ومعلومات التسجيل لد. طاهرة پوردست على منصتي Doctoreto وAxon.",
    cta: {
      text: "عرض المواعيد المتاحة",
      source: "contact-final-cta",
    },
    phoneSource: "contact-final-cta",
  },
};
