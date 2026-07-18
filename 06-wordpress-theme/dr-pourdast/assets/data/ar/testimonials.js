/**
 * Patient testimonials data.
 *
 * Only verified patient feedback approved by the clinic may be published.
 *
 * WordPress-ready fields per item:
 *   quote, display_name, service, source, verified, display_order
 *
 * @typedef {Object} Testimonial
 * @property {string} id
 * @property {string} quote
 * @property {string} displayName
 * @property {string} [service]
 * @property {string} [source]
 * @property {boolean} verified
 * @property {number} [displayOrder]
 */

/** @type {{ eyebrow: string, title: string, subtitle: string, footerNote: string, testimonials: Testimonial[] }} */
var TESTIMONIALS_SECTION = {
  eyebrow: "تجربة المرضى",
  title: "ما يقوله المرضى عن تجربة المراجعة",
  subtitle: "آراء حقيقية من المرضى على منصتي Doctoreto و Axon",
  footerNote:
    "تختلف تجربة العلاج من مريضة لأخرى، وتعتمد النتائج على الظروف الفردية.",
  initialVisibleCount: 6,
  testimonials: [
    {
      id: "axon-zahra-ultrasound-1405-04-11",
      quote: "ممتازة جداً. يُخصَّص وقت كافٍ لكل مريضة.",
      displayName: "زهرا",
      service: "موجات فوق صوتية + زيارة حضورية",
      source: "Axon",
      verified: true,
      displayOrder: 1,
    },
    {
      id: "axon-tahereh-laparoscopy-1405-04-11",
      quote:
        "د. پوردست طبيبة ملتزمة وإيجابية الطاقة. أجريت عملية منظار بطن لإزالة الورم الليفي قبل 5 أشهر، وكانت يدها خفيفة وماهرة.",
      displayName: "طاهره",
      service: "موجات فوق صوتية + زيارة حضورية",
      source: "Axon",
      verified: true,
      displayOrder: 2,
    },
    {
      id: "axon-user-inperson-1405-04-11",
      quote: "الطبيبة ممتازة ويدها خفيفة.",
      displayName: "کاربر اکسون",
      service: "موعد حضوري",
      source: "Axon",
      verified: true,
      displayOrder: 3,
    },
    {
      id: "axon-atefeh-inperson-1405-04-12",
      quote:
        "د. پوردست طبيبة ذات أخلاق عالية ولباقة. لديها فريق طبي ممتاز، يتابعون المرضى باهتمام ويذكّرون بالمواعيد. تشخيصها ممتاز في الموجات فوق الصوتية وفي تشخيص الأمراض.",
      displayName: "عاطفه",
      service: "موعد حضوري",
      source: "Axon",
      verified: true,
      displayOrder: 4,
    },
    {
      id: "axon-inperson-1405-04-16",
      quote:
        "عمل الطبيبة ممتاز، لكن وقت الانتظار وطابور المواعيد طويل.",
      displayName: "کاربر اکسون",
      service: "موعد حضوري",
      source: "Axon",
      verified: true,
      displayOrder: 5,
    },
    {
      id: "axon-marjan-ultrasound-1405-04-16",
      quote: "وقت الانتظار قصير.",
      displayName: "مرجان",
      service: "موجات فوق صوتية + زيارة حضورية",
      source: "Axon",
      verified: true,
      displayOrder: 6,
    },
    {
      id: "axon-mahnaz-inperson-1405-04-09",
      quote: "صبورة ولبقة.",
      displayName: "مهناز",
      service: "زيارة حضورية",
      source: "Axon",
      verified: true,
      displayOrder: 7,
    },
    {
      id: "axon-ziba-ultrasound-1405-04-05",
      quote:
        "د. طاهرة پوردست ذات أخلاق عالية ولباقة. نتمنى لها دائماً الصحة والعافية.",
      displayName: "زیبا",
      service: "موجات فوق صوتية + زيارة حضورية",
      source: "Axon",
      verified: true,
      displayOrder: 8,
    },
    {
      id: "axon-zahra-inperson-1405-04-02",
      quote: "لبقة جداً.",
      displayName: "زهرا",
      service: "موعد حضوري",
      source: "Axon",
      verified: true,
      displayOrder: 9,
    },
    {
      id: "doctoreto-hernia-laparoscopy-1405-03-26",
      quote:
        "الطبيبة كانت لطيفة جداً، صبورة ولبقة. تفهم المريضة تماماً وتقدّم أقصى درجات التعاون والمرافقة.",
      displayName: "کاربر دکترتو",
      service: "علاج وجراحة الفتق (hernia) بمنظار البطن",
      source: "Doctoreto",
      verified: true,
      displayOrder: 10,
    },
    {
      id: "doctoreto-clinic-space-1405-03-09",
      quote: "كان مكان العيادة مريحاً جداً والسكرتيرة ممتازة.",
      displayName: "کاربر دکترتو",
      service: "علاج مشكلات بطانة الرحم المهاجرة والورم الليفي الرحمي",
      source: "Doctoreto",
      verified: true,
      displayOrder: 11,
    },
    {
      id: "doctoreto-somayeh-1405-03-08",
      quote:
        "طبيبة جيدة ولطيفة وذات خبرة. السكرتيرة لطيفة أيضاً وبيئة العيادة ممتازة.",
      displayName: "سمیه",
      service: "علاج بطانة الرحم المهاجرة وأكياس المبيض",
      source: "Doctoreto",
      verified: true,
      displayOrder: 12,
    },
    {
      id: "doctoreto-best-doctor-1405-03-04",
      quote:
        "كانت ممتازة؛ أفضل طبيبة زرتها. د. پوردست عزيزة جداً.",
      displayName: "کاربر دکترتو",
      service: "تقييم وعلاج تشوهات الرحم والمبيض",
      source: "Doctoreto",
      verified: true,
      displayOrder: 13,
    },
    {
      id: "doctoreto-endometriosis-fibroid-1405-03-02",
      quote:
        "أخلاق الطبيبة والطاقم ممتازة، وتشخيصها لبطانة الرحم المهاجرة جيد جداً. الأهم من ذلك، الوقت الذي تخصصه للمريضة والاستماع الكامل لحديثها.",
      displayName: "کاربر دکترتو",
      service: "علاج مشكلات بطانة الرحم المهاجرة والورم الليفي الرحمي",
      source: "Doctoreto",
      verified: true,
      displayOrder: 14,
    },
    {
      id: "doctoreto-endometriosis-1405-02-16",
      quote: "ممتازة في علاج بطانة الرحم المهاجرة.",
      displayName: "کاربر دکترتو",
      service: "علاج بطانة الرحم المهاجرة وأكياس المبيض",
      source: "Doctoreto",
      verified: true,
      displayOrder: 15,
    },
    {
      id: "doctoreto-sanaz-surgery-1405-02-13",
      quote:
        "أفضل طبيبة في شيراز والوحيدة التي يمكن الوثوق بها بين الأطباء. أجريت عملية جراحية، وكانت يدها خفيفة جداً ولم أتألم بعد العملية.",
      displayName: "سناز",
      service: "جراحات أمراض النساء مثل استئصال الرحم (hysterectomy)",
      source: "Doctoreto",
      verified: true,
      displayOrder: 16,
    },
    {
      id: "doctoreto-raheleh-1405-01-25",
      quote: "أنصح بها.",
      displayName: "راحله",
      service: "علاج مشكلات بطانة الرحم المهاجرة والورم الليفي الرحمي",
      source: "Doctoreto",
      verified: true,
      displayOrder: 17,
    },
    {
      id: "doctoreto-kind-doctor-1404-11-01",
      quote:
        "الطبيبة لطيفة جداً، لبقة وماهرة.",
      displayName: "کاربر دکترتو",
      service: "علاج مشكلات بطانة الرحم المهاجرة والورم الليفي الرحمي",
      source: "Doctoreto",
      verified: true,
      displayOrder: 18,
    },
    {
      id: "doctoreto-saghri-1404-10-24",
      quote:
        "طبيبة ذات خبرة كبيرة، لطيفة وذات أخلاق عالية، وتخصص وقتاً للمريضات وتصبر عليهن.",
      displayName: "صغری",
      service: "علاج بطانة الرحم المهاجرة وأكياس المبيض",
      source: "Doctoreto",
      verified: true,
      displayOrder: 19,
    },
    {
      id: "doctoreto-nasrin-1404-10-09",
      quote: "تشخيص ممتاز.",
      displayName: "نسرین",
      service: "علاج بطانة الرحم المهاجرة وأكياس المبيض",
      source: "Doctoreto",
      verified: true,
      displayOrder: 20,
    },
    {
      id: "doctoreto-best-all-1404-10-08",
      quote:
        "أفضل طبيبة رأيتها؛ كانت ممتازة من كل الجوانب: العلاج، والأخلاق، والتعامل، والمهارة الجراحية.",
      displayName: "کاربر دکترتو",
      service: "علاج مشكلات بطانة الرحم المهاجرة والورم الليفي الرحمي",
      source: "Doctoreto",
      verified: true,
      displayOrder: 21,
    },
    {
      id: "doctoreto-arsalan-1404-10-02",
      quote: "ذات خبرة كبيرة وممتازة.",
      displayName: "ارسلان",
      service: "علاج بطانة الرحم المهاجرة وأكياس المبيض",
      source: "Doctoreto",
      verified: true,
      displayOrder: 22,
    },
  ],
};
