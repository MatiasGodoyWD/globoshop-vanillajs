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
    `<button href='#' class='slider__section__button'>Ver catálogo</button>`,
    "featured__slider"
  )}</section>`;
};

const CategoriesSection = () => {
  return `
  <section class='slider__section' data-aos="fade-right">
  
  ${CardSlider(
    categories,
    "Categorias",
    `<button href='#' class='slider__section__button'>Ver todo</button>`,
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
  <h2 class='slider__section__title'>Suscribite y enterate de las últimas novedades</h2>
  <div class='suscribe__component' >
  <input type='text' class='subscribe__input'/>
  <button type='submit' class='subscribe__btn'>Suscribirse</button>
  </div>
  </section>
  

`;
};

export { FeaturedSection, CategoriesSection, ContactSection, SubscribeSection };
