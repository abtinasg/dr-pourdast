/**
 * Article sidebar with table of contents.
 */

/**
 * Renders article sidebar for desktop layout.
 * @param {ArticleHeading[]|null} headings
 * @returns {string}
 */
function renderArticleSidebar(headings) {
  var tocHtml = renderArticleTableOfContents(headings);

  if (!tocHtml) return "";

  return (
    '<aside class="article-layout__sidebar" aria-label="ناوبری مقاله">' +
    '<div class="article-layout__sidebar-inner">' +
    tocHtml +
    "</div></aside>"
  );
}
