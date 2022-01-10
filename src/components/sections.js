import { products, categories } from "../products.js";
import { CardSlider } from "./card-slider.js";
import { Form, FormInput } from "./contact-form.js";

const featuredProducts = products.filter((prod) => prod.featured);

const FeaturedSection = () => {
  return `
  <section  class= 'slider__section' data-aos="fade-right">
  ${CardSlider(
    featuredProducts,
    "Productos Destacados",
    `<a href='#' class='slider__section__link'>Ver catálogo</a>`,
    "featured__slider"
  )}</section>`;
};

const CategoriesSection = () => {
  return `
  <section class='slider__section' data-aos="fade-right">
  
  ${CardSlider(
    categories,
    "Categorias",
    `<a href='#' class='slider__section__link'>Ver todo</a>`,
    "categories__slider"
  )}

  </section>`;
};

const ContactSection = () => {
  return `<section class='contact__section' data-aos="fade-right">
  
  ${Form()}
  </section>`;
};

const SubscribeSection = () => {
  return `
  
  <section  class='subscribe__section' data-aos="fade-right">
  <input type='text' class='subscribe__input'/>
  <button type='submit' class='subscribe__btn'>Suscribirse</button>
  </section>
  

`;
};

export { FeaturedSection, CategoriesSection, ContactSection, SubscribeSection };
