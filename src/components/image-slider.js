import { products } from "../products.js";
import { HomeCard } from "./cards.js";

const ImageSlider = (container) => {
  const slider = `
  <div class='carousel'>
  <button aria-label="Anterior" class="glider-prev">
  <i class="fas fa-chevron-left"></i>
</button>
<div class='glider'>
${products.map((prod) => `<div>${HomeCard(prod)}</div>`).join("")}
<div>
<button aria-label="Siguiente" class="glider-next">
<i class="fas fa-chevron-right"></i>
</button>
  </div>
  <div role="tablist" class="carousel__dots"></div>

    `;
};

export { ImageSlider };
