import { Header } from "./components/header.js";

const root = document.querySelector(".root");

const main = () => {
  root.innerHTML = `${Header()}`;
};

main();
