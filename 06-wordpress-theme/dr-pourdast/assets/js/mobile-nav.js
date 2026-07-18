/**
 * Mobile navigation — minimal interaction layer.
 * Handles open/close, Escape key, outside click, and scroll lock.
 */
(function () {
  "use strict";

  var toggle = document.getElementById("menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  var overlay = document.getElementById("mobile-nav-overlay");
  var panel = document.getElementById("mobile-nav-panel");
  var focusableSelector =
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  if (!toggle || !mobileNav) return;

  function getFocusableElements() {
    return Array.prototype.slice.call(
      panel.querySelectorAll(focusableSelector)
    );
  }

  function openMenu() {
    mobileNav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute(
      "aria-label",
      uiString("closeMenu", "بستن منو")
    );
    mobileNav.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-menu-open");

    var focusable = getFocusableElements();
    if (focusable.length) {
      focusable[0].focus();
    }
  }

  function closeMenu() {
    mobileNav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute(
      "aria-label",
      uiString("openMenu", "باز کردن منو")
    );
    mobileNav.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-menu-open");
    toggle.focus();
  }

  function isOpen() {
    return mobileNav.classList.contains("is-open");
  }

  toggle.addEventListener("click", function () {
    if (isOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen()) {
      closeMenu();
    }

    if (event.key === "Tab" && isOpen()) {
      var focusable = getFocusableElements();
      if (!focusable.length) return;

      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024 && isOpen()) {
      closeMenu();
    }
  });

  mobileNav.querySelectorAll(".mobile-nav__link").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
})();
