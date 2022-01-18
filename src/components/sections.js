import { products, categories } from "../products.js";
import { CardSlider } from "./card-slider.js";
import { Form } from "./contact-form.js";
import { FilterBar } from "./filter-bar.js";
import { SubscribeComponent } from "./subscribe.js";
import { HomeCard, ProductCard } from "./cards.js";
import { CartProduct } from "./cart-product.js";
const featuredProducts = products.filter((prod) => prod.featured);

const FeaturedSection = () => {
  return `
  <section  class= 'slider__section' id='featured__section' data-aos="fade-right">
  ${CardSlider(
    featuredProducts,
    "Productos Destacados",
    `<a href='../../products.html' class='slider__section__button'>Ver catálogo</a>`,
    "featured__slider",
    ""
  )}</section>`;
};

const CategoriesSection = () => {
  return `
  <section class='slider__section' id='categories__section' data-aos="fade-right">
  
  ${CardSlider(
    categories,
    "Categorias",
    ``,
    "categories__slider",
    "categories__card"
  )}

  </section>`;
};

const ContactSection = () => {
  return `<section class='contact__section' id='contact__section' data-aos="fade-right">
  
  ${Form()}
  </section>`;
};

const SubscribeSection = () => {
  return `
  <section  class='subscribe__section' data-aos="fade-right">
  ${SubscribeComponent()}
  </section>
  

`;
};

const redirectionHandler = (e) => {
  e.preventDefault();
  if (
    e.target.parentNode.classList.contains("home__card") ||
    e.target.parentNode.classList.contains("home__card__info")
  ) {
    const category = e.target.parentNode.dataset.category;
    window.location.href = `../products/${category}.html`;
  }
};

const FiltersSection = (activeProducts) => {
  return `
  <section class='filter__section'> 
    ${FilterBar(activeProducts)}
  </section>
  `;
};

const renderizeProducts = (activeProducts) => {
  return `
    ${activeProducts.map((prod) => ProductCard(prod)).join("")}
    `;
};

const ProductGridSection = (activeProducts) => {
  return `
    <section class='product-grid__section' data-aos="fade-right">
    ${
      !activeProducts.length
        ? `<p class'empty__grid'>No existen productos que cumplan con los criterios seleccionados. Por favor, modifique sus criterios de selección.</p>`
        : renderizeProducts(activeProducts)
    }
    </section>
  `;
};

const CartSection = (cartProducts) => {
  return `<section class='cart__section' data-aos='fade-right'>
  <h2 class='cart__title'>Carrito de compras</h2>
  <div class='cart__grid'>
  ${
    cartProducts.products.length === 0
      ? `<p class='empty__cart__message'>Tu carrito de compras está vacio. <a href='../../products.html'>¡Empezá a comprar ya mismo!</a></p>`
      : cartProducts.products.map((prod) => CartProduct(prod)).join("")
  }
  <div class='cart__total' data-aos='fade-right'><span class='cart__total-tag'>Total:</span><span class='cart__total-price'>$${
    cartProducts.total
  }</span></div>
  <div class='cart__button-container' data-aos='fade-right'><button class='cart__button' type='submit'>Continuar compra</button></div>
  </div>

  </section>`;
};

const ShippingSection = () => {
  return `<div class='cart__section' data-aos='fade-right'>
    <h2 class='cart__title'>Datos de la compra</h2>
   
    </div>
  
    `;
};

export {
  FeaturedSection,
  CategoriesSection,
  ContactSection,
  SubscribeSection,
  redirectionHandler,
  FiltersSection,
  ProductGridSection,
  renderizeProducts,
  ShippingSection,
  CartSection,
};
