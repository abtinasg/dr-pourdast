/**
 * Renders the services / procedures section from SERVICES_SECTION data.
 */
(function () {
  "use strict";

  var mount = document.getElementById("services-mount");
  if (!mount || typeof SERVICES_SECTION === "undefined") return;
  if (typeof renderProcedureGroups === "undefined") return;

  var data = SERVICES_SECTION;
  var titleId = "services-title";

  mount.outerHTML =
    '<section class="services-section section" id="' +
    data.id +
    '" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<header class="services-section__header">' +
    '<p class="services-section__eyebrow">' +
    data.eyebrow +
    "</p>" +
    '<h2 class="services-section__title" id="' +
    titleId +
    '">' +
    data.title +
    "</h2>" +
    '<p class="services-section__subtitle">' +
    data.subtitle +
    "</p>" +
    '<span class="services-section__divider" aria-hidden="true"></span>' +
    "</header>" +
    renderProcedureGroups(data.groups) +
    "</div>" +
    "</section>";
})();
