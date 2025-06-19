// nav.js (ES Module)
export function setupNav() {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
    navLinks.classList.toggle("open");
  });
  // Close nav on link click (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
