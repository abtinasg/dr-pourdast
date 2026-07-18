/**
 * Contact and appointment page render components.
 */

var CONTACT_PHONE_ICON =
  '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 3H7L8 6L6.5 7C7.5 9.5 9.5 11.5 12 12.5L13 11L16 12V15C16 15 13 16 8 13C3 10 3 6 4 3Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>';

var CONTACT_ADDRESS_ICON =
  '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 6L8 2L13 6V13H3V6Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>';

var CONTACT_HOURS_ICON =
  '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.2"/><path d="M8 5V8L10 10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>';

/**
 * Renders a confirmed clinic phone link.
 * @param {string} display
 * @param {string} [source]
 * @returns {string}
 */
function renderClinicPhoneLink(display, source) {
  if (typeof SITE_CONFIG === "undefined" || !SITE_CONFIG.clinicPhone) {
    return "";
  }

  var analyticsSource = source || "contact-page";

  return (
    '<a href="tel:' +
    SITE_CONFIG.clinicPhone +
    '" class="contact-info__value contact-info__value--link" data-event="clinic_phone_click" data-source="' +
    analyticsSource +
    '">' +
    CONTACT_PHONE_ICON +
    "<span>" +
    display +
    "</span></a>"
  );
}

/**
 * Renders contact page hero.
 * @param {Object} hero
 * @returns {string}
 */
function renderContactHero(hero) {
  var titleId = "contact-hero-title";

  return (
    '<section class="contact-hero section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="contact-hero__inner">' +
    '<div class="contact-hero__content">' +
    '<p class="contact-hero__eyebrow">' +
    hero.eyebrow +
    "</p>" +
    '<h1 class="contact-hero__title" id="' +
    titleId +
    '">' +
    hero.title +
    "</h1>" +
    '<p class="contact-hero__description">' +
    hero.description +
    "</p>" +
    '<div class="contact-hero__actions">' +
    '<div class="btn-group">' +
    renderPrimaryCtaGroup({
      source: hero.appointmentSource,
      showIcon: true,
      wrapInGroup: false,
    }) +
    "</div>" +
    renderAxonAltLink(hero.appointmentSource) +
    "</div>" +
    "</div>" +
    '<aside class="contact-hero__visual" aria-hidden="true">' +
    '<div class="contact-hero__visual-panel">' +
    '<svg class="contact-hero__visual-icon" viewBox="0 0 48 48" fill="none">' +
    '<path d="M10 14H22V34H10V14Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M26 18H38V34H26V18Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M16 22H18M30 24H34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '<circle cx="32" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>' +
    "</svg>" +
    '<p class="contact-hero__visual-label">تماس و دریافت نوبت</p>' +
    "</div></aside>" +
    "</div></div></section>"
  );
}

/**
 * Renders appointment booking block.
 * @param {Object} section
 * @returns {string}
 */
function renderAppointmentBookingBlock(section) {
  var titleId = "contact-booking-title";

  return (
    '<section class="contact-section section contact-section--soft contact-section--booking" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="contact-section__content contact-section__content--wide">' +
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
    '<p class="contact-prose">' +
    section.content +
    "</p>" +
    renderPrimaryCtaGroup({
      source: section.appointmentSource,
      showIcon: true,
    }) +
    renderAxonAltLink(section.appointmentSource) +
    '<p class="contact-note">' +
    section.note +
    "</p>" +
    "</div></div></section>"
  );
}

/**
 * Renders confirmed contact social links.
 * @returns {string}
 */
function renderContactSocialLinks() {
  if (typeof SITE_CONFIG === "undefined") return "";

  var platforms = [
    {
      key: "instagramUrl",
      label: "اینستاگرام",
      icon:
        '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" stroke-width="1.3"/><circle cx="10" cy="10" r="3" stroke="currentColor" stroke-width="1.3"/><circle cx="14.5" cy="5.5" r="0.75" fill="currentColor"/></svg>',
    },
    {
      key: "whatsappUrl",
      label: "واتساپ",
      icon:
        '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10C4 6.7 6.7 4 10 4C13.3 4 16 6.7 16 10C16 13.3 13.3 16 10 16C8.8 16 7.7 15.6 6.8 15L4 16L5 13.2C4.4 12.3 4 11.2 4 10Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
    },
  ];

  var items = platforms
    .filter(function (platform) {
      return SITE_CONFIG[platform.key];
    })
    .map(function (platform) {
      return (
        '<li><a href="' +
        SITE_CONFIG[platform.key] +
        '" class="contact-social__link" target="_blank" rel="noopener noreferrer">' +
        platform.icon +
        "<span>" +
        platform.label +
        '</span><span class="sr-only"> (باز شدن در تب جدید)</span></a></li>'
      );
    })
    .join("");

  if (!items) return "";

  return (
    '<div class="contact-info__item">' +
    '<p class="contact-info__label">شبکه‌های اجتماعی</p>' +
    '<ul class="contact-social" role="list">' +
    items +
    "</ul></div>"
  );
}

/**
 * Renders clinic information section from SITE_CONFIG.
 * @param {Object} section
 * @returns {string}
 */
function renderClinicInformation(section) {
  if (typeof SITE_CONFIG === "undefined") return "";

  var titleId = section.id + "-title";
  var itemsHtml = "";

  if (SITE_CONFIG.clinicPhone) {
    var phoneDisplay = SITE_CONFIG.clinicPhoneDisplay || SITE_CONFIG.clinicPhone;
    itemsHtml +=
      '<div class="contact-info__item">' +
      '<p class="contact-info__label">شماره تماس مطب</p>' +
      renderClinicPhoneLink(phoneDisplay, "contact-page") +
      "</div>";
  }

  if (SITE_CONFIG.clinicAddress) {
    itemsHtml +=
      '<div class="contact-info__item">' +
      '<p class="contact-info__label">آدرس مطب</p>' +
      '<address class="contact-info__address">' +
      CONTACT_ADDRESS_ICON +
      "<span>" +
      SITE_CONFIG.clinicAddress +
      "</span></address></div>";
  }

  if (SITE_CONFIG.workingHours) {
    itemsHtml +=
      '<div class="contact-info__item">' +
      '<p class="contact-info__label">ساعات پاسخگویی</p>' +
      '<p class="contact-info__value">' +
      CONTACT_HOURS_ICON +
      "<span>" +
      SITE_CONFIG.workingHours +
      "</span></p></div>";
  }

  itemsHtml += renderContactSocialLinks();

  var detailsHtml =
    itemsHtml ||
    '<p class="contact-info__empty">' + section.emptyNote + "</p>";

  return (
    '<section class="contact-section section" id="' +
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
    "</header>" +
    '<div class="contact-clinic__grid">' +
    '<aside class="contact-clinic__summary">' +
    '<p class="contact-clinic__summary-text">' +
    section.appointmentSummary +
    "</p>" +
    renderPrimaryCtaGroup({
      source: "contact-clinic-summary",
      showIcon: true,
    }) +
    renderAxonAltLink("contact-clinic-summary") +
    "</aside>" +
    '<div class="contact-clinic__details">' +
    detailsHtml +
    "</div></div></div></section>"
  );
}

/**
 * Renders map section when verified map URL exists.
 * @param {Object} section
 * @returns {string}
 */
function renderClinicMap(section) {
  if (typeof SITE_CONFIG === "undefined") return "";

  var mapUrl = SITE_CONFIG.mapUrl;
  var mapEmbedUrl = SITE_CONFIG.mapEmbedUrl;

  if (!mapUrl && !mapEmbedUrl) {
    return "";
  }

  var titleId = "contact-map-title";
  var embedHtml = "";

  if (mapEmbedUrl) {
    embedHtml =
      '<div class="contact-map__embed">' +
      '<iframe src="' +
      mapEmbedUrl +
      '" title="موقعیت مطب دکتر طاهره پوردست" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
      "</div>";
  }

  var linkHtml = mapUrl
    ? '<p class="contact-map__link-wrap">' +
      '<a href="' +
      mapUrl +
      '" class="contact-map__link" target="_blank" rel="noopener noreferrer" data-event="clinic_map_click" data-source="contact-page">' +
      section.linkText +
      '<span class="sr-only"> (باز شدن در تب جدید)</span></a></p>'
    : "";

  return (
    '<section class="contact-section section contact-section--soft" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="contact-section__content contact-section__content--wide">' +
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
    embedHtml +
    linkHtml +
    "</div></div></section>"
  );
}

/**
 * Renders out-of-town patients section.
 * @param {Object} section
 * @returns {string}
 */
function renderOutOfTownPatients(section) {
  var titleId = "out-of-town-title";

  var pointsHtml = section.points
    .map(function (point) {
      return (
        '<li class="contact-out-of-town__item">' +
        '<h3 class="contact-out-of-town__title">' +
        point.title +
        "</h3>" +
        '<p class="contact-out-of-town__description">' +
        point.description +
        "</p></li>"
      );
    })
    .join("");

  return (
    '<section class="contact-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="contact-section__content contact-section__content--wide">' +
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
    '<ul class="contact-out-of-town" role="list">' +
    pointsHtml +
    "</ul>" +
    '<p class="contact-note">' +
    section.note +
    "</p>" +
    "</div></div></section>"
  );
}

/**
 * Renders what to bring checklist.
 * @param {Object} section
 * @returns {string}
 */
function renderWhatToBring(section) {
  var titleId = "what-to-bring-title";

  var itemsHtml = section.items
    .map(function (item) {
      return '<li class="contact-checklist__item">' + item + "</li>";
    })
    .join("");

  return (
    '<section class="contact-section section contact-section--soft" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="contact-section__content contact-section__content--wide">' +
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
    '<ul class="contact-checklist" role="list">' +
    itemsHtml +
    "</ul>" +
    '<p class="contact-guide-link">' +
    '<a href="' +
    section.guideLink.href +
    '" class="contact-guide-link__anchor">' +
    section.guideLink.text +
    "</a></p>" +
    "</div></div></section>"
  );
}

/**
 * Renders privacy note block.
 * @param {Object} section
 * @returns {string}
 */
function renderPrivacyNote(section) {
  var titleId = "privacy-note-title";

  return (
    '<section class="contact-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="contact-privacy">' +
    '<svg class="contact-privacy__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="M12 3L5 6V12C5 16.5 8 19.5 12 21C16 19.5 19 16.5 19 12V6L12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    "</svg>" +
    '<div class="contact-privacy__content">' +
    '<h2 class="contact-privacy__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    '<p class="contact-privacy__text">' +
    section.content +
    "</p></div></div></div></section>"
  );
}

/**
 * Renders contact page final CTA with optional phone link.
 * @param {Object} section
 * @returns {string}
 */
function renderContactFinalCta(section) {
  var titleId = "contact-final-cta-title";
  var appointmentHtml =
    renderPrimaryCtaGroup({
      source: section.cta.source,
      doctoretoText: section.cta.text,
      showIcon: true,
    }) + renderAxonAltLink(section.cta.source);

  var secondaryHtml = appointmentHtml;

  return (
    '<section class="service-final-cta section contact-final-cta" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-final-cta__card">' +
    '<h2 class="service-final-cta__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    '<p class="service-final-cta__description">' +
    section.description +
    "</p>" +
    secondaryHtml +
    '<p class="service-final-cta__note">نوبت‌دهی اینترنتی از طریق سامانه‌های دکترتو و اکسون انجام می‌شود.</p>' +
    "</div></div></section>"
  );
}
