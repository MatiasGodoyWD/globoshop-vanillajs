import { ProductCard } from "./components/cards.js";
import {
  ProductsHeader,
  menuScrollHandler,
  categoriesRedirectionHandler,
  productsbarsMenuHandler,
  ShippingHeader,
} from "./components/header.js";
import { ShippingSection } from "./components/sections.js";
import { Footer } from "./components/footer.js";
import { shippingSubmitHandler } from "./components/shipping-form.js";
import { ShippingSuccess } from "./components/success-message.js";

const root = document.querySelector(".root");

let cart = JSON.parse(localStorage.getItem("cart")) || {
  products: [],
  quantity: 0,
  total: 0,
};
localStorage.setItem("cart", JSON.stringify(cart));

const shippingInit = () => {
  root.innerHTML = `
  ${ShippingSuccess()}
${ShippingHeader()}
<main>
${ShippingSection(cart)}
</main>
${Footer()}
  
`;

  const submitBtn = document.querySelector(".cart__button");
  submitBtn.addEventListener("click", shippingSubmitHandler);
};

shippingInit();
