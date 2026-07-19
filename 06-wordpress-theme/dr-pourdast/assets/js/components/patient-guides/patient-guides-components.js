/**
 * Patient guides hub page render components.
 */

/**
 * Renders the patient guides hero section.
 * @param {Object} hero
 * @returns {string}
 */
function renderPatientGuidesHero(hero) {
  var titleId = "patient-guides-hero-title";

  return (
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
    renderPrimaryCtaGroup({
      source: hero.appointmentSource,
      showIcon: true,
    }) +
    '<p class="cta-alt-link">' +
    '<a href="' +
    hero.primaryCta.href +
    '" class="cta-alt-link__anchor">' +
    hero.primaryCta.text +
    "</a></p>" +
    renderAxonAltLink(hero.appointmentSource) +
    "</div>" +
    '<p class="guides-hero__note">' +
    hero.note +
    "</p>" +
    "</div>" +
    '<aside class="guides-hero__visual" aria-hidden="true">' +
    '<div class="guides-hero__visual-panel">' +
    '<svg class="guides-hero__visual-icon" viewBox="0 0 48 48" fill="none">' +
    '<rect x="10" y="8" width="28" height="32" rx="2" stroke="currentColor" stroke-width="1.5"/>' +
    '<path d="M16 16H32M16 22H28M16 28H24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '<path d="M30 30L34 34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    "</svg>" +
    '<p class="guides-hero__visual-label">راهنماهای آمادگی و پیگیری</p>' +
    "</div></aside>" +
    "</div></div></section>"
  );
}

/**
 * Renders a single patient guide card.
 * @param {Object} guide
 * @returns {string}
 */
function renderPatientGuideCard(guide) {
  var featuredClass = guide.featured ? " guide-card--featured" : "";

  return (
    '<article class="guide-card' +
    featuredClass +
    '">' +
    '<a href="' +
    guide.href +
    '" class="guide-card__link">' +
    '<span class="guide-card__icon">' +
    guide.icon +
    "</span>" +
    '<div class="guide-card__content">' +
    '<span class="guide-card__category">' +
    guide.category +
    "</span>" +
    '<h3 class="guide-card__title">' +
    guide.title +
    "</h3>" +
    '<p class="guide-card__description">' +
    guide.description +
    "</p>" +
    '<span class="guide-card__cta">' +
    "مطالعه راهنما" +
    '<svg class="guide-card__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    "</svg></span></div></a></article>"
  );
}

/**
 * Renders the guides grid section.
 * @param {Object} section
 * @returns {string}
 */
function renderGuidesGrid(section) {
  var titleId = section.id + "-title";

  var cardsHtml = section.items
    .map(function (guide) {
      return renderPatientGuideCard(guide);
    })
    .join("");

  return (
    '<section class="guides-section section" id="' +
    section.id +
    '" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    '<p class="guides-section__subtitle">' +
    section.subtitle +
    "</p>" +
    "</header>" +
    '<div class="guides-grid">' +
    cardsHtml +
    "</div></div></section>"
  );
}

/**
 * Renders how to use guides section.
 * @param {Object} section
 * @returns {string}
 */
function renderHowToUseGuides(section) {
  var titleId = "how-to-use-title";

  var pointsHtml = section.points
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

  return (
    '<section class="guides-section section guides-section--soft" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="guides-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<ul class="guides-use" role="list">' +
    pointsHtml +
    "</ul></div></div></section>"
  );
}

/**
 * Renders medical information disclaimer.
 * @param {Object} section
 * @returns {string}
 */
function renderMedicalDisclaimer(section) {
  var titleId = "medical-disclaimer-title";

  var paragraphsHtml = section.paragraphs
    .map(function (p) {
      return "<p>" + p + "</p>";
    })
    .join("");

  var titleHtml = section.title
    ? '<h2 class="guides-disclaimer__title" id="' +
      titleId +
      '">' +
      section.title +
      "</h2>"
    : '<h2 class="sr-only" id="' +
      titleId +
      '">تذکر پزشکی</h2>';

  return (
    '<section class="guides-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="guides-disclaimer">' +
    '<svg class="guides-disclaimer__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>' +
    '<path d="M12 8V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '<circle cx="12" cy="16" r="1" fill="currentColor"/>' +
    "</svg>" +
    '<div class="guides-disclaimer__content">' +
    titleHtml +
    '<div class="guides-disclaimer__text">' +
    paragraphsHtml +
    "</div></div></div></div></section>"
  );
}

/**
 * Renders related services with eyebrow for patient guides page.
 * @param {Object} section
 * @returns {string}
 */
function renderGuidesRelatedServices(section) {
  var titleId = "guides-related-services-title";

  var linksHtml = section.items
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

  return (
    '<section class="guides-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="guides-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<ul class="service-related" role="list">' +
    linksHtml +
    "</ul></div></div></section>"
  );
}
