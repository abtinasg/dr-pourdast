/**
 * Renders the doctor introduction section from DOCTOR_INTRODUCTION data.
 */
(function () {
  "use strict";

  var mount = document.getElementById("doctor-intro-mount");
  if (!mount || typeof DOCTOR_INTRODUCTION === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = DOCTOR_INTRODUCTION;
  var titleId = "doctor-intro-title";

  var bioHtml = data.biography
    .map(function (paragraph) {
      return "<p>" + paragraph + "</p>";
    })
    .join("");

  var credentialCardHtml = data.credentialCard
    .map(function (line) {
      return '<p class="doctor-intro__card-line">' + line + "</p>";
    })
    .join("");

  var credentialsHtml = data.credentials
    .map(function (item) {
      return renderCredentialItem(item);
    })
    .join("");

  mount.outerHTML =
    '<section class="doctor-intro section" id="' +
    data.id +
    '" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="doctor-intro__grid">' +
    '<div class="doctor-intro__visual">' +
    '<figure class="doctor-intro__image-frame">' +
    '<img class="doctor-intro__image" src="" alt="' +
    data.imageAlt +
    '" width="400" height="500" hidden>' +
    '<div class="doctor-intro__image-placeholder" aria-hidden="true">' +
    '<svg class="doctor-intro__image-silhouette" viewBox="0 0 120 200" fill="currentColor">' +
    '<ellipse cx="60" cy="35" rx="22" ry="26"/>' +
    '<path d="M30 75 Q60 65 90 75 L95 200 L25 200 Z"/>' +
    "</svg>" +
    "</div>" +
    '<figcaption class="sr-only">' +
    data.imageAlt +
    "</figcaption>" +
    "</figure>" +
    '<aside class="doctor-intro__credential-card" aria-label="عنوان‌های تخصصی">' +
    credentialCardHtml +
    "</aside>" +
    "</div>" +
    '<div class="doctor-intro__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    data.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    data.title +
    "</h2>" +
    "</header>" +
    '<div class="doctor-intro__bio">' +
    bioHtml +
    "</div>" +
    '<ul class="credential-list" aria-label="اعتبارنامه‌های علمی">' +
    credentialsHtml +
    "</ul>" +
    '<div class="doctor-intro__actions">' +
    '<div class="btn-group">' +
    renderAppointmentLinksGroup({
      source: data.ctas.primary.source,
      wrapInGroup: false,
      texts: {
        doctoreto: data.ctas.primary.text,
        axon: "دریافت نوبت از اکسون",
      },
    }) +
    '<a href="' +
    data.ctas.secondary.href +
    '" class="btn btn--secondary">' +
    data.ctas.secondary.text +
    "</a>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</section>";
})();
