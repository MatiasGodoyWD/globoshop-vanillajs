import { products } from "../src/products.js";
import { productsInit } from "../src/products-page.js";

const main = () => {
  const prods = products.filter((p) => p.category === "juego");
  productsInit(prods);
};

main();
