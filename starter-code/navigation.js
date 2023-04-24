const hamburgerBtn = document.querySelector(".main-nav-panel");
const navToggle = document.querySelector(".mobile-nav-toggle");

/*** Hamoburger Toggle ***/
navToggle.addEventListener("click", () => {
  const visibility = hamburgerBtn.getAttribute("data-visible");
  // If closed - open it
  if (visibility === "false") {
    hamburgerBtn.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    // else close it
    hamburgerBtn.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

/********* Destination Tabs ************/
const destTab = document.getElementsByTagName("li");
const destPage = document.querySelectorAll(".dest-tab");

function myFunction() {}
