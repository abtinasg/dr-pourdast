/**
 * Article table of contents component.
 */

/**
 * Renders article table of contents when enough valid headings exist.
 * @param {ArticleHeading[]|null} headings
 * @returns {string}
 */
function renderArticleTableOfContents(headings) {
  var validHeadings = getValidTableOfContentsHeadings(headings);

  if (!validHeadings) return "";

  var itemsHtml = validHeadings
    .map(function (heading) {
      var levelClass =
        heading.level === 3 ? " article-toc__item--sub" : "";

      return (
        '<li class="article-toc__item' +
        levelClass +
        '">' +
        '<a href="#' +
        heading.id +
        '" class="article-toc__link">' +
        heading.title +
        "</a></li>"
      );
    })
    .join("");

  return (
    '<nav class="article-toc" aria-label="فهرست مطالب مقاله">' +
    '<div class="article-toc__mobile">' +
    '<button type="button" class="article-toc__toggle" id="article-toc-toggle" aria-expanded="false" aria-controls="article-toc-panel">' +
    '<span class="article-toc__toggle-label">فهرست مطالب</span>' +
    '<svg class="article-toc__toggle-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    "</svg></button>" +
    '<div class="article-toc__panel" id="article-toc-panel" hidden>' +
    '<ol class="article-toc__list" role="list">' +
    itemsHtml +
    "</ol></div></div>" +
    '<div class="article-toc__desktop">' +
    '<p class="article-toc__title">فهرست مطالب</p>' +
    '<ol class="article-toc__list" role="list">' +
    itemsHtml +
    "</ol></div></nav>"
  );
}
