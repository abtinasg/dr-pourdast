/**
 * Renders the standalone FAQ page.
 */
(function () {
  "use strict";

  var mount = document.getElementById("faq-page-mount");
  if (!mount || typeof FAQ_PAGE === "undefined") return;
  if (typeof FAQ_SECTION === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof renderFaqItem === "undefined") return;

  var data = FAQ_PAGE;
  var intro = data.intro;
  var titleId = "faq-page-title";

  var activeItems = FAQ_SECTION.items
    .filter(function (item) {
      return item.isActive !== false;
    })
    .sort(function (a, b) {
      return (a.displayOrder || 0) - (b.displayOrder || 0);
    });

  var isDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1024px)").matches;

  var itemsHtml = activeItems
    .map(function (item, index) {
      return renderFaqItem(item, index, isDesktop && index === 0);
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
    intro.eyebrow +
    "</p>" +
    '<h1 class="guides-hero__title" id="' +
    titleId +
    '">' +
    intro.title +
    "</h1>" +
    '<p class="guides-hero__description">' +
    intro.description +
    "</p>" +
    '<p class="guides-hero__note">' +
    intro.note +
    "</p>" +
    "</div></div></div></section>" +
    '<section class="faq-section section" id="faq" aria-labelledby="faq-list-title">' +
    '<div class="container">' +
    '<div class="faq-section__grid">' +
    '<header class="section-header faq-section__header">' +
    '<h2 class="section-header__title" id="faq-list-title">' +
    FAQ_SECTION.title +
    "</h2>" +
    '<p class="section-header__subtitle">' +
    FAQ_SECTION.subtitle +
    "</p>" +
    "</header>" +
    '<div class="faq-accordion" data-faq-accordion>' +
    itemsHtml +
    "</div></div></div></section>" +
    renderServiceAppointmentCta(data.finalCta);
})();
