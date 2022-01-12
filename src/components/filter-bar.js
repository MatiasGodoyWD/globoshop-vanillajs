import { products } from "../products.js";

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
  <option value="" disabled selected>${placeholder}</option>
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

export { FilterBar };
