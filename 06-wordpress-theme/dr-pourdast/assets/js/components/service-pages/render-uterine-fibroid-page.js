/**
 * Renders the uterine fibroid service page.
 */
(function () {
  "use strict";

  var mount = document.getElementById("service-page-mount");
  if (!mount || typeof UTERINE_FIBROID_PAGE === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = UTERINE_FIBROID_PAGE;

  mount.outerHTML =
    renderServiceBreadcrumb(data.breadcrumb) +
    renderServiceHero(data.hero) +
    renderEditorialTwoColumn(data.whatIs) +
    renderCategoryOverview(data.categories) +
    renderEditorialListSection(data.symptoms, "service-symptom-list") +
    renderEditorialListSection(data.whenEvaluate, "service-eval-list") +
    renderServiceProcess(data.evaluation) +
    renderBenefitsLimitations(data.treatmentPathways) +
    renderEditorialSection(data.laparoscopicSurgery) +
    renderEditorialSection(data.endometrioma) +
    renderServiceDoctorSection(data.doctor) +
    renderPreparationSection(data.preparation) +
    renderRelatedGuides(data.relatedGuides) +
    renderServiceFaq(data.faqs) +
    renderRelatedServices(data.relatedServices) +
    renderServiceAppointmentCta(data.finalCta);
})();
