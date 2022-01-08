import { products } from "../products.js";

const HomeCard = (product) => {
  const { img, name } = product;
  return `
  <div class="home__card">
  <img
    src="${img}"
    alt="${name}"
    class="home__card__product"
  />
  <div class="home__card__info">
    <h2 class="home__card__info-title">${
      name.charAt(0).toUpperCase() + name.slice(1)
    }</h2>
    
  </div>
</div>
  `;
};

export { HomeCard };
