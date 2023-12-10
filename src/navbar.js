export function navBar() {
  const $body = document.body;
  const $header = document.createElement("header");
  const $navBarDiv = document.createElement("nav");
  const $brandDiv = document.createElement("div");
  const $logo = document.createElement("img");
  const $title = document.createElement("h1");
  const $linkList = document.createElement("ul");
  const $home = document.createElement("li");
  const $menu = document.createElement("li");
  const $contact = document.createElement("li");

  const arrayLinks = [$home, $menu, $contact];

  $home.textContent = "Home";
  $menu.textContent = "Menu";
  $contact.textContent = "Contact";
  $title.textContent = "Papa's Pizzeria";

  $logo.src = "./assets/logo.webp";

  $navBarDiv.classList.add("navbar");
  $brandDiv.classList.add("brand");
  $logo.classList.add("logo");
  $title.classList.add("title");
  $linkList.classList.add("link-list");

  arrayLinks.forEach((item) => {
    item.classList.add("link");
    $linkList.appendChild(item);
  });

  $body.insertBefore($header, $body.firstChild);
  $header.appendChild($navBarDiv);
  $navBarDiv.appendChild($brandDiv);
  $brandDiv.appendChild($logo);
  $brandDiv.appendChild($title);
  $navBarDiv.appendChild($linkList);
}
