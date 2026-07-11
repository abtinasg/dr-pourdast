/**
 * Renders the services hub page.
 */
(function () {
  "use strict";

  var mount = document.getElementById("services-page-mount");
  if (!mount || typeof SERVICES_PAGE === "undefined") return;
  if (typeof SERVICES_SECTION === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof renderProcedureGroups === "undefined") return;

  var data = SERVICES_PAGE;
  var hero = data.hero;
  var titleId = "services-hub-hero-title";

  var approachHtml = data.approach.points
    .map(function (point) {
      return (
        '<li class="guides-use__item">' +
        '<h3 class="guides-use__title">' +
        point.title +
        "</h3>" +
        '<p class="guides-use__description">' +
        point.description +
        "</p></li>"
      );
    })
    .join("");

  var guidesHtml = data.relatedGuides.items
    .map(function (item) {
      return (
        '<li><a href="' +
        item.href +
        '" class="service-related__link">' +
        item.label +
        '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
        '<path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg></a></li>"
      );
    })
    .join("");

  mount.outerHTML =
    renderServiceBreadcrumb(data.breadcrumb) +
    '<section class="guides-hero section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="guides-hero__inner">' +
    '<div class="guides-hero__content">' +
    '<p class="guides-hero__eyebrow">' +
    hero.eyebrow +
    "</p>" +
    '<h1 class="guides-hero__title" id="' +
    titleId +
    '">' +
    hero.title +
    "</h1>" +
    '<p class="guides-hero__description">' +
    hero.description +
    "</p>" +
    '<div class="guides-hero__actions">' +
    '<div class="btn-group">' +
    '<a href="' +
    hero.primaryCta.href +
    '" class="btn btn--primary">' +
    hero.primaryCta.text +
    "</a>" +
    renderAppointmentLinksGroup({
      source: hero.appointmentSource,
      variant: "secondary",
      secondaryVariant: "secondary",
      showIcon: true,
      wrapInGroup: false,
    }) +
    "</div></div>" +
    '<p class="guides-hero__note">' +
    hero.note +
    "</p>" +
    "</div></div></div></section>" +
    '<section class="services-section section" id="' +
    data.services.id +
    '" aria-labelledby="services-hub-list-title">' +
    '<div class="container">' +
    '<header class="services-section__header">' +
    '<p class="services-section__eyebrow">' +
    data.services.eyebrow +
    "</p>" +
    '<h2 class="services-section__title" id="services-hub-list-title">' +
    data.services.title +
    "</h2>" +
    '<p class="services-section__subtitle">' +
    data.services.subtitle +
    "</p>" +
    '<span class="services-section__divider" aria-hidden="true"></span>' +
    "</header>" +
    renderProcedureGroups(SERVICES_SECTION.groups) +
    "</div></section>" +
    '<section class="guides-section section guides-section--soft" aria-labelledby="services-approach-title">' +
    '<div class="container">' +
    '<div class="guides-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    data.approach.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="services-approach-title">' +
    data.approach.title +
    "</h2>" +
    "</header>" +
    '<ul class="guides-use" role="list">' +
    approachHtml +
    "</ul></div></div></section>" +
    renderMedicalDisclaimer(data.disclaimer) +
    '<section class="guides-section section" aria-labelledby="services-related-guides-title">' +
    '<div class="container">' +
    '<div class="guides-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    data.relatedGuides.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="services-related-guides-title">' +
    data.relatedGuides.title +
    "</h2>" +
    "</header>" +
    '<ul class="service-related" role="list">' +
    guidesHtml +
    "</ul></div></div></section>" +
    renderServiceAppointmentCta(data.finalCta);
})();
