import { addToCart, sizeOptionsHandler } from "./components/cards.js";
import { filterHandler, filterMenuHandler } from "./components/filter-bar.js";
import {
  ProductsHeader,
  barsMenuHandler,
  menuScrollHandler,
  categoriesRedirectionHandler,
  productsbarsMenuHandler,
} from "./components/header.js";
import { FiltersSection, ProductGridSection } from "./components/sections.js";
import { products } from "./products.js";

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
  const prodCardBTN = document.querySelector(".product__card__info-BTN");

  const orderSelect = document.querySelector("#order__select");
  const elementSelect = document.querySelector("#element__select");
  const priceSelect = document.querySelector("#price__select");
  const filterTab = document.querySelector(".filter__tab");
  barsMenu.addEventListener("click", productsbarsMenuHandler);
  navigationMenu.addEventListener("click", categoriesRedirectionHandler);
  filterTab.addEventListener("click", filterMenuHandler);
  prodGrid.addEventListener("click", sizeOptionsHandler);

  orderSelect.addEventListener("change", () => {
    filterHandler(prods);
  });
  elementSelect.addEventListener("change", () => {
    filterHandler(prods);
  });
  priceSelect.addEventListener("change", () => {
    filterHandler(prods);
  });

  menuScrollHandler(barsMenu, navigationMenu, navbarMenu);
  prodGrid.addEventListener("click", addToCart);
};

productsInit(products);

export { productsInit };
