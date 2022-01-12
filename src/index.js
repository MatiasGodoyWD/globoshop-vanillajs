import {
  LandingHeader,
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
  redirectionHandler,
} from "./components/sections.js";
import { Footer } from "./components/footer.js";
import { contactMessageHandler } from "./components/contact-form.js";
import { subscribeHandler } from "./components/subscribe.js";
import { products } from "./products.js";

const root = document.querySelector(".root");

const main = () => {
  root.innerHTML = `${LandingHeader()}
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
  const contactBTN = document.querySelector(".form__btn");
  const subscribeBTN = document.querySelector(".subscribe__btn");
  const categoriesContainer = document.querySelector("#categories__slider");
  barsMenu.addEventListener("click", barsMenuHandler);
  contactBTN.addEventListener("click", contactMessageHandler);
  subscribeBTN.addEventListener("click", subscribeHandler);

  categoriesContainer.addEventListener("click", redirectionHandler);

  menuScrollHandler(barsMenu, navigationMenu, navbarMenu);
  initializeSlider("#featured__slider");
  initializeSlider("#categories__slider");
};

main();
