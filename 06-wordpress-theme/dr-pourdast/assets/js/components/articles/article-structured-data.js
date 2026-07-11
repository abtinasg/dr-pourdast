/**
 * Article structured data (JSON-LD).
 */

/**
 * Builds Article schema from verified article fields only.
 * @param {Object} pageData
 * @param {ArticleItem} catalogEntry
 * @param {string} canonicalUrl
 * @returns {Object|null}
 */
function buildArticleStructuredData(pageData, catalogEntry, canonicalUrl) {
  if (!catalogEntry || !catalogEntry.title) return null;

  var schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: catalogEntry.title,
    description: catalogEntry.seoDescription || catalogEntry.excerpt,
    inLanguage: "fa-IR",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "دکتر طاهره پوردست",
    },
  };

  if (catalogEntry.image) {
    schema.image = catalogEntry.image.indexOf("http") === 0
      ? catalogEntry.image
      : "https://drpourdast.ir" + catalogEntry.image;
  }

  if (catalogEntry.publishedAt) {
    schema.datePublished = catalogEntry.publishedAt;
  }

  if (
    catalogEntry.updatedAt &&
    catalogEntry.updatedAt !== catalogEntry.publishedAt
  ) {
    schema.dateModified = catalogEntry.updatedAt;
  }

  if (catalogEntry.author) {
    schema.author = {
      "@type": "Person",
      name: catalogEntry.author,
    };
  }

  if (catalogEntry.reviewer) {
    schema.reviewedBy = {
      "@type": "Person",
      name: catalogEntry.reviewer,
    };
  }

  return schema;
}

/**
 * Builds BreadcrumbList schema from breadcrumb items.
 * @param {Array<{label: string, href: string}>} items
 * @param {string} siteOrigin
 * @returns {Object|null}
 */
function buildArticleBreadcrumbSchema(items, siteOrigin) {
  if (!items || !items.length) return null;

  var origin = siteOrigin || "https://drpourdast.ir";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(function (item, index) {
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: origin + item.href,
      };
    }),
  };
}

/**
 * Builds FAQPage schema from visible FAQ items.
 * @param {ArticleFAQ[]|undefined} faqs
 * @returns {Object|null}
 */
function buildArticleFaqSchema(faqs) {
  if (!faqs || !faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(function (faq) {
      return {
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      };
    }),
  };
}

/**
 * Injects structured data scripts into the document head.
 * @param {Object[]} schemas
 */
function injectArticleStructuredData(schemas) {
  schemas
    .filter(function (schema) {
      return schema !== null;
    })
    .forEach(function (schema, index) {
      var script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "article-schema-" + index;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
}

/**
 * Renders all applicable structured data for a published article.
 * @param {Object} pageData
 * @param {ArticleItem} catalogEntry
 * @param {string} canonicalUrl
 */
function renderArticleStructuredData(pageData, catalogEntry, canonicalUrl) {
  var schemas = [
    buildArticleStructuredData(pageData, catalogEntry, canonicalUrl),
    buildArticleBreadcrumbSchema(pageData.breadcrumb),
    buildArticleFaqSchema(pageData.faqs),
  ];

  injectArticleStructuredData(schemas);
}
