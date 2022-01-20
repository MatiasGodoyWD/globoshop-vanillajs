const FormInput = (id, label, className) => {
  return `
    <div class="form-control">
    <label for="${id}" class="${className}">${label}:</label>
    <input
      type="text"
      id="${id}"
      class="form__input"
      placeholder="Ingrese su ${label.toLowerCase()}..."
    />
    <span class="form__error"></span>
  </div>
    `;
};

const TextareaInput = () => {
  return `
  <div class="form__control-textarea">
  <label for="textarea" class="form__label">Mensaje:</label>
  <textarea
    class="form__textarea"
    id='textarea'
    placeholder="Ingrese su mensaje..."
  ></textarea>
  
</div>
  `;
};
const Form = () => {
  return `
  <form class="contact__form" name="contact">
  <h2 class='form__title'>Contacto</h2>
  <div class='form__section-data'>
  ${FormInput("form__email", "E-mail", "form__label")}
  ${FormInput("form__name", "Nombre completo", "form__label")}
  </div>

  <div class='form__section-message'>
  ${TextareaInput()}
  </div>
 
  <button type="submit" class="form__btn">Enviar</button>
  <span id="form__confirmation" class='form__confirmation'></span>
  </form>
 
  `;
};

const mailRegex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const isValidEmail = (mailInput) => mailRegex.test(mailInput.value);
const nameRegex = new RegExp(/^[a-z ,.'-]+$/i);
const isValidName = (nameInput) => nameRegex.test(nameInput.value);
const isValidMessage = (messageInput) => messageInput.value.trim() !== "";

const showSuccessMessage = (successSpan, msg) => {
  successSpan.style.visibility = "visible";
  successSpan.classList.remove("subscribe__confirmation-fail");
  successSpan.classList.add("subscribe__confirmation-success");
  successSpan.innerHTML = `<i class="fas fa-check"></i> ${msg}`;
  setTimeout(() => {
    successSpan.style.visibility = "hidden";
  }, 3000);
};

const showEmptyInputsError = (inputs, errorSpan) => {
  if (inputs.some((input) => input.value === "")) {
    errorSpan.classList.remove("subscribe__confirmation-success");
    errorSpan.classList.add("subscribe__confirmation-fail");
    errorSpan.style.visibility = "visible";
    errorSpan.innerHTML = `<i class="fas fa-times"></i> Por favor, complete los campos vacios`;
    setTimeout(() => {
      errorSpan.style.visibility = "hidden";
    }, 3000);
  }
};

const showInvalidInputsError = (inputs, errorSpan) => {
  if (!inputs.some((input) => input.value === "")) {
    errorSpan.classList.remove("subscribe__confirmation-success");
    errorSpan.classList.add("subscribe__confirmation-fail");
    errorSpan.style.visibility = "visible";
    errorSpan.innerHTML = `<i class="fas fa-times"></i> ${"Los datos ingresados no son validos"}`;
    setTimeout(() => {
      errorSpan.style.visibility = "hidden";
    }, 3000);
  }
};

const resetInput = (input) => (input.value = "");

const contactMessageHandler = (e) => {
  e.preventDefault();
  const formEmail = document.querySelector("#form__email");
  const formName = document.querySelector("#form__name");
  const formMessage = document.querySelector(".form__textarea");
  const formConfirmation = document.querySelector("#form__confirmation");
  if (
    !isValidEmail(formEmail) ||
    !isValidName(formName) ||
    !isValidMessage(formMessage)
  ) {
    showEmptyInputsError([formEmail, formName, formMessage], formConfirmation);
    showInvalidInputsError(
      [formEmail, formName, formMessage],
      formConfirmation
    );
    return;
  }
  resetInput(formEmail);
  resetInput(formMessage);
  resetInput(formName);
  showSuccessMessage(
    formConfirmation,
    "Su mensaje ha sido enviado correctamente"
  );
};

export {
  Form,
  FormInput,
  contactMessageHandler,
  mailRegex,
  isValidEmail,
  showSuccessMessage,
  resetInput,
};
