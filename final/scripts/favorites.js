// favorites.js (ES Module)
import { setupNav } from "./nav.js";
import { openModal, setupModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  setupModal();
  renderFavorites();
});

async function renderFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const res = await fetch("recipes.json");
  const recipes = await res.json();
  const favRecipes = recipes.filter((r) => favorites.includes(r.id));
  const list = document.getElementById("favorites-list");
  if (favRecipes.length === 0) {
    list.innerHTML = "<p>You have no favorite recipes yet.</p>";
    return;
  }
  list.innerHTML = favRecipes
    .map(
      (recipe) => `
    <article class="recipe-card">
      <img src="images/${recipe.image}" alt="${recipe.name}" loading="lazy" width="200" height="150">
      <h2>${recipe.name}</h2>
      <p>${recipe.description}</p>
      <button class="details-btn" data-id="${recipe.id}">Details</button>
      <button class="fav-btn" data-id="${recipe.id}">★ Remove</button>
    </article>
  `
    )
    .join("");
  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("details-btn")) {
      const id = +e.target.dataset.id;
      const recipe = favRecipes.find((r) => r.id === id);
      openModal(recipe);
    } else if (e.target.classList.contains("fav-btn")) {
      const id = +e.target.dataset.id;
      const newFavs = favorites.filter((f) => f !== id);
      localStorage.setItem("favorites", JSON.stringify(newFavs));
      renderFavorites();
    }
  });
}
