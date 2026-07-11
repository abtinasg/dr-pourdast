/**
 * Renders the gynecologic laparoscopy service page.
 */
(function () {
  "use strict";

  var mount = document.getElementById("service-page-mount");
  if (!mount || typeof LAPAROSCOPY_PAGE === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = LAPAROSCOPY_PAGE;

  mount.outerHTML =
    renderServiceBreadcrumb(data.breadcrumb) +
    renderServiceHero(data.hero) +
    renderEditorialTwoColumn(data.whatIs) +
    renderEditorialListSection(data.applications, "service-symptom-list") +
    renderEditorialListSection(data.whenConsidered, "service-eval-list") +
    renderServiceProcess(data.evaluation) +
    renderBenefitsLimitations(data.benefitsLimitations) +
    renderLinkedConditions(data.linkedConditions) +
    renderServiceDoctorSection(data.doctor) +
    renderPreparationSection(data.preparation) +
    renderRelatedGuides(data.relatedGuides) +
    renderServiceFaq(data.faqs) +
    renderResearchSection(data.research) +
    renderRelatedServices(data.relatedServices) +
    renderServiceAppointmentCta(data.finalCta);
})();
