/**
 * Article page layout, FAQ, notice, and 404 helpers.
 */

var ARTICLE_MEDICAL_NOTICE = {
  paragraphs: [
    "این مطلب صرفاً برای آگاهی عمومی تهیه شده است و جایگزین معاینه، تشخیص، نسخه یا توصیه درمانی پزشک نیست. شرایط هر بیمار باید به‌صورت جداگانه بررسی شود.",
  ],
};

var ARTICLE_FINAL_CTA = {
  title: "برای بررسی شرایط خود، نوبت مراجعه دریافت کنید",
  description:
    "برای مشاهده زمان‌های آزاد و ثبت نوبت، وارد صفحه رسمی دکتر طاهره پوردست در سامانه دکترتو شوید.",
  cta: {
    text: "رزرو نوبت",
    source: "article-final-cta",
  },
};

/**
 * Renders restrained medical information notice for articles.
 * @returns {string}
 */
function renderArticleMedicalNotice() {
  return (
    '<section class="article-notice section" aria-labelledby="article-notice-title">' +
    '<div class="container">' +
    '<div class="article-notice__inner">' +
    '<h2 class="sr-only" id="article-notice-title">تذکر پزشکی</h2>' +
    '<p class="article-notice__text">' +
    ARTICLE_MEDICAL_NOTICE.paragraphs[0] +
    "</p></div></div></section>"
  );
}

/**
 * Renders two-column article layout with optional sidebar TOC.
 * @param {Object} config
 * @returns {string}
 */
function renderArticleLayout(config) {
  var headings = config.headings;
  var sidebarHtml = renderArticleSidebar(headings);
  var mobileTocHtml = renderArticleTableOfContents(headings);
  var hasToc = mobileTocHtml.length > 0;

  var mobileTocSection = hasToc
    ? '<div class="article-layout__mobile-toc">' + mobileTocHtml + "</div>"
    : "";

  var gridClass = sidebarHtml
    ? " article-layout__grid--with-sidebar"
    : "";

  return (
    '<section class="article-layout section">' +
    '<div class="container">' +
    mobileTocSection +
    '<div class="article-layout__grid' +
    gridClass +
    '">' +
    '<article class="article-layout__main" aria-label="متن مقاله">' +
    '<div class="article-prose">' +
    renderArticleProse(config.body) +
    "</div></article>" +
    sidebarHtml +
    "</div></div></section>"
  );
}

/**
 * Renders article FAQ section when verified items exist.
 * @param {ArticleFAQ[]|undefined} faqs
 * @returns {string}
 */
function renderArticleFaq(faqs) {
  if (!faqs || !faqs.length) return "";

  var items = faqs.map(function (faq, index) {
    return {
      id: faq.id || "article-faq-" + (index + 1),
      question: faq.question,
      answer: faq.answer,
    };
  });

  return renderServiceFaq({
    eyebrow: "سؤالات پرتکرار",
    title: "سؤالات پرتکرار درباره این موضوع",
    items: items,
  });
}

/**
 * Renders article not-found state for unpublished or unknown slugs.
 * @returns {string}
 */
function renderArticleNotFound() {
  return (
    '<section class="article-not-found section" aria-labelledby="article-not-found-title">' +
    '<div class="container">' +
    '<div class="article-not-found__inner">' +
    '<h1 class="article-not-found__title" id="article-not-found-title">صفحه یافت نشد</h1>' +
    '<p class="article-not-found__description">این مقاله موجود نیست یا هنوز منتشر نشده است.</p>' +
    '<a href="/articles" class="btn btn--secondary">بازگشت به مقالات</a>' +
    "</div></div></section>"
  );
}

/**
 * Applies noindex metadata for unpublished article routes.
 */
function applyArticleNotFoundMeta() {
  document.title = "صفحه یافت نشد | دکتر طاهره پوردست";

  var robots = document.querySelector('meta[name="robots"]');

  if (!robots) {
    robots = document.createElement("meta");
    robots.setAttribute("name", "robots");
    document.head.appendChild(robots);
  }

  robots.setAttribute("content", "noindex, nofollow");
}

/**
 * Applies verified article metadata to the document head.
 * @param {ReturnType<typeof getArticleMetadata>} metadata
 */
function applyArticlePageMeta(metadata) {
  var titleSuffix = " | دکتر طاهره پوردست";
  var pageTitle = metadata.title.indexOf("دکتر طاهره پوردست") !== -1
    ? metadata.title
    : metadata.title + titleSuffix;

  document.title = pageTitle;

  function setMeta(selector, attr, name, value) {
    if (!value) return;
    var el = document.querySelector(selector);

    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }

    el.setAttribute("content", value);
  }

  setMeta('meta[name="description"]', "name", "description", metadata.description);

  var canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", metadata.canonical);

  setMeta('meta[property="og:type"]', "property", "og:type", metadata.ogType);
  setMeta('meta[property="og:locale"]', "property", "og:locale", metadata.locale);
  setMeta('meta[property="og:title"]', "property", "og:title", metadata.title);
  setMeta(
    'meta[property="og:description"]',
    "property",
    "og:description",
    metadata.description
  );
  setMeta('meta[property="og:url"]', "property", "og:url", metadata.canonical);

  if (metadata.image) {
    setMeta('meta[property="og:image"]', "property", "og:image", metadata.image);
  }

  if (metadata.publishedTime) {
    setMeta(
      'meta[property="article:published_time"]',
      "property",
      "article:published_time",
      metadata.publishedTime
    );
  }

  if (metadata.modifiedTime) {
    setMeta(
      'meta[property="article:modified_time"]',
      "property",
      "article:modified_time",
      metadata.modifiedTime
    );
  }

  if (metadata.author) {
    setMeta(
      'meta[property="article:author"]',
      "property",
      "article:author",
      metadata.author
    );
  }
}
