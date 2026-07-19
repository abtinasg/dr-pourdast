/**
 * Renders the contact and appointment page.
 */
(function () {
  "use strict";

  function renderContactPage() {
    var mount = document.getElementById("contact-page-mount");
    if (!mount) return;

    if (typeof CONTACT_PAGE === "undefined") {
      mount.innerHTML =
        '<div class="container"><p class="contact-info__empty">خطا در بارگذاری اطلاعات تماس. لطفاً صفحه را رفرش کنید.</p></div>';
      return;
    }

    if (
      typeof renderServiceBreadcrumb !== "function" ||
      typeof renderContactHero !== "function" ||
      typeof renderClinicInformation !== "function" ||
      typeof renderClinicMap !== "function" ||
      typeof renderOutOfTownPatients !== "function" ||
      typeof renderWhatToBring !== "function" ||
      typeof renderServiceFaq !== "function" ||
      typeof renderPrivacyNote !== "function" ||
      typeof renderContactFinalCta !== "function"
    ) {
      mount.innerHTML =
        '<div class="container"><p class="contact-info__empty">خطا در بارگذاری صفحه تماس. لطفاً صفحه را رفرش کنید.</p></div>';
      return;
    }

    var data = CONTACT_PAGE;

    try {
      mount.outerHTML =
        renderServiceBreadcrumb(data.breadcrumb) +
        renderContactHero(data.hero) +
        renderClinicInformation(data.clinic) +
        renderClinicMap(data.map) +
        renderOutOfTownPatients(data.outOfTown) +
        renderWhatToBring(data.whatToBring) +
        renderServiceFaq(data.faqs) +
        renderPrivacyNote(data.privacyNote) +
        renderContactFinalCta(data.finalCta);
    } catch (error) {
      console.error("Contact page render failed:", error);
      mount.innerHTML =
        '<div class="container"><p class="contact-info__empty">خطا در نمایش صفحه تماس. لطفاً صفحه را رفرش کنید.</p></div>';
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderContactPage);
  } else {
    renderContactPage();
  }
})();
