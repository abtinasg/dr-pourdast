/**
 * Shared UI strings — Persian (default).
 */
var UI_STRINGS = {
  copyrightSuffix: "تمامی حقوق محفوظ است.",
  axonAppointment: "رزرو نوبت در اکسون",
  doctoretoAppointment: "نوبت‌دهی در دکترتو",
  doctoretoDefault: "رزرو نوبت در اکسون",
  headerAppointment: "رزرو نوبت",
  newTabSuffix: " (باز شدن در تب جدید)",
  contactClinic: "تماس با مطب",
  whatsappLabel: "گفتگو در واتساپ",
  backToTop: "بازگشت به بالای صفحه",
  languageNavLabel: "انتخاب زبان",
  appointmentDefault: "رزرو نوبت",
  legalNavLabel: "لینک‌های حقوقی",
  shortcutsLabel: "میانبرهای سریع",
  continue: "ادامه",
  close: "بستن",
  showMoreReviews: "نمایش بیشتر ({count} نظر دیگر)",
  openMenu: "باز کردن منو",
  closeMenu: "بستن منو",
  orWord: " یا ",
  aboutDoctor: "درباره دکتر",
  pageSections: "بخش‌های صفحه",
  learnMore: "مشاهده جزئیات",
  viewDetails: "مشاهده جزئیات",
  bookingNote:
    "ویزیت خانم دکتر در اکسون ثبت می‌شود. نوبت‌های دکترتو معمولاً زودتر و توسط همکاران ایشان انجام می‌گیرد.",
};

/**
 * @param {string} key
 * @param {string} fallback
 * @returns {string}
 */
function uiString(key, fallback) {
  if (typeof UI_STRINGS !== "undefined" && UI_STRINGS[key]) {
    return UI_STRINGS[key];
  }
  return fallback;
}

/**
 * @param {string} key
 * @param {Record<string, string|number>} vars
 * @param {string} fallback
 * @returns {string}
 */
function uiStringTemplate(key, vars, fallback) {
  var template = uiString(key, fallback);
  return Object.keys(vars).reduce(function (output, name) {
    return output.replace("{" + name + "}", String(vars[name]));
  }, template);
}
