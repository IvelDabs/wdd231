document.addEventListener("DOMContentLoaded", () => {
  // Set the current year in the footer
  const currentYear = new Date().getFullYear();
  const yearSpan = document.querySelector("footer p:first-child");
  yearSpan.innerHTML = yearSpan.innerHTML.replace("2025", currentYear);

  // Set the last modified date
  const lastModified = document.getElementById("lastModified");
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  lastModified.textContent = `Last Update: ${new Date(
    document.lastModified
  ).toLocaleString("en-US", options)}`;
});
