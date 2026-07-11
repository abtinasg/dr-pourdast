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
  eyebrow: "تجربه بیماران",
  title: "آنچه بیماران درباره تجربه مراجعه می‌گویند",
  subtitle: "بازخوردهای واقعی بیماران از پلتفرم‌های دکترتو و اکسون",
  footerNote:
    "تجربه درمان برای هر بیمار متفاوت است و نتایج درمان به شرایط فردی بستگی دارد.",
  initialVisibleCount: 6,
  testimonials: [
    {
      id: "axon-zahra-ultrasound-1405-04-11",
      quote: "بسیار خوب و عالی. زمان زیادی برای ویزیت هر بیمار گذاشته می‌شود.",
      displayName: "زهرا",
      service: "سونوگرافی + ویزیت حضوری",
      source: "اکسون",
      verified: true,
      displayOrder: 1,
    },
    {
      id: "axon-tahereh-laparoscopy-1405-04-11",
      quote:
        "دکتر پوردست خانم دکتری متعهد، باایمان و با انرژی مثبت هستند. من عمل لاپاراسکپی میوما ۵ ماه پیش انجام دادم که دستشان خیلی سبک و خوب بود.",
      displayName: "طاهره",
      service: "سونوگرافی + ویزیت حضوری",
      source: "اکسون",
      verified: true,
      displayOrder: 2,
    },
    {
      id: "axon-user-inperson-1405-04-11",
      quote: "پزشک خودش محشره و رو دستش نیست.",
      displayName: "کاربر اکسون",
      service: "نوبت حضوری",
      source: "اکسون",
      verified: true,
      displayOrder: 3,
    },
    {
      id: "axon-atefeh-inperson-1405-04-12",
      quote:
        "استاد پوردست پزشکی فوق‌العاده خوش‌اخلاق و خوش‌برخورد هستند. تیم پزشکی عالی دارند، خیلی پیگیر مراجعه‌کنندگان هستند و نوبت‌ها را یادآوری می‌کنند. تشخیصشان عالی است؛ هم در زمینه سونو و هم در تشخیص بیماری‌ها.",
      displayName: "عاطفه",
      service: "نوبت حضوری",
      source: "اکسون",
      verified: true,
      displayOrder: 4,
    },
    {
      id: "axon-inperson-1405-04-16",
      quote:
        "پزشک کارشون عالیه ولی مدت زمان انتظار و صف نوبت طولانی می‌باشد.",
      displayName: "کاربر اکسون",
      service: "نوبت حضوری",
      source: "اکسون",
      verified: true,
      displayOrder: 5,
    },
    {
      id: "axon-marjan-ultrasound-1405-04-16",
      quote: "زمان انتظار کم است.",
      displayName: "مرجان",
      service: "سونوگرافی + ویزیت حضوری",
      source: "اکسون",
      verified: true,
      displayOrder: 6,
    },
    {
      id: "axon-mahnaz-inperson-1405-04-09",
      quote: "با حوصله و خوش‌برخورد.",
      displayName: "مهناز",
      service: "ویزیت حضوری",
      source: "اکسون",
      verified: true,
      displayOrder: 7,
    },
    {
      id: "axon-ziba-ultrasound-1405-04-05",
      quote:
        "خانم طاهره پوردست خیلی خوش‌اخلاق و خوش‌برخورد هستند. ان‌شاءالله همیشه سالم و تندرست باشند.",
      displayName: "زیبا",
      service: "سونوگرافی + ویزیت حضوری",
      source: "اکسون",
      verified: true,
      displayOrder: 8,
    },
    {
      id: "axon-zahra-inperson-1405-04-02",
      quote: "بسیار خوش‌برخورد.",
      displayName: "زهرا",
      service: "نوبت حضوری",
      source: "اکسون",
      verified: true,
      displayOrder: 9,
    },
    {
      id: "doctoreto-hernia-laparoscopy-1405-03-26",
      quote:
        "خانم دکتر بسیار مهربان، با حوصله و خوش‌برخورد بودند. کاملاً بیمار را درک می‌کنند و نهایت همکاری و همراهی را با بیمار دارند.",
      displayName: "کاربر دکترتو",
      service: "درمان و جراحی فتق (هرنی) با روش لاپاراسکوپی",
      source: "دکترتو",
      verified: true,
      displayOrder: 10,
    },
    {
      id: "doctoreto-clinic-space-1405-03-09",
      quote: "خیلی فضای مطب خوب بود و منشی عالی.",
      displayName: "کاربر دکترتو",
      service: "درمان مشکلات اندومتریوز و فیبروم رحم",
      source: "دکترتو",
      verified: true,
      displayOrder: 11,
    },
    {
      id: "doctoreto-somayeh-1405-03-08",
      quote:
        "دکتر خوب و مهربان و باتجربه هستند. منشی هم مهربان بودند و محیط مطب عالی.",
      displayName: "سمیه",
      service: "درمان اندومتریوز و کیست‌های تخمدان",
      source: "دکترتو",
      verified: true,
      displayOrder: 12,
    },
    {
      id: "doctoreto-best-doctor-1405-03-04",
      quote:
        "عالی بودند؛ بهترین دکتری که رفته‌ام. دکتر پوردست عزیز هستند.",
      displayName: "کاربر دکترتو",
      service: "ارزیابی و درمان ناهنجاری‌های رحمی و تخمدانی",
      source: "دکترتو",
      verified: true,
      displayOrder: 13,
    },
    {
      id: "doctoreto-endometriosis-fibroid-1405-03-02",
      quote:
        "اخلاق خانم دکتر و پرسنل عالی بود و تشخیصشان برای اندومتریوز بسیار خوب است. مهم‌تر از همه، وقتی برای بیمار می‌گذارند و به تمام صحبت‌های او گوش می‌دهند.",
      displayName: "کاربر دکترتو",
      service: "درمان مشکلات اندومتریوز و فیبروم رحم",
      source: "دکترتو",
      verified: true,
      displayOrder: 14,
    },
    {
      id: "doctoreto-endometriosis-1405-02-16",
      quote: "عالی برای اندومتریوز.",
      displayName: "کاربر دکترتو",
      service: "درمان اندومتریوز و کیست‌های تخمدان",
      source: "دکترتو",
      verified: true,
      displayOrder: 15,
    },
    {
      id: "doctoreto-sanaz-surgery-1405-02-13",
      quote:
        "بهترین دکتر شیراز و تنها کسی که می‌توان بین دکترها به او اعتماد کرد. جراحی شدم، دستشان خیلی سبک بود و بعد از عمل اصلاً اذیت نشدم.",
      displayName: "ساناز",
      service: "جراحی‌های زنان مانند هیسترکتومی (برداشتن رحم)",
      source: "دکترتو",
      verified: true,
      displayOrder: 16,
    },
    {
      id: "doctoreto-raheleh-1405-01-25",
      quote: "پیشنهاد می‌کنم.",
      displayName: "راحله",
      service: "درمان مشکلات اندومتریوز و فیبروم رحم",
      source: "دکترتو",
      verified: true,
      displayOrder: 17,
    },
    {
      id: "doctoreto-kind-doctor-1404-11-01",
      quote:
        "خانم دکتر بسیار مهربان، خوش‌برخورد و حاذق هستند.",
      displayName: "کاربر دکترتو",
      service: "درمان مشکلات اندومتریوز و فیبروم رحم",
      source: "دکترتو",
      verified: true,
      displayOrder: 18,
    },
    {
      id: "doctoreto-saghri-1404-10-24",
      quote:
        "دکتر بسیار باتجربه، مهربان و خوش‌اخلاق بود و برای بیماران وقت می‌گذاشت و حوصله به خرج می‌داد.",
      displayName: "صغری",
      service: "درمان اندومتریوز و کیست‌های تخمدان",
      source: "دکترتو",
      verified: true,
      displayOrder: 19,
    },
    {
      id: "doctoreto-nasrin-1404-10-09",
      quote: "عالی تشخیص دادند.",
      displayName: "نسرین",
      service: "درمان اندومتریوز و کیست‌های تخمدان",
      source: "دکترتو",
      verified: true,
      displayOrder: 20,
    },
    {
      id: "doctoreto-best-all-1404-10-08",
      quote:
        "بهترین دکتری بود که دیدم؛ واقعاً از هر نظر عالی بودند؛ از نظر درمان، اخلاق، برخورد و دست برای عمل.",
      displayName: "کاربر دکترتو",
      service: "درمان مشکلات اندومتریوز و فیبروم رحم",
      source: "دکترتو",
      verified: true,
      displayOrder: 21,
    },
    {
      id: "doctoreto-arsalan-1404-10-02",
      quote: "بسیار باتجربه و عالی هستند.",
      displayName: "ارسلان",
      service: "درمان اندومتریوز و کیست‌های تخمدان",
      source: "دکترتو",
      verified: true,
      displayOrder: 22,
    },
  ],
};
