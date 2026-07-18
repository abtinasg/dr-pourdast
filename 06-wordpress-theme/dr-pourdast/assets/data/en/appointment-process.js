/**
 * Appointment process section content.
 *
 * NOTE: This appointment-process content must be reviewed and approved
 * by the clinic before final publication.
 *
 * @typedef {Object} ProcessStep
 * @property {string} title
 * @property {string} description
 * @property {string} icon - Inline SVG markup
 */

/** @type {Object} */
var APPOINTMENT_PROCESS = {
  id: "appointment",
  eyebrow: "Booking",
  title: "How to book an appointment",
  subtitle:
    "In three steps, choose and reserve a suitable time on Doctoreto.",
  steps: [
    {
      title: "Open Doctoreto",
      description:
        "Select “View appointments on Doctoreto” to open Dr. Tahereh Pordast’s official profile.",
      icon: MEDICAL_ICONS.externalLink,
    },
    {
      title: "Choose a suitable time",
      description:
        "View available clinic times and select the day and hour that work best for your visit.",
      icon: MEDICAL_ICONS.calendar,
    },
    {
      title: "Visit the clinic",
      description:
        "After booking, visit the clinic at your scheduled time. Visit details follow the confirmed information shown in the booking system.",
      icon: MEDICAL_ICONS.clinic,
    },
  ],
  ctas: {
    primary: {
      text: "View appointments on Doctoreto",
      source: "appointment-process",
    },
    contact: {
      source: "appointment-process-contact",
    },
  },
};
