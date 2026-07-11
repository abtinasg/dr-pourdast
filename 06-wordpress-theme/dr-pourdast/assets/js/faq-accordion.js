/**
 * Accessible FAQ accordion — one item open at a time.
 */
(function () {
  "use strict";

  var DESKTOP_QUERY = "(min-width: 1024px)";

  function openItem(item) {
    var trigger = item.querySelector(".faq-item__trigger");
    var panel = item.querySelector(".faq-item__panel");

    item.classList.add("faq-item--open");
    trigger.setAttribute("aria-expanded", "true");
    panel.removeAttribute("hidden");
  }

  function closeItem(item) {
    var trigger = item.querySelector(".faq-item__trigger");
    var panel = item.querySelector(".faq-item__panel");

    item.classList.remove("faq-item--open");
    trigger.setAttribute("aria-expanded", "false");
    panel.setAttribute("hidden", "");
  }

  function closeAllItems(accordion) {
    accordion.querySelectorAll("[data-faq-item]").forEach(closeItem);
  }

  function initAccordion(accordion) {
    var items = accordion.querySelectorAll("[data-faq-item]");

    items.forEach(function (item) {
      var trigger = item.querySelector(".faq-item__trigger");

      trigger.addEventListener("click", function () {
        var isOpen = item.classList.contains("faq-item--open");

        if (isOpen) {
          closeItem(item);
          return;
        }

        closeAllItems(accordion);
        openItem(item);
      });
    });

    window
      .matchMedia(DESKTOP_QUERY)
      .addEventListener("change", function (event) {
        var hasOpen = accordion.querySelector(".faq-item--open");

        if (event.matches && !hasOpen && items[0]) {
          closeAllItems(accordion);
          openItem(items[0]);
        }

        if (!event.matches && hasOpen) {
          closeAllItems(accordion);
        }
      });
  }

  function init() {
    document.querySelectorAll("[data-faq-accordion]").forEach(initAccordion);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
