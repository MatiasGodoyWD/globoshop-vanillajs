import { HomeCard } from "./components/cards.js";
import { Header, barsMenuHandler } from "./components/header.js";
import { Hero } from "./components/hero.js";
import { CardSlider } from "./components/card-slider.js";
import { products } from "./products.js";
import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";
import { LatestSection } from "./components/sections.js";
const root = document.querySelector(".root");

const main = () => {
  root.innerHTML = `${Header()} ${Hero()}`;

  const barsMenu = document.querySelector("#navbar__bars");
  barsMenu.addEventListener("click", barsMenuHandler);
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

main();
