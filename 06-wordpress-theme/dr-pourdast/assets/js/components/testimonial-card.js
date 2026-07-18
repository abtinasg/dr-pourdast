/**
 * Renders a single testimonial card.
 * @param {Object} testimonial
 * @param {string} testimonial.quote
 * @param {string} testimonial.displayName
 * @param {string} [testimonial.service]
 * @param {string} [testimonial.source]
 * @param {boolean} [featured]
 * @param {boolean} [hidden]
 * @returns {string}
 */
function renderTestimonialCard(testimonial, featured, hidden) {
  var EXPAND_THRESHOLD = 90;
  var classes = "testimonial-card";
  if (featured) {
    classes += " testimonial-card--featured";
  }
  if (hidden) {
    classes += " testimonial-card--hidden";
  }

  var isLongQuote = testimonial.quote.length > EXPAND_THRESHOLD;
  var expandBtnHtml = isLongQuote
    ? '<button type="button" class="testimonial-card__expand" aria-expanded="false">' +
      uiString("continue", "ادامه") +
      "</button>"
    : "";

  var sourceBadgeHtml = testimonial.source
    ? '<span class="testimonial-card__badge">' + testimonial.source + "</span>"
    : "";

  var serviceHtml = testimonial.service
    ? '<span class="testimonial-card__service" title="' +
      testimonial.service +
      '">' +
      testimonial.service +
      "</span>"
    : "";

  return (
    '<article class="' +
    classes +
    '">' +
    '<blockquote class="testimonial-card__quote">' +
    '<span class="testimonial-card__mark" aria-hidden="true">«</span>' +
    '<p class="testimonial-card__quote-text">' +
    testimonial.quote +
    "</p>" +
    expandBtnHtml +
    "</blockquote>" +
    '<footer class="testimonial-card__footer">' +
    '<div class="testimonial-card__meta">' +
    '<cite class="testimonial-card__author">' +
    testimonial.displayName +
    "</cite>" +
    sourceBadgeHtml +
    "</div>" +
    serviceHtml +
    "</footer>" +
    "</article>"
  );
}
