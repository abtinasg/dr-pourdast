/**
 * Article references section.
 */

/**
 * Renders verified article references.
 * @param {ArticleReference[]|undefined} references
 * @returns {string}
 */
function renderArticleReferences(references) {
  if (!references || !references.length) return "";

  var verified = references.filter(function (ref) {
    return ref.verified === true && ref.title;
  });

  if (!verified.length) return "";

  var itemsHtml = verified
    .map(function (ref, index) {
      var metaParts = [];

      if (ref.publisher) metaParts.push(ref.publisher);
      if (ref.year) metaParts.push(ref.year);

      var metaHtml = metaParts.length
        ? '<span class="article-references__meta">' +
          metaParts.join(" — ") +
          "</span>"
        : "";

      var titleHtml = ref.url
        ? '<a href="' +
          ref.url +
          '" class="article-references__link" target="_blank" rel="noopener noreferrer">' +
          ref.title +
          '<span class="sr-only"> (باز شدن در تب جدید)</span></a>'
        : '<span class="article-references__title">' + ref.title + "</span>";

      return (
        '<li class="article-references__item" id="article-reference-' +
        (index + 1) +
        '">' +
        titleHtml +
        metaHtml +
        "</li>"
      );
    })
    .join("");

  return (
    '<section class="article-references section" aria-labelledby="article-references-title">' +
    '<div class="container">' +
    '<div class="article-references__inner">' +
    '<h2 class="article-references__title" id="article-references-title">منابع و مراجع</h2>' +
    '<ol class="article-references__list" role="list">' +
    itemsHtml +
    "</ol></div></div></section>"
  );
}
