import { ProductCard } from "./components/cards.js";
import { quantityHandler } from "./components/cart-product.js";
import {
  ProductsHeader,
  menuScrollHandler,
  categoriesRedirectionHandler,
  productsbarsMenuHandler,
} from "./components/header.js";
import { CartSection } from "./components/sections.js";

const root = document.querySelector(".root");

let cart = JSON.parse(localStorage.getItem("cart")) || {
  products: [],
  quantity: 0,
  total: 0,
};
localStorage.setItem("cart", JSON.stringify(cart));

const cartInit = () => {
  root.innerHTML = `
${ProductsHeader()}

<main>
${CartSection(cart)}
</main>
`;
  const barsMenu = document.querySelector("#navbar__bars");
  const navbarMenu = document.querySelector(".navbar__menu");
  const navigationMenu = document.querySelector(".navbar__navigation");
  const cartGrid = document.querySelector(".cart__grid");
  barsMenu.addEventListener("click", productsbarsMenuHandler);
  navigationMenu.addEventListener("click", categoriesRedirectionHandler);
  menuScrollHandler(barsMenu, navigationMenu, navbarMenu);
  cartGrid.addEventListener("click", quantityHandler);
};

cartInit();

export { cart };
