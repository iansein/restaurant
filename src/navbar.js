export function navBar() {
  const $container = document.querySelector("#content");

  const $navBarDiv = document.createElement("div");
  const $logo = document.createElement("img");
  const $linkList = document.createElement("ul");
  const $links = document.createElement("li");

  $logo.src = "./assets/logo.png";

  $navBarDiv.classList.add("navbar");
  $logo.classList.add("logo");
  $linkList.classList.add("link-list");
  $links.classList.add("links");

  $container.appendChild($navBarDiv);
  $navBarDiv.appendChild($logo);
  $navBarDiv.appendChild($linkList);
  $linkList.appendChild($links);
}
