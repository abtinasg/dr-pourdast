/**
 * Renders the gynecologic consultation service page.
 */
(function () {
  "use strict";

  var mount = document.getElementById("service-page-mount");
  if (!mount || typeof GYNECOLOGIC_CONSULTATION_PAGE === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = GYNECOLOGIC_CONSULTATION_PAGE;

  mount.outerHTML =
    renderServiceBreadcrumb(data.breadcrumb) +
    renderServiceHero(data.hero) +
    renderServicePageNav(data.pageNav) +
    renderEditorialTwoColumn(data.whatIs) +
    renderCategoryOverview(data.conditions) +
    renderEditorialListSection(data.whenEvaluate, "service-eval-list") +
    renderServiceProcess(data.evaluation) +
    renderBenefitsLimitations(data.treatmentApproach) +
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
