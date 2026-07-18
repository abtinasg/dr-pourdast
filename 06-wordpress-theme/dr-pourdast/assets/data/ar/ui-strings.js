/**
 * Shared UI strings — Arabic.
 */
var UI_STRINGS = {
  copyrightSuffix: "جميع الحقوق محفوظة.",
  axonAppointment: "حجز موعد عبر Axon",
  doctoretoAppointment: "عرض المواعيد المتاحة",
  doctoretoDefault: "عرض المواعيد المتاحة",
  headerAppointment: "عرض المواعيد المتاحة",
  newTabSuffix: " (يفتح في تبويب جديد)",
  contactClinic: "الاتصال بالعيادة",
  whatsappLabel: "محادثة عبر واتساب",
  backToTop: "العودة إلى الأعلى",
  languageNavLabel: "اختيار اللغة",
  appointmentDefault: "عرض المواعيد المتاحة",
  legalNavLabel: "روابط قانونية",
  shortcutsLabel: "اختصارات سريعة",
  continue: "متابعة",
  close: "إغلاق",
  showMoreReviews: "عرض {count} مراجعات أخرى",
  openMenu: "فتح القائمة",
  closeMenu: "إغلاق القائمة",
  orWord: " أو ",
  aboutDoctor: "عن الطبيبة",
  pageSections: "أقسام الصفحة",
  learnMore: "عرض التفاصيل",
  viewDetails: "عرض التفاصيل",
  bookingNote: "الحجز الإلكتروني متاح عبر Doctoreto وAxon.",
};

function uiString(key, fallback) {
  if (typeof UI_STRINGS !== "undefined" && UI_STRINGS[key]) {
    return UI_STRINGS[key];
  }
  return fallback;
}

function uiStringTemplate(key, vars, fallback) {
  var template = uiString(key, fallback);
  return Object.keys(vars).reduce(function (output, name) {
    return output.replace("{" + name + "}", String(vars[name]));
  }, template);
}
