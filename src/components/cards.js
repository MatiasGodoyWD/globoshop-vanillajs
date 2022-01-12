import { products } from "../products.js";

const HomeCard = (product, className) => {
  const { img, name } = product;

  return `
  
  <div class="home__card ${className}" data-category="${name}">
  <img
    src="${img}"
    alt="${name}"
    
    class="home__card__product"
  />
  <div class="home__card__info" data-category="${name}" >
    <h2 class="home__card__info-title">${
      name.charAt(0).toUpperCase() + name.slice(1)
    }</h2>
    
  </div>
</div>
  `;
};

const sizesList = ["2XS", "XS", "S", "M", "L", "XL", "2XL"];

const ProductCard = (product) => {
  const { img, name, price, category } = product;
  return `
  
  <div class="product__card">
  <img
    src="${img}"
    alt="${name}"
    
    class="product__card__product"
  />
  <div class="product__card__info" >
  <div class='product__card__info-details'>
    <h3 class='product__card__info-category'>${category.toUpperCase()}</h3>
    <h2 class="product__card__info-name">${name.toUpperCase()}</h2>
    <p class='product__card__info-price'>$${price}</p>
    </div>
    <div class='product__card__info-sizes'>
      <p>Seleccionar talle:</p>
      <div class='product__card__size-options'>${sizesList
        .map((size) => `<span class='size__span'>${size}</span>`)
        .join("")}</div>
      </div>
    <button type='submit' class= 'product__card__info-BTN'>AÑADIR AL CARRITO</button>
  </div>
</div>
  `;
};

export { HomeCard, ProductCard };
