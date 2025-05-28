// --- Weather Section ---
const weatherBox = document.getElementById("weather-box");
const forecastBox = document.getElementById("forecast-box");
const apiKey = "87fe5d820c308a9e65cb7a79127b3edf"; // User's API key
const city = "Lagos"; // Or your chamber's city

async function getWeather() {
  try {
    // Current weather
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const weatherData = await weatherRes.json();
    weatherBox.innerHTML = `
      <p><strong>${Math.round(weatherData.main.temp)}&deg;C</strong> - ${
      weatherData.weather[0].description
    }</p>
      <p>Humidity: ${weatherData.main.humidity}%</p>
      <p>Wind: ${Math.round(weatherData.wind.speed)} m/s</p>
    `;
    // 3-day forecast
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    const forecastData = await forecastRes.json();
    // Get one forecast per day (at 12:00)
    const days = {};
    forecastData.list.forEach((item) => {
      if (item.dt_txt.includes("12:00:00")) {
        const date = new Date(item.dt_txt);
        days[date.toLocaleDateString(undefined, { weekday: "short" })] =
          Math.round(item.main.temp);
      }
    });
    let html = "";
    Object.entries(days)
      .slice(0, 3)
      .forEach(([day, temp]) => {
        html += `<p><strong>${day}:</strong> ${temp}&deg;C</p>`;
      });
    forecastBox.innerHTML = html;
  } catch (e) {
    weatherBox.innerHTML = "<p>Weather unavailable.</p>";
    forecastBox.innerHTML = "";
  }
}

// --- Spotlights Section ---
const spotlights = document.getElementById("spotlights");
async function getSpotlights() {
  const res = await fetch("data/members.json");
  const members = await res.json();
  // Filter gold/silver
  const goldSilver = members.filter(
    (m) => m.membership === 2 || m.membership === 3
  );
  // Shuffle and pick 2 or 3
  goldSilver.sort(() => Math.random() - 0.5);
  const count = Math.floor(Math.random() * 2) + 2; // 2 or 3
  goldSilver.slice(0, count).forEach((member) => {
    const div = document.createElement("div");
    div.className = "member-card";
    div.style.flex = "1 1 220px";
    div.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h4>${member.name}</h4>
      <p>${member.description}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p><em>${member.membership === 3 ? "Gold" : "Silver"} Member</em></p>
    `;
    spotlights.appendChild(div);
  });
}

// --- Footer Dates ---
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// --- Init ---
getWeather();
getSpotlights();
