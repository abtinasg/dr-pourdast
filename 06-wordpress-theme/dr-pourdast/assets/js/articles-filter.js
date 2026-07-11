/**
 * Client-side filtering, search, and pagination for articles hub.
 */
(function () {
  "use strict";

  var grid = document.getElementById("articles-grid");
  if (!grid || typeof ARTICLES_PAGE === "undefined") return;

  var pagination = document.getElementById("articles-pagination");
  var emptySearch = document.getElementById("articles-empty-search");
  var emptyCategory = document.getElementById("articles-empty-category");
  var searchInput = document.getElementById("articles-search-input");
  var searchClear = document.getElementById("articles-search-clear");
  var filterTabs = document.querySelectorAll(".articles-filter__tab");

  var perPage = parseInt(grid.getAttribute("data-per-page"), 10) || 9;
  var allCards = Array.prototype.slice.call(
    grid.querySelectorAll(".article-card")
  );

  if (allCards.length === 0) return;

  var currentCategory = "all";
  var currentQuery = "";
  var currentPage = 1;

  /**
   * Returns cards matching current filter and search.
   * @returns {HTMLElement[]}
   */
  function getFilteredCards() {
    return allCards.filter(function (card) {
      var categoryMatch =
        currentCategory === "all" ||
        card.getAttribute("data-category") === currentCategory;

      if (!categoryMatch) return false;

      if (!currentQuery) return true;

      var title = card.querySelector(".article-card__title");
      var excerpt = card.querySelector(".article-card__excerpt");
      var searchable =
        normalizeArticleSearchText(title.textContent) +
        " " +
        normalizeArticleSearchText(excerpt.textContent);

      return searchable.indexOf(currentQuery) !== -1;
    });
  }

  /**
   * Updates empty state visibility.
   * @param {HTMLElement[]} filtered
   */
  function updateEmptyStates(filtered) {
    var hasQuery = currentQuery.length > 0;
    var hasCategoryFilter = currentCategory !== "all";
    var showSearchEmpty = filtered.length === 0 && hasQuery;
    var showCategoryEmpty =
      filtered.length === 0 && !hasQuery && hasCategoryFilter;

    if (emptySearch) {
      emptySearch.hidden = !showSearchEmpty;
    }

    if (emptyCategory) {
      emptyCategory.hidden = !showCategoryEmpty;
    }

    grid.hidden = filtered.length === 0;
  }

  /**
   * Renders pagination controls.
   * @param {number} totalPages
   */
  function renderPagination(totalPages) {
    if (!pagination) return;

    if (totalPages <= 1) {
      pagination.innerHTML = "";
      pagination.hidden = true;
      return;
    }

    pagination.hidden = false;

    var html = '<ul class="articles-pagination__list" role="list">';

    html +=
      '<li><button type="button" class="articles-pagination__btn articles-pagination__btn--prev"' +
      (currentPage === 1 ? " disabled" : "") +
      ' aria-label="صفحه قبل">' +
      '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      "</button></li>";

    for (var i = 1; i <= totalPages; i++) {
      var isActive = i === currentPage ? " articles-pagination__btn--active" : "";
      var ariaCurrent = i === currentPage ? ' aria-current="page"' : "";

      html +=
        '<li><button type="button" class="articles-pagination__btn' +
        isActive +
        '" data-page="' +
        i +
        '"' +
        ariaCurrent +
        ">" +
        i +
        "</button></li>";
    }

    html +=
      '<li><button type="button" class="articles-pagination__btn articles-pagination__btn--next"' +
      (currentPage === totalPages ? " disabled" : "") +
      ' aria-label="صفحه بعد">' +
      '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      "</button></li>";

    html += "</ul>";
    pagination.innerHTML = html;

    pagination.querySelectorAll("[data-page]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentPage = parseInt(btn.getAttribute("data-page"), 10);
        applyFilters();
      });
    });

    var prevBtn = pagination.querySelector(".articles-pagination__btn--prev");
    var nextBtn = pagination.querySelector(".articles-pagination__btn--next");

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
          currentPage--;
          applyFilters();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        if (currentPage < totalPages) {
          currentPage++;
          applyFilters();
        }
      });
    }
  }

  /**
   * Applies filters and updates visible cards.
   */
  function applyFilters() {
    var filtered = getFilteredCards();
    var totalPages = Math.max(1, Math.ceil(filtered.length / perPage));

    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    var start = (currentPage - 1) * perPage;
    var end = start + perPage;
    var visibleSlugs = {};

    filtered.slice(start, end).forEach(function (card) {
      visibleSlugs[card.getAttribute("data-slug")] = true;
    });

    allCards.forEach(function (card) {
      var slug = card.getAttribute("data-slug");
      card.hidden = !visibleSlugs[slug];
    });

    updateEmptyStates(filtered);
    renderPagination(totalPages);
  }

  function selectCategory(category) {
    currentCategory = category;
    currentPage = 1;

    filterTabs.forEach(function (tab) {
      var isActive = tab.getAttribute("data-category") === category;
      tab.classList.toggle("articles-filter__tab--active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    applyFilters();
  }

  filterTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      selectCategory(tab.getAttribute("data-category"));
    });
  });

  if (searchInput) {
    var searchTimeout;

    searchInput.addEventListener("input", function () {
      if (searchClear) {
        searchClear.hidden = searchInput.value.length === 0;
      }

      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(function () {
        currentQuery = normalizeArticleSearchText(searchInput.value);
        currentPage = 1;
        applyFilters();
      }, 200);
    });
  }

  if (searchClear && searchInput) {
    searchClear.addEventListener("click", function () {
      searchInput.value = "";
      searchClear.hidden = true;
      currentQuery = "";
      currentPage = 1;
      searchInput.focus();
      applyFilters();
    });
  }

  if (emptySearch) {
    var searchAction = emptySearch.querySelector("[data-empty-action]");
    if (searchAction) {
      searchAction.addEventListener("click", function () {
        if (searchInput) {
          searchInput.value = "";
        }
        if (searchClear) {
          searchClear.hidden = true;
        }
        currentQuery = "";
        currentPage = 1;
        applyFilters();
      });
    }
  }

  if (emptyCategory) {
    var categoryAction = emptyCategory.querySelector("[data-empty-action]");
    if (categoryAction) {
      categoryAction.addEventListener("click", function () {
        selectCategory("all");
      });
    }
  }

  applyFilters();
})();
