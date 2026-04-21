import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
    ${header(state)}
    ${nav(store.nav)}
    ${main(state)}
    ${footer()}
  `;
  router.updatePageLinks();
  attachMenuToggle();
  loadWeather();
}

function attachMenuToggle() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("hidden--mobile");
  });
}

function loadWeather() {
  const weatherDiv = document.querySelector("#weather");
  if (!weatherDiv) return;

  const city = "St. Louis";
  const key = process.env.OPENWEATHER_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherDiv.innerHTML = `
        <p class="weather-temp">${Math.round(data.main.temp)}&deg;F</p>
        <p class="weather-desc">${data.weather[0].description}</p>
        <p class="weather-city">${data.name}</p>
      `;
    })
    .catch((error) => {
      weatherDiv.innerHTML = "Weather unavailable right now.";
      console.error("Weather fetch failed:", error);
    });
}

router.on({
  "/": () => render(),
  "/:view": (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    if (view in store) {
      render(store[view]);
    } else {
      render(store.viewNotFound);
    }
  }
}).resolve();
