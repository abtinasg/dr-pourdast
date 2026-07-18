/**
 * Chatbot knowledge base — English.
 */
var CHATBOT_KNOWLEDGE = {
  welcome:
    "Hello! Ask about services, booking, or articles. Answers are brief guides — not medical advice.",
  disclaimer: "",
  placeholder: "Type your question…",
  sendLabel: "Send",
  openLabel: "Chat with site assistant",
  closeLabel: "Close chat",
  typingLabel: "Searching…",
  noResult:
    "No answer found. Try the contact page or book an appointment.",
  readMore: "Read more",
  suggestions: [
    { label: "Endometriosis symptoms", query: "What are endometriosis symptoms" },
    { label: "Book appointment", query: "How do I book an appointment" },
    { label: "First visit", query: "What documents for first visit" },
    { label: "Laparoscopy", query: "What is laparoscopy" },
    { label: "Clinic address", query: "Where is the clinic" },
  ],
  entries: [
    {
      id: "endometriosis-symptoms",
      keywords: ["endometriosis", "symptoms", "pain", "period", "pelvic", "fertility"],
      title: "Endometriosis symptoms",
      content:
        "Endometriosis may cause severe menstrual pain, pelvic pain, pain during intercourse, digestive symptoms, or fertility problems. Symptoms vary and a definitive diagnosis requires medical evaluation.",
      href: "/en/articles/endometriosis-symptoms",
    },
    {
      id: "endometriosis-surgery",
      keywords: ["endometriosis", "surgery", "treatment", "medication"],
      title: "Endometriosis treatment",
      content:
        "Not all patients with endometriosis need surgery. Treatment depends on symptom severity, disease location, age, fertility goals, and overall health.",
      href: "/en/services/endometriosis",
    },
    {
      id: "endometriosis-diagnosis",
      keywords: ["diagnosis", "endometriosis", "ultrasound", "mri", "laparoscopy"],
      title: "Diagnosing endometriosis",
      content:
        "Diagnosis begins with a clinical exam and may include ultrasound, MRI, and in some cases laparoscopy to confirm the diagnosis.",
      href: "/en/articles/endometriosis-diagnosis",
    },
    {
      id: "first-visit",
      keywords: ["first", "visit", "documents", "tests", "ultrasound", "medication"],
      title: "First visit documents",
      content:
        "Bring lab results, ultrasounds, MRI reports, prior surgical reports, a list of current medications, and relevant treatment history.",
      href: "/en/patient-guides/first-visit",
    },
    {
      id: "laparoscopy",
      keywords: ["laparoscopy", "surgery", "minimally", "invasive"],
      title: "Gynecologic laparoscopy",
      content:
        "Laparoscopy is a minimally invasive surgical method performed through small incisions and can be used to diagnose or treat certain gynecologic conditions.",
      href: "/en/services/gynecologic-laparoscopy",
    },
    {
      id: "laparoscopy-recovery",
      keywords: ["laparoscopy", "recovery", "after", "care"],
      title: "After laparoscopy",
      content:
        "Recovery after laparoscopy is usually shorter than open surgery. See the patient guides section for detailed post-operative care information.",
      href: "/en/articles/laparoscopy-recovery",
    },
    {
      id: "hysteroscopy",
      keywords: ["hysteroscopy", "uterus", "polyp", "adhesion"],
      title: "Hysteroscopy",
      content:
        "Hysteroscopy is used to examine the inside of the uterus and diagnose or treat conditions such as polyps, adhesions, or uterine abnormalities.",
      href: "/en/services/hysteroscopy",
    },
    {
      id: "hysteroscopy-vs-laparoscopy",
      keywords: ["hysteroscopy", "laparoscopy", "difference", "compare"],
      title: "Hysteroscopy vs laparoscopy",
      content:
        "Hysteroscopy examines the inside of the uterus; laparoscopy examines the pelvis and internal organs. The appropriate method depends on your condition.",
      href: "/en/articles/hysteroscopy-vs-laparoscopy",
    },
    {
      id: "ovarian-cyst",
      keywords: ["cyst", "ovarian", "ovary", "ultrasound", "follow-up"],
      title: "Ovarian cysts",
      content:
        "Ovarian cysts have different types. Some resolve on their own and others need follow-up or treatment. Proper evaluation by a physician is essential.",
      href: "/en/services/ovarian-cyst",
    },
    {
      id: "uterine-fibroid",
      keywords: ["fibroid", "uterine", "bleeding", "pain"],
      title: "Uterine fibroids",
      content:
        "Uterine fibroids are common benign tumors that may cause bleeding, pain, or pressure. Treatment depends on size, location, and symptoms.",
      href: "/en/services/uterine-fibroid",
    },
    {
      id: "abnormal-bleeding",
      keywords: ["bleeding", "period", "uterine", "abnormal"],
      title: "Abnormal uterine bleeding",
      content:
        "Abnormal uterine bleeding can have various causes. If your cycle pattern changes or bleeding is heavy or prolonged, see a physician.",
      href: "/en/articles/abnormal-bleeding",
    },
    {
      id: "pelvic-pain",
      keywords: ["pain", "pelvic", "chronic", "cause"],
      title: "Chronic pelvic pain",
      content:
        "Chronic pelvic pain may have various causes including endometriosis, adhesions, cysts, or other conditions. Specialist evaluation is needed.",
      href: "/en/articles/pelvic-pain-causes",
    },
    {
      id: "pelvic-adhesion",
      keywords: ["adhesion", "pelvic", "infertility", "pain"],
      title: "Pelvic adhesions",
      content:
        "Pelvic adhesions may develop after surgery or infection and can be associated with chronic pain or fertility problems.",
      href: "/en/services/pelvic-adhesion",
    },
    {
      id: "appointment",
      keywords: ["appointment", "book", "schedule", "doctoreto", "axon", "online"],
      title: "Book an appointment",
      content:
        "Online booking is available through Doctoreto and Axon. Select View appointments to go to the official booking page.",
      href: "/en/contact",
    },
    {
      id: "contact",
      keywords: ["contact", "phone", "address", "clinic", "shiraz", "hours"],
      title: "Clinic contact",
      content:
        "Address: Shiraz, Mollasadra St., beginning of Ordibehesht, above Refah Bank, Amirkasri Building, 4th floor. Phone: 09307916968.",
      href: "/en/contact",
    },
    {
      id: "services",
      keywords: ["services", "treatment", "gynecology", "specialist"],
      title: "Specialist services",
      content:
        "Services include gynecologic consultation, ultrasound, endometriosis care, ovarian cysts, uterine fibroids, laparoscopy, hysteroscopy, and pelvic adhesion treatment.",
      href: "/en/services",
    },
    {
      id: "articles",
      keywords: ["article", "blog", "education", "learn"],
      title: "Educational articles",
      content:
        "The articles section covers endometriosis, laparoscopy, uterine and ovarian health, and tips for your first visit.",
      href: "/en/articles",
    },
    {
      id: "patient-guides",
      keywords: ["guide", "patient", "preparation", "before", "after"],
      title: "Patient guides",
      content:
        "Patient guides cover preparing for your first visit, understanding endometriosis, pre-laparoscopy preparation, and post-surgery care.",
      href: "/en/patient-guides",
    },
    {
      id: "faq",
      keywords: ["question", "faq", "common"],
      title: "Frequently asked questions",
      content:
        "Common questions about endometriosis, gynecologic surgery, the visit process, and booking are answered on the FAQ page.",
      href: "/en/faq",
    },
    {
      id: "not-medical-advice",
      keywords: ["diagnosis", "visit", "doctor", "replace", "advice"],
      title: "Site information limits",
      content:
        "Site content is for general awareness only and does not replace examination, diagnosis, or treatment advice from a physician.",
      href: "/en/faq",
    },
  ],
};
