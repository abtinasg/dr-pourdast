/**
 * Article share actions component.
 */

/**
 * Renders lightweight article share actions.
 * @param {string} canonicalUrl
 * @returns {string}
 */
function renderArticleShareActions(canonicalUrl) {
  return (
    '<section class="article-share section" aria-labelledby="article-share-title">' +
    '<div class="container">' +
    '<div class="article-share__inner">' +
    '<h2 class="article-share__title" id="article-share-title">اشتراک‌گذاری مقاله</h2>' +
    '<div class="article-share__actions">' +
    '<button type="button" class="article-share__button" id="article-copy-link" data-url="' +
    canonicalUrl +
    '">' +
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M6 2.5H11.5C12.3 2.5 13 3.2 13 4V10.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>' +
    '<rect x="3" y="5.5" width="7.5" height="8" rx="1.5" stroke="currentColor" stroke-width="1.3"/>' +
    "</svg>" +
    "کپی لینک</button>" +
    '<button type="button" class="article-share__button article-share__button--native" id="article-native-share" hidden data-url="' +
    canonicalUrl +
    '">' +
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M8 3V10M8 3L5.5 5.5M8 3L10.5 5.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M3 10.5V12.5C3 13.3 3.7 14 4.5 14H11.5C12.3 14 13 13.3 13 12.5V10.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>' +
    "</svg>" +
    "اشتراک‌گذاری</button>" +
    "</div>" +
    '<p class="article-share__status" id="article-share-status" role="status" aria-live="polite"></p>' +
    "</div></div></section>"
  );
}
