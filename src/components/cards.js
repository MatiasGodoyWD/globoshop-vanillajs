import { products } from "../products.js";
import { cart } from "../cart.js";
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
  
  <div class="product__card" data-aos="fade-right">
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
      <p>
      <span class='size__error-container'>
      <i class="fas fa-times" ></i>
      </span>
      Seleccionar talle:</p>
      <div class='product__card__size-options'>${sizesList
        .map(
          (size) =>
            `<span class='size__label' data-size='${size}' >${size}</span>`
        )
        .join("")}</div>
      </div>
    <button type='submit' class= 'product__card__info-BTN' data-name='${name}' data-img='${img}' data-price='${price}'>AÑADIR AL CARRITO</button>
  </div>
</div>
  `;
};

const sizeOptionsHandler = (e) => {
  if (e.target.classList.contains("size__label")) {
    if (e.target.classList.contains("size__label-active")) return;
    const sizeSpans = [...e.target.parentNode.querySelectorAll(".size__label")];

    if (
      sizeSpans.some((span) => span.classList.contains("size__label-active"))
    ) {
      const activeSpan = sizeSpans.find((span) =>
        span.classList.contains("size__label-active")
      );
      activeSpan.classList.remove("size__label-active");
    }

    e.target.classList.add("size__label-active");
  }
};

const addToCart = (sizeOptions, prod, sizeError) => {
  const bubble = document.querySelector(".navbar__cart__counter");
  if (
    !sizeOptions.some((span) => span.classList.contains("size__label-active"))
  ) {
    console.log(sizeError);
    sizeError.classList.add("size__error-container-active");
    setTimeout(() => {
      sizeError.classList.remove("size__error-container-active");
    }, 2000);
    return;
  }

  const activeSpan = sizeOptions.find((span) =>
    span.classList.contains("size__label-active")
  );
  const cartProd = {
    name: prod.dataset.name,
    img: prod.dataset.img,
    price: prod.dataset.price,
    size: activeSpan.textContent,
    quantity: 1,
  };
  if (
    cart.products.some(
      (prod) => prod.name === cartProd.name && prod.size === cartProd.size
    )
  ) {
    let equalNameProds = cart.products.filter(
      (prod) => prod.name === cartProd.name
    );

    const updatedProd = equalNameProds.find(
      (prod) => prod.name === cartProd.name && prod.size === cartProd.size
    );

    equalNameProds = equalNameProds.filter(
      (prod) => prod.name === cartProd.name && prod.size !== cartProd.size
    );

    updatedProd.quantity++;
    equalNameProds.push(updatedProd);

    cart.products = cart.products.filter((prod) => prod.name !== cartProd.name);
    cart.products = [...cart.products, ...equalNameProds];
  } else {
    cart.products.push(cartProd);
  }

  cart.quantity++;
  cart.total += Number(cartProd.price);
  localStorage.setItem("cart", JSON.stringify(cart));
  bubble.textContent = cart.quantity;
  bubble.classList.remove("navbar__cart__counter-inactive");
};

const addToCartHandler = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("product__card__info-BTN")) {
    const sizeError =
      e.target.previousSibling.previousSibling.firstChild.nextSibling.firstChild
        .nextSibling;
    const sizeLabel =
      e.target.previousSibling.previousSibling.firstChild.nextSibling
        .nextSibling.nextSibling;
    const sizeOptions = [...sizeLabel.querySelectorAll(".size__label")];
    addToCart(sizeOptions, e.target, sizeError);
  }
};

export { HomeCard, ProductCard, sizeOptionsHandler, addToCartHandler };
