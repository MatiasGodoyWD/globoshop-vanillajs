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

const navbarMenu = [
  BarsMenu(),
  NavbarItems("navbar__navigation", [
    NavbarLink("#", "Home"),
    NavbarLink("#", "Destacados"),
    NavbarLink("#", "Categoria"),
    NavbarLink("#", "Contacto"),
  ]),
  NavbarItems("navbar__social", [
    NavbarLink(
      "#",
      `<i class="fas fa-shopping-cart"></i
>`
    ),
    NavbarLink("#", `<i class="fab fa-instagram"></i>`),
    NavbarLink("#", `<i class="fab fa-twitter"></i>`),
  ]),
];

const navBars = [
  Navbar("logo__navbar", logoNavbarItems),
  Navbar("navbar__menu", navbarMenu),
];

const Header = () => {
  return `<div class='header' data-aos='fade-right'>${navBars
    .map((nav) => nav)
    .join("")}</div>`;
};

const barsMenuHandler = (event) => {
  const barsMenu = document.querySelector("#navbar__bars");
  const navigation = document.querySelector(".navbar__navigation");
  barsMenu.classList.toggle("fa-times");
  navigation.classList.toggle("navbar__active");
};

export { Header, barsMenuHandler, NavbarImg };
