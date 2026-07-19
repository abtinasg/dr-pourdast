/**
 * Central site configuration — single source of truth.
 * All appointment links must read from this file.
 *
 * Clinic contact information must be confirmed before publication.
 */
var SITE_CONFIG = {
  appointmentProviders: [
    {
      id: "doctoreto",
      url: "https://doctoreto.com/doctor/dr-tahere-pur-dast/ZplbBE",
      linkText: "View appointments on Doctoreto",
      eventName: "doctoreto_appointment_click",
    },
    {
      id: "axon",
      url: "https://axon.me/hcps/90566-tahereh-pordast/",
      linkText: "Book on Axon",
      eventName: "axon_appointment_click",
    },
  ],

  /** @deprecated Use appointmentProviders — kept for backward compatibility */
  appointmentUrl:
    "https://doctoreto.com/doctor/dr-tahere-pur-dast/ZplbBE",

  /** Set to confirmed clinic number (e.g. "07112345678") when available */
  clinicPhone: "+989307916968",

  /** Displayed in footer and contact sections */
  clinicPhoneDisplay: "+98 930 791 6968",

  /** Confirmed clinic address — hidden when null */
  clinicAddress:
    "Shiraz, Mollasadra St., beginning of Ordibehesht, above Refah Bank, Amir Kasri Building, 4th Floor",

  /** Confirmed working hours — hidden when null */
  workingHours: null,

  /** Confirmed map links — hidden when null */
  mapUrl: "https://neshan.org/maps/places/7033c18c24978ca4bc4ec543bff4a1c4",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=29.6263,52.4646&hl=fa&z=17&output=embed",

  /** Confirmed social URLs — hidden when null */
  instagramUrl: null,
  whatsappUrl: null,
  linkedinUrl: null,
  telegramUrl: null,

  /**
   * Language switcher — set href when translated versions are published.
   * Floating WhatsApp uses whatsappUrl, or falls back to clinicPhone.
   */
  languages: [
    { code: "fa", label: "فارسی", href: null, flag: "iran" },
    { code: "en", label: "English", href: null, flag: "uk" },
    { code: "ar", label: "العربية", href: null, flag: "arabic" },
  ],
};
