/**
 * Services navigation dropdown — desktop flyout + mobile expandable panel.
 */
(function () {
  "use strict";

  var NAV_SERVICES_BY_LOCALE = {
    fa: {
      allLabel: "همه خدمات",
      allHref: "/services",
      items: [
        { title: "اندومتریوز", href: "/services/endometriosis" },
        { title: "کیست تخمدان", href: "/services/ovarian-cyst" },
        { title: "فیبروم رحم", href: "/services/uterine-fibroid" },
        { title: "لاپاراسکوپی زنان", href: "/services/gynecologic-laparoscopy" },
        { title: "هیستروسکوپی", href: "/services/hysteroscopy" },
        { title: "چسبندگی لگنی", href: "/services/pelvic-adhesion" },
      ],
    },
    en: {
      allLabel: "All services",
      allHref: "/en/services",
      items: [
        { title: "Endometriosis", href: "/en/services/endometriosis" },
        { title: "Ovarian Cyst", href: "/en/services/ovarian-cyst" },
        { title: "Uterine Fibroid", href: "/en/services/uterine-fibroid" },
        {
          title: "Gynecologic Laparoscopy",
          href: "/en/services/gynecologic-laparoscopy",
        },
        { title: "Hysteroscopy", href: "/en/services/hysteroscopy" },
        { title: "Pelvic Adhesion", href: "/en/services/pelvic-adhesion" },
      ],
    },
    ar: {
      allLabel: "جميع الخدمات",
      allHref: "/ar/services",
      items: [
        { title: "بطانة الرحم المهاجرة", href: "/ar/services/endometriosis" },
        { title: "كيس المبيض", href: "/ar/services/ovarian-cyst" },
        { title: "الورم الليفي الرحمي", href: "/ar/services/uterine-fibroid" },
        {
          title: "منظار البطن لأمراض النساء",
          href: "/ar/services/gynecologic-laparoscopy",
        },
        { title: "منظار الرحم", href: "/ar/services/hysteroscopy" },
        { title: "التصاقات الحوض", href: "/ar/services/pelvic-adhesion" },
      ],
    },
  };

  function getLocale() {
    var lang = (document.documentElement.lang || "fa").toLowerCase();
    return lang.split("-")[0];
  }

  function getNavServices() {
    var locale = getLocale();
    return NAV_SERVICES_BY_LOCALE[locale] || NAV_SERVICES_BY_LOCALE.fa;
  }

  function renderDropdownMenu(config, id) {
    var items = config.items
      .map(function (item) {
        return (
          '<li class="nav-dropdown__item" role="none">' +
          '<a href="' +
          item.href +
          '" class="nav-dropdown__link" role="menuitem">' +
          item.title +
          "</a></li>"
        );
      })
      .join("");

    return (
      '<ul class="nav-dropdown" id="' +
      id +
      '" role="menu" aria-label="' +
      config.allLabel +
      '">' +
      items +
      '<li class="nav-dropdown__item nav-dropdown__item--all" role="none">' +
      '<a href="' +
      config.allHref +
      '" class="nav-dropdown__link nav-dropdown__link--all" role="menuitem">' +
      config.allLabel +
      "</a></li>" +
      "</ul>"
    );
  }

  function initDesktopDropdown(config) {
    var trigger = document.querySelector(".nav-list__link--has-dropdown");
    if (!trigger) return;

    var listItem = trigger.closest("li");
    if (!listItem || listItem.querySelector(".nav-dropdown")) return;

    listItem.classList.add("nav-list__item--dropdown");
    trigger.setAttribute("aria-haspopup", "true");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", "nav-services-menu");

    listItem.insertAdjacentHTML(
      "beforeend",
      renderDropdownMenu(config, "nav-services-menu")
    );

    var menu = listItem.querySelector(".nav-dropdown");

    listItem.addEventListener("mouseenter", function () {
      if (!window.matchMedia("(min-width: 1024px)").matches) return;
      trigger.setAttribute("aria-expanded", "true");
    });

    listItem.addEventListener("mouseleave", function () {
      if (!window.matchMedia("(min-width: 1024px)").matches) return;
      trigger.setAttribute("aria-expanded", "false");
    });

    listItem.addEventListener("focusin", function () {
      trigger.setAttribute("aria-expanded", "true");
    });

    listItem.addEventListener("focusout", function (event) {
      if (listItem.contains(event.relatedTarget)) return;
      trigger.setAttribute("aria-expanded", "false");
    });
  }

  function initMobileDropdown(config) {
    var trigger = document.querySelector(".mobile-nav__link--has-dropdown");
    if (!trigger) return;

    var listItem = trigger.closest("li");
    if (!listItem || listItem.querySelector(".mobile-nav__submenu")) return;

    listItem.classList.add("mobile-nav__item--dropdown");

    var submenuId = "mobile-nav-services-menu";
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", submenuId);

    var submenuItems = config.items
      .map(function (item) {
        return (
          '<li><a href="' +
          item.href +
          '" class="mobile-nav__sublink">' +
          item.title +
          "</a></li>"
        );
      })
      .join("");

    listItem.insertAdjacentHTML(
      "beforeend",
      '<ul class="mobile-nav__submenu" id="' +
        submenuId +
        '" hidden>' +
        submenuItems +
        '<li><a href="' +
        config.allHref +
        '" class="mobile-nav__sublink mobile-nav__sublink--all">' +
        config.allLabel +
        "</a></li></ul>"
    );

    var submenu = listItem.querySelector(".mobile-nav__submenu");

    trigger.addEventListener("click", function (event) {
      event.preventDefault();

      var isOpen = listItem.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      submenu.hidden = !isOpen;
    });
  }

  function initNavDropdown() {
    var config = getNavServices();
    initDesktopDropdown(config);
    initMobileDropdown(config);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavDropdown);
  } else {
    initNavDropdown();
  }
})();
