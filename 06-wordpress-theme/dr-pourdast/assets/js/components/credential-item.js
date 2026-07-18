/**
 * Renders a single credential item.
 * @param {Object} item
 * @param {string} item.title
 * @param {string} item.icon
 * @returns {string}
 */
function renderCredentialItem(item) {
  return (
    "<li class=\"credential-item\">" +
    '<span class="credential-item__icon">' +
    (item.icon || "") +
    "</span>" +
    '<span class="credential-item__title">' +
    item.title +
    "</span>" +
    "</li>"
  );
}
