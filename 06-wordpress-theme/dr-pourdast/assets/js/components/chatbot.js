/**
 * Site chatbot — content-aware assistant on the left side.
 */

var CHAT_ICON =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10h8M8 14h5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/><path d="M6 19l1.5-2.5A8 8 0 1 1 12 20H6z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/></svg>';

var SEND_ICON =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12l14-7-4 7 4 7-14-7z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/></svg>';

var CLOSE_ICON =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>';

/**
 * @returns {typeof CHATBOT_KNOWLEDGE}
 */
function getChatbotKnowledge() {
  if (typeof CHATBOT_KNOWLEDGE !== "undefined") {
    return CHATBOT_KNOWLEDGE;
  }

  return {
    welcome: "سلام! چطور می‌توانم کمکتان کنم؟",
    disclaimer: "",
    placeholder: "سؤال خود را بنویسید…",
    sendLabel: "ارسال",
    openLabel: "گفتگو",
    closeLabel: "بستن",
    typingLabel: "…",
    noResult: "پاسخی پیدا نشد.",
    readMore: "بیشتر",
    suggestions: [],
    entries: [],
  };
}

/**
 * @param {string} text
 * @returns {string}
 */
function normalizeChatText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[\u200c\u200f\u061c]/g, "")
    .replace(/[ي]/g, "ی")
    .replace(/[ك]/g, "ک")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * @param {string} text
 * @returns {string[]}
 */
function tokenizeChatQuery(text) {
  var normalized = normalizeChatText(text);
  if (!normalized) return [];

  return normalized
    .split(" ")
    .filter(function (token) {
      return token.length >= 2;
    });
}

/**
 * @param {string} query
 * @returns {{ title: string, content: string, href?: string, score: number }[]}
 */
function searchChatbotKnowledge(query) {
  var knowledge = getChatbotKnowledge();
  var tokens = tokenizeChatQuery(query);
  if (!tokens.length || !knowledge.entries.length) return [];

  var results = [];

  for (var i = 0; i < knowledge.entries.length; i++) {
    var entry = knowledge.entries[i];
    var haystack = normalizeChatText(
      entry.title + " " + entry.content + " " + (entry.keywords || []).join(" ")
    );
    var score = 0;

    for (var j = 0; j < tokens.length; j++) {
      var token = tokens[j];
      if (haystack.indexOf(token) !== -1) {
        score += 2;
      }

      for (var k = 0; k < (entry.keywords || []).length; k++) {
        var keyword = normalizeChatText(entry.keywords[k]);
        if (keyword.indexOf(token) !== -1 || token.indexOf(keyword) !== -1) {
          score += 3;
        }
      }
    }

    if (score > 0) {
      results.push({
        title: entry.title,
        content: entry.content,
        href: entry.href,
        score: score,
      });
    }
  }

  results.sort(function (a, b) {
    return b.score - a.score;
  });

  return results.slice(0, 1);
}

var CHAT_SUMMARY_MAX_CHARS = 100;

/**
 * @param {string} text
 * @returns {string}
 */
function summarizeChatContent(text) {
  var cleaned = String(text || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return "";

  if (cleaned.length <= CHAT_SUMMARY_MAX_CHARS) {
    return cleaned;
  }

  var sentenceMatch = cleaned.match(/^[^.!?؟]+[.!?؟]/);
  if (
    sentenceMatch &&
    sentenceMatch[0].length > 0 &&
    sentenceMatch[0].length <= CHAT_SUMMARY_MAX_CHARS + 15
  ) {
    return sentenceMatch[0].trim();
  }

  var truncated = cleaned.slice(0, CHAT_SUMMARY_MAX_CHARS);
  var lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > CHAT_SUMMARY_MAX_CHARS * 0.55) {
    truncated = truncated.slice(0, lastSpace);
  }

  return truncated.trim() + "…";
}

/**
 * @param {{ title: string, content: string, href?: string }[]} matches
 * @returns {string}
 */
function formatChatbotAnswer(matches) {
  var knowledge = getChatbotKnowledge();

  if (!matches.length) {
    return "<p>" + escapeChatHtml(knowledge.noResult) + "</p>";
  }

  var match = matches[0];
  var summary = summarizeChatContent(match.content);
  var html = "<p>" + escapeChatHtml(summary) + "</p>";

  if (match.href) {
    html +=
      '<p><a class="chatbot__read-more" href="' +
      escapeChatHtml(match.href) +
      '">' +
      escapeChatHtml(knowledge.readMore) +
      "</a></p>";
  }

  return html;
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeChatHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * @returns {string}
 */
function renderChatbotWidget() {
  var knowledge = getChatbotKnowledge();
  var suggestionsHtml = "";

  for (var i = 0; i < knowledge.suggestions.length; i++) {
    var item = knowledge.suggestions[i];
    suggestionsHtml +=
      '<button type="button" class="chatbot__suggestion" data-query="' +
      escapeChatHtml(item.query) +
      '">' +
      escapeChatHtml(item.label) +
      "</button>";
  }

  return (
    '<div class="chatbot" data-open="false">' +
    '<button type="button" class="chatbot__toggle" id="chatbot-toggle" aria-expanded="false" aria-controls="chatbot-panel" aria-label="' +
    escapeChatHtml(knowledge.openLabel) +
    '">' +
    CHAT_ICON +
    '<span class="chatbot__toggle-label">' +
    escapeChatHtml(knowledge.openLabel) +
    "</span></button>" +
    '<section class="chatbot__panel" id="chatbot-panel" aria-hidden="true" aria-label="' +
    escapeChatHtml(knowledge.openLabel) +
    '">' +
    '<header class="chatbot__header">' +
    '<div class="chatbot__header-text">' +
    '<p class="chatbot__eyebrow">Dr. Poordast</p>' +
    '<h2 class="chatbot__title">' +
    escapeChatHtml(knowledge.openLabel) +
    "</h2>" +
    "</div>" +
    '<button type="button" class="chatbot__close" id="chatbot-close" aria-label="' +
    escapeChatHtml(knowledge.closeLabel) +
    '">' +
    CLOSE_ICON +
    "</button>" +
    "</header>" +
    '<div class="chatbot__messages" id="chatbot-messages" role="log" aria-live="polite" aria-relevant="additions"></div>' +
    '<div class="chatbot__suggestions" id="chatbot-suggestions">' +
    suggestionsHtml +
    "</div>" +
    '<form class="chatbot__form" id="chatbot-form">' +
    '<label class="sr-only" for="chatbot-input">' +
    escapeChatHtml(knowledge.placeholder) +
    "</label>" +
    '<input type="text" class="chatbot__input" id="chatbot-input" placeholder="' +
    escapeChatHtml(knowledge.placeholder) +
    '" autocomplete="off" />' +
    '<button type="submit" class="chatbot__send" aria-label="' +
    escapeChatHtml(knowledge.sendLabel) +
    '">' +
    SEND_ICON +
    "</button>" +
    "</form>" +
    "</section>" +
    "</div>"
  );
}

/**
 * @param {HTMLElement} container
 * @param {string} role
 * @param {string} html
 */
function appendChatMessage(container, role, html) {
  var bubble = document.createElement("div");
  bubble.className = "chatbot__message chatbot__message--" + role;
  bubble.innerHTML = html;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

/**
 * @param {HTMLElement} widget
 */
function initChatbotWidget(widget) {
  var knowledge = getChatbotKnowledge();
  var toggle = widget.querySelector("#chatbot-toggle");
  var panel = widget.querySelector("#chatbot-panel");
  var closeButton = widget.querySelector("#chatbot-close");
  var form = widget.querySelector("#chatbot-form");
  var input = widget.querySelector("#chatbot-input");
  var messages = widget.querySelector("#chatbot-messages");
  var suggestions = widget.querySelector("#chatbot-suggestions");
  var isBusy = false;

  function setOpen(isOpen) {
    widget.setAttribute("data-open", isOpen ? "true" : "false");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    panel.setAttribute("aria-hidden", isOpen ? "false" : "true");

    if (isOpen) {
      if (!messages.childElementCount) {
        appendChatMessage(
          messages,
          "bot",
          "<p>" + escapeChatHtml(knowledge.welcome) + "</p>"
        );
      }
      window.requestAnimationFrame(function () {
        input.focus();
      });
    }
  }

  function submitQuery(rawQuery) {
    var query = String(rawQuery || "").trim();
    if (!query || isBusy) return;

    appendChatMessage(messages, "user", "<p>" + escapeChatHtml(query) + "</p>");
    input.value = "";
    isBusy = true;

    appendChatMessage(
      messages,
      "bot chatbot__message--typing",
      "<p>" + escapeChatHtml(knowledge.typingLabel) + "</p>"
    );

    window.setTimeout(function () {
      messages.removeChild(messages.lastElementChild);
      var matches = searchChatbotKnowledge(query);
      appendChatMessage(messages, "bot", formatChatbotAnswer(matches));
      isBusy = false;
      input.focus();
    }, 350);
  }

  toggle.addEventListener("click", function () {
    setOpen(widget.getAttribute("data-open") !== "true");
  });

  closeButton.addEventListener("click", function () {
    setOpen(false);
    toggle.focus();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    submitQuery(input.value);
  });

  suggestions.addEventListener("click", function (event) {
    var target = event.target;
    if (!(target instanceof HTMLElement)) return;
    var button = target.closest("[data-query]");
    if (!button) return;
    submitQuery(button.getAttribute("data-query") || "");
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && widget.getAttribute("data-open") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
}

/**
 * Inserts the chatbot widget at the end of the body.
 */
function initChatbot() {
  if (document.querySelector(".chatbot")) return;

  document.body.insertAdjacentHTML("beforeend", renderChatbotWidget());

  var widget = document.querySelector(".chatbot");
  if (widget) {
    initChatbotWidget(widget);
  }
}
