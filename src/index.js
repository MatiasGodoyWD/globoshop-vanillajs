import { HomeCard } from "./components/cards.js";
import { Header, barsMenuHandler } from "./components/header.js";
import { Hero } from "./components/hero.js";
import { ImageSlider } from "./components/image-slider.js";
import { products } from "./products.js";

const root = document.querySelector(".root");

const main = () => {
  // root.innerHTML = `${Header()} <main>${Hero()}</main>`;
  ImageSlider(root);
  // const barsMenu = document.querySelector("#navbar__bars");
  // barsMenu.addEventListener("click", barsMenuHandler);
};

main();
