// import { products } from "../products.js";
import { HomeCard } from "./cards.js";

const CardSlider = (cards) => {
  return `
<div class="swiper__container">
<div class="swiper-button-prev"></div>
<div class="swiper-button-next"></div>

<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    ${cards
      .map((card) => {
        {
          return `<div class="swiper-slide">${HomeCard(card)}</div>`;
        }
      })
      .join("")}
  </div>
  <div class="swiper-pagination"></div>
</div>

`;
};

export { CardSlider };
