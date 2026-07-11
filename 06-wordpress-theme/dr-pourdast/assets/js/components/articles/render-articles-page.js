/**
 * Renders the articles hub page.
 */
(function () {
  "use strict";

  var mount = document.getElementById("articles-page-mount");
  if (!mount || typeof ARTICLES_PAGE === "undefined") return;
  if (typeof ARTICLES_CATALOG === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof getPublishedArticles === "undefined") return;

  var data = ARTICLES_PAGE;
  var publishedArticles = getPublishedArticles(ARTICLES_CATALOG);
  var featuredArticle = getFeaturedArticle(ARTICLES_CATALOG);
  var hasPublishedArticles = publishedArticles.length > 0;

  var html =
    renderServiceBreadcrumb(data.breadcrumb) +
    renderArticlesHero(data.hero, hasPublishedArticles);

  if (hasPublishedArticles) {
    html += renderArticlesCategoryNav(data.categorySection, data.categories);
  }

  if (featuredArticle) {
    html += renderFeaturedArticle(featuredArticle);
  }

  html +=
    renderArticlesListing({
      listSection: data.listSection,
      articles: publishedArticles,
      hasPublishedArticles: hasPublishedArticles,
      emptyStates: data.emptyStates,
      pagination: data.pagination,
    }) +
    renderMedicalDisclaimer(data.disclaimer) +
    renderRelatedGuides(data.relatedGuides) +
    renderServiceAppointmentCta(data.finalCta);

  mount.outerHTML = html;
})();
