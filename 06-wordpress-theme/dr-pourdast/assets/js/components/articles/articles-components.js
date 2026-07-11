/**
 * Articles hub page render components.
 */

var ARTICLE_PLACEHOLDER_SVG =
  '<svg class="article-media__placeholder-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">' +
  '<path d="M12 10H28L34 16V38H12V10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>' +
  '<path d="M18 18H28M18 24H26M18 30H24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
  "</svg>";

/**
 * Renders article image or neutral editorial placeholder.
 * @param {ArticleItem} article
 * @param {string} wrapperClass
 * @returns {string}
 */
function renderArticleMedia(article, wrapperClass) {
  if (article.image) {
    return (
      '<div class="' +
      wrapperClass +
      '">' +
      '<img src="' +
      article.image +
      '" alt="' +
      (article.imageAlt || "") +
      '" class="article-media__image" loading="lazy" decoding="async">' +
      "</div>"
    );
  }

  return (
    '<div class="' +
    wrapperClass +
    ' article-media__placeholder" aria-hidden="true">' +
    ARTICLE_PLACEHOLDER_SVG +
    "</div>"
  );
}

/**
 * Renders optional verified publication date.
 * @param {ArticleItem} article
 * @param {string} className
 * @returns {string}
 */
function renderArticleDate(article, className) {
  if (!article.publishedAt) return "";

  return (
    '<time class="' +
    className +
    '" datetime="' +
    article.publishedAt +
    '">' +
    article.publishedAt +
    "</time>"
  );
}

/**
 * Renders the articles hero section.
 * @param {Object} hero
 * @param {boolean} hasPublishedArticles
 * @returns {string}
 */
function renderArticlesHero(hero, hasPublishedArticles) {
  var titleId = "articles-hero-title";
  var searchHtml = "";

  if (hasPublishedArticles) {
    searchHtml =
      '<div class="articles-hero__search">' +
      '<form class="articles-search" id="articles-search-form" role="search">' +
      '<label for="articles-search-input" class="sr-only">جست‌وجو در مقالات</label>' +
      '<svg class="articles-search__icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
      '<circle cx="9" cy="9" r="5.5" stroke="currentColor" stroke-width="1.5"/>' +
      '<path d="M13.5 13.5L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
      "</svg>" +
      '<input type="search" id="articles-search-input" class="articles-search__input" name="q" placeholder="' +
      hero.searchPlaceholder +
      '" autocomplete="off">' +
      '<button type="button" class="articles-search__clear" id="articles-search-clear" hidden aria-label="پاک‌کردن جست‌وجو">' +
      '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
      '<path d="M5 5L11 11M11 5L5 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
      "</svg></button></form></div>";
  }

  return (
    '<section class="articles-hero section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="articles-hero__inner">' +
    '<p class="articles-hero__eyebrow">' +
    hero.eyebrow +
    "</p>" +
    '<h1 class="articles-hero__title" id="' +
    titleId +
    '">' +
    hero.title +
    "</h1>" +
    '<p class="articles-hero__description">' +
    hero.description +
    "</p>" +
    searchHtml +
    '<p class="articles-hero__note">' +
    hero.note +
    "</p>" +
    "</div></div></section>"
  );
}

/**
 * Renders category navigation section.
 * @param {Object} section
 * @param {Array} categories
 * @returns {string}
 */
function renderArticlesCategoryNav(section, categories) {
  var titleId = "articles-category-title";

  var tabsHtml = categories
    .map(function (cat, index) {
      var isActive = index === 0 ? " articles-filter__tab--active" : "";
      var ariaSelected = index === 0 ? ' aria-selected="true"' : ' aria-selected="false"';

      return (
        '<button type="button" class="articles-filter__tab' +
        isActive +
        '" data-category="' +
        cat.slug +
        '" role="tab"' +
        ariaSelected +
        ' id="tab-' +
        cat.slug +
        '" aria-controls="articles-panel">' +
        cat.label +
        "</button>"
      );
    })
    .join("");

  return (
    '<section class="articles-categories section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<h2 class="articles-categories__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    '<div class="articles-filter" role="tablist" aria-label="دسته‌بندی مقالات">' +
    tabsHtml +
    "</div></div></section>"
  );
}

/**
 * Renders the featured article section.
 * @param {ArticleItem} article
 * @returns {string}
 */
function renderFeaturedArticle(article) {
  var categoryLabel = getArticleCategoryLabel(article.category);
  var dateHtml = renderArticleDate(article, "featured-article__date");
  var metaHtml = dateHtml
    ? '<div class="featured-article__meta">' + dateHtml + "</div>"
    : "";

  return (
    '<section class="articles-featured section" aria-labelledby="featured-article-title">' +
    '<div class="container">' +
    '<p class="articles-featured__label">مقاله پیشنهادی</p>' +
    '<article class="featured-article">' +
    '<a href="' +
    getArticleHref(article.slug) +
    '" class="featured-article__link">' +
    '<div class="featured-article__content">' +
    '<span class="featured-article__category">' +
    categoryLabel +
    "</span>" +
    '<h2 class="featured-article__title" id="featured-article-title">' +
    article.title +
    "</h2>" +
    '<p class="featured-article__excerpt">' +
    article.excerpt +
    "</p>" +
    metaHtml +
    '<span class="featured-article__cta">' +
    "مطالعه مقاله" +
    '<svg class="featured-article__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    "</svg></span></div>" +
    renderArticleMedia(article, "featured-article__media") +
    "</a></article></div></section>"
  );
}

/**
 * Renders a single article card for the listing grid.
 * @param {ArticleItem} article
 * @returns {string}
 */
function renderArticleCard(article) {
  var categoryLabel = getArticleCategoryLabel(article.category);
  var dateHtml = renderArticleDate(article, "article-card__date");
  var metaHtml = dateHtml
    ? '<div class="article-card__meta">' + dateHtml + "</div>"
    : "";

  return (
    '<article class="article-card" data-category="' +
    article.category +
    '" data-slug="' +
    article.slug +
    '">' +
    '<a href="' +
    getArticleHref(article.slug) +
    '" class="article-card__link">' +
    renderArticleMedia(article, "article-card__media") +
    '<span class="article-card__body">' +
    '<span class="article-card__category">' +
    categoryLabel +
    "</span>" +
    '<h3 class="article-card__title">' +
    article.title +
    "</h3>" +
    '<p class="article-card__excerpt">' +
    article.excerpt +
    "</p>" +
    metaHtml +
    '<span class="article-card__cta">' +
    "مطالعه مقاله" +
    '<svg class="article-card__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    "</svg></span></span></a></article>"
  );
}

/**
 * Renders an empty state panel.
 * @param {Object} state
 * @param {string} id
 * @param {boolean} [hidden]
 * @returns {string}
 */
function renderArticlesEmptyState(state, id, hidden) {
  var hiddenAttr = hidden !== false ? " hidden" : "";
  var actionsHtml = "";

  if (state.actions && state.actions.length) {
    actionsHtml =
      '<div class="articles-empty__actions">' +
      state.actions
        .map(function (action) {
          return (
            '<a href="' +
            action.href +
            '" class="btn btn--secondary btn--sm">' +
            action.label +
            "</a>"
          );
        })
        .join("") +
      "</div>";
  }

  var actionButtonHtml = state.actionLabel
    ? '<button type="button" class="articles-empty__action" data-empty-action="' +
      id +
      '">' +
      state.actionLabel +
      "</button>"
    : "";

  return (
    '<div class="articles-empty" id="' +
    id +
    '" role="status"' +
    hiddenAttr +
    ">" +
    '<h3 class="articles-empty__title">' +
    state.title +
    "</h3>" +
    (state.description
      ? '<p class="articles-empty__description">' + state.description + "</p>"
      : "") +
    actionsHtml +
    actionButtonHtml +
    "</div>"
  );
}

/**
 * Renders the articles listing section with grid, empty states, and pagination.
 * @param {Object} config
 * @returns {string}
 */
function renderArticlesListing(config) {
  var titleId = config.listSection.id + "-title";
  var hasPublished = config.hasPublishedArticles;

  if (!hasPublished) {
    return (
      '<section class="articles-listing section" id="' +
      config.listSection.id +
      '" aria-labelledby="' +
      titleId +
      '">' +
      '<div class="container">' +
      '<header class="section-header section-header--compact">' +
      '<h2 class="section-header__title" id="' +
      titleId +
      '">' +
      config.listSection.title +
      "</h2>" +
      "</header>" +
      renderArticlesEmptyState(config.emptyStates.noArticles, "articles-empty-global", false) +
      "</div></section>"
    );
  }

  var cardsHtml = config.articles
    .map(function (article) {
      return renderArticleCard(article);
    })
    .join("");

  var showPagination = config.articles.length > 9;

  return (
    '<section class="articles-listing section" id="' +
    config.listSection.id +
    '" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<header class="section-header section-header--compact">' +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    config.listSection.title +
    "</h2>" +
    "</header>" +
    '<div class="articles-grid" id="articles-grid" role="tabpanel" aria-labelledby="tab-all" data-per-page="' +
    config.pagination.perPage +
    '">' +
    cardsHtml +
    "</div>" +
    renderArticlesEmptyState(config.emptyStates.noSearch, "articles-empty-search", true) +
    renderArticlesEmptyState(config.emptyStates.noCategory, "articles-empty-category", true) +
    (showPagination
      ? '<nav class="articles-pagination" id="articles-pagination" aria-label="صفحه‌بندی مقالات"></nav>'
      : "") +
    "</div></section>"
  );
}

/**
 * Renders related articles section for single article pages.
 * @param {Object} section
 * @returns {string}
 */
function renderRelatedArticles(section) {
  var titleId = "related-articles-title";

  var cardsHtml = section.items
    .map(function (article) {
      return (
        '<li class="related-articles__item">' +
        '<a href="' +
        article.href +
        '" class="related-articles__link">' +
        '<span class="related-articles__category">' +
        article.categoryLabel +
        "</span>" +
        '<span class="related-articles__title">' +
        article.title +
        "</span>" +
        '<svg class="related-articles__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
        '<path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg></a></li>"
      );
    })
    .join("");

  return (
    '<section class="articles-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="articles-section__content">' +
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
    '<ul class="related-articles" role="list">' +
    cardsHtml +
    "</ul></div></div></section>"
  );
}
