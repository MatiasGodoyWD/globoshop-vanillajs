import {
  products,
  activeProducts,
  updateActiveProducts,
  updateLocalStorage,
} from "../products.js";
import { renderizeProducts } from "./sections.js";

const SelectOption = (value) => {
  return `<option value="${value}" >${
    value.charAt(0).toUpperCase() + value.slice(1)
  }</option> `;
};

const FormSelectInput = (name, title, id, options, placeholder) => {
  return ` 
    <div class="form-control-select">
    <label for="${name}" class="select__label">${title}:</label>
  
  <select name="${name}" id="${id}" class="select__input">
  <option value="${placeholder}" selected>${placeholder}</option>
  ${options.map((op) => SelectOption(op)).join("")}
  </select>

  </div>
  `;
};

const orderOptions = ["Mayor precio", "Menor precio", "Nombre"];

const typeOptions = (activeProducts) => {
  const typeList = [];
  activeProducts.forEach((prod) =>
    !typeList.includes(prod.type) ? typeList.push(prod.type) : ""
  );
  return typeList;
};

const priceOptions = [
  "Mas de $10.000",
  "Entre $5000 y $10000",
  "Menos de $5000",
];

const FilterBar = (activeProducts) => {
  return `
    ${FormSelectInput(
      "order",
      "Ordenar por",
      "order__select",
      orderOptions,
      "Predeterminado"
    )}
    ${FormSelectInput(
      "",
      "Filtrar por prenda",
      "element__select",
      typeOptions(activeProducts),
      "Todas"
    )}
    ${FormSelectInput(
      "",
      "Filtrar por precio",
      "price__select",
      priceOptions,
      "Todos"
    )}
    
    `;
};

const orderSelectHandler = (e) => {
  const prodGrid = document.querySelector(".product-grid__section");
  if (e.target.value === "Mayor precio") {
    activeProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
    prodGrid.innerHTML = `${renderizeProducts(activeProducts)}`;
  }
  if (e.target.value === "Menor precio") {
    activeProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
    prodGrid.innerHTML = `${renderizeProducts(activeProducts)}`;
  }
  if (e.target.value === "Nombre") {
    activeProducts.sort((a, b) => (a.name > b.name ? 1 : -1));
    prodGrid.innerHTML = `${renderizeProducts(activeProducts)}`;
  }
  if (e.target.value === "Predeterminado") {
    activeProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
    prodGrid.innerHTML = `${renderizeProducts(activeProducts)}`;
  }
};

const filterByElementHandler = (e) => {
  const orderSelect = document.querySelector("#order__select");
  const prodGrid = document.querySelector(".product-grid__section");

  let prods = products.filter((p) => p.type === e.target.value);
  updateActiveProducts(prods);
  updateLocalStorage(prods);
  if (orderSelect.value === "Mayor precio") {
    prods.sort((a, b) => (a.price < b.price ? 1 : -1));
  }
  if (orderSelect.value === "Menor precio") {
    prods.sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  if (orderSelect.value === "Nombre") {
    prods.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  prodGrid.innerHTML = `${renderizeProducts(prods)}`;
};

const filterByPrice = (e) => {
  const orderSelect = document.querySelector("#order__select");
  const prodGrid = document.querySelector(".product-grid__section");

  let prods = [];
  if (e.target.value === "Entre $5000 y $10000") {
    console.log("hola");
    prods = activeProducts.filter(
      (prod) => prod.price >= 5000 && prod.price <= 5000
    );
  }
  updateActiveProducts(prods);
  updateLocalStorage(prods);
  if (orderSelect.value === "Mayor precio") {
    prods.sort((a, b) => (a.price < b.price ? 1 : -1));
  }
  if (orderSelect.value === "Menor precio") {
    prods.sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  if (orderSelect.value === "Nombre") {
    prods.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  prodGrid.innerHTML = `${renderizeProducts(prods)}`;
};

export { FilterBar, orderSelectHandler, filterByElementHandler, filterByPrice };
