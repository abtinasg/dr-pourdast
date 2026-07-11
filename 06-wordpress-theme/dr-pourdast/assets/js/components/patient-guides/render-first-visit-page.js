/**
 * Renders the first visit preparation guide page.
 */
(function () {
  "use strict";

  var mount = document.getElementById("guide-page-mount");
  if (!mount || typeof FIRST_VISIT_GUIDE === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = FIRST_VISIT_GUIDE;

  mount.outerHTML =
    renderServiceBreadcrumb(data.breadcrumb) +
    renderGuideHero(data.hero) +
    renderHowToUseGuides(data.whyPreparation) +
    renderVisitChecklist(data.checklist) +
    renderGuideListSection(data.prepareInfo) +
    renderGuideSteps(data.organizing) +
    renderGuideEvaluation(data.evaluation) +
    renderSuggestedQuestions(data.questions) +
    renderCommonMistakes(data.mistakes) +
    renderGuideAppointment(data.appointment) +
    renderServiceFaq(data.faqs) +
    renderRelatedServices(data.relatedGuides) +
    renderMedicalDisclaimer(data.disclaimer) +
    renderServiceAppointmentCta(data.finalCta);
})();
