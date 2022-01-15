import {
  ProductsHeader,
  menuScrollHandler,
  categoriesRedirectionHandler,
  productsbarsMenuHandler,
} from "./components/header.js";

const root = document.querySelector(".root");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
localStorage.setItem("cart", JSON.stringify(cart));

const cartInit = () => {
  root.innerHTML = `
${ProductsHeader()}
<main>

</main> 
`;
  const barsMenu = document.querySelector("#navbar__bars");
  const navbarMenu = document.querySelector(".navbar__menu");
  const navigationMenu = document.querySelector(".navbar__navigation");
  barsMenu.addEventListener("click", productsbarsMenuHandler);
  navigationMenu.addEventListener("click", categoriesRedirectionHandler);
  menuScrollHandler(barsMenu, navigationMenu, navbarMenu);
};

cartInit();

export { cart };
