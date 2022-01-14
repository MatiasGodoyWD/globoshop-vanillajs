import { products, categories } from "../products.js";
import { CardSlider } from "./card-slider.js";
import { Form } from "./contact-form.js";
import { FilterBar } from "./filter-bar.js";
import { SubscribeComponent } from "./subscribe.js";
import { HomeCard, ProductCard } from "./cards.js";

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
  <div class='filter__section'> 
    ${FilterBar(activeProducts)}
  </div>
  `;
};

const renderizeProducts = (activeProducts) => {
  return `
    ${activeProducts.map((prod) => ProductCard(prod)).join("")}
    `;
};

const ProductGridSection = (activeProducts) => {
  return `
    <div class='product-grid__section' data-aos="fade-right">
    ${
      !activeProducts.length
        ? `<p class'empty__grid'>No existen productos que cumplan con los criterios seleccionados. Por favor, modifique sus criterios de selección.</p>`
        : renderizeProducts(activeProducts)
    }
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
};
