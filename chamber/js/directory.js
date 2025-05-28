const membersContainer = document.getElementById("members");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

async function getMembers() {
  const response = await fetch("data/members.json");
  const members = await response.json();
  displayMembers(members, "grid");
}

function displayMembers(members, view) {
  membersContainer.innerHTML = "";
  membersContainer.className = view;
  members.forEach((member) => {
    let card = document.createElement("div");
    card.className = "member-card";
    if (view === "grid") {
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h2>${member.name}</h2>
        <p>${member.description}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;
    } else {
      card.innerHTML = `
        <h2>${member.name}</h2>
        <p>${member.description}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;
    }
    membersContainer.appendChild(card);
  });
}

gridBtn.addEventListener("click", () => {
  fetch("data/members.json")
    .then((res) => res.json())
    .then((data) => displayMembers(data, "grid"));
});
listBtn.addEventListener("click", () => {
  fetch("data/members.json")
    .then((res) => res.json())
    .then((data) => displayMembers(data, "list"));
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

getMembers();
