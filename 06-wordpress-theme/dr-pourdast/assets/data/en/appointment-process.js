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
    "Visits with Dr. Tahereh Poordast are booked on Axon. Doctoreto usually offers earlier slots with her clinic colleagues.",
  steps: [
    {
      title: "Open Axon",
      description:
        "Select “Book on Axon” to open Dr. Tahereh Poordast’s official profile. Axon also offers visit and ultrasound appointment options.",
      icon: MEDICAL_ICONS.externalLink,
    },
    {
      title: "Choose a suitable time",
      description:
        "View available times and select the day and hour that work best. For an earlier appointment, you can use Doctoreto; those visits are handled by the doctor’s colleagues in consultation with her.",
      icon: MEDICAL_ICONS.calendar,
    },
    {
      title: "Visit the clinic",
      description:
        "After booking, visit the clinic at your scheduled time. If surgery is needed, Dr. Poordast performs it herself. Colleague visits help speed up the treatment process.",
      icon: MEDICAL_ICONS.clinic,
    },
  ],
  ctas: {
    primary: {
      text: "Book on Axon",
      source: "appointment-process",
    },
    contact: {
      source: "appointment-process-contact",
    },
  },
};
