export function footer() {
  const $body = document.body;
  const $footer = document.createElement("footer");
  const $copyright = document.createElement("h2");

  $copyright.textContent = "Created by Ian Sein 2023";

  $footer.classList.add("footer");
  $body.appendChild($footer);
  $footer.appendChild($copyright);
}
