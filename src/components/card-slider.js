import { HomeCard } from "./cards.js";
import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";
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

export { CardSlider, initializeSlider };
