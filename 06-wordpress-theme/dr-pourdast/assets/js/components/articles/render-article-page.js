/**
 * Renders a single article page from ARTICLE_PAGE data.
 *
 * All medical article content must be reviewed and approved
 * by Dr. Tahere Pourdast before publication.
 */
(function () {
  "use strict";

  var mount = document.getElementById("article-page-mount");
  if (!mount || typeof ARTICLE_PAGE === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof ARTICLES_CATALOG === "undefined") return;

  var pageData = ARTICLE_PAGE;
  var catalogEntry = getPublishedArticleBySlug(
    ARTICLES_CATALOG,
    pageData.slug
  );

  if (!catalogEntry) {
    mount.outerHTML = renderArticleNotFound();
    applyArticleNotFoundMeta();
    return;
  }

  var metadata = getArticleMetadata(catalogEntry, pageData.seo);
  var headings =
    catalogEntry.headings ||
    pageData.headings ||
    extractArticleHeadingsFromBlocks(
      pageData.body ? pageData.body.blocks : []
    );

  var breadcrumbItems = pageData.breadcrumb || [
    { label: "خانه", href: "/" },
    { label: "مقالات", href: "/articles" },
    {
      label: catalogEntry.title,
      href: getArticleHref(catalogEntry.slug),
    },
  ];

  var relatedServices = resolveRelatedServicesSection(
    pageData.relatedServiceSlugs || catalogEntry.relatedServiceSlugs,
    3
  );

  var relatedArticles = getRelatedArticles(
    ARTICLES_CATALOG,
    catalogEntry.slug,
    3
  );

  var references = pageData.references || catalogEntry.references;
  var faqs = pageData.faqs || catalogEntry.faqs;

  mount.outerHTML =
    renderServiceBreadcrumb(breadcrumbItems) +
    renderArticleHeader(pageData, catalogEntry) +
    renderArticleMedicalNotice() +
    renderArticleLayout({
      headings: headings,
      body: pageData.body,
    }) +
    renderArticleReferences(references) +
    renderArticleFaq(faqs) +
    (relatedServices ? renderRelatedServices(relatedServices) : "") +
    renderRelatedArticles(relatedArticles) +
    renderArticleShareActions(metadata.canonical) +
    renderServiceAppointmentCta(pageData.finalCta || ARTICLE_FINAL_CTA);

  applyArticlePageMeta(metadata);
  renderArticleStructuredData(pageData, catalogEntry, metadata.canonical);
})();
