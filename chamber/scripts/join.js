// Set timestamp on page load
window.addEventListener("DOMContentLoaded", () => {
  // Set timestamp
  const ts = document.getElementById("timestamp");
  if (ts) ts.value = new Date().toISOString();

  // Animate membership cards
  document.querySelectorAll(".membership-card").forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.7s, transform 0.7s";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 200 + i * 200);
  });

  // Modal logic
  document.querySelectorAll(".info-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const modalId = btn.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
        modal.focus();
      }
    });
  });
  document.querySelectorAll(".close-modal").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btn.closest(".modal").style.display = "none";
    });
  });
  // Close modal on outside click
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  });

  // Footer year and last modified
  const year = document.getElementById("year");
  const lastMod = document.getElementById("lastModified");
  if (year) year.textContent = new Date().getFullYear();
  if (lastMod) lastMod.textContent = document.lastModified;
});
