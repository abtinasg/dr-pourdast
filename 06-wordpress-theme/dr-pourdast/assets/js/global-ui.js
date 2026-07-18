/**
 * Global UI — language bar, floating actions, scroll reveal, header scroll.
 */
document.addEventListener("DOMContentLoaded", function () {
  initLanguageBar();
  initFloatingActions();
  initChatbot();
  initHeaderScroll();

  requestAnimationFrame(function () {
    requestAnimationFrame(initScrollReveal);
  });
});

function initHeaderScroll() {
  var header = document.querySelector(".site-header");
  if (!header) return;

  var onScroll = function () {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initScrollReveal() {
  var REVEAL_SELECTORS = [
    ".services-section__header",
    ".procedure-group__grid > li",
    ".service-card",
    ".doctor-intro__visual",
    ".doctor-intro__content",
    ".process-step",
    ".testimonial-card",
    ".faq-section__header",
    ".faq-accordion",
    ".final-cta__card",
    ".section-header",
    ".section > .container > header",
  ].join(",");

  var STAGGER_PARENTS =
    ".procedure-group__grid, .process-steps, .testimonials__layout, .testimonials__secondary, .services-grid";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function applyRevealVariant(node) {
    if (node.matches(".doctor-intro__visual")) {
      node.classList.add("reveal--from-start");
    } else if (node.matches(".doctor-intro__content")) {
      node.classList.add("reveal--from-end");
    } else if (node.matches(".final-cta__card, .faq-accordion")) {
      node.classList.add("reveal--scale");
    } else if (
      node.matches(
        ".services-section__header, .section-header, .faq-section__header"
      )
    ) {
      node.classList.add("reveal--fade");
    }
  }

  function markRevealElements(root) {
    var scope = root || document;
    var nodes = scope.querySelectorAll(REVEAL_SELECTORS);

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.classList.contains("reveal") || node.closest(".hero")) continue;
      node.classList.add("reveal");
      applyRevealVariant(node);
    }

    var staggerParents = scope.querySelectorAll(STAGGER_PARENTS);
    for (var j = 0; j < staggerParents.length; j++) {
      staggerParents[j].classList.add("reveal-stagger");
    }
  }

  markRevealElements(document);

  var observer = new IntersectionObserver(
    function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    {
      root: null,
      rootMargin: "0px 0px -5% 0px",
      threshold: 0.08,
    }
  );

  function observeAll() {
    var items = document.querySelectorAll(".reveal:not(.is-visible)");
    for (var i = 0; i < items.length; i++) {
      observer.observe(items[i]);
    }
  }

  observeAll();

  var mutationTarget = document.getElementById("main-content") || document.body;
  var mutationObserver = new MutationObserver(function (mutations) {
    var shouldRefresh = false;

    for (var i = 0; i < mutations.length; i++) {
      if (mutations[i].addedNodes.length) {
        shouldRefresh = true;
        break;
      }
    }

    if (!shouldRefresh) return;

    markRevealElements(mutationTarget);
    observeAll();
  });

  mutationObserver.observe(mutationTarget, { childList: true, subtree: true });
}
