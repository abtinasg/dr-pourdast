/**
 * Renders inline appointment text link for FAQ answers.
 * @returns {string}
 */
function renderFaqAppointmentLink(source) {
  if (typeof getAppointmentProviders === "undefined") return "";

  var analyticsSource = source || "faq";

  return getAppointmentProviders()
    .map(function (provider, index) {
      var prefix = index === 0 ? " " : " یا ";

      return (
        prefix +
        '<a href="' +
        provider.url +
        '" class="faq-item__link" target="_blank" rel="noopener noreferrer" data-event="' +
        provider.eventName +
        '" data-source="' +
        analyticsSource +
        "-" +
        provider.id +
        '">' +
        provider.linkText +
        '<span class="sr-only"> (باز شدن در تب جدید)</span></a>'
      );
    })
    .join("");
}

/**
 * Renders a single FAQ accordion item.
 * @param {Object} item
 * @param {number} index - Zero-based index for unique IDs
 * @param {boolean} [openByDefault]
 * @returns {string}
 */
function renderFaqItem(item, index, openByDefault) {
  var questionId = "faq-question-" + item.id;
  var answerId = "faq-answer-" + item.id;
  var isOpen = openByDefault === true;

  var answerHtml = item.answer;

  if (item.hasAppointmentLink) {
    answerHtml += renderFaqAppointmentLink(item.appointmentSource);
  }

  return (
    '<div class="faq-item' +
    (isOpen ? " faq-item--open" : "") +
    '" data-faq-item>' +
    '<h3 class="faq-item__heading">' +
    '<button type="button" class="faq-item__trigger" id="' +
    questionId +
    '" aria-expanded="' +
    (isOpen ? "true" : "false") +
    '" aria-controls="' +
    answerId +
    '">' +
    '<span class="faq-item__question">' +
    item.question +
    "</span>" +
    '<svg class="faq-item__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    "</svg>" +
    "</button>" +
    "</h3>" +
    '<div class="faq-item__panel" id="' +
    answerId +
    '" role="region" aria-labelledby="' +
    questionId +
    '"' +
    (isOpen ? "" : " hidden") +
    ">" +
    '<div class="faq-item__panel-inner">' +
    '<div class="faq-item__answer"><p>' +
    answerHtml +
    "</p></div>" +
    "</div>" +
    "</div>" +
    "</div>"
  );
}
