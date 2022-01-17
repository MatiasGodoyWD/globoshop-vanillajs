import { cart } from "../cart.js";
import { products } from "../products.js";

const CartProduct = (product) => {
  return `<div class='cart__product' data-aos='fade-right'>
    <img class='cart__product-img' alt='${product.name}' src='${product.img}'>

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
          <span class='product__quantity-span product__decreaser ${
            product.quantity <= 1 ? "quantity__disabled" : ""
          }' data-id='${product.id}' ><i class="fas fa-minus"></i></span>
          <span class='product__quantity-span'>${product.quantity}</span>
          <span class='product__quantity-span product__increaser' data-id='${
            product.id
          }' ><i class="fas fa-plus"></i></span>
        </div>
      <p class='cart__product-price'>$${product.price * product.quantity}</p>
      </div> 
      <div class='delete__product'  ><i class="fas fa-trash" data-id='${
        product.id
      }'></i></div>
    </div>
    
    
  </div>

  `;
};

const quantityHandler = (e) => {
  const cartTotal = document.querySelector(".cart__total-price");
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

    product.quantity++;
    quantityNode.textContent = product.quantity;
    totalPrice.textContent =
      "$" + Number(product.price) * Number(product.quantity);

    cart.products.push(product);
    cart.total += Number(product.price);
    cartTotal.textContent = "$" + cart.total;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else if (e.target.parentNode.classList.contains("product__decreaser")) {
    const productId = e.target.parentNode.dataset.id;
    const product = cart.products.find((prod) => prod.id === productId);
    const totalPrice = e.target.parentNode.parentNode.nextSibling.nextSibling;
    const quantityNode = e.target.parentNode.nextSibling.nextSibling;
    cart.products = cart.products.filter((prod) => prod.id !== productId);

    if (product.quantity > 1) {
      product.quantity--;
      quantityNode.textContent = product.quantity;
      totalPrice.textContent =
        "$" + Number(product.price) * Number(product.quantity);
      cart.total -= Number(product.price);
      cartTotal.textContent = "$" + cart.total;
      if (product.quantity === 1) {
        e.target.parentNode.disabled = true;
        e.target.classList.add("quantity__disabled");
        e.target.parentNode.classList.add("quantity__disabled");
      }
    }
    cart.products.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
  } else if (e.target.parentNode.classList.contains("delete__product")) {
    if (
      window.confirm(
        "¿Está seguro de que desea eliminar este producto del carrito?"
      )
    ) {
      const product = e.target.dataset.id;
      const removedProduct = cart.products.find((prod) => prod.id === product);
      cart.products = cart.products.filter((prod) => prod.id !== product);
      cart.quantity--;
      cart.total -=
        Number(removedProduct.quantity) * Number(removedProduct.price);
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.reload();
    }
  } else {
    return;
  }
};

export { CartProduct, quantityHandler };

/*


*/
