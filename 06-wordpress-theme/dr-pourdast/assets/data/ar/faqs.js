/**
 * FAQ section content.
 *
 * All medical FAQ answers must be reviewed and approved by the doctor
 * before publication.
 *
 * WordPress-ready fields per item:
 *   question, answer, display_order, is_active
 *
 * @typedef {Object} FAQItem
 * @property {string} id
 * @property {string} question
 * @property {string} answer
 * @property {boolean} [hasAppointmentLink]
 * @property {number} [displayOrder]
 * @property {boolean} [isActive]
 */

/** @type {{ eyebrow: string, title: string, subtitle: string, items: FAQItem[] }} */
var FAQ_SECTION = {
  eyebrow: "الأسئلة الشائعة",
  title: "إجابات على الأسئلة المتكررة للمريضات",
  subtitle:
    "إجابات مختصرة وعامة عن بطانة الرحم المهاجرة، وجراحات أمراض النساء، ومسار الزيارة، وحجز الموعد",
  items: [
    {
      id: "endometriosis-symptoms",
      question: "ما أعراض بطانة الرحم المهاجرة؟",
      answer:
        "قد تُصاحب بطانة الرحم المهاجرة آلاماً شديدة في الدورة الشهرية، وآلاماً في الحوض، وآلاماً أثناء العلاقة، ومشكلات هضمية، أو اضطراباً في الخصوبة. تختلف شدة الأعراض ونوعها بين الأفراد، والتشخيص النهائي يتطلب تقييماً طبياً.",
      isActive: true,
      displayOrder: 1,
    },
    {
      id: "endometriosis-surgery",
      question: "هل تحتاج جميع مريضات بطانة الرحم المهاجرة إلى جراحة؟",
      answer:
        "لا. يعتمد اختيار العلاج على شدة الأعراض، وموقع الإصابة، والعمر، والحالة الإنجابية، والحالة العامة للمريضة. قد يناسب بعض المريضات العلاج الدوائي أو المتابعة، بينما قد تُراجع الجراحة لدى أخريات.",
      isActive: true,
      displayOrder: 2,
    },
    {
      id: "first-visit-documents",
      question: "ما المستندات التي يُفضل إحضارها للزيارة الأولى؟",
      answer:
        "يُفضل إحضار التحاليل، وتقارير الموجات فوق الصوتية، وMRI، وتقارير العمليات الجراحية السابقة، وقائمة الأدوية المستخدمة، والسجل العلاجي ذي الصلة.",
      isActive: true,
      displayOrder: 3,
    },
    {
      id: "laparoscopy",
      question: "ما هو منظار البطن لأمراض النساء؟",
      answer:
        "منظار البطن إجراء جراحي طفيف التوغل يُجرى عبر شقوق صغيرة، ويمكن استخدامه لتشخيص أو علاج بعض أمراض النساء.",
      isActive: true,
      displayOrder: 4,
    },
    {
      id: "hysteroscopy",
      question: "لماذا يُستخدم منظار الرحم؟",
      answer:
        "يُستخدم منظار الرحم لفحص تجويف الرحم، وتشخيص أو علاج بعض المشكلات مثل الورم الغدي، أو الالتصاقات، أو التشوهات داخل الرحم. يحدد الطبيب الحاجة إلى هذا الإجراء.",
      isActive: true,
      displayOrder: 5,
    },
    {
      id: "appointment",
      question: "كيف يمكنني حجز موعد؟",
      answer:
        "تُحجز زيارة الدكتورة مباشرة عبر Axon؛ وتتوافر أيضًا مواعيد الزيارة والسونار. مواعيد Doctoreto عادةً أسرع وتُجرى بواسطة زميلاتها مع التشاور معها؛ وعند الحاجة إلى جراحة تُجريها الدكتورة بنفسها. زر «حجز موعد» يوجّهكِ إلى Axon.",
      hasAppointmentLink: true,
      isActive: true,
      displayOrder: 6,
    },
    {
      id: "not-medical-advice",
      question: "هل معلومات هذا الموقع بديل عن زيارة الطبيب؟",
      answer:
        "لا. محتوى الموقع للتوعية العامة فقط ولا يغني عن الفحص أو التشخيص أو التوصيات العلاجية من الطبيب.",
      isActive: true,
      displayOrder: 8,
    },
  ],
};
