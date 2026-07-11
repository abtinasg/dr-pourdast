/**
 * Legal page render components.
 */

/**
 * Renders legal page hero.
 * @param {Object} hero
 * @returns {string}
 */
function renderLegalHero(hero) {
  var titleId = "legal-hero-title";

  return (
    '<section class="legal-hero section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="legal-hero__content">' +
    '<p class="legal-hero__eyebrow">' +
    hero.eyebrow +
    "</p>" +
    '<h1 class="legal-hero__title" id="' +
    titleId +
    '">' +
    hero.title +
    "</h1>" +
    '<p class="legal-hero__description">' +
    hero.description +
    "</p>" +
    '<p class="legal-hero__updated">' +
    hero.updatedAt +
    "</p>" +
    "</div></div></section>"
  );
}

/**
 * Renders legal content sections.
 * @param {Array<Object>} sections
 * @returns {string}
 */
function renderLegalSections(sections) {
  return sections
    .map(function (section) {
      var titleId = section.id + "-title";
      var paragraphsHtml = (section.paragraphs || [])
        .map(function (paragraph) {
          return "<p>" + paragraph + "</p>";
        })
        .join("");

      var listHtml = section.items
        ? '<ul class="legal-list" role="list">' +
          section.items
            .map(function (item) {
              return '<li class="legal-list__item">' + item + "</li>";
            })
            .join("") +
          "</ul>"
        : "";

      return (
        '<section class="legal-section section" id="' +
        section.id +
        '" aria-labelledby="' +
        titleId +
        '">' +
        '<div class="container">' +
        '<div class="legal-section__content">' +
        '<h2 class="legal-section__title" id="' +
        titleId +
        '">' +
        section.title +
        "</h2>" +
        '<div class="legal-prose">' +
        paragraphsHtml +
        listHtml +
        "</div></div></div></section>"
      );
    })
    .join("");
}

/**
 * Renders legal note block.
 * @param {Object} note
 * @returns {string}
 */
function renderLegalNote(note) {
  var titleId = "legal-note-title";

  return (
    '<section class="legal-note section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="legal-note__card">' +
    '<h2 class="legal-note__title" id="' +
    titleId +
    '">' +
    note.title +
    "</h2>" +
    '<p class="legal-note__text">' +
    note.content +
    "</p>" +
    "</div></div></section>"
  );
}

/**
 * Renders related legal page link.
 * @param {Object} link
 * @returns {string}
 */
function renderLegalRelatedLink(link) {
  return (
    '<section class="legal-related section">' +
    '<div class="container">' +
    '<p class="legal-related__wrap">' +
    '<a href="' +
    link.href +
    '" class="legal-related__link">' +
    link.label +
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    "</svg></a></p></div></section>"
  );
}
