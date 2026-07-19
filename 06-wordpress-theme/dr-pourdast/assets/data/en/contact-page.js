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
    title: "Contact & Clinic Address | Dr. Tahereh Pordast",
    description:
      "Clinic address, phone number, and directions for Dr. Tahereh Pordast in Shiraz. Book online through Doctoreto or Axon.",
    canonical: "https://drpourdast.ir/en/contact",
    ogImage: "/assets/images/og-contact.jpg",
    locale: "en_US",
  },
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Contact", href: "/en/contact" },
  ],
  hero: {
    eyebrow: "Contact the clinic",
    title: "Visit information and how to reach us",
    description:
      "The clinic address, phone number, and map are available on this page. To book online, use Doctoreto or Axon.",
    appointmentSource: "contact-hero",
    secondaryCta: {
      text: "View address and map",
      href: "#clinic-information",
    },
  },
  clinic: {
    id: "clinic-information",
    eyebrow: "Clinic information",
    title: "Contact and visit details",
    emptyNote:
      "Verified contact information will be published in this section after coordination with the clinic.",
  },
  map: {
    eyebrow: "Clinic location",
    title: "Directions to the clinic",
    linkText: "Open directions in map",
  },
  outOfTown: {
    eyebrow: "Visiting from out of town",
    title: "Before you travel, check these points",
    points: [
      {
        title: "Confirm your appointment",
        description:
          "Before planning your trip, verify your appointment time and booking status.",
      },
      {
        title: "Bring your medical records",
        description:
          "Bring relevant ultrasound reports, MRI, lab results, and treatment records if available.",
      },
      {
        title: "Check the address and route",
        description:
          "Before traveling, review the clinic address and directions in the map section on this page.",
      },
      {
        title: "Coordinate with the clinic if needed",
        description:
          "If you have questions about documents, arrival time, or the visit process, contact the clinic through the verified phone number.",
      },
    ],
    note:
      "This is general information. Visit details should match what is recorded in the booking platform or at the clinic.",
  },
  whatToBring: {
    eyebrow: "Before your visit",
    title: "What documents should you bring?",
    items: [
      "Previous ultrasound reports",
      "MRI if available",
      "Relevant lab results",
      "Previous surgery reports",
      "Pathology results if available",
      "List of current medications",
      "Summary of treatment history",
    ]
  },
  faqs: {
    eyebrow: "Frequently asked questions",
    title: "Common questions",
    items: [
      {
        id: "online-appointment",
        question: "How do I book an appointment online?",
        answer:
          "Online booking is handled through Doctoreto or Axon. The \"Book appointment\" button at the top of the page takes you to the official booking page.",
      },
      {
        id: "site-booking",
        question: "Can I book through this website?",
        answer:
          "No. This website provides general information about services. Booking is done through Doctoreto or Axon.",
      },
      {
        id: "first-visit-docs",
        question: "What should I bring to my first visit?",
        answer:
          "Bring relevant records such as ultrasound, MRI, lab results, previous surgery reports, and a list of medications if available.",
      },
      {
        id: "out-of-town",
        question: "Can I visit from another city?",
        answer:
          "Yes, but before traveling, confirm your appointment time, clinic address, required documents, and coordinate with the clinic if needed.",
      },
      {
        id: "contact-info",
        question: "Where can I find the address and phone number?",
        answer:
          "Verified clinic information is shown in the \"Clinic information\" section on this page.",
      },
    ],
  },
  privacyNote: {
    title: "Important note",
    content:
      "To protect your privacy, do not send sensitive medical information through public messages, social media, or unofficial forms. Provide medical records during your visit or through approved channels.",
  },
  finalCta: {
    title: "Need an appointment?",
    description: "Book online through Doctoreto or Axon.",
    cta: {
      source: "contact-final-cta",
    },
  },
};
