/**
 * About page render components.
 */

/**
 * Renders the about page hero section.
 * @param {Object} hero
 * @param {Object} credentials
 * @returns {string}
 */
function renderAboutHero(hero, credentials) {
  var titleId = "about-hero-title";

  var registrationItem = credentials.items.find(function (item) {
    return (
      item.verified &&
      (item.label.indexOf("نظام پزشکی") !== -1 ||
        item.label.indexOf("Medical License") !== -1 ||
        item.label.indexOf("الترخيص") !== -1)
    );
  });

  var registrationHtml = registrationItem
    ? '<p class="about-hero__registration">' + registrationItem.label + "</p>"
    : "";

  return (
    '<section class="about-hero section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="about-hero__grid">' +
    '<figure class="about-hero__portrait">' +
    '<img class="about-hero__image" src="' +
    (hero.imageSrc || "/assets/images/about-hero.jpg") +
    '" alt="' +
    hero.imageAlt +
    '" width="1055" height="1008" decoding="async" fetchpriority="high">' +
    '<figcaption class="sr-only">' +
    hero.imageAlt +
    "</figcaption></figure>" +
    '<div class="about-hero__content">' +
    '<p class="about-hero__eyebrow">' +
    hero.eyebrow +
    "</p>" +
    '<h1 class="about-hero__title" id="' +
    titleId +
    '">' +
    hero.name +
    "</h1>" +
    '<p class="about-hero__subtitle">' +
    hero.subtitle +
    "</p>" +
    '<p class="about-hero__introduction">' +
    hero.introduction +
    "</p>" +
    '<div class="about-hero__actions">' +
    '<div class="btn-group">' +
    renderPrimaryCtaGroup({
      source: hero.appointmentSource,
      showIcon: true,
      wrapInGroup: false,
    }) +
    "</div>" +
    '<p class="cta-alt-link">' +
    '<a href="' +
    hero.servicesLink.href +
    '" class="cta-alt-link__anchor">' +
    hero.servicesLink.text +
    "</a></p>" +
    renderAxonAltLink(hero.appointmentSource) +
    "</div>" +
    registrationHtml +
    "</div></div></div></section>"
  );
}

/**
 * Renders the professional introduction section.
 * @param {Object} section
 * @returns {string}
 */
function renderAboutIntroduction(section) {
  var titleId = "about-intro-title";

  var paragraphsHtml = section.paragraphs
    .map(function (p) {
      return "<p>" + p + "</p>";
    })
    .join("");

  return (
    '<section class="about-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="about-section__content">' +
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
    '<div class="about-prose">' +
    paragraphsHtml +
    "</div></div></div></section>"
  );
}

/**
 * Renders verified credentials list.
 * @param {Object} section
 * @returns {string}
 */
function renderAboutCredentials(section) {
  var titleId = "about-credentials-title";

  var verifiedItems = section.items.filter(function (item) {
    return item.verified === true;
  });

  if (verifiedItems.length === 0) {
    return "";
  }

  var itemsHtml = verifiedItems
    .map(function (item) {
      return '<li class="about-credentials__item">' + item.label + "</li>";
    })
    .join("");

  return (
    '<section class="about-section section about-section--soft" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="about-section__content">' +
    '<h2 class="about-credentials__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    '<ul class="about-credentials" role="list">' +
    itemsHtml +
    "</ul></div></div></section>"
  );
}

/**
 * Renders treatment focus links.
 * @param {Object} section
 * @returns {string}
 */
function renderTreatmentFocus(section) {
  var titleId = "treatment-focus-title";

  var linksHtml = section.items
    .map(function (item) {
      return (
        '<li class="about-focus__item">' +
        '<a href="' +
        item.href +
        '" class="about-focus__link">' +
        '<span class="about-focus__label">' +
        item.label +
        "</span>" +
        '<svg class="about-focus__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
        '<path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg></a></li>"
      );
    })
    .join("");

  return (
    '<section class="about-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="about-section__content">' +
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
    '<ul class="about-focus" role="list">' +
    linksHtml +
    "</ul></div></div></section>"
  );
}

/**
 * Renders treatment approach principles.
 * @param {Object} section
 * @returns {string}
 */
function renderTreatmentApproach(section) {
  var titleId = "treatment-approach-title";

  var principlesHtml = section.principles
    .map(function (principle, index) {
      return (
        '<li class="about-approach__item">' +
        '<span class="about-approach__number" aria-hidden="true">' +
        (index + 1) +
        "</span>" +
        "<span>" +
        principle +
        "</span></li>"
      );
    })
    .join("");

  return (
    '<section class="about-section section about-section--soft" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="about-section__content">' +
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
    '<ol class="about-approach" role="list">' +
    principlesHtml +
    "</ol>" +
    '<p class="about-note">' +
    section.note +
    "</p>" +
    "</div></div></section>"
  );
}

/**
 * Renders research section with optional link when route exists.
 * @param {Object} section
 * @returns {string}
 */
function renderAboutResearch(section) {
  var researchHtml = renderResearchSection(section);

  if (!researchHtml) {
    return "";
  }

  if (!section.link || section.link.routeExists !== true) {
    return researchHtml;
  }

  return researchHtml.replace(
    "</div></div></section>",
    '<p class="service-guide-link">' +
      '<a href="' +
      section.link.href +
      '" class="service-guide-link__anchor">' +
      section.link.text +
      "</a></p></div></div></section>"
  );
}
