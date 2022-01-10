const FormInput = (id, label) => {
  return `
    <div class="form-control">
    <label for="${id}" class="form__label">${label}:</label>
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
  <span class="form__error"></span>
</div>
  `;
};
const Form = () => {
  return `
  <form class="contact__form" name="contact">
  <h2 class='form__title'>Contacto</h2>
  <div class='form__section-data'>
  ${FormInput("form__email", "E-mail")}
  ${FormInput("form__name", "Nombre completo")}
  </div>

  <div class='form__section-message'>
  ${TextareaInput()}
  </div>
 
  <button type="submit" class="form__btn">Enviar</button>
  <span id="form__confirmation"></span>
  </form>
 
  `;
};

export { Form, FormInput };
