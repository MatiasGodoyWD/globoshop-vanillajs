import { products, categories } from "../products.js";
import { CardSlider } from "./card-slider.js";
import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

const featuredProducts = products.filter((prod) => prod.featured);

const FeaturedSection = () => {
  return `
  <section class= 'slider__section'>
  ${CardSlider(
    featuredProducts,
    "Productos Destacados",
    `<a href='#' class='slider__section__link'>Ver catálogo</a>`,
    "featured__slider"
  )}</section>`;
};

const CategoriesSection = () => {
  return `
  <section class='slider__section'>
  
  ${CardSlider(
    categories,
    "Categorias",
    `<a href='#' class='slider__section__link'>Ver todo</a>`,
    "categories__slider"
  )}

  </section>`;
};

const initializeSlider = (id) => {
  const swiper = new Swiper(id, {
    // Optional parameters
    centeredSlides: true,
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    direction: "horizontal",
    loop: true,
    pagination: {
      el: `${id + "-pagination"}`,
      type: "bullets",
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: `${id + "-next"}`,
      prevEl: `${id + "-prev"}`,
    },
  });
};

export { FeaturedSection, CategoriesSection, initializeSlider };
