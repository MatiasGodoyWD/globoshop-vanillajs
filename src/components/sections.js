import { products } from "../products.js";
import { CardSlider } from "./card-slider.js";

const latestProducts = products.filter((prod) => prod.latest);

const LatestSection = () => {
  return `
    <section class='slider__section'>
    <h2 class='slider__section__title'>Productos Destacados</h2>
    ${CardSlider(latestProducts)}
    <a href='#' class='slider__section__link'>Ver catálogo</a>
    </section>`;
};

export { LatestSection };
