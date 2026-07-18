/**
 * Renders the global site footer.
 */
(function () {
  "use strict";

  var mount = document.getElementById("site-footer-mount");
  if (!mount || typeof FOOTER_DATA === "undefined") return;
  if (typeof renderFooterNavColumn === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = FOOTER_DATA;
  var year = new Date().getFullYear();
  var copyrightSuffix =
    typeof UI_STRINGS !== "undefined" && UI_STRINGS.copyrightSuffix
      ? UI_STRINGS.copyrightSuffix
      : "تمامی حقوق محفوظ است.";
  var newTabSuffix =
    typeof UI_STRINGS !== "undefined" && UI_STRINGS.newTabSuffix
      ? UI_STRINGS.newTabSuffix
      : " (باز شدن در تب جدید)";

  var contactItems = [];

  if (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.clinicPhone) {
    var footerPhoneDisplay =
      SITE_CONFIG.clinicPhoneDisplay || SITE_CONFIG.clinicPhone;
    contactItems.push(
      '<li class="site-footer__contact-item">' +
      '<svg class="site-footer__contact-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
      '<path d="M4 3H7L8 6L6.5 7C7.5 9.5 9.5 11.5 12 12.5L13 11L16 12V15C16 15 13 16 8 13C3 10 3 6 4 3Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>' +
      "</svg>" +
      '<a href="tel:' +
      SITE_CONFIG.clinicPhone +
      '" class="site-footer__link site-footer__link--tel">' +
      footerPhoneDisplay +
      "</a></li>"
    );
  }

  if (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.clinicAddress) {
    contactItems.push(
      '<li class="site-footer__contact-item">' +
      '<svg class="site-footer__contact-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
      '<path d="M3 6L8 2L13 6V13H3V6Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>' +
      "</svg>" +
      "<span>" +
      SITE_CONFIG.clinicAddress +
      "</span></li>"
    );
  }

  if (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.workingHours) {
    contactItems.push(
      '<li class="site-footer__contact-item">' +
      '<svg class="site-footer__contact-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
      '<circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.2"/>' +
      '<path d="M8 5V8L10 10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>' +
      "</svg>" +
      "<span>" +
      SITE_CONFIG.workingHours +
      "</span></li>"
    );
  }

  var contactListHtml =
    contactItems.length > 0
      ? '<ul class="site-footer__contact-list" role="list">' +
        contactItems.join("") +
        "</ul>"
      : "";

  var hasAddressInfo =
    typeof SITE_CONFIG !== "undefined" &&
    (SITE_CONFIG.clinicPhone || SITE_CONFIG.clinicAddress);

  var addressWrapper = hasAddressInfo
    ? '<address class="site-footer__address">' + contactListHtml + "</address>"
    : contactListHtml;

  var socialHtml =
    typeof renderSocialLinks !== "undefined" ? renderSocialLinks() : "";

  mount.outerHTML =
    '<footer class="site-footer" role="contentinfo">' +
    '<div class="site-footer__main">' +
    '<div class="container">' +
    '<div class="site-footer__grid">' +
    '<div class="site-footer__col site-footer__col--identity">' +
    '<p class="site-footer__name">' +
    data.identity.name +
    "</p>" +
    '<p class="site-footer__subtitle">' +
    data.identity.subtitle +
    "</p>" +
    '<p class="site-footer__fellowship">' +
    data.identity.fellowship +
    "</p>" +
    '<p class="site-footer__description">' +
    data.identity.description +
    "</p>" +
    "</div>" +
    renderFooterNavColumn(
      data.quickLinks,
      "site-footer__col--quick"
    ) +
    renderFooterNavColumn(
      data.serviceLinks,
      "site-footer__col--services"
    ) +
    '<div class="site-footer__col site-footer__col--contact">' +
    '<h3 class="site-footer__heading">' +
    data.contact.title +
    "</h3>" +
    '<div class="site-footer__appointment">' +
    renderAppointmentLink({
      text: data.contact.appointmentText,
      source: data.contact.appointmentSource,
      provider: "doctoreto",
      variant: "primary",
      size: "sm",
      showIcon: true,
      className: "site-footer__appointment-btn",
    }) +
    renderAxonAltLink(data.contact.appointmentSource) +
    "</div>" +
    addressWrapper +
    socialHtml +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="site-footer__bottom">' +
    '<div class="container">' +
    '<p class="site-footer__disclaimer">' +
    data.disclaimer +
    "</p>" +
    '<div class="site-footer__bar">' +
    '<p class="site-footer__copyright">© ' +
    year +
    " " +
    data.identity.name +
    ". " +
    copyrightSuffix +
    "</p>" +
    '<nav class="site-footer__legal" aria-label="' +
    uiString("legalNavLabel", "لینک‌های حقوقی") +
    '">' +
    '<ul class="site-footer__legal-list" role="list">' +
    '<li><a href="' +
    data.legal.privacy.href +
    '" class="site-footer__link">' +
    data.legal.privacy.label +
    "</a></li>" +
    '<li><a href="' +
    data.legal.terms.href +
    '" class="site-footer__link">' +
    data.legal.terms.label +
    "</a></li>" +
    "</ul>" +
    "</nav>" +
    '<p class="site-footer__credit">' +
    data.credit.prefix +
    ' <a href="' +
    data.credit.href +
    '" class="site-footer__credit-link" target="_blank" rel="noopener noreferrer">' +
    data.credit.label +
    '<span class="sr-only">' +
    newTabSuffix +
    "</span></a></p>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</footer>";
})();
