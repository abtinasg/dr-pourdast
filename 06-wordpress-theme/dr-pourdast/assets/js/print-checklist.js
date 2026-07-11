/**
 * Print checklist handler for guide pages.
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var printBtn = document.getElementById("print-checklist-btn");
    if (!printBtn) return;

    printBtn.addEventListener("click", function () {
      window.print();
    });
  });
})();
