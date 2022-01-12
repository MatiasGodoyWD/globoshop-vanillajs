import {
  ProductsHeader,
  barsMenuHandler,
  menuScrollHandler,
  categoriesRedirectionHandler,
} from "./components/header.js";
import { FiltersSection, ProductGridSection } from "./components/sections.js";
import { products } from "./products.js";

const root = document.querySelector(".root");
const activeProducts = [...products];
const productsInit = () => {
  root.innerHTML = `
  ${ProductsHeader()}
    <main>
    ${FiltersSection(activeProducts)}
    ${ProductGridSection(activeProducts)}
    </main>`;
  const barsMenu = document.querySelector("#navbar__bars");
  const navbarMenu = document.querySelector(".navbar__menu");
  const navigationMenu = document.querySelector(".navbar__navigation");
  barsMenu.addEventListener("click", barsMenuHandler);
  navigationMenu.addEventListener("click", categoriesRedirectionHandler);
  menuScrollHandler(barsMenu, navigationMenu, navbarMenu);
};

productsInit();
