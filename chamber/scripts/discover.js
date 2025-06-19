// discover.js
// Fetches discover-items.json and builds cards, handles visit message

document.addEventListener("DOMContentLoaded", () => {
  // Visitor message logic
  const visitMsg = document.getElementById("visit-message");
  const lastVisit = localStorage.getItem("discoverLastVisit");
  const now = Date.now();
  let message = "";
  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    if (days < 1) {
      message = "Back so soon! Awesome!";
    } else if (days === 1) {
      message = "You last visited 1 day ago.";
    } else {
      message = `You last visited ${days} days ago.`;
    }
  }
  visitMsg.textContent = message;
  localStorage.setItem("discoverLastVisit", now);

  // Fetch and display cards
  fetch("data/discover-items.json")
    .then((res) => res.json())
    .then((items) => {
      const cards = document.getElementById("discover-cards");
      cards.innerHTML = "";
      items.forEach((item, idx) => {
        const card = document.createElement("article");
        card.className = "discover-card";
        card.innerHTML = `
          <h2>${item.name}</h2>
          <figure>
            <img src="images/${item.image.replace(".webp", ".jpg")}" alt="${
          item.name
        }" width="300" height="200" loading="lazy">
            <figcaption>${item.name}</figcaption>
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button aria-label="Learn more about ${item.name}">Learn More</button>
        `;
        cards.appendChild(card);
      });
    });
});
