import { isValidEmail, showSuccessMessage } from "./contact-form.js";

const SubscribeComponent = () => {
  return `<h2 class='slider__section__title'>Suscribite y enterate de las últimas novedades</h2>
    <div class='suscribe__component' >
    <input type='text' class='subscribe__input'/>
    <button type='submit' class='subscribe__btn'>Suscribirse</button>
    </div>
    <span id="subscribe__confirmation" class='subscribe__confirmation'></span>`;
};

const subscribeHandler = () => {
  const subsConfirmation = document.querySelector("#subscribe__confirmation");
  const subsInput = document.querySelector(".subscribe__input");

  if (!isValidEmail(subsInput)) {
    subsConfirmation.classList.add("subscribe__confirmation-fail");
    subsConfirmation.style.visibility = "visible";
    subsConfirmation.innerHTML = `<i class="fas fa-times"></i> Por favor, ingrese un e-mail valido`;
    setTimeout(() => {
      subsConfirmation.style.visibility = "hidden";
    }, 3000);
    return;
  }

  showSuccessMessage(
    subsConfirmation,
    "Gracias por suscribirte al newsletter de Globoshop"
  );
};

export { SubscribeComponent, subscribeHandler };
