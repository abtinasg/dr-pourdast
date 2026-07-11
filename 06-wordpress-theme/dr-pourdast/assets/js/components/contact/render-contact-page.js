/**
 * Renders the contact and appointment page.
 */
(function () {
  "use strict";

  var mount = document.getElementById("contact-page-mount");
  if (!mount || typeof CONTACT_PAGE === "undefined") return;
  if (typeof renderServiceBreadcrumb === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = CONTACT_PAGE;

  mount.outerHTML =
    renderServiceBreadcrumb(data.breadcrumb) +
    renderContactHero(data.hero) +
    renderAppointmentBookingBlock(data.booking) +
    renderClinicInformation(data.clinic) +
    renderClinicMap(data.map) +
    renderOutOfTownPatients(data.outOfTown) +
    renderWhatToBring(data.whatToBring) +
    renderServiceFaq(data.faqs) +
    renderPrivacyNote(data.privacyNote) +
    renderContactFinalCta(data.finalCta);
})();
