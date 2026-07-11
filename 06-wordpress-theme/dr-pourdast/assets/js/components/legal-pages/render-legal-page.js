/**
 * Renders privacy or terms legal page from LEGAL_PAGE data.
 */
(function () {
  "use strict";

  var mount = document.getElementById("legal-page-mount");
  if (!mount || typeof LEGAL_PAGE === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;

  var data = LEGAL_PAGE;

  mount.outerHTML =
    renderServiceBreadcrumb(data.breadcrumb) +
    renderLegalHero(data.hero) +
    renderLegalSections(data.sections) +
    renderLegalNote(data.note) +
    renderLegalRelatedLink(data.relatedLink);
})();
