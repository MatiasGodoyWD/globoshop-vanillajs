const CartProduct = (product) => {
  return `<div class='cart__product'>
  <img class='cart__product-img' alt='${product.name}' src='${product.img}'>
  <div class='cart__product-info'>
  <div class='cart__product-data'>
  <h3 class='cart__product-title'>${product.name}</h3>
  <p class='cart__product-size'>Talle: ${product.size} / Categoría: ${
    product.category.charAt(0).toUpperCase() + product.category.slice(1)
  }</p>
  </div>
  <div class='cart__product-actions'>
  <p  class='cart__product-btn'>Eliminar</p>
  <a href='../../products/${
    product.category + ".html"
  }' class='cart__product-btn'>Ver categoría</a>
  <a href='../../products.html' class='cart__product-btn'>Ver más productos</a>
  </div>
  </div>
  </div>`;
};

export { CartProduct };
