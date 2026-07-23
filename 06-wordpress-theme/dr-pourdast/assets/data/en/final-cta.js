/**
 * Final appointment CTA section content.
 *
 * The clinic phone number must be confirmed before publication.
 * Phone is read from SITE_CONFIG.clinicPhone — do not hardcode here.
 */
var FINAL_CTA_SECTION = {
  eyebrow: "Book an Appointment",
  title: "Schedule a consultation to discuss your condition",
  description:
    "Visits with Dr. Tahereh Poordast are booked on Axon, which also offers ultrasound appointments. Doctoreto usually has earlier slots handled by her colleagues in consultation with her.",
  supportNote:
    "Primary booking for a visit with the doctor is on Axon. Doctoreto appointments are usually earlier and handled by her colleagues.",
  trustDetails: [
    "Doctor visits and ultrasound on Axon",
    "Earlier slots on Doctoreto with colleagues",
    "If surgery is needed, Dr. Poordast performs it herself",
  ],
  ctas: {
    primary: {
      text: "Book on Axon",
      source: "final-cta",
    },
    contact: {
      source: "final-cta-contact",
    },
  },
};
