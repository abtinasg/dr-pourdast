/**
 * Renders the About Doctor page.
 */
(function () {
  "use strict";

  var mount = document.getElementById("about-page-mount");
  if (!mount || typeof DOCTOR_PROFILE === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = DOCTOR_PROFILE;

  mount.outerHTML =
    renderServiceBreadcrumb(data.breadcrumb) +
    renderAboutHero(data.hero, data.credentials) +
    renderAboutIntroduction(data.introduction) +
    renderAboutCredentials(data.credentials) +
    renderTreatmentFocus(data.treatmentFocus) +
    renderTreatmentApproach(data.treatmentApproach) +
    renderAboutResearch(data.research) +
    renderPreparationSection(data.consultation) +
    renderServiceAppointmentCta(data.finalCta);
})();
