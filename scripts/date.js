document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Set last modified date
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modified: ${document.lastModified}`;
});
