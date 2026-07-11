/**
 * Generic patient guide page renderer.
 * Each guide data file defines var GUIDE_PAGE = { ... }.
 */
(function () {
  "use strict";

  var mount = document.getElementById("guide-page-mount");
  if (!mount || typeof GUIDE_PAGE === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = GUIDE_PAGE;
  var html = renderServiceBreadcrumb(data.breadcrumb) + renderGuideHero(data.hero);

  if (data.whyPreparation) html += renderHowToUseGuides(data.whyPreparation);
  if (data.prose) html += renderGuideProse(data.prose);
  if (data.checklist) html += renderVisitChecklist(data.checklist);
  if (data.prepareInfo) html += renderGuideListSection(data.prepareInfo);
  if (data.organizing) html += renderGuideSteps(data.organizing);
  if (data.evaluation) html += renderGuideEvaluation(data.evaluation);
  if (data.questions) html += renderSuggestedQuestions(data.questions);
  if (data.mistakes) html += renderCommonMistakes(data.mistakes);
  if (data.appointment) html += renderGuideAppointment(data.appointment);
  if (data.faqs) html += renderServiceFaq(data.faqs);
  if (data.relatedGuides) html += renderRelatedServices(data.relatedGuides);
  if (data.disclaimer) html += renderMedicalDisclaimer(data.disclaimer);
  if (data.finalCta) html += renderServiceAppointmentCta(data.finalCta);

  mount.outerHTML = html;
})();
