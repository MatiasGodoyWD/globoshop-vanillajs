// import { products } from "../products.js";
import { HomeCard } from "./cards.js";

const CardSlider = (cards, title, action = "", id) => {
  return `
<h2 class='slider__section__title'>${title}</h2>
<div class="swiper__container">
<div class="swiper-button-prev" id=${id + "-prev"}></div>
<div class="swiper-button-next" id=${id + "-next"}></div>

<div class="swiper" id=${id}>

  <div class="swiper-wrapper">

    ${cards
      .map((card) => {
        {
          return `<div class="swiper-slide">${HomeCard(card)}</div>`;
        }
      })
      .join("")}
  </div>
  </div>
  </div>
  <div class="swiper-pagination" id=${id + "-pagination"}></div>
  ${action}
</div>

`;
};

export { CardSlider };
