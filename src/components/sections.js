import { products } from "../products.js";
import { CardSlider } from "./card-slider.js";

const featuredProducts = products.filter((prod) => prod.featured);

const FeaturedSection = () => {
  return `
    <section class='slider__section'>
    
    ${CardSlider(
      featuredProducts,
      "Productos Destacados",
      `<a href='#' class='slider__section__link'>Ver catálogo</a>`
    )}

    </section>`;
};

export { FeaturedSection };
