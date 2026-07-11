/**
 * Related articles section for article detail pages.
 */

/**
 * Renders related articles using compact article cards.
 * @param {ArticleItem[]} articles
 * @returns {string}
 */
function renderRelatedArticles(articles) {
  if (!articles || !articles.length) return "";

  var titleId = "related-articles-title";

  var cardsHtml = articles
    .map(function (article) {
      return (
        '<li class="related-articles__item">' +
        renderArticleCard(article) +
        "</li>"
      );
    })
    .join("");

  return (
    '<section class="articles-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<header class="section-header section-header--compact">' +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">مطالب مرتبط</h2>' +
    "</header>" +
    '<ul class="related-articles" role="list">' +
    cardsHtml +
    "</ul></div></section>"
  );
}
