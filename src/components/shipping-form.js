import { FormInput, isValidEmail } from "./contact-form.js";
import { ProductsTable } from "./table.js";

const ShippingForm = (cartProds) => {
  return `
    <form class='shipping__form' name='shipping'>
    <div class='form__personal-data'>
    ${FormInput("shipping__name", "Nombre", "form__label-black")}
    ${FormInput("shipping__surname", "Apellido", "form__label-black")}
    ${FormInput("shipping__email", "E-mail", "form__label-black")}
    ${FormInput("shipping__direction", "Dirección", "form__label-black")}
    </div>
    <div class='shipping__type'>
    <p class='shipping__option'> <input type="radio" id="home-shipping" name="shipping-type" value="500" checked>
    <label class='form__label-black' for="home-shipping">Enviar al domicilio</label></p>
    <p class='shipping__info'>El envío tiene un costo unico de $500</p>
    </div>


    ${ProductsTable(cartProds)}
    <div class='shipping__payment'>
    <p class='shipping__option'> <input type="radio" id="pay-shipping" name="shipping-payment" value="" checked>
    <label class='form__label-black' for="pay-shipping">Pagar con Mercado Pago</label></p>
    <p class='shipping__info'>Su pago será realizado a traves de su cuenta de Mercado Pago.</p>
    </div>
    <div class='shipping__button-container' data-aos='fade-right'><button class='cart__button' type='submit'>Finalizar compra</button></div>
  </div>
    </form>
    
    `;
};

export { ShippingForm };
