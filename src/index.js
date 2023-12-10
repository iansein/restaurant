import { navBar } from "./navbar.js";
import { footer } from "./footer.js";
import { home } from "./home.js";
import { contact } from "./contact.js";
import style from "./style.css";
import logo from "./assets/logo.webp";
import homeImg from "./assets/main.png";
import contactImg from "./assets/contact.png";

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
  } else {
    page.addEventListener("click", () => {
      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
      contact();
    });
  }
});
