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

const ResponsiveFilterTab = () => {
  return `<div class='filter__tab'><i class="fas fa-filter"></i>Preferencias</div>`;
};

const FilterBar = (activeProducts) => {
  return `
  ${ResponsiveFilterTab()}
  <div class='filter__options'>
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
    </div>
    `;
};

const orderProducts = (input, prods) => {
  if (input.value === "Mayor precio") {
    return prods.sort((a, b) => (a.price < b.price ? 1 : -1));
  }
  if (input.value === "Menor precio") {
    return prods.sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  if (input.value === "Nombre") {
    return prods.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  if (input.value === "Predeterminado") {
    return prods.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
};

const filterByElement = (input, prods) => {
  if (input.value === "Todas") {
    return prods;
  }
  return prods.filter((p) => p.type === input.value);
};

const filterByPrice = (input, prods) => {
  if (input.value === "Todos") {
    return prods;
  }
  if (input.value === "Entre $5000 y $10000") {
    return prods.filter((prod) => prod.price >= 5000 && prod.price <= 10000);
  }
  if (input.value === "Mas de $10.000") {
    return prods.filter((prod) => prod.price > 10000);
  }
  if (input.value === "Menos de $5000") {
    return prods.filter((prod) => prod.price < 5000);
  }
};

const filterHandler = (prodList) => {
  let prods = [...prodList];

  const prodGrid = document.querySelector(".product-grid__section");
  const orderSelect = document.querySelector("#order__select");
  const elementSelect = document.querySelector("#element__select");
  const priceSelect = document.querySelector("#price__select");
  prods = filterByElement(elementSelect, prods);
  prods = filterByPrice(priceSelect, prods);
  prods = orderProducts(orderSelect, prods);

  if (!prods.length) {
    prodGrid.classList.add("product-grid__section-empty");
  } else {
    prodGrid.classList.remove("product-grid__section-empty");
  }

  prodGrid.innerHTML = `    ${
    !prods.length
      ? `<p class'empty__grid'>No existen productos que cumplan con los criterios seleccionados. Por favor, modifique sus criterios de selección.</p>`
      : renderizeProducts(prods)
  }`;
};

const filterMenuHandler = () => {
  const filterMenu = document.querySelector(".filter__tab");
  const filterOptions = document.querySelector(".filter__options");
  filterMenu.classList.toggle("filter__tab-active");
  filterOptions.classList.toggle("filter__options-active");
};

export { FilterBar, filterHandler, filterMenuHandler };
