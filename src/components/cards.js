import { products } from "../products.js";

const HomeCard = (product) => {
  const { img, price, name } = product;
  return `
  <div class="home__card">
  <img
    src="${img}"
    alt="${name}"
    class="home__card__product"
  />
  <div class="home__card__info">
    <h2 class="home__card__info-title">${name}</h2>
    <p class="home__card__info-price">$${price}</p>
  </div>
</div>
  `;
};

export { HomeCard };
