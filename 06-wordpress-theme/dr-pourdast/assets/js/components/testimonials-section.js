/**
 * Renders the testimonials section.
 * Returns nothing (removes mount) when no verified testimonials exist.
 */
(function () {
  "use strict";

  var mount = document.getElementById("testimonials-mount");
  if (!mount || typeof TESTIMONIALS_SECTION === "undefined") return;
  if (typeof renderTestimonialCard === "undefined") return;

  var data = TESTIMONIALS_SECTION;
  var INITIAL_VISIBLE_COUNT = data.initialVisibleCount || 6;

  var verifiedTestimonials = data.testimonials.filter(function (item) {
    return item.verified === true;
  });

  if (verifiedTestimonials.length === 0) {
    mount.remove();
    return;
  }

  verifiedTestimonials.sort(function (a, b) {
    return (a.displayOrder || 0) - (b.displayOrder || 0);
  });

  var titleId = "testimonials-title";
  var gridId = "testimonials-grid";
  var layoutClass = "testimonials__layout";
  var layoutHtml = "";
  var showMoreHtml = "";

  if (verifiedTestimonials.length >= 4) {
    layoutClass += " testimonials__layout--grid";
    layoutHtml = verifiedTestimonials
      .map(function (item, index) {
        return renderTestimonialCard(item, false, index >= INITIAL_VISIBLE_COUNT);
      })
      .join("");

    var remainingCount = Math.max(
      0,
      verifiedTestimonials.length - INITIAL_VISIBLE_COUNT
    );
    if (remainingCount > 0) {
      showMoreHtml =
        '<div class="testimonials__actions">' +
        '<button type="button" class="btn btn--secondary btn--sm testimonials__show-more" aria-expanded="false" aria-controls="' +
        gridId +
        '">' +
        uiStringTemplate(
          "showMoreReviews",
          { count: remainingCount },
          "نمایش بیشتر (" + remainingCount + " نظر دیگر)"
        ) +
        "</button>" +
        "</div>";
    }
  } else if (verifiedTestimonials.length === 1) {
    layoutClass += " testimonials__layout--single";
    layoutHtml = renderTestimonialCard(verifiedTestimonials[0], true, false);
  } else {
    var featured = verifiedTestimonials[0];
    var others = verifiedTestimonials.slice(1);
    var secondaryHtml = others
      .map(function (item) {
        return renderTestimonialCard(item, false, false);
      })
      .join("");

    layoutHtml =
      renderTestimonialCard(featured, true, false) +
      '<div class="testimonials__secondary">' +
      secondaryHtml +
      "</div>";
  }

  mount.outerHTML =
    '<section class="testimonials testimonials--compact section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<header class="section-header section-header--centered section-header--compact">' +
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
    '<div class="' +
    layoutClass +
    '" id="' +
    gridId +
    '">' +
    layoutHtml +
    "</div>" +
    showMoreHtml +
    '<p class="testimonials__note">' +
    data.footerNote +
    "</p>" +
    "</div>" +
    "</section>";

  var section = document.getElementById(gridId);
  if (!section) return;
  section = section.closest(".testimonials");
  if (!section) return;

  var showMoreBtn = section.querySelector(".testimonials__show-more");
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", function () {
      section.querySelectorAll(".testimonial-card--hidden").forEach(function (card) {
        card.classList.remove("testimonial-card--hidden");
      });
      showMoreBtn.setAttribute("aria-expanded", "true");
      showMoreBtn.hidden = true;
    });
  }

  section.querySelectorAll(".testimonial-card__expand").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var quote = btn.closest(".testimonial-card__quote");
      if (!quote) return;
      var text = quote.querySelector(".testimonial-card__quote-text");
      if (!text) return;

      var isExpanded = text.classList.toggle("testimonial-card__quote-text--expanded");
      btn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
      btn.textContent = isExpanded
        ? uiString("close", "بستن")
        : uiString("continue", "ادامه");
    });
  });
})();
