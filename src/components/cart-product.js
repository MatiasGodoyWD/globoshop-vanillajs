import { cart } from "../cart.js";

const CartProduct = (product) => {
  return `<div class='cart__product'>
    <img class='cart__product-img' alt='${product.name}' src='${product.img}'>
    <div class='cart__product__container'>
      <div class='cart__product-info'>
        <div class='cart__product-data'>
          <h3 class='cart__product-title'>${product.name}</h3>
          <p class='cart__product-size'>Talle: ${product.size} / Categoría: ${
    product.category.charAt(0).toUpperCase() + product.category.slice(1)
  }
          </p>
      </div>
      <div class='cart__product-sale'>
        <div class='cart__product-quantity'>
          <button class='product__quantity-span product__decreaser ${
            product.quantity <= 1 ? "quantity__disabled" : ""
          }' data-id='${product.id}' ><i class="fas fa-minus"></i></button>
          <span class='product__quantity-span'>${product.quantity}</span>
          <button class='product__quantity-span product__increaser ${
            product.quantity >= 10 ? "quantity__disabled" : ""
          }' data-id='${product.id}' ><i class="fas fa-plus"></i></button>
        </div>
      <p class='cart__product-price'>$${product.price * product.quantity}</p>
      </div> 
    </div>
    <div class='cart__product-actions'>
    <p  class='cart__product-btn'>Eliminar</p>
    <a href='../../products/${
      product.category + ".html"
    }' class='cart__product-btn'>Ver categoría</a>
    <a href='../../products.html' class='cart__product-btn'>Ver más productos</a>
    
    </div>
    </div>
  </div>

  `;
};

const quantityHandler = (e) => {
  if (e.target.parentNode.classList.contains("product__increaser")) {
    const productId = e.target.parentNode.dataset.id;
    const product = cart.products.find((prod) => prod.id === productId);
    const totalPrice = e.target.parentNode.parentNode.nextSibling.nextSibling;
    const quantityNode = e.target.parentNode.previousSibling.previousSibling;
    const minusBTN =
      e.target.parentNode.previousSibling.previousSibling.previousSibling
        .previousSibling;

    cart.products = cart.products.filter((prod) => prod.id !== productId);
    if (minusBTN.classList.contains("quantity__disabled")) {
      minusBTN.classList.remove("quantity__disabled");
      minusBTN.disabled = false;
    }
    if (product.quantity < 10) {
      product.quantity++;
      quantityNode.textContent = product.quantity;
      totalPrice.textContent =
        "$" + Number(product.price) * Number(product.quantity);
      if (product.quantity === 10) {
        e.target.parentNode.disabled = true;
        e.target.classList.add("quantity__disabled");
        e.target.parentNode.classList.add("quantity__disabled");
      }
    }
    cart.products.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else if (e.target.parentNode.classList.contains("product__decreaser")) {
    const productId = e.target.parentNode.dataset.id;
    const product = cart.products.find((prod) => prod.id === productId);
    const totalPrice = e.target.parentNode.parentNode.nextSibling.nextSibling;
    const plusBTN =
      e.target.parentNode.nextSibling.nextSibling.nextSibling.nextSibling;
    const quantityNode = e.target.parentNode.nextSibling.nextSibling;
    cart.products = cart.products.filter((prod) => prod.id !== productId);
    if (plusBTN.classList.contains("quantity__disabled")) {
      plusBTN.classList.remove("quantity__disabled");
      plusBTN.disabled = false;
    }

    if (product.quantity > 1) {
      product.quantity--;
      quantityNode.textContent = product.quantity;
      totalPrice.textContent =
        "$" + Number(product.price) * Number(product.quantity);
      if (product.quantity === 1) {
        e.target.parentNode.disabled = true;
        e.target.classList.add("quantity__disabled");
        e.target.parentNode.classList.add("quantity__disabled");
      }
    }
    cart.products.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    return;
  }
};

export { CartProduct, quantityHandler };

/*


*/
