document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mainNav = document.getElementById("mainNav");

  // Toggle menu on button click
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", mainNav.classList.contains("show"));
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !mainNav.contains(e.target)) {
      mainNav.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
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
