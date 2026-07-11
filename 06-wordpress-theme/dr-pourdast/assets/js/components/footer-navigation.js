/**
 * Renders a footer navigation column.
 * @param {Object} column
 * @param {string} column.title
 * @param {string} column.ariaLabel
 * @param {Array<{label: string, href: string, external?: boolean}>} column.links
 * @param {string} [modifierClass]
 * @returns {string}
 */
function renderFooterNavColumn(column, modifierClass) {
  var className = "site-footer__col";
  if (modifierClass) {
    className += " " + modifierClass;
  }

  var linksHtml = column.links
    .map(function (link) {
      var attrs =
        'href="' +
        link.href +
        '" class="site-footer__link"';

      if (link.external) {
        attrs +=
          ' target="_blank" rel="noopener noreferrer"';
      }

      return "<li><a " + attrs + ">" + link.label + "</a></li>";
    })
    .join("");

  return (
    '<nav class="' +
    className +
    '" aria-label="' +
    column.ariaLabel +
    '">' +
    '<h3 class="site-footer__heading">' +
    column.title +
    "</h3>" +
    '<ul class="site-footer__list" role="list">' +
    linksHtml +
    "</ul>" +
    "</nav>"
  );
}
