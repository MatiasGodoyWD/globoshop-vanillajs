import {
  Header,
  barsMenuHandler,
  menuScrollHandler,
} from "./components/header.js";
import { Hero } from "./components/hero.js";
import { initializeSlider } from "./components/card-slider.js";

import {
  FeaturedSection,
  CategoriesSection,
  ContactSection,
  SubscribeSection,
} from "./components/sections.js";
import { Footer } from "./components/footer.js";

const root = document.querySelector(".root");

const main = () => {
  root.innerHTML = `${Header()}
  ${Hero()}
  ${FeaturedSection()}
  ${CategoriesSection()}
  ${ContactSection()}
  ${SubscribeSection()}
  ${Footer()}
  `;

  const barsMenu = document.querySelector("#navbar__bars");
  const navbarMenu = document.querySelector(".navbar__menu");
  const navigationMenu = document.querySelector(".navbar__navigation");
  barsMenu.addEventListener("click", barsMenuHandler);

  menuScrollHandler(barsMenu, navigationMenu, navbarMenu);
  initializeSlider("#featured__slider");
  initializeSlider("#categories__slider");
};

main();
