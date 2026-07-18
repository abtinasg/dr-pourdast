/**
 * Renders the top language selection bar.
 */

var LANGUAGE_FLAG_IRAN =
  '<svg viewBox="0 0 18 12" aria-hidden="true"><rect width="18" height="4" fill="#239F40"/><rect y="4" width="18" height="4" fill="#fff"/><rect y="8" width="18" height="4" fill="#DA0000"/><circle cx="9" cy="6" r="1.6" fill="#DA0000"/></svg>';

var LANGUAGE_FLAG_UK =
  '<svg viewBox="0 0 18 12" aria-hidden="true"><rect width="18" height="12" fill="#012169"/><path d="M0 0L18 12M18 0L0 12" stroke="#fff" stroke-width="2.2"/><path d="M0 0L18 12M18 0L0 12" stroke="#C8102E" stroke-width="1.1"/><path d="M9 0V12M0 6H18" stroke="#fff" stroke-width="3.2"/><path d="M9 0V12M0 6H18" stroke="#C8102E" stroke-width="1.8"/></svg>';

var LANGUAGE_OPTIONS = [
  { code: "fa", label: "فارسی", flag: "iran" },
  { code: "en", label: "English", flag: "uk" },
  { code: "ar", label: "العربية", flag: "arabic" },
];

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
 * @returns {string}
 */
function getPathWithoutLocale() {
  var path = window.location.pathname.replace(/\/index\.html$/, "/");
  path = path.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  return path;
}

/**
 * @param {string} code
 * @returns {string}
 */
function getLanguageHref(code) {
  var path = getPathWithoutLocale();
  if (code === "fa") {
    return path;
  }
  return "/" + code + (path === "/" ? "/" : path);
}

/**
 * @returns {Array<{ code: string, label: string, href: string, flag: string }>}
 */
function getLanguageOptions() {
  if (
    typeof SITE_CONFIG !== "undefined" &&
    Array.isArray(SITE_CONFIG.languages) &&
    SITE_CONFIG.languages.length
  ) {
    return SITE_CONFIG.languages.map(function (language) {
      return {
        code: language.code,
        label: language.label,
        flag: language.flag,
        href:
          language.href === null || language.href === undefined
            ? getLanguageHref(language.code)
            : language.href,
      };
    });
  }

  return LANGUAGE_OPTIONS.map(function (language) {
    return {
      code: language.code,
      label: language.label,
      flag: language.flag,
      href: getLanguageHref(language.code),
    };
  });
}

/**
 * @returns {string}
 */
function renderLanguageBar() {
  var currentCode = getCurrentLanguageCode();
  var navLabel =
    typeof UI_STRINGS !== "undefined" && UI_STRINGS.languageNavLabel
      ? UI_STRINGS.languageNavLabel
      : "انتخاب زبان";

  var items = getLanguageOptions()
    .map(function (language) {
      var isCurrent = language.code === currentCode;
      var labelHtml =
        '<span class="language-bar__label">' + language.label + "</span>";
      var flagHtml = renderLanguageFlag(language.flag);

      if (isCurrent) {
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
    '<div class="language-bar" role="navigation" aria-label="' +
    navLabel +
    '">' +
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
