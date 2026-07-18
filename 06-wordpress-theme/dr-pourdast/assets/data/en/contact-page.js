/**
 * Contact and appointment page content.
 *
 * All clinic contact information must be confirmed by the clinic
 * before publication. Verified values are read from SITE_CONFIG.
 */
var CONTACT_PAGE = {
  slug: "contact",
  route: "/en/contact",
  seo: {
    title: "Contact & Appointments | Dr. Tahereh Pordast",
    description:
      "Contact information, clinic address, and online appointment booking for Dr. Tahereh Pordast through Doctoreto and Axon.",
    canonical: "https://drpourdast.ir/en/contact",
    ogImage: "/assets/images/og-contact.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Contact & Appointments", href: "/en/contact" },
  ],
  hero: {
    eyebrow: "Contact & appointments",
    title: "Visit information and appointment booking",
    description:
      "To view available times and book an appointment, use Dr. Tahereh Pordast's official profile on Doctoreto or Axon. Contact information and the clinic address are also available on this page.",
    appointmentSource: "contact-hero",
    secondaryCta: {
      text: "View clinic information",
      href: "#clinic-information",
    },
  },
  booking: {
    eyebrow: "Online appointments",
    title: "Book an appointment online",
    content:
      "Available times, clinic days, and booking information are displayed through Dr. Tahereh Pordast's official profile on Doctoreto and Axon.",
    appointmentSource: "contact-booking-section",
    note: "Online booking is handled outside this website through Doctoreto or Axon.",
  },
  clinic: {
    id: "clinic-information",
    eyebrow: "Clinic information",
    title: "Contact and visit details",
    emptyNote:
      "Verified contact information will be published in this section after coordination with the clinic.",
    appointmentSummary:
      "To view available times and book an appointment, use Doctoreto or Axon.",
  },
  map: {
    eyebrow: "Clinic location",
    title: "Directions to the clinic",
    linkText: "Open directions in maps",
  },
  outOfTown: {
    eyebrow: "Visiting from out of town",
    title: "Review these items before you travel",
    points: [
      {
        title: "Confirm your appointment",
        description:
          "Before planning your trip, check your appointment time and booking status on Doctoreto.",
      },
      {
        title: "Bring your medical records",
        description:
          "Bring relevant ultrasound reports, MRI studies, laboratory tests, and treatment records when available.",
      },
      {
        title: "Review the address and route",
        description:
          "Before traveling, review the clinic address and access route using the verified information on this page.",
      },
      {
        title: "Contact the clinic if needed",
        description:
          "If you have questions about documents, visit times, or the appointment process, follow up using the clinic's verified contact number.",
      },
    ],
    note:
      "This information is general in nature and visit details should be confirmed against the information listed on Doctoreto or at the clinic.",
  },
  whatToBring: {
    eyebrow: "Before your visit",
    title: "What documents should you bring?",
    items: [
      "Previous ultrasound reports",
      "MRI reports, if available",
      "Relevant laboratory tests",
      "Prior surgical reports",
      "Pathology results, if available",
      "List of current medications",
      "Summary of treatment history",
    ],
    guideLink: {
      text: "View the complete first-visit guide",
      href: "/en/patient-guides/first-visit",
    },
  },
  faqs: {
    eyebrow: "Frequently asked questions",
    title: "Common questions about contact and appointments",
    items: [
      {
        id: "online-appointment",
        question: "How do I book an appointment online?",
        answer:
          "Online booking is available through Dr. Tahereh Pordast's official profile on Doctoreto or Axon.",
        hasAppointmentLink: true,
        appointmentSource: "contact-faq",
      },
      {
        id: "site-booking",
        question: "Can I book an appointment through this website?",
        answer:
          "No. This website is for introducing services and providing general information. Appointment booking is handled through Doctoreto or Axon.",
      },
      {
        id: "first-visit-docs",
        question: "What documents should I bring to my first appointment?",
        answer:
          "It is best to bring relevant records such as ultrasound reports, MRI studies, laboratory tests, prior surgical reports, and a list of current medications when available.",
      },
      {
        id: "out-of-town",
        question: "Can I visit from out of town?",
        answer:
          "Yes, but before traveling, review your appointment time, the clinic address, and required documents, and contact the clinic if needed.",
      },
      {
        id: "contact-info",
        question: "Where can I find the address and phone number?",
        answer:
          "Verified clinic information is displayed on this page. Information that has not yet been confirmed by the clinic will not be published.",
      },
    ],
  },
  privacyNote: {
    title: "Important note",
    content:
      "To protect your privacy, do not send sensitive medical information through public messages, social media, or unofficial forms. Provide medical records during your visit or through an approved channel from the treatment team.",
  },
  finalCta: {
    title: "Book a consultation appointment",
    description:
      "Available appointment times and booking information for Dr. Tahereh Pordast are available on Doctoreto and Axon.",
    cta: {
      text: "View available appointments",
      source: "contact-final-cta",
    },
    phoneSource: "contact-final-cta",
  },
};
