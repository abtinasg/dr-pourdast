/**
 * Client interactions for article pages: share actions and table of contents.
 */
(function () {
  "use strict";

  var copyButton = document.getElementById("article-copy-link");
  var shareButton = document.getElementById("article-native-share");
  var shareStatus = document.getElementById("article-share-status");
  var tocToggle = document.getElementById("article-toc-toggle");
  var tocPanel = document.getElementById("article-toc-panel");

  if (shareButton && navigator.share) {
    shareButton.hidden = false;
  }

  if (copyButton) {
    copyButton.addEventListener("click", function () {
      var url = copyButton.getAttribute("data-url") || window.location.href;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () {
          if (shareStatus) {
            shareStatus.textContent = "لینک مقاله کپی شد.";
          }
        });
        return;
      }

      var input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();

      try {
        document.execCommand("copy");
        if (shareStatus) {
          shareStatus.textContent = "لینک مقاله کپی شد.";
        }
      } catch (error) {
        if (shareStatus) {
          shareStatus.textContent = "کپی لینک در این مرورگر پشتیبانی نمی‌شود.";
        }
      }

      document.body.removeChild(input);
    });
  }

  if (shareButton && navigator.share) {
    shareButton.addEventListener("click", function () {
      var url = shareButton.getAttribute("data-url") || window.location.href;
      var title = document.title;

      navigator
        .share({
          title: title,
          url: url,
        })
        .catch(function () {
          /* user cancelled or share failed */
        });
    });
  }

  if (tocToggle && tocPanel) {
    tocToggle.addEventListener("click", function () {
      var isExpanded = tocToggle.getAttribute("aria-expanded") === "true";
      tocToggle.setAttribute("aria-expanded", isExpanded ? "false" : "true");
      tocPanel.hidden = isExpanded;
    });

    var tocLinks = tocPanel.querySelectorAll(".article-toc__link");

    tocLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }

        var targetId = link.getAttribute("href");

        if (!targetId || targetId.charAt(0) !== "#") return;

        var target = document.querySelector(targetId);

        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  var desktopTocLinks = document.querySelectorAll(
    ".article-toc__desktop .article-toc__link"
  );

  desktopTocLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      var targetId = link.getAttribute("href");

      if (!targetId || targetId.charAt(0) !== "#") return;

      var target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
