import { products, categories } from "../products.js";
import { CardSlider } from "./card-slider.js";
import { Form } from "./contact-form.js";
import { SubscribeComponent } from "./subscribe.js";

const featuredProducts = products.filter((prod) => prod.featured);

const FeaturedSection = () => {
  return `
  <section  class= 'slider__section' id='featured__section' data-aos="fade-right">
  ${CardSlider(
    featuredProducts,
    "Productos Destacados",
    `<button href='#' class='slider__section__button'>Ver catálogo</button>`,
    "featured__slider"
  )}</section>`;
};

const CategoriesSection = () => {
  return `
  <section class='slider__section' id='categories__section' data-aos="fade-right">
  
  ${CardSlider(
    categories,
    "Categorias",
    `<button href='#' class='slider__section__button'>Ver todo</button>`,
    "categories__slider"
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

export { FeaturedSection, CategoriesSection, ContactSection, SubscribeSection };
