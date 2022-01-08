import { HomeCard } from "./components/cards.js";
import { Header, barsMenuHandler } from "./components/header.js";
import { Hero } from "./components/hero.js";
import { CardSlider } from "./components/card-slider.js";
import { products } from "./products.js";
import {
  FeaturedSection,
  CategoriesSection,
  initializeSlider,
} from "./components/sections.js";
const root = document.querySelector(".root");

const main = () => {
  root.innerHTML = `${Header()}${Hero()}${FeaturedSection()}${CategoriesSection()}`;

  const barsMenu = document.querySelector("#navbar__bars");
  barsMenu.addEventListener("click", barsMenuHandler);
  initializeSlider("#featured__slider");
  initializeSlider("#categories__slider");
};

main();
