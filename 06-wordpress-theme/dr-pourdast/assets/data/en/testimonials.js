/**
 * Patient testimonials data.
 *
 * Only verified patient feedback approved by the clinic may be published.
 *
 * WordPress-ready fields per item:
 *   quote, display_name, service, source, verified, display_order
 *
 * @typedef {Object} Testimonial
 * @property {string} id
 * @property {string} quote
 * @property {string} displayName
 * @property {string} [service]
 * @property {string} [source]
 * @property {boolean} verified
 * @property {number} [displayOrder]
 */

/** @type {{ eyebrow: string, title: string, subtitle: string, footerNote: string, testimonials: Testimonial[] }} */
var TESTIMONIALS_SECTION = {
  eyebrow: "Patient Experiences",
  title: "What patients say about their visits",
  subtitle: "Genuine patient feedback from Doctoreto and Axon",
  footerNote:
    "Treatment experiences vary for each patient, and outcomes depend on individual circumstances.",
  initialVisibleCount: 6,
  testimonials: [
    {
      id: "axon-zahra-ultrasound-1405-04-11",
      quote: "Excellent care. Plenty of time is dedicated to each patient during the visit.",
      displayName: "Zahra",
      service: "Ultrasound + In-Person Visit",
      source: "Axon",
      verified: true,
      displayOrder: 1,
    },
    {
      id: "axon-tahereh-laparoscopy-1405-04-11",
      quote:
        "Dr. Pordast is a dedicated, compassionate physician with positive energy. I had laparoscopic myoma surgery five months ago, and her technique was excellent.",
      displayName: "Tahereh",
      service: "Ultrasound + In-Person Visit",
      source: "Axon",
      verified: true,
      displayOrder: 2,
    },
    {
      id: "axon-user-inperson-1405-04-11",
      quote: "She is an outstanding physician and very skilled.",
      displayName: "Axon User",
      service: "In-Person Appointment",
      source: "Axon",
      verified: true,
      displayOrder: 3,
    },
    {
      id: "axon-atefeh-inperson-1405-04-12",
      quote:
        "Dr. Pordast is an exceptionally kind and approachable physician. She has an excellent medical team that follows up closely with patients and sends appointment reminders. Her diagnostic skills are outstanding, both in ultrasound and in identifying conditions.",
      displayName: "Atefeh",
      service: "In-Person Appointment",
      source: "Axon",
      verified: true,
      displayOrder: 4,
    },
    {
      id: "axon-inperson-1405-04-16",
      quote:
        "Her clinical work is excellent, but wait times and queues can be long.",
      displayName: "Axon User",
      service: "In-Person Appointment",
      source: "Axon",
      verified: true,
      displayOrder: 5,
    },
    {
      id: "axon-marjan-ultrasound-1405-04-16",
      quote: "Wait time is short.",
      displayName: "Marjan",
      service: "Ultrasound + In-Person Visit",
      source: "Axon",
      verified: true,
      displayOrder: 6,
    },
    {
      id: "axon-mahnaz-inperson-1405-04-09",
      quote: "Patient and approachable.",
      displayName: "Mahnaz",
      service: "In-Person Visit",
      source: "Axon",
      verified: true,
      displayOrder: 7,
    },
    {
      id: "axon-ziba-ultrasound-1405-04-05",
      quote:
        "Dr. Tahereh Pordast is very kind and approachable. Wishing her continued health and wellbeing.",
      displayName: "Ziba",
      service: "Ultrasound + In-Person Visit",
      source: "Axon",
      verified: true,
      displayOrder: 8,
    },
    {
      id: "axon-zahra-inperson-1405-04-02",
      quote: "Very approachable.",
      displayName: "Zahra",
      service: "In-Person Appointment",
      source: "Axon",
      verified: true,
      displayOrder: 9,
    },
    {
      id: "doctoreto-hernia-laparoscopy-1405-03-26",
      quote:
        "Dr. Pordast was very kind, patient, and approachable. She truly understands patients and provides full support throughout care.",
      displayName: "Doctoreto User",
      service: "Hernia Treatment & Laparoscopic Surgery",
      source: "Doctoreto",
      verified: true,
      displayOrder: 10,
    },
    {
      id: "doctoreto-clinic-space-1405-03-09",
      quote: "The clinic environment was very pleasant and the reception staff were excellent.",
      displayName: "Doctoreto User",
      service: "Endometriosis & Uterine Fibroid Treatment",
      source: "Doctoreto",
      verified: true,
      displayOrder: 11,
    },
    {
      id: "doctoreto-somayeh-1405-03-08",
      quote:
        "She is a kind, compassionate, and experienced physician. The reception staff were also very kind, and the clinic environment was excellent.",
      displayName: "Somayeh",
      service: "Endometriosis & Ovarian Cyst Treatment",
      source: "Doctoreto",
      verified: true,
      displayOrder: 12,
    },
    {
      id: "doctoreto-best-doctor-1405-03-04",
      quote:
        "She was excellent — the best doctor I have visited. Dr. Pordast is wonderful.",
      displayName: "Doctoreto User",
      service: "Evaluation & Treatment of Uterine & Ovarian Conditions",
      source: "Doctoreto",
      verified: true,
      displayOrder: 13,
    },
    {
      id: "doctoreto-endometriosis-fibroid-1405-03-02",
      quote:
        "The doctor and staff were excellent, and her endometriosis diagnosis was very accurate. Most importantly, she takes time for patients and listens carefully to everything they say.",
      displayName: "Doctoreto User",
      service: "Endometriosis & Uterine Fibroid Treatment",
      source: "Doctoreto",
      verified: true,
      displayOrder: 14,
    },
    {
      id: "doctoreto-endometriosis-1405-02-16",
      quote: "Excellent for endometriosis.",
      displayName: "Doctoreto User",
      service: "Endometriosis & Ovarian Cyst Treatment",
      source: "Doctoreto",
      verified: true,
      displayOrder: 15,
    },
    {
      id: "doctoreto-sanaz-surgery-1405-02-13",
      quote:
        "The best doctor in Shiraz and the only one you can truly trust. I had surgery — her technique was excellent and I had very little discomfort after the procedure.",
      displayName: "Sanaz",
      service: "Gynecologic Surgery Including Hysterectomy",
      source: "Doctoreto",
      verified: true,
      displayOrder: 16,
    },
    {
      id: "doctoreto-raheleh-1405-01-25",
      quote: "I recommend her.",
      displayName: "Raheleh",
      service: "Endometriosis & Uterine Fibroid Treatment",
      source: "Doctoreto",
      verified: true,
      displayOrder: 17,
    },
    {
      id: "doctoreto-kind-doctor-1404-11-01",
      quote:
        "Dr. Pordast is very kind, approachable, and highly skilled.",
      displayName: "Doctoreto User",
      service: "Endometriosis & Uterine Fibroid Treatment",
      source: "Doctoreto",
      verified: true,
      displayOrder: 18,
    },
    {
      id: "doctoreto-saghri-1404-10-24",
      quote:
        "She is a very experienced, kind, and compassionate physician who takes time for patients and listens patiently.",
      displayName: "Saghri",
      service: "Endometriosis & Ovarian Cyst Treatment",
      source: "Doctoreto",
      verified: true,
      displayOrder: 19,
    },
    {
      id: "doctoreto-nasrin-1404-10-09",
      quote: "She made an excellent diagnosis.",
      displayName: "Nasrin",
      service: "Endometriosis & Ovarian Cyst Treatment",
      source: "Doctoreto",
      verified: true,
      displayOrder: 20,
    },
    {
      id: "doctoreto-best-all-1404-10-08",
      quote:
        "The best doctor I have ever seen — truly excellent in every way: treatment, professionalism, bedside manner, and surgical skill.",
      displayName: "Doctoreto User",
      service: "Endometriosis & Uterine Fibroid Treatment",
      source: "Doctoreto",
      verified: true,
      displayOrder: 21,
    },
    {
      id: "doctoreto-arsalan-1404-10-02",
      quote: "Very experienced and excellent.",
      displayName: "Arsalan",
      service: "Endometriosis & Ovarian Cyst Treatment",
      source: "Doctoreto",
      verified: true,
      displayOrder: 22,
    },
  ],
};
