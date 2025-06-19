// form-action.js (ES Module)
import { setupNav } from "./nav.js";
document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  const params = new URLSearchParams(window.location.search);
  const formData = document.getElementById("form-data");
  formData.innerHTML = `<h2>Submitted Recipe</h2>
    <ul>
      ${Array.from(params.entries())
        .map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`)
        .join("")}
    </ul>`;
});
