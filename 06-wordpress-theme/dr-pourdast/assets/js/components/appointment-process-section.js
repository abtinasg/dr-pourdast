/**
 * Renders the appointment process section from APPOINTMENT_PROCESS data.
 */
(function () {
  "use strict";

  var mount = document.getElementById("appointment-process-mount");
  if (!mount || typeof APPOINTMENT_PROCESS === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = APPOINTMENT_PROCESS;
  var titleId = "appointment-process-title";

  var stepsHtml = data.steps
    .map(function (step, index) {
      return (
        '<li class="process-step">' +
        '<span class="process-step__number" aria-hidden="true">' +
        (index + 1) +
        "</span>" +
        '<span class="process-step__icon">' +
        step.icon +
        "</span>" +
        '<h3 class="process-step__title">' +
        step.title +
        "</h3>" +
        '<p class="process-step__description">' +
        step.description +
        "</p>" +
        "</li>"
      );
    })
    .join("");

  mount.outerHTML =
    '<section class="appointment-process section" id="' +
    data.id +
    '" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<header class="section-header section-header--centered">' +
    '<p class="section-header__eyebrow">' +
    data.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    data.title +
    "</h2>" +
    '<p class="section-header__subtitle">' +
    data.subtitle +
    "</p>" +
    "</header>" +
    '<ol class="process-steps" aria-label="مراحل دریافت نوبت">' +
    stepsHtml +
    "</ol>" +
    '<div class="appointment-process__actions">' +
    '<div class="btn-group">' +
    renderAppointmentLink({
      text: data.ctas.primary.text,
      source: data.ctas.primary.source,
      provider: "axon",
      variant: "primary",
      showIcon: true,
    }) +
    "</div>" +
    renderAxonAltLink(data.ctas.primary.source) +
    "</div>" +
    "</div>" +
    "</section>";
})();
