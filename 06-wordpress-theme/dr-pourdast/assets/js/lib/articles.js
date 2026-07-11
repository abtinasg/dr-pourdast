/**
 * Article catalog helpers.
 * Shared between page render and client-side filtering.
 *
 * All medical article content must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */

/** @type {Record<string, string>} */
var ARTICLE_AVAILABLE_SERVICE_ROUTES = {
  endometriosis: "/services/endometriosis",
  "gynecologic-laparoscopy": "/services/gynecologic-laparoscopy",
  hysteroscopy: "/services/hysteroscopy",
  "ovarian-cyst": "/services/ovarian-cyst",
};

/** @type {Record<string, string>} */
var ARTICLE_AVAILABLE_GUIDE_ROUTES = {
  "first-visit": "/patient-guides/first-visit",
};

/**
 * @param {string} slug
 * @returns {string}
 */
function getArticleHref(slug) {
  return "/articles/" + slug;
}

/**
 * @param {ArticleCategory} category
 * @returns {string}
 */
function getArticleCategoryLabel(category) {
  if (typeof ARTICLE_CATEGORY_LABELS === "undefined") return category;
  return ARTICLE_CATEGORY_LABELS[category] || category;
}

/**
 * @param {ArticleItem[]} catalog
 * @returns {ArticleItem[]}
 */
function getPublishedArticles(catalog) {
  return catalog.filter(function (article) {
    return article.status === "published";
  });
}

/**
 * @param {ArticleItem[]} catalog
 * @param {string} slug
 * @returns {ArticleItem|null}
 */
function getPublishedArticleBySlug(catalog, slug) {
  for (var i = 0; i < catalog.length; i++) {
    if (catalog[i].slug === slug && catalog[i].status === "published") {
      return catalog[i];
    }
  }

  return null;
}

/**
 * @param {ArticleItem[]} catalog
 * @returns {string[]}
 */
function getPublishedArticleSlugs(catalog) {
  return getPublishedArticles(catalog).map(function (article) {
    return article.slug;
  });
}

/**
 * @param {ArticleItem[]} catalog
 * @param {string} currentSlug
 * @param {number} [limit]
 * @returns {ArticleItem[]}
 */
function getRelatedArticles(catalog, currentSlug, limit) {
  var maxItems = limit || 3;
  var published = getPublishedArticles(catalog);
  var current = null;

  for (var i = 0; i < published.length; i++) {
    if (published[i].slug === currentSlug) {
      current = published[i];
      break;
    }
  }

  if (!current) return [];

  var sameCategory = published.filter(function (article) {
    return (
      article.slug !== currentSlug && article.category === current.category
    );
  });

  var otherCategories = published.filter(function (article) {
    return (
      article.slug !== currentSlug && article.category !== current.category
    );
  });

  var candidates = sameCategory.concat(otherCategories);
  var seen = {};
  var results = [];

  for (var j = 0; j < candidates.length && results.length < maxItems; j++) {
    if (seen[candidates[j].slug]) continue;
    seen[candidates[j].slug] = true;
    results.push(candidates[j]);
  }

  return results;
}

/**
 * @param {Array<{type: string, level?: number, id?: string, text?: string}>} blocks
 * @returns {ArticleHeading[]}
 */
function extractArticleHeadingsFromBlocks(blocks) {
  if (!blocks || !blocks.length) return [];

  return blocks
    .filter(function (block) {
      return (
        block.type === "heading" &&
        (block.level === 2 || block.level === 3) &&
        block.id &&
        block.text
      );
    })
    .map(function (block) {
      return {
        id: block.id,
        title: block.text,
        level: block.level,
      };
    });
}

/**
 * @param {ArticleHeading[]} headings
 * @returns {ArticleHeading[]|null}
 */
function getValidTableOfContentsHeadings(headings) {
  if (!headings || headings.length < 3) return null;

  var seen = {};
  var valid = [];

  for (var i = 0; i < headings.length; i++) {
    var heading = headings[i];

    if (!heading.id || !heading.title) continue;
    if (heading.level !== 2 && heading.level !== 3) continue;
    if (seen[heading.id]) continue;

    seen[heading.id] = true;
    valid.push(heading);
  }

  return valid.length >= 3 ? valid : null;
}

/**
 * @param {ArticleItem} article
 * @param {Object} [pageSeo]
 * @param {string} [siteOrigin]
 * @returns {{ title: string, description: string, canonical: string, ogType: string, locale: string, image?: string, publishedTime?: string, modifiedTime?: string, author?: string }}
 */
function getArticleMetadata(article, pageSeo, siteOrigin) {
  var origin = siteOrigin || "https://drpourdast.ir";
  var seo = pageSeo || {};
  var metadata = {
    title: article.seoTitle || seo.title || article.title,
    description:
      article.seoDescription || seo.description || article.excerpt,
    canonical: seo.canonical || origin + getArticleHref(article.slug),
    ogType: "article",
    locale: seo.locale || "fa_IR",
  };

  var image = article.image || seo.ogImage;

  if (image) {
    metadata.image =
      image.indexOf("http") === 0 ? image : origin + image;
  }

  if (article.publishedAt) {
    metadata.publishedTime = article.publishedAt;
  }

  if (article.updatedAt && article.updatedAt !== article.publishedAt) {
    metadata.modifiedTime = article.updatedAt;
  }

  if (article.author) {
    metadata.author = article.author;
  }

  return metadata;
}

/**
 * @param {string[]} slugs
 * @param {number} [limit]
 * @returns {{ eyebrow: string, title: string, items: Array<{label: string, href: string}> }|null}
 */
function resolveRelatedServicesSection(slugs, limit) {
  if (!slugs || !slugs.length) return null;
  if (typeof SERVICES_SECTION === "undefined") return null;

  var maxItems = limit || 3;
  var items = [];

  for (var i = 0; i < slugs.length && items.length < maxItems; i++) {
    var slug = slugs[i];
    var href = ARTICLE_AVAILABLE_SERVICE_ROUTES[slug];

    if (!href) continue;

    var service = null;

    for (var j = 0; j < SERVICES_SECTION.items.length; j++) {
      if (SERVICES_SECTION.items[j].href === href) {
        service = SERVICES_SECTION.items[j];
        break;
      }
    }

    if (!service) continue;

    items.push({
      label: service.title,
      href: service.href,
    });
  }

  if (!items.length) return null;

  return {
    eyebrow: "خدمات مرتبط",
    title: "خدمات تخصصی مرتبط با این موضوع",
    items: items,
  };
}

/**
 * @param {string[]} slugs
 * @param {number} [limit]
 * @returns {{ eyebrow: string, title: string, items: Array<{label: string, href: string, description?: string}> }|null}
 */
function resolveRelatedGuidesSection(slugs, limit) {
  if (!slugs || !slugs.length) return null;

  var maxItems = limit || 3;
  var items = [];
  var guideItems =
    typeof PATIENT_GUIDES_PAGE !== "undefined" &&
    PATIENT_GUIDES_PAGE.guides &&
    PATIENT_GUIDES_PAGE.guides.items
      ? PATIENT_GUIDES_PAGE.guides.items
      : [];

  for (var i = 0; i < slugs.length && items.length < maxItems; i++) {
    var slug = slugs[i];
    var href = ARTICLE_AVAILABLE_GUIDE_ROUTES[slug];

    if (!href) continue;

    var guide = null;

    for (var j = 0; j < guideItems.length; j++) {
      if (guideItems[j].slug === slug) {
        guide = guideItems[j];
        break;
      }
    }

    if (!guide) continue;

    items.push({
      label: guide.title,
      href: guide.href,
      description: guide.description,
    });
  }

  if (!items.length) return null;

  return {
    eyebrow: "راهنمای بیماران",
    title: "راهنماهای مرتبط برای مطالعه بیشتر",
    items: items,
  };
}

/**
 * @param {ArticleItem|null} featuredArticle
 * @returns {ArticleItem|null}
 */
function getFeaturedArticle(catalog) {
  var published = getPublishedArticles(catalog);

  for (var i = 0; i < published.length; i++) {
    if (published[i].featured === true) {
      return published[i];
    }
  }

  return null;
}

/**
 * @param {ArticleItem[]} articles
 * @param {string} category
 * @returns {ArticleItem[]}
 */
function filterArticlesByCategory(articles, category) {
  if (!category || category === "all") {
    return articles.slice();
  }

  return articles.filter(function (article) {
    return article.category === category;
  });
}

/**
 * Normalizes Persian text for search comparison.
 * @param {string} text
 * @returns {string}
 */
function normalizeArticleSearchText(text) {
  return text
    .replace(/\u200c/g, "")
    .replace(/[يی]/g, "ی")
    .replace(/[كک]/g, "ک")
    .trim()
    .toLowerCase();
}

/**
 * @param {ArticleItem[]} articles
 * @param {string} query
 * @returns {ArticleItem[]}
 */
function searchArticles(articles, query) {
  var normalizedQuery = normalizeArticleSearchText(query);

  if (!normalizedQuery) {
    return articles.slice();
  }

  return articles.filter(function (article) {
    var searchable =
      normalizeArticleSearchText(article.title) +
      " " +
      normalizeArticleSearchText(article.excerpt);

    return searchable.indexOf(normalizedQuery) !== -1;
  });
}

/**
 * @param {ArticleItem[]} articles
 * @param {number} page
 * @param {number} perPage
 * @returns {{ items: ArticleItem[], totalPages: number, page: number }}
 */
function paginateArticles(articles, page, perPage) {
  var totalPages = Math.max(1, Math.ceil(articles.length / perPage));
  var safePage = Math.min(Math.max(page, 1), totalPages);
  var start = (safePage - 1) * perPage;

  return {
    items: articles.slice(start, start + perPage),
    totalPages: totalPages,
    page: safePage,
  };
}
