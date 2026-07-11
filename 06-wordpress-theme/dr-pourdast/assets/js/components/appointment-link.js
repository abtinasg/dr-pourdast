/**
 * Reusable appointment link component.
 * Renders external booking links with analytics attributes and accessibility.
 */

var APPOINTMENT_SR_LABEL = " (باز شدن در تب جدید)";

/**
 * @returns {Array<{id: string, url: string, linkText: string, eventName: string}>}
 */
function getAppointmentProviders() {
  if (typeof SITE_CONFIG === "undefined") return [];

  if (
    SITE_CONFIG.appointmentProviders &&
    SITE_CONFIG.appointmentProviders.length
  ) {
    return SITE_CONFIG.appointmentProviders;
  }

  if (SITE_CONFIG.appointmentUrl) {
    return [
      {
        id: "doctoreto",
        url: SITE_CONFIG.appointmentUrl,
        linkText: "دریافت نوبت از دکترتو",
        eventName: "doctoreto_appointment_click",
      },
    ];
  }

  return [];
}

/**
 * @param {string} providerId
 * @returns {{id: string, url: string, linkText: string, eventName: string}|undefined}
 */
function getAppointmentProvider(providerId) {
  var providers = getAppointmentProviders();
  var match = providers.find(function (provider) {
    return provider.id === providerId;
  });

  return match || providers[0];
}

/**
 * @param {Object} options
 * @param {string} options.text - Link label
 * @param {string} options.source - Analytics source identifier
 * @param {"doctoreto"|"axon"} [options.provider]
 * @param {"primary"|"secondary"} [options.variant]
 * @param {string} [options.size] - "sm" for small button
 * @param {boolean} [options.showIcon]
 * @param {string} [options.className] - Additional classes
 * @returns {string}
 */
function renderAppointmentLink(options) {
  var provider = getAppointmentProvider(options.provider || "doctoreto");
  if (!provider) return "";

  var variant = options.variant || "primary";
  var classes = ["btn", "btn--" + variant];

  if (options.size === "sm") {
    classes.push("btn--sm");
  }

  if (options.className) {
    classes.push(options.className);
  }

  var iconHtml = "";

  if (options.showIcon) {
    iconHtml =
      '<svg class="appointment-link__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
      '<path d="M10 3H13V6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M8 8L13 3M6 5H4C3.4 5 3 5.4 3 6V13C3 13.6 3.4 14 4 14H11C11.6 14 12 13.6 12 13V11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>' +
      "</svg>";
  }

  return (
    '<a href="' +
    provider.url +
    '" class="' +
    classes.join(" ") +
    '" target="_blank" rel="noopener noreferrer" data-event="' +
    provider.eventName +
    '" data-source="' +
    options.source +
    '">' +
    options.text +
    '<span class="sr-only">' +
    APPOINTMENT_SR_LABEL +
    "</span>" +
    iconHtml +
    "</a>"
  );
}

/**
 * Renders all configured appointment provider links.
 * @param {Object} options
 * @param {string} options.source - Base analytics source identifier
 * @param {"primary"|"secondary"} [options.variant]
 * @param {"primary"|"secondary"} [options.secondaryVariant]
 * @param {string} [options.size]
 * @param {boolean} [options.showIcon]
 * @param {string} [options.className]
 * @param {boolean} [options.wrapInGroup=true]
 * @param {Object.<string, string>} [options.texts] - Custom label per provider id
 * @returns {string}
 */
function renderAppointmentLinksGroup(options) {
  var providers = getAppointmentProviders();
  if (!providers.length) return "";

  var linksHtml = providers
    .map(function (provider, index) {
      return renderAppointmentLink({
        text:
          (options.texts && options.texts[provider.id]) || provider.linkText,
        source: options.source + "-" + provider.id,
        provider: provider.id,
        variant:
          index === 0
            ? options.variant || "primary"
            : options.secondaryVariant || "secondary",
        size: options.size,
        showIcon: options.showIcon && index === 0,
        className: options.className,
      });
    })
    .join("");

  if (options.wrapInGroup === false) {
    return linksHtml;
  }

  return (
    '<div class="btn-group appointment-links-group">' + linksHtml + "</div>"
  );
}

/**
 * Applies appointment link attributes to existing DOM elements.
 * Used for static HTML elements marked with [data-appointment-link].
 * @param {HTMLElement} el
 */
function applyAppointmentLink(el) {
  var providerId = el.getAttribute("data-appointment-provider") || "doctoreto";
  var provider = getAppointmentProvider(providerId);
  if (!provider) return;

  var source = el.getAttribute("data-source") || "unknown";

  el.href = provider.url;
  el.target = "_blank";
  el.rel = "noopener noreferrer";
  el.setAttribute("data-event", provider.eventName);
  el.setAttribute("data-source", source);

  if (!el.querySelector(".sr-only")) {
    var sr = document.createElement("span");
    sr.className = "sr-only";
    sr.textContent = APPOINTMENT_SR_LABEL;
    el.appendChild(sr);
  }
}

/**
 * Renders clinic contact CTA — tel: link only when phone is confirmed.
 * @param {string} source
 * @returns {string}
 */
function renderClinicContactLink(source) {
  if (typeof SITE_CONFIG === "undefined") return "";

  if (SITE_CONFIG.clinicPhone) {
    return (
      '<a href="tel:' +
      SITE_CONFIG.clinicPhone +
      '" class="btn btn--secondary" data-source="' +
      source +
      '">تماس با مطب</a>'
    );
  }

  return (
    '<span class="btn btn--secondary btn--placeholder" aria-disabled="true" data-source="' +
    source +
    '">تماس با مطب — ' +
    SITE_CONFIG.clinicPhoneDisplay +
    "</span>"
  );
}
