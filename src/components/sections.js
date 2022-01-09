import { products, categories } from "../products.js";
import { CardSlider } from "./card-slider.js";

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
  return `<div class='contact__section' data-aos="fade-right"></div`;
};

export { FeaturedSection, CategoriesSection, ContactSection };
