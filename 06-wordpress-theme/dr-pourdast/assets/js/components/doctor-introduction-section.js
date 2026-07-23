/**
 * Renders the doctor introduction section from DOCTOR_INTRODUCTION data.
 */
(function () {
  "use strict";

  var mount = document.getElementById("doctor-intro-mount");
  if (!mount || typeof DOCTOR_INTRODUCTION === "undefined") return;
  if (typeof renderAppointmentLink === "undefined") return;

  var data = DOCTOR_INTRODUCTION;
  var titleId = "doctor-intro-title";
  var videoSrc = data.videoSrc || "/assets/videos/doctor-intro.mp4";
  var videoLabel = data.videoLabel || data.imageAlt || data.title;
  var videoPlayLabel = data.videoPlayLabel || "مشاهده ویدیو";

  var bioHtml = data.biography
    .map(function (paragraph) {
      return "<p>" + paragraph + "</p>";
    })
    .join("");

  var credentialsHtml = data.credentials
    .map(function (item) {
      return renderCredentialItem(item);
    })
    .join("");

  mount.outerHTML =
    '<section class="doctor-intro section" id="' +
    data.id +
    '" aria-labelledby="' +
    titleId +
    '">' +
    '<div class="container">' +
    '<div class="doctor-intro__grid">' +
    '<div class="doctor-intro__visual">' +
    '<figure class="doctor-intro__video-frame">' +
    '<video class="doctor-intro__video" id="doctor-intro-video" playsinline preload="metadata" poster="' +
    (data.videoPoster || "/assets/images/videocover.jpg") +
    '">' +
    '<source src="' +
    videoSrc +
    '" type="video/mp4">' +
    "</video>" +
    '<button type="button" class="doctor-intro__play" id="doctor-intro-play" aria-label="' +
    videoPlayLabel +
    '">' +
    '<svg class="doctor-intro__play-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="M9 7.5v9l8-4.5-8-4.5z" fill="currentColor"/>' +
    "</svg>" +
    '<span class="doctor-intro__play-label">' +
    videoPlayLabel +
    "</span>" +
    "</button>" +
    '<figcaption class="sr-only">' +
    videoLabel +
    "</figcaption>" +
    "</figure>" +
    "</div>" +
    '<div class="doctor-intro__content">' +
    '<header class="section-header section-header--compact">' +
    '<p class="section-header__eyebrow">' +
    data.eyebrow +
    "</p>" +
    '<h2 class="section-header__title" id="' +
    titleId +
    '">' +
    data.title +
    "</h2>" +
    "</header>" +
    '<div class="doctor-intro__bio">' +
    bioHtml +
    "</div>" +
    '<ul class="credential-list" aria-label="اعتبارنامه‌های علمی">' +
    credentialsHtml +
    "</ul>" +
    '<div class="doctor-intro__actions">' +
    '<div class="btn-group">' +
    '<a href="' +
    (data.ctas.primary.href || "/about") +
    '" class="btn btn--primary">' +
    data.ctas.primary.text +
    "</a>" +
    renderClinicContactLink(data.ctas.primary.source + "-contact") +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</section>";

  var video = document.getElementById("doctor-intro-video");
  var playButton = document.getElementById("doctor-intro-play");
  if (!video || !playButton) return;

  function hidePlayButton() {
    playButton.hidden = true;
    video.setAttribute("controls", "");
  }

  function showPlayButton() {
    if (!video.paused) return;
    playButton.hidden = false;
  }

  playButton.addEventListener("click", function () {
    hidePlayButton();
    var playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {
        showPlayButton();
        video.removeAttribute("controls");
      });
    }
  });

  video.addEventListener("play", hidePlayButton);
  video.addEventListener("pause", showPlayButton);
  video.addEventListener("ended", showPlayButton);
})();
