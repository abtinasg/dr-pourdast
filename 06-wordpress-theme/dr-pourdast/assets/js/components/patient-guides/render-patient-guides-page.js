/**
 * Renders the patient guides hub page.
 */
(function () {
  "use strict";

  var mount = document.getElementById("patient-guides-mount");
  if (!mount || typeof PATIENT_GUIDES_PAGE === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = PATIENT_GUIDES_PAGE;

  mount.outerHTML =
    renderServiceBreadcrumb(data.breadcrumb) +
    renderPatientGuidesHero(data.hero) +
    renderGuidesGrid(data.guides) +
    renderHowToUseGuides(data.howToUse) +
    renderMedicalDisclaimer(data.disclaimer) +
    renderGuidesRelatedServices(data.relatedServices) +
    renderServiceAppointmentCta(data.finalCta);
})();
