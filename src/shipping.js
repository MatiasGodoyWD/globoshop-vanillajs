import { ProductCard } from "./components/cards.js";
import {
  ProductsHeader,
  menuScrollHandler,
  categoriesRedirectionHandler,
  productsbarsMenuHandler,
} from "./components/header.js";
import { ShippingSection } from "./components/sections.js";
import { Footer } from "./components/footer.js";

const root = document.querySelector(".root");

let cart = JSON.parse(localStorage.getItem("cart")) || {
  products: [],
  quantity: 0,
  total: 0,
};
localStorage.setItem("cart", JSON.stringify(cart));

const shippingInit = () => {
  root.innerHTML = `
${ProductsHeader()}
<main>
${ShippingSection()}
</main>
${Footer()}
`;
  const barsMenu = document.querySelector("#navbar__bars");
  const navbarMenu = document.querySelector(".navbar__menu");
  const navigationMenu = document.querySelector(".navbar__navigation");
  barsMenu.addEventListener("click", productsbarsMenuHandler);
  navigationMenu.addEventListener("click", categoriesRedirectionHandler);
  menuScrollHandler(barsMenu, navigationMenu, navbarMenu);
};

shippingInit();
