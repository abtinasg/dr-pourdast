/**
 * Doctor introduction section content.
 *
 * NOTE: Biography text must be reviewed and approved by the doctor
 * before final publication.
 *
 * @typedef {Object} CredentialItem
 * @property {string} title
 * @property {string} icon - Inline SVG markup
 */

/** @type {Object} */
var DOCTOR_INTRODUCTION = {
  id: "about",
  eyebrow: "About the Physician",
  title: "About Dr. Tahereh Pordast",
  biography: [
    "Dr. Tahereh Pordast is an obstetrician-gynecologist with an advanced fellowship in gynecologic laparoscopy. Her main focus is the diagnosis and treatment of endometriosis, uterine and ovarian conditions, and minimally invasive gynecologic surgery.",
    "She is a professor at Shiraz University of Medical Sciences and combines clinical practice with teaching and research in gynecology. Her approach centers on careful patient assessment and choosing the least invasive treatment.",
  ],
  imageAlt: "Photo of Dr. Tahereh Pordast, obstetrician-gynecologist",
  videoSrc: "/assets/videos/doctor-intro.mp4",
  videoPoster: "/assets/images/videocover.PNG",
  videoLabel: "Introduction video of Dr. Tahereh Pordast",
  videoPlayLabel: "Watch video",
  credentials: [
    {
      title: "Fellowship in Gynecologic Laparoscopy",
      icon: MEDICAL_ICONS.fellowship,
    },
    {
      title: "Professor at Shiraz University of Medical Sciences",
      icon: MEDICAL_ICONS.university,
    },
    {
      title: "Specialist diagnosis and treatment of endometriosis",
      icon: MEDICAL_ICONS.endometriosisFocus,
    },
    {
      title: "Medical License No. 90566",
      icon: MEDICAL_ICONS.medicalLicense,
    },
  ],
  ctas: {
    primary: {
      text: "View academic & professional background",
      href: "/en/about",
      source: "doctor-section",
    },
  },
};
