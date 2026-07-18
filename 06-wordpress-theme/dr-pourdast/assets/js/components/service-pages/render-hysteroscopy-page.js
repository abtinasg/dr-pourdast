/**
 * Renders the hysteroscopy service page.
 */
(function () {
  "use strict";

  var mount = document.getElementById("service-page-mount");
  if (!mount || typeof HYSTEROSCOPY_PAGE === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = HYSTEROSCOPY_PAGE;

  mount.outerHTML =
    renderServiceBreadcrumb(data.breadcrumb) +
    renderServiceHero(data.hero) +
    renderServicePageNav(data.pageNav) +
    renderEditorialTwoColumn(data.whatIs) +
    renderMethodComparison(data.methodComparison) +
    renderEditorialListSection(data.applications, "service-symptom-list") +
    renderEditorialListSection(data.symptoms, "service-eval-list") +
    renderServiceProcess(data.evaluation) +
    renderProcedurePanels(data.procedureTypes) +
    renderBenefitsLimitations(data.benefitsLimitations) +
    renderServiceDoctorSection(data.doctor) +
    renderPreparationSection(data.preparation) +
    renderRelatedGuides(data.relatedGuides) +
    renderServiceFaq(data.faqs) +
    renderRelatedServices(data.relatedServices) +
    '<div class="container service-review-wrap">' +
    renderMedicalReview(data.medicalReview) +
    "</div>" +
    renderServiceAppointmentCta(data.finalCta);
})();
