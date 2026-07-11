/**
 * Individual patient guide page render components.
 */

/**
 * Renders an individual guide hero section.
 * @param {Object} hero
 * @returns {string}
 */
function renderGuideHero(hero) {
  var titleId = "guide-hero-title";

  return (
    '<section class="guide-hero section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="guide-hero__inner">' +
    '<div class="guide-hero__content">' +
    '<p class="guide-hero__eyebrow">' +
    hero.eyebrow +
    "</p>" +
    '<p class="guide-hero__label">' +
    hero.label +
    "</p>" +
    '<h1 class="guide-hero__title" id="' +
    titleId +
    '">' +
    hero.title +
    "</h1>" +
    '<p class="guide-hero__description">' +
    hero.description +
    "</p>" +
    '<p class="guide-hero__note">' +
    hero.note +
    "</p>" +
    '<div class="guide-hero__actions">' +
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
    "</div>" +
    '<aside class="guide-hero__visual" aria-hidden="true">' +
    '<div class="guide-hero__visual-panel">' +
    '<svg class="guide-hero__visual-icon" viewBox="0 0 48 48" fill="none">' +
    '<path d="M12 10H28L34 16V38H12V10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M18 18H28M18 24H26M18 30H24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '<path d="M28 10V16H34" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>' +
    "</svg>" +
    '<p class="guide-hero__visual-label">مدارک و چک‌لیست مراجعه</p>' +
    "</div></aside>" +
    "</div></div></section>"
  );
}

/**
 * Renders grouped visit checklist section.
 * @param {Object} section
 * @returns {string}
 */
function renderVisitChecklist(section) {
  var titleId = section.id + "-title";

  var groupsHtml = section.groups
    .map(function (group) {
      var itemsHtml = group.items
        .map(function (item) {
          return '<li class="guide-checklist__item">' + item + "</li>";
        })
        .join("");

      var noteHtml = group.note
        ? '<p class="guide-checklist__group-note">' + group.note + "</p>"
        : "";

      return (
        '<div class="guide-checklist__group">' +
        '<h3 class="guide-checklist__group-title">' +
        group.title +
        "</h3>" +
        '<ul class="guide-checklist__list" role="list">' +
        itemsHtml +
        "</ul>" +
        noteHtml +
        "</div>"
      );
    })
    .join("");

  var printButtonHtml = section.showPrint
    ? '<button type="button" class="btn btn--secondary guide-checklist__print" id="print-checklist-btn">چاپ چک‌لیست</button>'
    : "";

  return (
    '<section class="guide-section section guide-section--printable" id="' +
    section.id +
    '" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="guide-section__content guide-section__content--wide">' +
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
    '<div class="guide-checklist" id="printable-checklist">' +
    '<p class="guide-checklist__print-title">چک‌لیست مدارک جلسه اول</p>' +
    groupsHtml +
    '<p class="guide-checklist__note">' +
    section.note +
    "</p>" +
    '<p class="guide-checklist__print-disclaimer">این راهنما صرفاً برای آمادگی عمومی پیش از مراجعه تهیه شده است.</p>' +
    "</div>" +
    printButtonHtml +
    "</div></div></section>"
  );
}

/**
 * Renders a structured guide list section.
 * @param {Object} section
 * @returns {string}
 */
function renderGuideListSection(section) {
  var titleId = "guide-list-" + section.eyebrow.replace(/\s/g, "-");

  var itemsHtml = section.items
    .map(function (item) {
      return '<li class="guide-list__item">' + item + "</li>";
    })
    .join("");

  return (
    '<section class="guide-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="guide-section__content">' +
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
    '<ul class="guide-list" role="list">' +
    itemsHtml +
    "</ul>" +
    '<p class="guide-note">' +
    section.suggestion +
    "</p>" +
    "</div></div></section>"
  );
}

/**
 * Renders ordered guide steps section.
 * @param {Object} section
 * @returns {string}
 */
function renderGuideSteps(section) {
  var titleId = "guide-steps-title";

  var stepsHtml = section.steps
    .map(function (step, index) {
      return (
        '<li class="guide-steps__item">' +
        '<span class="guide-steps__number" aria-hidden="true">' +
        (index + 1) +
        "</span>" +
        '<div class="guide-steps__content">' +
        '<h3 class="guide-steps__title">' +
        step.title +
        "</h3>" +
        '<p class="guide-steps__description">' +
        step.description +
        "</p></div></li>"
      );
    })
    .join("");

  return (
    '<section class="guide-section section guide-section--soft" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="guide-section__content">' +
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
    '<ol class="guide-steps" aria-label="مراحل">' +
    stepsHtml +
    "</ol></div></div></section>"
  );
}

/**
 * Renders evaluation expectations section.
 * @param {Object} section
 * @returns {string}
 */
function renderGuideEvaluation(section) {
  var titleId = "guide-evaluation-title";

  var paragraphsHtml = section.paragraphs
    .map(function (p) {
      return "<p>" + p + "</p>";
    })
    .join("");

  var itemsHtml = section.items
    .map(function (item) {
      return '<li class="guide-eval__item">' + item + "</li>";
    })
    .join("");

  return (
    '<section class="guide-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="guide-section__content">' +
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
    '<div class="guide-prose">' +
    paragraphsHtml +
    "</div>" +
    '<ul class="guide-eval" role="list">' +
    itemsHtml +
    "</ul></div></div></section>"
  );
}

/**
 * Renders suggested questions section.
 * @param {Object} section
 * @returns {string}
 */
function renderSuggestedQuestions(section) {
  var titleId = "suggested-questions-title";

  var questionsHtml = section.questions
    .map(function (question, index) {
      return (
        '<li class="guide-questions__item">' +
        '<span class="guide-questions__number" aria-hidden="true">' +
        (index + 1) +
        "</span>" +
        "<span>" +
        question +
        "</span></li>"
      );
    })
    .join("");

  return (
    '<section class="guide-section section guide-section--soft" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="guide-section__content">' +
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
    '<ol class="guide-questions" role="list">' +
    questionsHtml +
    "</ol>" +
    '<p class="guide-note">' +
    section.note +
    "</p>" +
    "</div></div></section>"
  );
}

/**
 * Renders common mistakes section.
 * @param {Object} section
 * @returns {string}
 */
function renderCommonMistakes(section) {
  var titleId = "common-mistakes-title";

  var itemsHtml = section.items
    .map(function (item) {
      return '<li class="guide-mistakes__item">' + item + "</li>";
    })
    .join("");

  return (
    '<section class="guide-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="guide-section__content">' +
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
    '<p class="guide-prose guide-prose--intro">' +
    section.intro +
    "</p>" +
    '<ul class="guide-mistakes" role="list">' +
    itemsHtml +
    "</ul></div></div></section>"
  );
}

/**
 * Renders a simple prose section for guide pages.
 * @param {Object} section
 * @returns {string}
 */
function renderGuideProse(section) {
  var titleId = "guide-prose-" + section.eyebrow.replace(/\s/g, "-");

  var paragraphsHtml = section.paragraphs
    .map(function (p) {
      return "<p>" + p + "</p>";
    })
    .join("");

  var itemsHtml = section.items
    ? section.items
        .map(function (item) {
          return '<li class="guide-list__item">' + item + "</li>";
        })
        .join("")
    : "";

  var listHtml = itemsHtml
    ? '<ul class="guide-list" role="list">' + itemsHtml + "</ul>"
    : "";

  var noteHtml = section.note
    ? '<p class="guide-note">' + section.note + "</p>"
    : "";

  return (
    '<section class="guide-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="guide-section__content">' +
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
    '<div class="guide-prose">' +
    paragraphsHtml +
    "</div>" +
    listHtml +
    noteHtml +
    "</div></div></section>"
  );
}

/**
 * Renders guide appointment information section.
 * @param {Object} section
 * @returns {string}
 */
function renderGuideAppointment(section) {
  var titleId = "guide-appointment-title";

  return (
    '<section class="guide-section section guide-section--soft" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="guide-section__content">' +
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
    '<p class="guide-prose">' +
    section.content +
    "</p>" +
    renderAppointmentLinksGroup({
      source: section.appointmentSource,
      showIcon: true,
      texts: {
        doctoreto: "مشاهده نوبت‌های آزاد در دکترتو",
        axon: "دریافت نوبت از اکسون",
      },
    }) +
    "</div></div></section>"
  );
}
