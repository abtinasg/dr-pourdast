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
    return item.verified && item.label.indexOf("نظام پزشکی") !== -1;
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
    '<figure class="about-hero__portrait" aria-label="' +
    hero.imageAlt +
    '">' +
    '<div class="about-hero__placeholder" aria-hidden="true">' +
    '<svg viewBox="0 0 120 200" fill="currentColor" class="about-hero__silhouette">' +
    '<ellipse cx="60" cy="35" rx="22" ry="26"/>' +
    '<path d="M30 75 Q60 65 90 75 L95 200 L25 200 Z"/>' +
    "</svg></div>" +
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
    renderAppointmentLinksGroup({
      source: hero.appointmentSource,
      showIcon: true,
      wrapInGroup: false,
      texts: {
        doctoreto: "مشاهده نوبت‌های آزاد در دکترتو",
        axon: "دریافت نوبت از اکسون",
      },
    }) +
    '<a href="' +
    hero.servicesLink.href +
    '" class="btn btn--secondary">' +
    hero.servicesLink.text +
    "</a>" +
    "</div></div>" +
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
