/**
 * Renders the final appointment CTA section.
 */
(function () {
  "use strict";

  var mount = document.getElementById("final-cta-mount");
  if (!mount || typeof FINAL_CTA_SECTION === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = FINAL_CTA_SECTION;
  var titleId = "final-cta-title";

  var trustHtml = data.trustDetails
    .map(function (detail) {
      return (
        '<li class="final-cta__trust-item">' +
        '<svg class="final-cta__trust-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
        '<path d="M3 8L6 11L13 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg>" +
        detail +
        "</li>"
      );
    })
    .join("");

  mount.outerHTML =
    '<section class="final-cta section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="final-cta__card">' +
    '<div class="final-cta__grid">' +
    '<div class="final-cta__content">' +
    '<p class="final-cta__eyebrow">' +
    data.eyebrow +
    "</p>" +
    '<h2 class="final-cta__title" id="' +
    titleId +
    '">' +
    data.title +
    "</h2>" +
    '<p class="final-cta__description">' +
    data.description +
    "</p>" +
    "</div>" +
    '<div class="final-cta__actions">' +
    '<div class="final-cta__buttons">' +
    renderPrimaryCtaGroup({
      source: data.ctas.primary.source,
      doctoretoText:
        data.ctas.primary.text ||
        uiString("doctoretoAppointment", "مشاهده نوبت‌های آزاد"),
      showIcon: true,
      wrapInGroup: false,
    }) +
    "</div>" +
    renderAxonAltLink(data.ctas.primary.source) +
    '<p class="final-cta__note">' +
    data.supportNote +
    "</p>" +
    '<ul class="final-cta__trust" aria-label="اطلاعات نوبت‌دهی">' +
    trustHtml +
    "</ul>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</section>";
})();
