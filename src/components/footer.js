import { NavbarImg } from "./header.js";

const Footer = () => {
  return `<footer class="footer" data-aos='fade-up'>
  
  <div class='footer__logos'>
  ${NavbarImg(
    "navbar__logo",
    "https://i.ibb.co/VCnxGY8/GLOBOSHOP-gray.png",
    "Globoshop logo"
  )}
  ${NavbarImg(
    "navbar__slogan",
    "https://i.ibb.co/cTR11v2/slogan-gray.png",
    "Siempre en el mismo barrio"
  )}
  </div>
  <div class='footer__info'>
  <p class='footer__p'>Tienda Oficial C. A. Huracán | Desarrollado por <a href='#'>Matias Godoy</a></p>
  </div>
  
  </footer>`;
};

export { Footer };
