import { FormInput, isValidEmail } from "./contact-form.js";
import { ProductsTable } from "./table.js";

const ShippingForm = (cartProds) => {
  return `
    <form class='shipping__form' name='shipping' data-aos='fade-right'>
    <div class='form__personal-data'>
    ${FormInput("shipping__name", "Nombre", "form__label-black")}
    ${FormInput("shipping__surname", "Apellido", "form__label-black")}
    ${FormInput("shipping__email", "E-mail", "form__label-black")}
    ${FormInput("shipping__direction", "Dirección", "form__label-black")}
    </div>
    <div class='shipping__type'>
    <p class='shipping__option'> <input type="radio" id="home-shipping" name="shipping-type" value="500" checked>
    <label class='form__label-black radio-label' for="home-shipping">Enviar al domicilio</label></p>
    <p class='shipping__info'>Llega entre 3 y 5 días habiles.</p>
    </div>


    ${ProductsTable(cartProds)}
    <div class='shipping__payment'>
    <p class='shipping__option' > <input type="radio" id="pay-shipping" name="shipping-payment" value="" checked>
    <label class='form__label-black radio-label' for="pay-shipping">Pagar con Mercado Pago</label></p>
    <p class='shipping__info' id='pay-option'>Su pago será realizado a traves de su cuenta de Mercado Pago.</p>
    </div>
    <div class='shipping__button-container' ><button class='cart__button' type='submit'>Finalizar compra</button></div>
  </div>
    </form>
    
    `;
};

const isValidInput = (input) =>
  input.value.trim() !== "" && isNaN(input.value.trim());

const isValidInfo = (nameInput, surnameInput, emailInput, directionInput) =>
  isValidInput(nameInput) &&
  isValidInput(surnameInput) &&
  isValidInput(directionInput) &&
  isValidEmail(emailInput);

const InputError = (input, msg) => {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");
  input.classList.remove("input__success");
  input.classList.add("input__error");
  span.style.visibility = "visible";
  span.innerHTML = `<i class="fas fa-times-circle"></i>${msg}`;
};

const InputSuccess = (input) => {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = "";
  input.classList.remove("input__error");
  input.classList.add("input__success");
};

const showInputError = (input) => {
  return !input.value.trim()
    ? InputError(input, "Este campo no puede estar vacío")
    : !isNaN(input.value.trim())
    ? InputError(input, "Este campo no puede ser numérico.")
    : InputSuccess(input);
};

const showEmailError = (input) => {
  return !input.value.trim()
    ? InputError(input, "Este campo no puede estar vacío")
    : !isValidEmail(input)
    ? InputError(input, "El e-mail ingresado no es valido")
    : InputSuccess(input);
};

const shippingSubmitHandler = (e) => {
  e.preventDefault();
  const shippingForm = document.forms.shipping;
  const nameInput = shippingForm.querySelector("#shipping__name");
  const surnameInput = shippingForm.querySelector("#shipping__surname");
  const emailInput = shippingForm.querySelector("#shipping__email");
  const directionInput = shippingForm.querySelector("#shipping__direction");
  const successMsg = document.querySelector(".shipping__message");

  if (!isValidInfo(nameInput, surnameInput, emailInput, directionInput)) {
    showInputError(nameInput);
    showInputError(surnameInput);
    showInputError(directionInput);
    showEmailError(emailInput);
    shippingForm.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  const inputs = [nameInput, surnameInput, emailInput, directionInput];

  inputs.forEach((input) => InputSuccess(input));

  successMsg.style.display = "flex";
  setTimeout(() => {
    successMsg.style.display = "none";
    localStorage.clear();
    location.href = "../../index.html";
  }, 3000);
};

export { ShippingForm, shippingSubmitHandler };
