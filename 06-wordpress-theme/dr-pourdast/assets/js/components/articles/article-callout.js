/**
 * Article callout variants for medical content blocks.
 */

/** @type {Record<string, string>} */
var ARTICLE_CALLOUT_TITLES = {
  info: "نکته مهم",
  important: "نکته مهم",
  "doctor-review": "نیاز به بررسی پزشک",
  visit: "برای مراجعه",
};

/**
 * Renders an article callout block.
 * @param {Object} block
 * @returns {string}
 */
function renderArticleCallout(block) {
  var variant = block.variant || "info";
  var title = block.title || ARTICLE_CALLOUT_TITLES[variant] || "نکته مهم";

  return (
    '<aside class="article-prose__callout article-prose__callout--' +
    variant +
    '" role="note">' +
    '<p class="article-prose__callout-title">' +
    title +
    "</p>" +
    '<div class="article-prose__callout-text">' +
    block.text +
    "</div></aside>"
  );
}
