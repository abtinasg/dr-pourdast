/**
 * Renders confirmed social media links only.
 * @returns {string}
 */
function renderSocialLinks() {
  if (typeof SITE_CONFIG === "undefined") return "";

  var platforms = [
    {
      key: "instagramUrl",
      label: "اینستاگرام",
      icon:
        '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" stroke-width="1.3"/><circle cx="10" cy="10" r="3" stroke="currentColor" stroke-width="1.3"/><circle cx="14.5" cy="5.5" r="0.75" fill="currentColor"/></svg>',
    },
    {
      key: "linkedinUrl",
      label: "لینکدین",
      icon:
        '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="3" width="14" height="14" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M7 9V14M7 7V7.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M11 14V11.5C11 10.1 12.5 9.5 13.5 10.5C14.2 11.2 14 14 14 14" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
    },
    {
      key: "telegramUrl",
      label: "تلگرام",
      icon:
        '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10L16 5L13 15L10 12L7 14L8 11L13 8" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
    },
  ];

  var items = platforms
    .filter(function (platform) {
      return SITE_CONFIG[platform.key];
    })
    .map(function (platform) {
      return (
        '<li><a href="' +
        SITE_CONFIG[platform.key] +
        '" class="site-footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="' +
        platform.label +
        '">' +
        platform.icon +
        "<span>" +
        platform.label +
        "</span>" +
        '<span class="sr-only"> (باز شدن در تب جدید)</span>' +
        "</a></li>"
      );
    })
    .join("");

  if (!items) return "";

  return (
    '<ul class="site-footer__social" role="list" aria-label="شبکه‌های اجتماعی">' +
    items +
    "</ul>"
  );
}
