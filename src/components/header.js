const Navbar = (className, navItems) => {
  return `<nav class='${className}'>
${navItems.map((item) => item).join("")}
</nav>`;
};

const NavbarItems = (className, items) => {
  return `<ul class='${className}'>
${items.map((item) => item).join("")}
</ul>`;
};

const NavbarImg = (className, src, alt) => {
  return `        
    <img
    src=${src}
    alt=${alt}
    class="${className}"
  />
  `;
};

const NavbarLink = (href, content) => {
  return `
    <a href="${href}" class="navbar__link">${content}</a>
    `;
};

const NavbarCartLink = (href, content) => {
  return `
   <a href="${href}" class="navbar__link" id='navbar__cart'>
    ${content}<div class='navbar__cart__counter'>0</div></a>

    `;
};

const BarsMenu = () => {
  return `
<i id="navbar__bars" class="fas fa-bars"></i>
 `;
};

const logoNavbarItems = [
  NavbarImg(
    "navbar__logo",
    "https://i.ibb.co/ysTytXC/GLOBOSHOP.png",
    "Globoshop store"
  ),
  NavbarImg(
    "navbar__slogan",
    "https://i.ibb.co/C541p5d/slogan2.png",
    "Siempre en el mismo barrio"
  ),
];

const landingNavbarMenu = [
  BarsMenu(),
  NavbarItems("navbar__navigation", [
    NavbarLink("#header", "Home"),
    NavbarLink("#featured__section", "Destacados"),
    NavbarLink("#categories__section", "Categorias"),
    NavbarLink("#contact__section", "Contacto"),
  ]),
  NavbarItems("navbar__social", [
    NavbarCartLink(
      "#",
      `<i class="fas fa-shopping-cart"></i
>`
    ),
    NavbarLink(
      "https://www.instagram.com/tiendacahuracan/",
      `<i class="fab fa-instagram"></i>`
    ),
    NavbarLink(
      "https://twitter.com/tiendacahuracan",
      `<i class="fab fa-twitter"></i>`
    ),
  ]),
];

const navBars = [
  Navbar("logo__navbar", logoNavbarItems),
  Navbar("navbar__menu", landingNavbarMenu),
];

const LandingHeader = () => {
  return `<div class='header' id='landing__header' data-aos='fade-right'>${navBars
    .map((nav) => nav)
    .join("")}</div>`;
};

const productsNavbarMenu = [
  BarsMenu(),
  NavbarItems("navbar__navigation", [
    NavbarLink("../../index.html", "Home"),
    NavbarLink("../../products.html", "Todos"),
    NavbarLink("../../products/juego.html", "Juego"),
    NavbarLink("../../products/entrenamiento.html", "Entrenamiento"),
    NavbarLink("../../products/salida.html", "Salida"),
    NavbarLink("../../products/merchandising.html", "Merchandising"),
  ]),
  NavbarItems("navbar__social", [
    NavbarCartLink(
      "#",
      `<i class="fas fa-shopping-cart"></i
>`
    ),
    NavbarLink(
      "https://www.instagram.com/tiendacahuracan/",
      `<i class="fab fa-instagram"></i>`
    ),
    NavbarLink(
      "https://twitter.com/tiendacahuracan",
      `<i class="fab fa-twitter"></i>`
    ),
  ]),
];

const productNavbars = [
  Navbar("logo__navbar", logoNavbarItems),
  Navbar("navbar__menu", productsNavbarMenu),
];

const ProductsHeader = () => {
  return `<div class='header' id='products__header' data-aos='fade-right'>${productNavbars
    .map((nav) => nav)
    .join("")}</div>`;
};

const barsMenuHandler = (event) => {
  const barsMenu = document.querySelector("#navbar__bars");
  const navigation = document.querySelector(".navbar__navigation");
  barsMenu.classList.toggle("fa-times");
  navigation.classList.toggle("navbar__active");
};

const productsbarsMenuHandler = (event) => {
  const filterMenu = document.querySelector(".filter__tab");
  const filterOptions = document.querySelector(".filter__options");
  const barsMenu = document.querySelector("#navbar__bars");
  const navigation = document.querySelector(".navbar__navigation");
  barsMenu.classList.toggle("fa-times");
  navigation.classList.toggle("navbar__active");
  filterMenu.classList.remove("filter__tab-active");
  filterOptions.classList.remove("filter__options-active");
};

const menuScrollHandler = (barsMenu, navigationMenu, landingNavbarMenu) => {
  window.onscroll = () => {
    barsMenu.classList.remove("fa-times");
    navigationMenu.classList.remove("navbar__active");

    if (window.scrollY > 150) {
      landingNavbarMenu.classList.add("navbar__fixed");
    } else {
      landingNavbarMenu.classList.remove("navbar__fixed");
    }
  };
};

const categoriesRedirectionHandler = (e) => {
  // if (
  //   e.target.classList.contains("navbar__link") &&
  //   e.target.textContent !== "Home"
  // ) {
  //   const category = e.target.textContent.toLowerCase();
  //   if (category === "todos") {
  //     window.location.href = `../products.html`;
  //   } else {
  //     window.location.href = `../products/${category}.html`;
  //   }
  // }
};
export {
  LandingHeader,
  barsMenuHandler,
  NavbarImg,
  menuScrollHandler,
  ProductsHeader,
  categoriesRedirectionHandler,
  productsbarsMenuHandler,
};
