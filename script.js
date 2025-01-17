// Use the history object to navigate to the history page
function goToPage(page) {
  window.location.href = page; // This goes back one page in the history
}

// video play and close

// ----------------------------------------------------
function playVideo() {
  var video = document.getElementById("myVideo"); // Use the actual ID of your video element
  var clip = document.querySelector(".clip");

  video.play();
  clip.classList.add("active");
}

function closeVideo() {
  var video = document.getElementById("myVideo"); // Use the actual ID of your video element
  var clip = document.querySelector(".clip");

  video.pause();
  clip.classList.remove("active");
}
// ---------------------------------------------------

// end

// remove  watermark
// document.addEventListener("DOMContentLoaded", () => {
//   var disclaimer = document.querySelector("img[alt='www.000webhost.com']");
//   if (disclaimer) {
//     disclaimer.remove();
//   }
// });

// AOS smooth
/*
var loader = document.getElementById("preloader");
var navbar = document.getElementById("preloadnav");

window.addEventListener("load", function () {
  loader.style.display = "none";
  navbar.classList.add("fixed-top");
});
*/

var loader = document.getElementById("preloader");
var navbar = document.getElementById("preloadnav");

document.addEventListener("DOMContentLoaded", function () {
  loader.style.display = "none";
  navbar.classList.add("fixed-top");
});
