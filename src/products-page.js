import { sizeOptionsHandler } from "./components/cards.js";
import { filterHandler } from "./components/filter-bar.js";
import {
  ProductsHeader,
  barsMenuHandler,
  menuScrollHandler,
  categoriesRedirectionHandler,
} from "./components/header.js";
import { FiltersSection, ProductGridSection } from "./components/sections.js";
import { products, activeProducts } from "./products.js";

const root = document.querySelector(".root");

const productsInit = (prods) => {
  root.innerHTML = `
${ProductsHeader()}
<main>
${FiltersSection(prods)}
${ProductGridSection(prods)}
</main> 
`;
  const barsMenu = document.querySelector("#navbar__bars");
  const navbarMenu = document.querySelector(".navbar__menu");
  const navigationMenu = document.querySelector(".navbar__navigation");
  const prodGrid = document.querySelector(".product-grid__section");

  const orderSelect = document.querySelector("#order__select");
  const elementSelect = document.querySelector("#element__select");
  const priceSelect = document.querySelector("#price__select");

  barsMenu.addEventListener("click", barsMenuHandler);
  navigationMenu.addEventListener("click", categoriesRedirectionHandler);

  prodGrid.addEventListener("click", sizeOptionsHandler);

  orderSelect.addEventListener("change", filterHandler);
  elementSelect.addEventListener("change", filterHandler);
  priceSelect.addEventListener("change", filterHandler);

  menuScrollHandler(barsMenu, navigationMenu, navbarMenu);
};

productsInit(products);

export { productsInit };
