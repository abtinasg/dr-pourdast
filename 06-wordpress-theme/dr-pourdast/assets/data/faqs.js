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
  eyebrow: "سؤالات پرتکرار",
  title: "پاسخ به پرسش‌های رایج بیماران",
  subtitle:
    "پاسخ‌های کوتاه و عمومی درباره اندومتریوز، جراحی‌های زنان، روند مراجعه و دریافت نوبت",
  items: [
    {
      id: "endometriosis-symptoms",
      question: "اندومتریوز چه علائمی دارد؟",
      answer:
        "اندومتریوز می‌تواند با دردهای شدید قاعدگی، درد لگنی، درد هنگام رابطه، مشکلات گوارشی یا اختلال در باروری همراه باشد. شدت و نوع علائم در افراد مختلف متفاوت است و تشخیص قطعی نیازمند ارزیابی پزشک است.",
      isActive: true,
      displayOrder: 1,
    },
    {
      id: "endometriosis-surgery",
      question: "آیا همه بیماران مبتلا به اندومتریوز به جراحی نیاز دارند؟",
      answer:
        "خیر. انتخاب روش درمان به شدت علائم، محل درگیری، سن، شرایط باروری و وضعیت عمومی بیمار بستگی دارد. برای بعضی بیماران درمان دارویی یا پیگیری مناسب است و برای برخی دیگر ممکن است جراحی بررسی شود.",
      isActive: true,
      displayOrder: 2,
    },
    {
      id: "first-visit-documents",
      question: "برای مراجعه اول چه مدارکی همراه داشته باشم؟",
      answer:
        "بهتر است آزمایش‌ها، سونوگرافی‌ها، MRI، گزارش جراحی‌های قبلی، فهرست داروهای مصرفی و سوابق درمانی مرتبط را همراه داشته باشید.",
      isActive: true,
      displayOrder: 3,
    },
    {
      id: "laparoscopy",
      question: "لاپاراسکوپی زنان چیست؟",
      answer:
        "لاپاراسکوپی یکی از روش‌های کم‌تهاجمی جراحی است که از طریق برش‌های کوچک انجام می‌شود و می‌تواند برای تشخیص یا درمان برخی بیماری‌های زنان استفاده شود.",
      isActive: true,
      displayOrder: 4,
    },
    {
      id: "hysteroscopy",
      question: "هیستروسکوپی برای چه مشکلاتی استفاده می‌شود؟",
      answer:
        "هیستروسکوپی برای بررسی فضای داخلی رحم و تشخیص یا درمان برخی مشکلات مانند پولیپ، چسبندگی یا ناهنجاری‌های داخل رحم کاربرد دارد. تشخیص نیاز به این روش باید توسط پزشک انجام شود.",
      isActive: true,
      displayOrder: 5,
    },
    {
      id: "appointment",
      question: "چگونه می‌توانم نوبت دریافت کنم؟",
      answer:
        "نوبت‌دهی اینترنتی از طریق صفحه دکتر طاهره پوردست در سامانه دکترتو انجام می‌شود. با انتخاب گزینه رزرو نوبت، وارد صفحه رسمی نوبت‌دهی می‌شوید.",
      hasAppointmentLink: true,
      isActive: true,
      displayOrder: 6,
    },
    {
      id: "not-medical-advice",
      question: "آیا اطلاعات این سایت جایگزین ویزیت پزشک است؟",
      answer:
        "خیر. مطالب سایت صرفاً برای آگاهی عمومی است و جایگزین معاینه، تشخیص یا توصیه درمانی پزشک نیست.",
      isActive: true,
      displayOrder: 8,
    },
  ],
};
