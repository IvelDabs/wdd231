// directory.js (ES Module)
import { setupNav } from "./nav.js";
import { openModal, closeModal, setupModal } from "./modal.js";

const recipeList = document.getElementById("recipe-list");
const modal = document.getElementById("recipe-modal");
const searchInput = document.getElementById("search");
const typeFilter = document.getElementById("type-filter");
const dietFilter = document.getElementById("diet-filter");

let recipes = [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

async function fetchRecipes() {
  try {
    const res = await fetch("recipes.json");
    recipes = await res.json();
    renderRecipes();
  } catch (err) {
    recipeList.innerHTML = '<p class="error">Failed to load recipes.</p>';
  }
}

function renderRecipes() {
  let filtered = recipes
    .filter((r) =>
      r.name.toLowerCase().includes(searchInput.value.toLowerCase())
    )
    .filter((r) => !typeFilter.value || r.type === typeFilter.value)
    .filter((r) => !dietFilter.value || r.diet.includes(dietFilter.value));
  recipeList.innerHTML = filtered
    .map(
      (recipe) => `
    <article class="recipe-card">
      <img src="images/${recipe.image}" alt="${
        recipe.name
      }" loading="lazy" width="200" height="150">
      <h2>${recipe.name}</h2>
      <p>${recipe.description}</p>
      <button class="details-btn" data-id="${recipe.id}">Details</button>
      <button class="fav-btn" data-id="${recipe.id}">${
        favorites.includes(recipe.id) ? "★" : "☆"
      } Favorite</button>
    </article>
  `
    )
    .join("");
}

function handleRecipeClick(e) {
  if (e.target.classList.contains("details-btn")) {
    const id = +e.target.dataset.id;
    const recipe = recipes.find((r) => r.id === id);
    openModal(recipe);
  } else if (e.target.classList.contains("fav-btn")) {
    const id = +e.target.dataset.id;
    if (favorites.includes(id)) {
      favorites = favorites.filter((f) => f !== id);
    } else {
      favorites.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderRecipes();
  }
}

searchInput.addEventListener("input", renderRecipes);
typeFilter.addEventListener("change", renderRecipes);
dietFilter.addEventListener("change", renderRecipes);
recipeList.addEventListener("click", handleRecipeClick);

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  setupModal();
  fetchRecipes();
});
