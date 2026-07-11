/**
 * Renders the top language selection bar.
 */

var LANGUAGE_FLAG_IRAN =
  '<svg viewBox="0 0 18 12" aria-hidden="true"><rect width="18" height="4" fill="#239F40"/><rect y="4" width="18" height="4" fill="#fff"/><rect y="8" width="18" height="4" fill="#DA0000"/><circle cx="9" cy="6" r="1.6" fill="#DA0000"/></svg>';

var LANGUAGE_FLAG_UK =
  '<svg viewBox="0 0 18 12" aria-hidden="true"><rect width="18" height="12" fill="#012169"/><path d="M0 0L18 12M18 0L0 12" stroke="#fff" stroke-width="2.2"/><path d="M0 0L18 12M18 0L0 12" stroke="#C8102E" stroke-width="1.1"/><path d="M9 0V12M0 6H18" stroke="#fff" stroke-width="3.2"/><path d="M9 0V12M0 6H18" stroke="#C8102E" stroke-width="1.8"/></svg>';

/**
 * @param {string} flag
 * @returns {string}
 */
function renderLanguageFlag(flag) {
  if (flag === "iran") {
    return (
      '<span class="language-bar__flag language-bar__flag--iran">' +
      LANGUAGE_FLAG_IRAN +
      "</span>"
    );
  }

  if (flag === "uk") {
    return (
      '<span class="language-bar__flag language-bar__flag--uk">' +
      LANGUAGE_FLAG_UK +
      "</span>"
    );
  }

  return (
    '<span class="language-bar__flag language-bar__flag--arabic" aria-hidden="true">ض</span>'
  );
}

/**
 * @returns {string}
 */
function getCurrentLanguageCode() {
  var htmlLang = (document.documentElement.lang || "fa").toLowerCase();
  return htmlLang.split("-")[0];
}

/**
 * @returns {Array<{ code: string, label: string, href?: string|null, flag: string }>}
 */
function getLanguageOptions() {
  if (
    typeof SITE_CONFIG !== "undefined" &&
    Array.isArray(SITE_CONFIG.languages) &&
    SITE_CONFIG.languages.length
  ) {
    return SITE_CONFIG.languages;
  }

  return [
    { code: "fa", label: "فارسی", href: "/", flag: "iran" },
    { code: "en", label: "English", href: null, flag: "uk" },
    { code: "ar", label: "العربية", href: null, flag: "arabic" },
  ];
}

/**
 * @returns {string}
 */
function renderLanguageBar() {
  var currentCode = getCurrentLanguageCode();
  var items = getLanguageOptions()
    .map(function (language) {
      var isCurrent = language.code === currentCode;
      var labelHtml =
        '<span class="language-bar__label">' + language.label + "</span>";
      var flagHtml = renderLanguageFlag(language.flag);

      if (isCurrent || !language.href) {
        return (
          '<li class="language-bar__item">' +
          '<span class="language-bar__item--current" aria-current="true">' +
          labelHtml +
          flagHtml +
          "</span></li>"
        );
      }

      return (
        '<li class="language-bar__item">' +
        '<a href="' +
        language.href +
        '" class="language-bar__link" hreflang="' +
        language.code +
        '" lang="' +
        language.code +
        '">' +
        labelHtml +
        flagHtml +
        "</a></li>"
      );
    })
    .join("");

  return (
    '<div class="language-bar" role="navigation" aria-label="انتخاب زبان">' +
    '<div class="container language-bar__inner">' +
    '<ul class="language-bar__list" role="list">' +
    items +
    "</ul></div></div>"
  );
}

/**
 * Inserts the language bar before the site header.
 */
function initLanguageBar() {
  if (document.querySelector(".language-bar")) return;

  var header = document.querySelector(".site-header");
  if (!header) return;

  header.insertAdjacentHTML("beforebegin", renderLanguageBar());
}
