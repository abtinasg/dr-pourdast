/**
 * Renders the FAQ section from FAQ_SECTION data.
 */
(function () {
  "use strict";

  var mount = document.getElementById("faq-mount");
  if (!mount || typeof FAQ_SECTION === "undefined") return;
  if (typeof renderFaqItem === "undefined") return;

  var data = FAQ_SECTION;
  var titleId = "faq-title";

  var activeItems = data.items
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
    '<section class="faq-section section" id="faq" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="faq-section__grid">' +
    '<header class="section-header faq-section__header">' +
    '<p class="section-header__eyebrow">' +
    data.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    data.title +
    "</h2>" +
    '<p class="section-header__subtitle">' +
    data.subtitle +
    "</p>" +
    "</header>" +
    '<div class="faq-accordion" data-faq-accordion>' +
    itemsHtml +
    "</div>" +
    "</div>" +
    "</div>" +
    "</section>";
})();
