document.addEventListener("DOMContentLoaded", () => {
  const mainNav = document.getElementById("mainNav");
  const hamburgerBtn = document.getElementById("hamburgerBtn");

  // Toggle menu on hamburger button click
  hamburgerBtn.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    hamburgerBtn.setAttribute(
      "aria-expanded",
      mainNav.classList.contains("show")
    );
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburgerBtn.contains(e.target) && !mainNav.contains(e.target)) {
      mainNav.classList.remove("show");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Set active link
  const currentPath = window.location.pathname;
  const links = mainNav.getElementsByTagName("a");

  for (const link of links) {
    if (
      link.getAttribute("href") === currentPath ||
      (currentPath.endsWith("/") && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  }
});
