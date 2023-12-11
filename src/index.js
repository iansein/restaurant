import { navBar } from "./navbar.js";
import { footer } from "./footer.js";
import { home } from "./home.js";
import { contact } from "./contact.js";
import { menu } from "./menu.js";

import style from "./style.css";
import logo from "./assets/logo.webp";
import homeImg from "./assets/main.png";
import contactImg from "./assets/contact.png";
import pizza1 from "./assets/pizza1.jpg";
import pizza2 from "./assets/pizza2.jpg";
import pizza3 from "./assets/pizza3.jpg";
import pizza4 from "./assets/pizza4.jpg";
import pizza5 from "./assets/pizza5.jpg";
import pizza6 from "./assets/pizza6.jpg";

home();
navBar();
footer();

const pages = document.querySelectorAll(".link");
const content = document.querySelector("#content");

pages.forEach((page) => {
  if (page.textContent === "Home") {
    page.addEventListener("click", () => {
      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
      home();
    });
  } else if (page.textContent === "Menu") {
    page.addEventListener("click", () => {
      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
      menu();
    });
  } else {
    page.addEventListener("click", () => {
      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
      contact();
    });
  }
});
