/**
 * Article page header component.
 */

/**
 * Renders article page header with verified metadata only.
 * @param {Object} pageData
 * @param {ArticleItem} catalogEntry
 * @returns {string}
 */
function renderArticleHeader(pageData, catalogEntry) {
  var titleId = "article-hero-title";
  var categoryLabel = getArticleCategoryLabel(catalogEntry.category);
  var metaItems = [];

  if (catalogEntry.publishedAt) {
    metaItems.push(
      '<span class="article-hero__meta-item">' +
        '<span class="article-hero__meta-label">تاریخ انتشار</span>' +
        '<time class="article-hero__date" datetime="' +
        catalogEntry.publishedAt +
        '">' +
        catalogEntry.publishedAt +
        "</time></span>"
    );
  }

  if (
    catalogEntry.updatedAt &&
    catalogEntry.updatedAt !== catalogEntry.publishedAt
  ) {
    metaItems.push(
      '<span class="article-hero__meta-item">' +
        '<span class="article-hero__meta-label">آخرین بروزرسانی</span>' +
        '<time class="article-hero__updated" datetime="' +
        catalogEntry.updatedAt +
        '">' +
        catalogEntry.updatedAt +
        "</time></span>"
    );
  }

  if (catalogEntry.author) {
    metaItems.push(
      '<span class="article-hero__meta-item">' +
        '<span class="article-hero__meta-label">نویسنده</span>' +
        '<span class="article-hero__author">' +
        catalogEntry.author +
        "</span></span>"
    );
  }

  if (catalogEntry.reviewer) {
    metaItems.push(
      '<span class="article-hero__meta-item">' +
        '<span class="article-hero__meta-label">بازبینی پزشکی</span>' +
        '<span class="article-hero__reviewer">' +
        catalogEntry.reviewer +
        "</span></span>"
    );
  }

  var metaHtml = metaItems.length
    ? '<div class="article-hero__meta">' + metaItems.join("") + "</div>"
    : "";

  var excerpt = catalogEntry.excerpt || (pageData.hero && pageData.hero.lead) || "";

  var imageHtml = "";

  if (catalogEntry.image) {
    imageHtml =
      '<figure class="article-hero__figure">' +
      '<img src="' +
      catalogEntry.image +
      '" alt="' +
      (catalogEntry.imageAlt || catalogEntry.title) +
      '" class="article-hero__image" width="960" height="540" loading="eager" decoding="async">' +
      "</figure>";
  }

  return (
    '<header class="article-hero section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="article-hero__inner">' +
    '<div class="article-hero__topline">' +
    '<p class="article-hero__category">' +
    categoryLabel +
    "</p>" +
    metaHtml +
    "</div>" +
    '<h1 class="article-hero__title" id="' +
    titleId +
    '">' +
    catalogEntry.title +
    "</h1>" +
    (excerpt
      ? '<p class="article-hero__lead">' + excerpt + "</p>"
      : "") +
    imageHtml +
    "</div></div></header>"
  );
}
