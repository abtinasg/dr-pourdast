/**
 * Initializes appointment links in static HTML.
 */
(function () {
  "use strict";

  if (typeof applyAppointmentLink === "undefined") return;

  document
    .querySelectorAll("[data-appointment-link]")
    .forEach(function (el) {
      applyAppointmentLink(el);
    });
})();
