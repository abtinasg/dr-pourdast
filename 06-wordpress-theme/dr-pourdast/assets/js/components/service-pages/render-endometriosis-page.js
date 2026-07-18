/**
 * Renders the complete endometriosis service page.
 */
(function () {
  "use strict";

  var mount = document.getElementById("service-page-mount");
  if (!mount || typeof ENDOMETRIOSIS_PAGE === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = ENDOMETRIOSIS_PAGE;

  mount.outerHTML =
    renderServiceBreadcrumb(data.breadcrumb) +
    renderServiceHero(data.hero) +
    renderServicePageNav(data.pageNav) +
    renderEditorialSection(data.whatIs) +
    renderEditorialListSection(data.symptoms, "service-symptom-list") +
    renderEditorialListSection(data.whenToSeek, "service-eval-list") +
    renderServiceProcess(data.diagnosis) +
    renderTreatmentOptions(data.treatment) +
    renderEditorialPoints(data.whySpecialized) +
    renderServiceDoctorSection(data.doctor) +
    renderResearchSection(data.research) +
    renderPreparationSection(data.preparation) +
    renderRelatedGuides(data.relatedGuides) +
    renderServiceFaq(data.faqs) +
    renderRelatedServices(data.relatedServices) +
    '<div class="container service-review-wrap">' +
    renderMedicalReview(data.medicalReview) +
    "</div>" +
    renderServiceAppointmentCta(data.finalCta);
})();
