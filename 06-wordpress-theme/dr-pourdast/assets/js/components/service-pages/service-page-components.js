/**
 * Renders service page breadcrumb navigation.
 * @param {Array<{label: string, href: string}>} items
 * @returns {string}
 */
function renderServiceBreadcrumb(items) {
  var linksHtml = items
    .map(function (item, index) {
      var isLast = index === items.length - 1;
      if (isLast) {
        return (
          '<li class="breadcrumb__item breadcrumb__item--current" aria-current="page">' +
          item.label +
          "</li>"
        );
      }
      return (
        '<li class="breadcrumb__item">' +
        '<a href="' +
        item.href +
        '" class="breadcrumb__link">' +
        item.label +
        "</a></li>"
      );
    })
    .join(
      '<li class="breadcrumb__separator" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></li>'
    );

  return (
    '<nav class="breadcrumb" aria-label="مسیر صفحه">' +
    '<div class="container">' +
    '<ol class="breadcrumb__list" role="list">' +
    linksHtml +
    "</ol></div></nav>"
  );
}

/**
 * Renders service page hero section.
 * @param {Object} hero
 * @returns {string}
 */
function renderServiceHero(hero) {
  var trustHtml = hero.trust
    .map(function (item) {
      return (
        '<li class="service-hero__trust-item">' +
        '<svg class="service-hero__trust-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
        '<path d="M3 8L6 11L13 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg>" +
        item +
        "</li>"
      );
    })
    .join("");

  return (
    '<section class="service-hero section" aria-labelledby="service-hero-title">' +
    '<div class="container">' +
    '<div class="service-hero__inner">' +
    '<p class="service-hero__eyebrow">' +
    hero.eyebrow +
    "</p>" +
    '<h1 class="service-hero__title" id="service-hero-title">' +
    hero.title +
    "</h1>" +
    '<p class="service-hero__description">' +
    hero.description +
    "</p>" +
    '<div class="service-hero__actions">' +
    '<div class="btn-group">' +
    renderPrimaryCtaGroup({
      source: hero.primaryCta.source,
      doctoretoText: hero.primaryCta.text,
      showIcon: true,
      wrapInGroup: false,
    }) +
    "</div>" +
    renderAxonAltLink(hero.primaryCta.source) +
    "</div>" +
    "</div>" +
    '<ul class="service-hero__trust" role="list" aria-label="ویژگی‌های مراقبت">' +
    trustHtml +
    "</ul>" +
    "</div></div></section>"
  );
}

/**
 * Quick in-page navigation under the hero.
 * @param {Array<{label: string, href: string}>} [items]
 * @returns {string}
 */
function renderServicePageNav(items) {
  if (!items || items.length === 0) return "";

  var linksHtml = items
    .map(function (item, index) {
      return (
        (index > 0
          ? '<span class="service-page-nav__sep" aria-hidden="true">|</span>'
          : "") +
        '<a href="' +
        item.href +
        '" class="service-page-nav__link">' +
        item.label +
        "</a>"
      );
    })
    .join("");

  return (
    '<nav class="service-page-nav" aria-label="' +
    uiString("pageSections", "بخش‌های صفحه") +
    '">' +
    '<div class="container">' +
    '<div class="service-page-nav__inner">' +
    linksHtml +
    "</div></div></nav>"
  );
}

/**
 * Medical review attribution for service pages.
 * @param {Object} [review]
 * @param {string} review.text
 * @param {string} [review.dateLabel]
 * @returns {string}
 */
function renderMedicalReview(review) {
  if (!review || !review.text) return "";

  return (
    '<p class="service-medical-review">' +
    '<span class="service-medical-review__text">' +
    review.text +
    "</span>" +
    (review.dateLabel
      ? '<span class="service-medical-review__date">' +
        review.dateLabel +
        "</span>"
      : "") +
    "</p>"
  );
}

/**
 * Renders an optional video block for a service page.
 * @param {Object} [video]
 * @returns {string}
 */
function renderServiceVideo(video) {
  if (!video || !video.src) return "";

  var titleId = "service-video-title";
  var eyebrow = video.eyebrow || "";
  var title = video.title || "";
  var label = video.label || title || "Service video";
  var posterAttr = video.poster
    ? ' poster="' + video.poster + '"'
    : "";

  var headerHtml =
    eyebrow || title
      ? '<header class="section-header section-header--compact">' +
        (eyebrow
          ? '<p class="section-header__eyebrow">' + eyebrow + "</p>"
          : "") +
        (title
          ? '<h2 class="section-header__title" id="' +
            titleId +
            '">' +
            title +
            "</h2>"
          : "") +
        "</header>"
      : "";

  return (
    '<section class="service-section section service-section--video" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content service-section__content--wide">' +
    headerHtml +
    '<figure class="service-video">' +
    '<video class="service-video__player" controls playsinline preload="metadata"' +
    posterAttr +
    ">" +
    '<source src="' +
    video.src +
    '" type="video/mp4">' +
    "</video>" +
    '<figcaption class="sr-only">' +
    label +
    "</figcaption>" +
    "</figure>" +
    "</div></div></section>"
  );
}

/**
 * Renders an editorial content section with paragraphs.
 * @param {Object} section
 * @param {string} [section.id]
 * @returns {string}
 */
function renderEditorialSection(section) {
  var idAttr = section.id ? ' id="' + section.id + '"' : "";
  var titleId = section.id
    ? section.id + "-title"
    : "section-" + section.title.replace(/\s/g, "-").slice(0, 20);

  var paragraphsHtml = section.paragraphs
    .map(function (p) {
      return "<p>" + p + "</p>";
    })
    .join("");

  var linkHtml = section.link
    ? '<p class="service-guide-link">' +
      '<a href="' +
      section.link.href +
      '" class="service-guide-link__anchor">' +
      section.link.text +
      "</a></p>"
    : "";

  var proseClass = section.variant === "callout" ? "service-callout" : "service-prose";
  var sectionModifier =
    section.variant === "callout" ? " service-section--soft" : "";

  return (
    '<section class="service-section section' +
    sectionModifier +
    '"' +
    idAttr +
    ' aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<div class="' +
    proseClass +
    '">' +
    paragraphsHtml +
    linkHtml +
    "</div>" +
    "</div></div></section>"
  );
}

/**
 * Renders an editorial two-column section with optional info panel.
 * @param {Object} section
 * @returns {string}
 */
function renderEditorialTwoColumn(section) {
  var titleId = "section-" + section.eyebrow.replace(/\s/g, "-");

  var paragraphsHtml = section.paragraphs
    .map(function (p) {
      return "<p>" + p + "</p>";
    })
    .join("");

  var panelHtml = "";

  if (section.video && section.video.src) {
    var videoLabel = section.video.label || section.title || "Video";
    var posterAttr = section.video.poster
      ? ' poster="' + section.video.poster + '"'
      : "";

    panelHtml =
      '<figure class="service-video service-video--panel" style="width:13rem;max-width:13rem;aspect-ratio:4/5;border-radius:1rem;overflow:hidden">' +
      '<video class="service-video__player" controls playsinline preload="none"' +
      posterAttr +
      ' style="width:100%;height:100%;object-fit:cover;border-radius:1rem">' +
      '<source src="' +
      section.video.src +
      '" type="video/mp4">' +
      "</video>" +
      '<figcaption class="sr-only">' +
      videoLabel +
      "</figcaption>" +
      "</figure>";
  } else if (section.panel) {
    var panelPointsHtml = "";

    if (section.panel.points) {
      panelPointsHtml = section.panel.points
        .map(function (point) {
          return '<li class="service-info-panel__item">' + point + "</li>";
        })
        .join("");
      panelPointsHtml =
        '<ul class="service-info-panel__list" role="list">' +
        panelPointsHtml +
        "</ul>";
    }

    panelHtml =
      '<aside class="service-info-panel" aria-label="' +
      section.panel.title +
      '">' +
      '<p class="service-info-panel__title">' +
      section.panel.title +
      "</p>" +
      panelPointsHtml +
      (section.panel.text
        ? '<p class="service-info-panel__text">' + section.panel.text + "</p>"
        : "") +
      "</aside>";
  }

  return (
    '<section class="service-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<div class="service-editorial-grid' +
    (section.video && section.video.src ? " service-editorial-grid--with-video" : "") +
    '">' +
    '<div class="service-prose">' +
    paragraphsHtml +
    "</div>" +
    panelHtml +
    "</div></div></section>"
  );
}

/**
 * Renders a two-method comparison section with descriptions and use lists.
 * @param {Object} section
 * @returns {string}
 */
function renderMethodComparison(section) {
  var titleId = "method-comparison-title";

  function renderMethod(method) {
    var usesHtml = method.uses
      .map(function (use) {
        return '<li class="service-method__item">' + use + "</li>";
      })
      .join("");

    return (
      '<div class="service-method__column">' +
      '<h3 class="service-method__heading">' +
      method.title +
      "</h3>" +
      '<p class="service-method__description">' +
      method.description +
      "</p>" +
      '<ul class="service-method__list" role="list">' +
      usesHtml +
      "</ul></div>"
    );
  }

  var methodsHtml = section.methods.map(renderMethod).join("");

  var linkHtml = section.link
    ? '<p class="service-guide-link">' +
      '<a href="' +
      section.link.href +
      '" class="service-guide-link__anchor">' +
      section.link.text +
      "</a></p>"
    : "";

  return (
    '<section class="service-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content service-section__content--wide">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<div class="service-method">' +
    methodsHtml +
    "</div>" +
    '<p class="service-note">' +
    section.note +
    "</p>" +
    linkHtml +
    "</div></div></section>"
  );
}

/**
 * Renders diagnostic and therapeutic procedure type panels.
 * @param {Object} section
 * @returns {string}
 */
function renderProcedurePanels(section) {
  var titleId = "procedure-panels-title";

  var panelsHtml = section.panels
    .map(function (panel) {
      return (
        '<div class="service-procedure__panel">' +
        '<h3 class="service-procedure__heading">' +
        panel.title +
        "</h3>" +
        '<p class="service-procedure__description">' +
        panel.description +
        "</p></div>"
      );
    })
    .join("");

  return (
    '<section class="service-section section service-section--soft" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content service-section__content--wide">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<div class="service-procedure">' +
    panelsHtml +
    "</div>" +
    '<p class="service-note">' +
    section.note +
    "</p>" +
    "</div></div></section>"
  );
}

/**
 * Renders editorial category overview with optional links.
 * @param {Object} section
 * @returns {string}
 */
function renderCategoryOverview(section) {
  var titleId = "category-overview-title";

  var categoriesHtml = section.categories
    .map(function (category) {
      var linkHtml = category.link
        ? '<p class="service-category__link">' +
          '<a href="' +
          category.link.href +
          '" class="service-guide-link__anchor">' +
          category.link.text +
          "</a></p>"
        : "";

      return (
        '<div class="service-category__item">' +
        '<h3 class="service-category__heading">' +
        category.title +
        "</h3>" +
        '<p class="service-category__description">' +
        category.description +
        "</p>" +
        linkHtml +
        "</div>"
      );
    })
    .join("");

  return (
    '<section class="service-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content service-section__content--wide">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<div class="service-categories">' +
    categoriesHtml +
    "</div>" +
    '<p class="service-note">' +
    section.note +
    "</p>" +
    "</div></div></section>"
  );
}

/**
 * Renders benefits and limitations comparison section.
 * @param {Object} section
 * @returns {string}
 */
function renderBenefitsLimitations(section) {
  var titleId = "benefits-limitations-title";

  function renderColumn(column, modifier) {
    var itemsHtml = column.items
      .map(function (item) {
        return '<li class="service-compare__item">' + item + "</li>";
      })
      .join("");

    return (
      '<div class="service-compare__column service-compare__column--' +
      modifier +
      '">' +
      '<h3 class="service-compare__heading">' +
      column.title +
      "</h3>" +
      '<ul class="service-compare__list" role="list">' +
      itemsHtml +
      "</ul></div>"
    );
  }

  var introHtml = "";

  if (section.intro) {
    introHtml =
      '<div class="service-prose service-prose--intro">' +
      section.intro
        .map(function (p) {
          return "<p>" + p + "</p>";
        })
        .join("") +
      "</div>";
  }

  var contentClass = section.intro
    ? "service-section__content service-section__content--wide"
    : "service-section__content";

  return (
    '<section class="service-section section service-section--soft" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="' +
    contentClass +
    '">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    introHtml +
    '<div class="service-compare">' +
    renderColumn(section.benefits, "benefits") +
    renderColumn(section.limitations, "limitations") +
    "</div>" +
    '<p class="service-note">' +
    section.note +
    "</p>" +
    "</div></div></section>"
  );
}

/**
 * Renders linked conditions with descriptions.
 * @param {Object} section
 * @returns {string}
 */
function renderLinkedConditions(section) {
  var titleId = "linked-conditions-title";

  var itemsHtml = section.items
    .map(function (item) {
      return (
        '<li class="service-conditions__item">' +
        '<a href="' +
        item.href +
        '" class="service-conditions__link">' +
        '<span class="service-conditions__content">' +
        '<span class="service-conditions__label">' +
        item.label +
        "</span>" +
        '<span class="service-conditions__description">' +
        item.description +
        "</span></span>" +
        '<svg class="service-conditions__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
        '<path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg></a></li>"
      );
    })
    .join("");

  return (
    '<section class="service-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<ul class="service-conditions" role="list">' +
    itemsHtml +
    "</ul></div></div></section>"
  );
}

/**
 * Renders symptom or evaluation list section.
 * @param {Object} section
 * @param {string} listClass
 * @returns {string}
 */
function renderEditorialListSection(section, listClass) {
  var sectionId = section.id || "";
  var titleId = sectionId
    ? sectionId + "-title"
    : "section-" + section.eyebrow.replace(/\s/g, "-");
  var idAttr = sectionId ? ' id="' + sectionId + '"' : "";

  var itemsHtml = section.items
    .map(function (item) {
      return (
        '<li class="' +
        listClass +
        '__item">' +
        '<svg class="' +
        listClass +
        '__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
        '<path d="M3 8L6 11L13 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg>" +
        "<span>" +
        item +
        "</span></li>"
      );
    })
    .join("");

  return (
    '<section class="service-section section"' +
    idAttr +
    ' aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<ul class="' +
    listClass +
    '" role="list">' +
    itemsHtml +
    "</ul>" +
    '<p class="service-note">' +
    section.note +
    "</p>" +
    "</div></div></section>"
  );
}

/**
 * Renders diagnosis journey timeline.
 * @param {Object} section
 * @returns {string}
 */
function renderServiceProcess(section) {
  var titleId = section.id + "-title";

  var stepsHtml = section.steps
    .map(function (step, index) {
      return (
        '<li class="service-timeline__step">' +
        '<span class="service-timeline__number" aria-hidden="true">' +
        (index + 1) +
        "</span>" +
        '<div class="service-timeline__content">' +
        "<h3 class=\"service-timeline__title\">" +
        step.title +
        "</h3>" +
        '<p class="service-timeline__description">' +
        step.description +
        "</p></div></li>"
      );
    })
    .join("");

  return (
    '<section class="service-section section" id="' +
    section.id +
    '" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<ol class="service-timeline" aria-label="مراحل بررسی">' +
    stepsHtml +
    "</ol></div></div></section>"
  );
}

/**
 * Renders treatment options section.
 * @param {Object} section
 * @returns {string}
 */
function renderTreatmentOptions(section) {
  var sectionId = section.id || "treatment";
  var titleId = sectionId + "-title";

  var optionsHtml = section.options
    .map(function (option) {
      return (
        '<li class="service-treatment__item">' +
        "<h3 class=\"service-treatment__title\">" +
        option.title +
        "</h3>" +
        '<p class="service-treatment__description">' +
        option.description +
        "</p></li>"
      );
    })
    .join("");

  return (
    '<section class="service-section section" id="' +
    sectionId +
    '" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<ul class="service-treatment" role="list">' +
    optionsHtml +
    "</ul>" +
    '<p class="service-note service-note--emphasis">' +
    section.note +
    "</p>" +
    "</div></div></section>"
  );
}

/**
 * Renders editorial points section.
 * @param {Object} section
 * @returns {string}
 */
function renderEditorialPoints(section) {
  var titleId = "specialized-title";

  var pointsHtml = section.points
    .map(function (point) {
      return (
        '<li class="service-points__item">' +
        '<span class="service-points__marker" aria-hidden="true"></span>' +
        "<span>" +
        point +
        "</span></li>"
      );
    })
    .join("");

  return (
    '<section class="service-section section service-section--soft" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<ul class="service-points" role="list">' +
    pointsHtml +
    "</ul></div></div></section>"
  );
}

/**
 * Renders doctor-focused section on service page.
 * @param {Object} section
 * @returns {string}
 */
function renderServiceDoctorSection(section) {
  var titleId = "service-doctor-title";
  var imageSrc = section.imageSrc || "/assets/images/hero2.PNG";
  var imageAlt =
    section.imageAlt || "تصویر دکتر طاهره پوردست، متخصص زنان و زایمان";
  var isLandscape = section.imageFit === "center";
  var imageClass =
    "service-doctor__image" +
    (isLandscape ? " service-doctor__image--center" : "");
  var frameClass =
    "service-doctor__image-frame" +
    (isLandscape ? " service-doctor__image-frame--landscape" : "");

  var paragraphsHtml = section.paragraphs
    .map(function (p) {
      return "<p>" + p + "</p>";
    })
    .join("");

  return (
    '<section class="service-section section" id="doctor" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-doctor' +
    (isLandscape ? " service-doctor--media" : "") +
    '">' +
    '<div class="service-doctor__visual">' +
    '<figure class="' +
    frameClass +
    '">' +
    '<img class="' +
    imageClass +
    '" src="' +
    imageSrc +
    '" alt="' +
    imageAlt +
    '" width="640" height="800" loading="lazy" decoding="async">' +
    '<figcaption class="sr-only">' +
    imageAlt +
    "</figcaption>" +
    "</figure></div>" +
    '<div class="service-doctor__content">' +
    (section.eyebrow
      ? '<p class="section-header__eyebrow service-doctor__eyebrow">' +
        section.eyebrow +
        "</p>"
      : "") +
    '<h2 class="service-doctor__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    '<div class="service-prose">' +
    paragraphsHtml +
    "</div>" +
    '<div class="service-doctor__actions">' +
    renderPrimaryCtaGroup({
      source: section.appointmentSource,
      doctoretoText: uiString("doctoretoAppointment", "مشاهده نوبت‌های آزاد"),
      showIcon: true,
    }) +
    renderAxonAltLink(section.appointmentSource) +
    (section.aboutLink
      ? '<p class="cta-alt-link service-doctor__about-link">' +
        '<a href="' +
        section.aboutLink +
        '" class="cta-alt-link__anchor">' +
        uiString("aboutDoctor", "درباره دکتر") +
        "</a></p>"
      : "") +
    "</div></div></div></div></section>"
  );
}

/**
 * Renders research and academic activity section.
 * Returns empty string when no verified items exist.
 * @param {Object} section
 * @returns {string}
 */
function renderResearchSection(section) {
  if (!section || !section.items || section.items.length === 0) {
    return "";
  }

  var verifiedItems = section.items
    .filter(function (item) {
      return item.verified === true;
    })
    .slice(0, 3);

  if (verifiedItems.length === 0) {
    return "";
  }

  var titleId = "research-title";

  var itemsHtml = verifiedItems
    .map(function (item) {
      var meta =
        '<span class="service-research__category">' +
        item.category +
        "</span>" +
        '<span class="service-research__year" lang="en">' +
        item.year +
        "</span>";

      var titleContent = item.title;

      if (item.href) {
        var externalAttrs = item.external
          ? ' target="_blank" rel="noopener noreferrer"'
          : "";
        titleContent =
          '<a href="' +
          item.href +
          '" class="service-research__link"' +
          externalAttrs +
          ">" +
          item.title +
          (item.external
            ? '<span class="sr-only"> (باز شدن در تب جدید)</span>'
            : "") +
          "</a>";
      }

      return (
        '<li class="service-research__item">' +
        '<div class="service-research__meta">' +
        meta +
        "</div>" +
        '<h3 class="service-research__title">' +
        titleContent +
        "</h3>" +
        "</li>"
      );
    })
    .join("");

  return (
    '<section class="service-section section service-section--soft" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<ul class="service-research" role="list">' +
    itemsHtml +
    "</ul></div></div></section>"
  );
}

/**
 * Renders related patient guides section.
 * @param {Object} section
 * @returns {string}
 */
function renderRelatedGuides(section) {
  if (!section || !section.items || section.items.length === 0) {
    return "";
  }

  var titleId = "related-guides-title";

  var linksHtml = section.items
    .map(function (item) {
      var descriptionHtml = item.description
        ? '<span class="service-guides__description">' +
          item.description +
          "</span>"
        : "";

      return (
        '<li><a href="' +
        item.href +
        '" class="service-guides__link' +
        (item.description ? " service-guides__link--detailed" : "") +
        '">' +
        '<span class="service-guides__text">' +
        '<span class="service-guides__label">' +
        item.label +
        "</span>" +
        descriptionHtml +
        "</span>" +
        '<svg class="service-guides__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
        '<path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg></a></li>"
      );
    })
    .join("");

  return (
    '<section class="service-section section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<ul class="service-guides" role="list">' +
    linksHtml +
    "</ul></div></div></section>"
  );
}

/**
 * Renders preparation checklist section.
 * @param {Object} section
 * @returns {string}
 */
function renderPreparationSection(section) {
  var sectionId = section.id || "preparation";
  var titleId = sectionId + "-title";

  var checklistHtml = section.checklist
    .map(function (item) {
      return (
        '<li class="service-checklist__item">' +
        '<svg class="service-checklist__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
        '<rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" stroke-width="1.2"/>' +
        '<path d="M5 8L7 10L11 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg>" +
        "<span>" +
        item +
        "</span></li>"
      );
    })
    .join("");

  return (
    '<section class="service-section section" id="' +
    sectionId +
    '" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    section.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    "</header>" +
    '<ul class="service-checklist" role="list">' +
    checklistHtml +
    "</ul>" +
    '<p class="service-guide-link">' +
    '<a href="' +
    section.guideLink.href +
    '" class="service-guide-link__anchor">' +
    section.guideLink.text +
    "</a></p>" +
    "</div></div></section>"
  );
}

/**
 * Renders service page FAQ section.
 * @param {Array|Object} faqConfig - FAQ items array or config object
 * @returns {string}
 */
function renderServiceFaq(faqConfig) {
  var items;
  var eyebrow;
  var title;

  if (Array.isArray(faqConfig)) {
    items = faqConfig;
    eyebrow = "سؤالات پرتکرار";
    title = "پرسش‌های رایج درباره اندومتریوز";
  } else {
    items = faqConfig.items;
    eyebrow = faqConfig.eyebrow || "سؤالات پرتکرار";
    title = faqConfig.title;
  }

  var titleId = "service-faq-title";
  var isDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1024px)").matches;

  var itemsHtml = items
    .map(function (item, index) {
      return renderFaqItem(item, index, isDesktop && index === 0);
    })
    .join("");

  return (
    '<section class="service-section section service-section--soft" id="faq" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    title +
    "</h2>" +
    "</header>" +
    '<div class="faq-accordion service-faq" data-faq-accordion>' +
    itemsHtml +
    "</div></div></div></section>"
  );
}

/**
 * Renders related services as compact cards.
 * @param {Object} section
 * @returns {string}
 */
function renderRelatedServices(section) {
  var titleId = "related-services-title";

  var cardsHtml = section.items
    .map(function (item) {
      return (
        '<li class="service-related__item">' +
        '<a href="' +
        item.href +
        '" class="service-related__card">' +
        '<span class="service-related__body">' +
        '<span class="service-related__label">' +
        item.label +
        "</span>" +
        (item.description
          ? '<span class="service-related__description">' +
            item.description +
            "</span>"
          : "") +
        "</span>" +
        '<svg class="service-related__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
        '<path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg></a></li>"
      );
    })
    .join("");

  return (
    '<section class="service-section section service-section--related" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-section__content service-section__content--wide">' +
    '<h2 class="service-related__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    '<ul class="service-related" role="list">' +
    cardsHtml +
    "</ul></div></div></section>"
  );
}

/**
 * Renders service page final appointment CTA.
 * @param {Object} section
 * @returns {string}
 */
function renderServiceAppointmentCta(section) {
  var titleId = "service-final-cta-title";

  return (
    '<section class="service-final-cta section" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="service-final-cta__card">' +
    '<div class="service-final-cta__inner">' +
    '<h2 class="service-final-cta__title" id="' +
    titleId +
    '">' +
    section.title +
    "</h2>" +
    '<p class="service-final-cta__description">' +
    section.description +
    "</p>" +
    '<div class="service-final-cta__actions">' +
    '<div class="btn-group">' +
    renderPrimaryCtaGroup({
      source: section.cta.source,
      doctoretoText: section.cta.text,
      showIcon: true,
      wrapInGroup: false,
    }) +
    "</div>" +
    renderAxonAltLink(section.cta.source) +
    '<p class="service-final-cta__note">' +
    uiString(
      "bookingNote",
      "نوبت‌دهی اینترنتی از طریق سامانه‌های دکترتو و اکسون انجام می‌شود."
    ) +
    "</p>" +
    "</div></div></div></div></section>"
  );
}
