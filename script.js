/* ================================================================
   LOKENDRA PORTFOLIO — JAVASCRIPT
   ---------------------------------------------------------------
   This site intentionally uses very little JavaScript.
   The page is primarily HTML + CSS so it remains easy to understand
   and maintain without React.
   ================================================================ */

const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
const heroArt = document.getElementById("heroArt");
const orb = heroArt ? heroArt.querySelector(".orb") : null;

/* ================================================================
   NAVIGATION — add glass background after scrolling
   ================================================================ */
window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("scrolled", window.scrollY > 25);
  },
  { passive: true }
);

/* ================================================================
   MOBILE MENU
   ================================================================ */
if (menu && navLinks) {
  menu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  /* Close the menu after selecting any navigation link. */
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

/* ================================================================
   HERO MOUSE PARALLAX
   Small movement makes the CSS orb feel interactive.
   ================================================================ */
if (heroArt && orb) {
  document.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    orb.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
  });
}

/* ================================================================
   IMAGE FALLBACK
   If assets/profile.jpg does not exist yet, hide the broken-image
   icon and show the abstract "YOUR PHOTO" placeholder.
   ================================================================ */
const profileImage = document.querySelector(".profile-photo");
const photoPlaceholder = document.querySelector(".photo-placeholder");

if (profileImage && photoPlaceholder) {
  profileImage.addEventListener("error", () => {
    profileImage.style.display = "none";
    photoPlaceholder.style.display = "grid";
  });

  profileImage.addEventListener("load", () => {
    photoPlaceholder.style.display = "none";
  });
}