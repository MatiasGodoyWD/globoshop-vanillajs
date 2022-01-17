import {
  ProductsHeader,
  menuScrollHandler,
  categoriesRedirectionHandler,
  productsbarsMenuHandler,
} from "./components/header.js";
import { Footer } from "./components/footer.js";
import { ShippingSection } from "./components/sections.js";

const root = document.querySelector(".root");

const shippingInit = () => {
  root.innerHTML = `
  ${ProductsHeader()}

<main>
${ShippingSection}
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
