/**
 * FAQ section content.
 *
 * All medical FAQ answers must be reviewed and approved by the doctor
 * before publication.
 *
 * WordPress-ready fields per item:
 *   question, answer, display_order, is_active
 *
 * @typedef {Object} FAQItem
 * @property {string} id
 * @property {string} question
 * @property {string} answer
 * @property {boolean} [hasAppointmentLink]
 * @property {number} [displayOrder]
 * @property {boolean} [isActive]
 */

/** @type {{ eyebrow: string, title: string, subtitle: string, items: FAQItem[] }} */
var FAQ_SECTION = {
  eyebrow: "Frequently Asked Questions",
  title: "Answers to common patient questions",
  subtitle:
    "Brief, general answers about endometriosis, gynecologic surgery, the visit process, and booking appointments",
  items: [
    {
      id: "endometriosis-symptoms",
      question: "What are the symptoms of endometriosis?",
      answer:
        "Endometriosis may cause severe menstrual pain, pelvic pain, pain during intercourse, digestive symptoms, or fertility problems. Symptoms vary from person to person, and a definitive diagnosis requires medical evaluation.",
      isActive: true,
      displayOrder: 1,
    },
    {
      id: "endometriosis-surgery",
      question: "Do all patients with endometriosis need surgery?",
      answer:
        "No. Treatment depends on symptom severity, location of disease, age, fertility goals, and overall health. Some patients benefit from medication or monitoring, while others may need surgical evaluation.",
      isActive: true,
      displayOrder: 2,
    },
    {
      id: "first-visit-documents",
      question: "What documents should I bring to my first visit?",
      answer:
        "It is helpful to bring lab results, ultrasounds, MRI reports, prior surgical reports, a list of current medications, and relevant treatment history.",
      isActive: true,
      displayOrder: 3,
    },
    {
      id: "laparoscopy",
      question: "What is gynecologic laparoscopy?",
      answer:
        "Laparoscopy is a minimally invasive surgical method performed through small incisions. It can be used to diagnose or treat certain gynecologic conditions.",
      isActive: true,
      displayOrder: 4,
    },
    {
      id: "hysteroscopy",
      question: "What conditions is hysteroscopy used for?",
      answer:
        "Hysteroscopy is used to examine the inside of the uterus and to diagnose or treat conditions such as polyps, adhesions, or intrauterine abnormalities. Whether this procedure is needed should be determined by a physician.",
      isActive: true,
      displayOrder: 5,
    },
    {
      id: "appointment",
      question: "How can I book an appointment?",
      answer:
        "Online booking is available through Dr. Tahereh Pordast's official profile on Doctoreto. Select the option to view available appointments to access the official booking page.",
      hasAppointmentLink: true,
      isActive: true,
      displayOrder: 6,
    },
    {
      id: "not-medical-advice",
      question: "Does the information on this website replace a doctor's visit?",
      answer:
        "No. Website content is for general information only and does not replace examination, diagnosis, or medical advice from a physician.",
      isActive: true,
      displayOrder: 8,
    },
  ],
};
