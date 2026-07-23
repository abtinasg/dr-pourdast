/**
 * Shared UI strings — English.
 */
var UI_STRINGS = {
  copyrightSuffix: "All rights reserved.",
  axonAppointment: "Book on Axon",
  doctoretoAppointment: "Book on Doctoreto",
  doctoretoDefault: "Book on Axon",
  headerAppointment: "Book appointment",
  newTabSuffix: " (opens in new tab)",
  contactClinic: "Contact clinic",
  whatsappLabel: "Chat on WhatsApp",
  backToTop: "Back to top",
  languageNavLabel: "Language selection",
  appointmentDefault: "Book appointment",
  legalNavLabel: "Legal links",
  shortcutsLabel: "Quick shortcuts",
  continue: "Continue",
  close: "Close",
  showMoreReviews: "Show {count} more reviews",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  orWord: " or ",
  aboutDoctor: "About the physician",
  pageSections: "Page sections",
  learnMore: "View details",
  viewDetails: "View details",
  bookingNote:
    "Visits with the doctor are booked on Axon. Doctoreto usually offers earlier slots with her colleagues.",
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
