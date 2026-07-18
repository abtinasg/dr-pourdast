/**
 * Renders a procedure/service item (icon + title + description).
 * @param {Object} item
 * @param {string} item.title
 * @param {string} [item.highlight]
 * @param {string} item.description
 * @param {string} item.href
 * @param {string} item.icon
 * @returns {string}
 */
function renderProcedureTitle(item) {
  if (item.highlight && item.title.indexOf(item.highlight) === 0) {
    var rest = item.title.slice(item.highlight.length);
    return (
      '<span class="procedure-item__accent">' +
      item.highlight +
      "</span>" +
      rest
    );
  }

  return (
    '<span class="procedure-item__accent">' + item.title + "</span>"
  );
}

/**
 * @param {Object} item
 * @returns {string}
 */
function renderProcedureItem(item) {
  var linkLabel =
    item.linkLabel || uiString("learnMore", "مشاهده جزئیات");

  return (
    "<li>" +
    '<article class="procedure-item">' +
    '<span class="procedure-item__icon">' +
    item.icon +
    "</span>" +
    '<h3 class="procedure-item__title">' +
    renderProcedureTitle(item) +
    "</h3>" +
    '<p class="procedure-item__description">' +
    item.description +
    "</p>" +
    '<a href="' +
    item.href +
    '" class="procedure-item__link">' +
    linkLabel +
    '<svg class="procedure-item__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    "</svg>" +
    "</a>" +
    "</article>" +
    "</li>"
  );
}

/**
 * Renders a single service card wrapped in a list item.
 * Kept for compact / listing contexts that still need the card pattern.
 * @param {Object} item
 * @returns {string}
 */
function renderServiceCard(item) {
  return (
    "<li>" +
    '<a href="' +
    item.href +
    '" class="service-card">' +
    '<span class="service-card__icon">' +
    item.icon +
    "</span>" +
    '<h3 class="service-card__title">' +
    item.title +
    "</h3>" +
    '<p class="service-card__description">' +
    item.description +
    "</p>" +
    '<span class="service-card__link">' +
    uiString("viewDetails", "مشاهده توضیحات") +
    '<svg class="service-card__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    "</svg>" +
    "</span>" +
    "</a>" +
    "</li>"
  );
}

/**
 * Renders grouped procedure sections from SERVICES_SECTION.groups.
 * @param {Object[]} groups
 * @returns {string}
 */
function renderProcedureGroups(groups) {
  if (!groups || !groups.length) return "";

  return (
    '<div class="procedure-groups">' +
    groups
      .map(function (group) {
        var panelClass =
          group.variant === "panel" ? " procedure-group--panel" : "";
        var itemsHtml = group.items
          .map(function (item) {
            return renderProcedureItem(item);
          })
          .join("");

        return (
          '<section class="procedure-group' +
          panelClass +
          '" aria-labelledby="procedure-group-' +
          group.id +
          '">' +
          '<h3 class="procedure-group__title" id="procedure-group-' +
          group.id +
          '">' +
          group.title +
          "</h3>" +
          '<ul class="procedure-group__grid">' +
          itemsHtml +
          "</ul>" +
          "</section>"
        );
      })
      .join("") +
    "</div>"
  );
}
