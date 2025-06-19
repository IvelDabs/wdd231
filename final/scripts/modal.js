// modal.js (ES Module)
export function setupModal() {
  const modal = document.getElementById("recipe-modal");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (modal.open && e.key === "Escape") closeModal();
  });
}

export function openModal(recipe) {
  const modal = document.getElementById("recipe-modal");
  modal.innerHTML = `
    <article class="modal-content">
      <button class="close-modal" aria-label="Close">&times;</button>
      <h2>${recipe.name}</h2>
      <img src="images/${recipe.image}" alt="${
    recipe.name
  }" loading="lazy" width="300" height="200">
      <p>${recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}</ul>
      <h3>Instructions</h3>
      <p>${recipe.instructions}</p>
    </article>
  `;
  modal.showModal();
  modal.querySelector(".close-modal").focus();
  modal.querySelector(".close-modal").addEventListener("click", closeModal);
}

export function closeModal() {
  const modal = document.getElementById("recipe-modal");
  modal.close();
}
