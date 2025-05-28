window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const summary = document.getElementById("thankyou-summary");
  if (summary) {
    summary.innerHTML = `
      <ul>
        <li><strong>First Name:</strong> ${params.get("firstName") || ""}</li>
        <li><strong>Last Name:</strong> ${params.get("lastName") || ""}</li>
        <li><strong>Email:</strong> ${params.get("email") || ""}</li>
        <li><strong>Mobile Phone:</strong> ${params.get("phone") || ""}</li>
        <li><strong>Business/Organization Name:</strong> ${
          params.get("organization") || ""
        }</li>
        <li><strong>Submitted:</strong> ${
          params.get("timestamp")
            ? new Date(params.get("timestamp")).toLocaleString()
            : ""
        }</li>
      </ul>
    `;
  }
  // Footer year and last modified
  const year = document.getElementById("year");
  const lastMod = document.getElementById("lastModified");
  if (year) year.textContent = new Date().getFullYear();
  if (lastMod) lastMod.textContent = document.lastModified;
});
