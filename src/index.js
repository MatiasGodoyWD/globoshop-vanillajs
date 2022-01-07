import { Header, barsMenuHandler } from "./components/header.js";
import { Hero } from "./components/hero.js";

const root = document.querySelector(".root");

const main = () => {
  root.innerHTML = `${Header()} ${Hero()}`;
  const barsMenu = document.querySelector("#navbar__bars");
  barsMenu.addEventListener("click", barsMenuHandler);
};

main();
