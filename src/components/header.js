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

const NavbarImg = (src, alt) => {
  return `        
    <img
    src=${src}
    alt=${alt}
    class="navbar__logo"
  />
  `;
};

const NavbarLink = (href, content) => {
  return `
    <a href="${href}" class="navbar__link">${content}</a>
    `;
};

const logoNavbarItems = [
  NavbarImg("../src/img/GLOBOSHOP.png", "Globoshop store"),
  NavbarImg("../src/img/slogan2.png", "Siempre en el mismo barrio"),
];

const navbarMenu = [
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
  return `<div class='header'>${navBars.map((nav) => nav).join("")}</div>`;
};

export { Header };
